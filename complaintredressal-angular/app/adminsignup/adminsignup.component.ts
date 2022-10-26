import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Request } from '../models/request.model';

@Component({
  selector: 'app-adminsignup',
  templateUrl: './adminsignup.component.html',
  styleUrls: ['./adminsignup.component.css']
})
export class AdminsignupComponent implements OnInit {

  username: string = '';
  password: string = '';
  user_roles: string[] = ['ADMIN'];

  isSignedin=false;

  error: string = '';
  success: string = '';
  shouldDisplayMenu: boolean;

  constructor(
    private authService:AuthService
  ) { }

  ngOnInit(): void {
  }

  doSignup() {
    if (
      this.username !== '' && this.username !== null &&
      this.password !== '' && this.password !== null 
    ) {
      const request: Request = {
        userName: this.username,
        userpwd: this.password,
        roles: this.user_roles
      };
      this.authService.signup(request).subscribe((result)=>{
        console.log(result);
        console.log("this is inside component.ts : "+this.username);
        this.success = result;
      }, (err) => {
				console.log(err);
				this.error = 'Something went wrong during signup';
			});
		} else {
			this.error = 'All fields are mandatory';
		}
  }

}
