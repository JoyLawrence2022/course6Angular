import { Component, OnInit } from '@angular/core';
import { InitiateProblemModel } from '../models/InitiateProblemModel.model';
import { EngineerService } from '../services/engineerService.service';

@Component({
  selector: 'app-engineer',
  templateUrl: './engineer.component.html',
  styleUrls: ['./engineer.component.css']
})
export class EngineerComponent implements OnInit {

  complaints_details: InitiateProblemModel[] = [];
  engrName: string = '';
  newStatus: string = '';
  error: string = '';

  constructor(
    private engineerService: EngineerService
  ) { }

  ngOnInit(): void {
    this.doInit();
  }

  doInit() {
    this.engrName = sessionStorage.getItem('user');
    console.log('this is logged in Engineer : ' + this.engrName);
    this.engineerService.viewAssignedComplaints(this.engrName).subscribe(data => {
      this.complaints_details = data;
      console.log(this.complaints_details);
    });
  }

  doUpdateAssignedStatus(tracking_no: string){
    if (
      this.newStatus !== '' &&
      this.newStatus !== null
    ) {
      const complaint: InitiateProblemModel = {
        ticket_status: this.newStatus,
        complaintTrackingNumber: tracking_no
      };
      console.log('New Engineer assigned is : ' + this.engrName);
      this.engineerService.updateComplaintDetails(complaint).subscribe(
        (result) => {console.log("Work status updated successfully");},
        () => {this.error = 'Something went wrong';}
      );
    } else {this.error = 'Error in operation';}
  }

}


/*
this.managerService.viewAllProblemsByManager().subscribe((complaints:InitiateProblemModel[]) => {
  this.complaints = complaints;
  console.log(complaints);
});

doUpdate() {
  if (
    this.engrName !== '' &&
    this.engrName !== null
  ) {
    const complaint: InitiateProblemModel = {
      engrName: this.engrName,
      complaintTrackingNumber: this.tracking_no
    };
    console.log('New Engineer assigned is : ' + this.engrName);
    this.managerService.addEngineerDetails(complaint).subscribe(
      (result) => {console.log("Engineer assigned to problem successfully");},
      () => {this.error = 'Something went wrong';}
    );
  } else {this.error = 'Error in operation';}

}
*/