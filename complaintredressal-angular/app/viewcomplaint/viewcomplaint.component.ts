import { Component, OnInit } from '@angular/core';
import { InitiateProblemModel } from '../models/InitiateProblemModel.model';
import { CustomerService } from '../services/customerService.service';

@Component({
  selector: 'app-viewcomplaint',
  templateUrl: './viewcomplaint.component.html',
  styleUrls: ['./viewcomplaint.component.css']
})
export class ViewcomplaintComponent implements OnInit {

  customer_id: string = '';
  error: string = '';
  complaints: InitiateProblemModel[] = [];

  constructor(
    private custService: CustomerService
  ) { }

  ngOnInit(): void {
    this.doInit();
  }

  doInit() {
    
      this.customer_id = sessionStorage.getItem('user');
    
    this.custService.viewComplaintsByCustomer(this.customer_id).subscribe(data => {
      this.complaints = data;
      console.log(this.complaints);
    });  
      
  }

/*
  doInit() {
    const  retrieve_complaints: InitiateProblemModel = {
      customer_id: sessionStorage.getItem('user')
    };
    this.custService.viewComplaintsByCustomer(retrieve_complaints).subscribe(
      (result) => {
        console.log("User ID sent successfully");
        console.log(result);
      },
      () => {this.error = 'Something went wrong';}
    )
  }
  */

}
