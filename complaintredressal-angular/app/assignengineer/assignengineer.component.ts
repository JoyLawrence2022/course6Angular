import { Component, OnInit } from '@angular/core';
import { InitiateProblemModel } from '../models/InitiateProblemModel.model';
import { NewModel } from '../models/newmodel.model';
import { ManagerService } from '../services/managerService.service';

@Component({
  selector: 'app-assignengineer',
  templateUrl: './assignengineer.component.html',
  styleUrls: ['./assignengineer.component.css']
})
export class AssignengineerComponent implements OnInit {

  tracking_no: string = '';
  error: string = '';
  complaint_details: InitiateProblemModel[] = [];
  engrName: string = '';

  constructor(
    private managerService: ManagerService
  ) { }

  ngOnInit(): void {
    this.doInit();
  }

  doInit(){
    this.tracking_no = sessionStorage.getItem('tracker');
    console.log('this is tracking number : ' + this.tracking_no);
/*    const  view_complaint: InitiateProblemModel = {
      complaintTrackingNumber: this.tracking_no
    };
*/
    this.managerService.viewComplaintDetails(this.tracking_no).subscribe(data => {
      this.complaint_details = data;
      console.log(this.complaint_details);
    });
  }

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

}
