import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly TOKEN_KEY = 'token';

  constructor() { }

  // Enregistre le token JWT dans localStorage
  setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  // Récupère le token JWT depuis localStorage
  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  // Supprime le token JWT (logout)
  clearToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  // Indique si l'utilisateur est connecté (token existant)
  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
