import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from '../models/request.model';

import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  username: string = '';
  password: string = '';

  isSignedin=false;

  error: string = '';
  shouldDisplayMenu: boolean;  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.isSignedin = this.authService.isUserSignedin();
    if (this.isSignedin) {
      this.router.navigateByUrl('admincontrols');
    }
  }

  doSignin(){
    if (
      this.username !== '' &&
      this.username !== null &&
      this.password !== '' &&
      this.password !== null
    ) {
      const request: Request = {
        userName: this.username,
        userpwd: this.password,
      };
      console.log("Username is : " + request.userName);
      console.log("Start of doSignin method");
      this.authService.signin(request).subscribe(
        (_result) => {
          console.log("Inside doSignin method");
          this.shouldDisplayMenu = this.authService.isUserSignedin();
          this.router.navigateByUrl('admincontrols');
        },
        () => {
          this.error = 'Either invalid credentials or something went wrong';
        }
      );
    } else {
      this.error = 'Invalid Credentials';
    }
  }

}
