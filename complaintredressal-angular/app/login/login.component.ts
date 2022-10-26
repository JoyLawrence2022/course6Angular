import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from '../models/request.model';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string = '';
  userpwd: string = '';
  roles: string = '';
  current_role: string = '';

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
      this.current_role = this.authService.getRoles();
      if (this.current_role == "CUST") (
        this.router.navigateByUrl('customer')
      );
      else if (this.current_role == "ENGR") (
        this.router.navigateByUrl('engineer')
      );
      else if (this.current_role == "MNGR") (
        this.router.navigateByUrl('manager')
      );
    }
  }

  doSignin(){
    if (
      this.userName !== '' &&
      this.userName !== null &&
      this.userpwd !== '' &&
      this.userpwd !== null
    ) {
      const request: Request = {
        userName: this.userName,
        userpwd: this.userpwd
      };
      this.authService.signin(request).subscribe(
        (result) => {
          this.shouldDisplayMenu = this.authService.isUserSignedin();
          this.roles = this.authService.getRoles();
          console.log("The value of roles is : " + this.roles);
          if (this.roles == "CUST") (
            this.router.navigateByUrl('customer')
          );
          else if (this.roles == "ENGR") (
            this.router.navigateByUrl('engineer')
          );
          else if (this.roles == "MNGR") (
            this.router.navigateByUrl('manager')
          );
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
