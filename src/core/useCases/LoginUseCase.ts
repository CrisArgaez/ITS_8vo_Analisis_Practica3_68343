import { User } from "../domain/User";
import { AuthService } from "../ports/AuthService";

export class LoginUseCase {
  constructor(private authService: AuthService) {}

  async execute(email: string, password: string): Promise<{ user: User; token: string }> {
    return this.authService.login(email, password);
  }
}