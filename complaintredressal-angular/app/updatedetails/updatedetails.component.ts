import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerModel } from '../models/customer.model';
import { AuthService } from '../services/auth.service';
import { CustomerService } from '../services/customerService.service';

@Component({
  selector: 'app-updatedetails',
  templateUrl: './updatedetails.component.html',
  styleUrls: ['./updatedetails.component.css']
})
export class UpdatedetailsComponent implements OnInit {
  
  userName: string = '';
  plot_No: string = '';
  locality: string = '';
  district: string = '';
  state: string = '';
  pincode: number;
  tel_no: string = '';

  isSignedin=false;
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
      this.router.navigateByUrl('updatePersonalDetails');
    }
  }

  doAddCustomer() {
    if (
      this.plot_No !== '' &&
      this.plot_No !== null &&
      this.locality !== '' &&
      this.locality !== null &&
      this.district !== '' &&
      this.district !== null &&
      this.state !== '' &&
      this.state !== null &&
      this.pincode !== null &&
      this.tel_no !== '' &&
      this.tel_no !== null
    ) {
      const customer: CustomerModel = {
        userName: sessionStorage.getItem('user'),
        plot_no: this.plot_No,
        locality: this.locality,
        district: this.district,
        state: this.state,
        pincode: this.pincode,
        tel_no: this.tel_no
      };
      this.custService.addCustomerDetails(customer).subscribe(
        (result) => {console.log("Customer details added successfully");},
        () => {this.error = 'Something went wrong';}
      );
    } else {this.error = 'Error in operation';}

  }

}
