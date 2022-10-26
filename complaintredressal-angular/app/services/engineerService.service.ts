import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { InitiateProblemModel } from "../models/InitiateProblemModel.model";

@Injectable({
    providedIn: 'root'
})
export class EngineerService {

    private apiHost = environment.apiHost;

    constructor(
        private httpClient: HttpClient
    ) {}

    viewAssignedComplaints(engrName: string): Observable<InitiateProblemModel[]> {
        return this.httpClient.post<InitiateProblemModel[]>(`${this.apiHost}/engineer/viewAssignedProblems/${engrName}`, {headers: new HttpHeaders({'Content-type': 'application/json'}), responseType:'text' as 'json'}).pipe(map((resp) => {
            return resp; 
        }))
    }

    updateComplaintDetails(assign:InitiateProblemModel): Observable<InitiateProblemModel> {
        return this.httpClient.post<InitiateProblemModel>(`${this.apiHost}/engineer/updateProblem`, assign, {headers: new HttpHeaders({'Content-type': 'application/json'}), responseType:'text' as 'json'}).pipe(map((resp) => {
            return resp;
        }));
    }

}