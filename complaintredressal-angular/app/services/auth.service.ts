import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { map, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Request } from "../models/request.model";
import { UserModel } from "../models/UserModel.model";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    
    private baseUrl = 'http://localhost:7900/';
    private apiHost = environment.apiHost;

    constructor(
        private route: ActivatedRoute, 
        private router: Router, 
        private httpClient: HttpClient
        ) { }

    signin(request: Request): Observable<any> {  //'signin' below refers to string added in base url link
        return this.httpClient.post<any>(this.baseUrl + 'signin', request, {headers: new HttpHeaders({ 'Content-Type': 'application/json' })}).pipe(map((resp) => {
            sessionStorage.setItem('user', request.userName);
            sessionStorage.setItem('token', 'HTTP_TOKEN ' + resp.token);
            sessionStorage.setItem('role', resp.roles);
            console.log("This is from signin inside authentication service");
            return resp;
        }));
    }

    signup(request: Request): Observable<any> {
        return this.httpClient.post<any>(this.baseUrl + 'signup', request, {headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' as 'json'}).pipe(map((resp) => {                                                         
            return resp;
        }));
    }

    /*
    changePassword(request: Request): Observable<any> {
        return this.httpClient.post<any>(this.baseUrl + 'changePwd', request, {headers: new HttpHeaders({'Content-Type': 'application/json'}), responseType: 'text' as 'json'}).pipe(map((resp) => {
            return resp;
        }));
    }
    */
    
    
    isUserSignedin() {
        return sessionStorage.getItem('token') !== null;
    }
    
/*
    isUserSignedin() {
        console.log("This is user name : " + sessionStorage.getItem('user'));
        return sessionStorage.getItem('user') !== null;
    }
*/

    getSignedinUser() {
        return sessionStorage.getItem('user') as string;
    }

    getRoles(){
        return sessionStorage.getItem('role') as string;
    }

    signout() {
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('token');
        this.router.navigateByUrl('signin');
    }

    getToken() {
        let token = sessionStorage.getItem('token') as string;
        return token;
    }

    getAllUsers(): Observable<UserModel[]> {
        return this.httpClient.get<UserModel[]>(`${this.apiHost}/admin/viewAllUsers`);
    }

    deleteUser(userName: string): Observable<UserModel> {
        return this.httpClient.delete<UserModel>(`${this.apiHost}/admin/deleteUser/${userName}`);
    }

}
