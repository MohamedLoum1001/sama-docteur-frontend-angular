import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Utilisateur {
    id?: number;
    prenom: string;
    nom: string;
    email: string;
    password?: string;
    role: string;
    adresse?: string;
    telephone?: string;
    specialite?: string;
}

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private apiUrl = 'http://localhost:8080/api/user';

    constructor(private http: HttpClient) { }

    // Ex. dans ton UserService Angular
    getAllUsers(): Observable<Utilisateur[]> {
        return this.http.get<Utilisateur[]>('http://localhost:8080/api/user/all');
    }


    registerUser(user: Utilisateur): Observable<Utilisateur> {
        return this.http.post<Utilisateur>(`${this.apiUrl}/register`, user);
    }
}
