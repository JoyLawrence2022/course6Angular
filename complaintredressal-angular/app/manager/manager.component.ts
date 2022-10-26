import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InitiateProblemModel } from '../models/InitiateProblemModel.model';
import { ManagerService } from '../services/managerService.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  complaints: InitiateProblemModel[];
  complaintTrackingNumber: string;
  engrName: string = '';
  error: string = '';

  constructor(
    private managerService: ManagerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.doInit();
  }

  doInit(){
    this.managerService.viewAllProblemsByManager().subscribe((complaints:InitiateProblemModel[]) => {
      this.complaints = complaints;
      console.log(complaints);
    });

  }

  selectComplaint(trackingNumber: string) {
    console.log('Engr to be assigned on complaint no. : ' + trackingNumber);
    //console.log('New engineer assigned is : ' + engineer);
    sessionStorage.setItem('tracker',trackingNumber);
    this.router.navigate(['/assignEngineer']);
      

  }

}
/*
const  problem: InitiateProblemModel = {
  customerName: sessionStorage.getItem('user'),
  problem_name: this.problem_name
};
this.custService.addComplaintDetails(problem).subscribe(
  (result) => {console.log("Complaint details added successfully");},
  () => {this.error = 'Something went wrong';}
);
*/
