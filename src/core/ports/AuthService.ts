import { User } from "../domain/User";

export interface AuthService {
  login(email: string, password: string): Promise<{ user: User; token: string }>;
  register(name: string, email: string, password: string): Promise<{ user: User; token: string }>;
}
