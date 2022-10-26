import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { map, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { InitiateProblemModel } from "../models/InitiateProblemModel.model";
import { NewModel } from "../models/newmodel.model";

@Injectable({
    providedIn: 'root'
})
export class ManagerService {

    private apiHost = environment.apiHost;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private httpClient: HttpClient
    ) {}

    viewAllProblemsByManager(): Observable<InitiateProblemModel[]> {
        return this.httpClient.post<InitiateProblemModel[]>(`${this.apiHost}/manager/viewComplaints`, {headers: new HttpHeaders({'Content-type': 'application/json'}), responseType:'text' as 'json'}).pipe(map((resp) => {
            return resp; 
        }))
    }

    viewComplaintDetails(tracker_no: string): Observable<InitiateProblemModel[]> {
        return this.httpClient.post<InitiateProblemModel[]>(`${this.apiHost}/manager/viewComplaint/${tracker_no}`, {headers: new HttpHeaders({'Content-type': 'application/json'}), responseType:'text' as 'json'}).pipe(map((resp) => {
            return resp;
        }));
    }

    addEngineerDetails(engr:InitiateProblemModel): Observable<InitiateProblemModel> {
        return this.httpClient.post<InitiateProblemModel>(`${this.apiHost}/manager/assignEngineer`, engr, {headers: new HttpHeaders({'Content-type': 'application/json'}), responseType:'text' as 'json'}).pipe(map((resp) => {
            return resp;
        }))
    }
}

/*
addComplaintDetails(prob:InitiateProblemModel): Observable<InitiateProblemModel> {
    return this.httpClient.post<InitiateProblemModel>(`${this.apiHost}/customer/raiseComplaint`, prob,{headers: new HttpHeaders({'Content-type': 'application/json'}), responseType:'text' as 'json'}).pipe(map((resp) => {
        return resp;
    }))
}

viewComplaintDetails(complaint:InitiateProblemModel): Observable<InitiateProblemModel[]> {
        return this.httpClient.post<InitiateProblemModel[]>(`${this.apiHost}/manager/viewComplaint`, complaint, {headers: new HttpHeaders({'Content-type': 'application/json'}), responseType:'text' as 'json'}).pipe(map((resp) => {
            return resp;
        }));
    }
*/