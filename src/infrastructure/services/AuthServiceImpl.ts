import { AuthService } from "../../core/ports/AuthService";
import { User } from "../../core/domain/User";

const API_URL = import.meta.env.VITE_API_URL;

export class AuthServiceImpl implements AuthService {
  async login(email: string, password: string): Promise<{ user: User; token: string }> {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
      throw new Error("Credenciales inválidas");
    }

    return await response.json();
  }

  async register(name: string, email: string, password: string): Promise<{ user: User; token: string }> {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, password })
    });

    if (!response.ok) {
      throw new Error("Error al registrar");
    }

    return await response.json();
  }
}
