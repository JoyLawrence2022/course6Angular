import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { map, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { CustomerModel } from "../models/customer.model";
import { InitiateProblemModel } from "../models/InitiateProblemModel.model";

@Injectable({
    providedIn: 'root'
})
export class CustomerService {

    private apiHost = environment.apiHost;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private httpClient: HttpClient
    ) {}

    addCustomerDetails(cust:CustomerModel): Observable<CustomerModel> {
        return this.httpClient.post<CustomerModel>(`${this.apiHost}/addCustomer`,cust,{headers: new HttpHeaders({'Content-type': 'application/json'}), responseType:'text' as 'json'}).pipe(map((resp) => {
            return resp;
        }));
    }

    addComplaintDetails(prob:InitiateProblemModel): Observable<InitiateProblemModel> {
        return this.httpClient.post<InitiateProblemModel>(`${this.apiHost}/customer/raiseComplaint`, prob,{headers: new HttpHeaders({'Content-type': 'application/json'}), responseType:'text' as 'json'}).pipe(map((resp) => {
            return resp;
        }))
    }

    viewComplaintsByCustomer(userName: string): Observable<InitiateProblemModel[]> {
        return this.httpClient.post<InitiateProblemModel[]>(`${this.apiHost}/customer/viewComplaints/${userName}`, {headers: new HttpHeaders({'Content-type': 'application/json'}), responseType:'text' as 'json'}).pipe(map((resp) => {
            return resp;
        }))
    }


}

/*
deleteUser(userName: string): Observable<UserModel> {
    return this.httpClient.delete<UserModel>(`${this.apiHost}/admin/deleteUser/${userName}`);
}

viewComplaintsByCustomer(complaint:InitiateProblemModel): Observable<InitiateProblemModel> {
        return this.httpClient.post<InitiateProblemModel>(`${this.apiHost}/customer/viewComplaints`, complaint,{headers: new HttpHeaders({'Content-type': 'application/json'}), responseType:'text' as 'json'}).pipe(map((resp) => {
            return resp;
        }))
    }
*/