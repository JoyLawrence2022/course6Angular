import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { InitiateProblemModel } from '../models/InitiateProblemModel.model';
import { AuthService } from '../services/auth.service';
import { CustomerService } from '../services/customerService.service';

@Component({
  selector: 'app-createcomplaint',
  templateUrl: './createcomplaint.component.html',
  styleUrls: ['./createcomplaint.component.css']
})
export class CreatecomplaintComponent implements OnInit {

  signUpForm: FormGroup;

  customer_id: string = '';
  problem_name: string = '';
  
  isSignedin = false;
  isSubmitted = false;
  error: string = '';


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private custService: CustomerService
  ) { }

  ngOnInit(): void {
    this.isSignedin = this.authService.isUserSignedin();
    if (this.isSignedin) {
      this.router.navigateByUrl('createComplaint');
    }
  //this.signUpForm = new FormGroup({
  //    question: new FormControl('school')
  // });
  }

  doAddComplaint() {
    const  problem: InitiateProblemModel = {
      customerName: sessionStorage.getItem('user'),
      problem_name: this.problem_name
    };
    this.custService.addComplaintDetails(problem).subscribe(
      (result) => {console.log("Complaint details added successfully");},
      () => {this.error = 'Something went wrong';}
    );
  } 
}



