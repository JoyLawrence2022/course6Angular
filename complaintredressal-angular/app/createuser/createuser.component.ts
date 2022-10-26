import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from '../models/request.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  constructor(
    private authService:AuthService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  username: string = '';
  userpwd: string = '';
  user_roles: any = [
		{name:'Customer', value:'CUST', selected: false},
		{name:'Manager', value:'MNGR', selected: false},
    {name:'Engineer', value:'ENGR', selected: false},
	]

  selectedRoles: string[] = [];

  isSignedin=false;

  error: string = '';
  success: string = '';
  shouldDisplayMenu: boolean;
  
  

  ngOnInit(): void {
  /*  this.isSignedin = this.authService.isUserSignedin();
    if (this.isSignedin) {
      this.router.navigateByUrl('admincontrols');
    }
    */
  }

  onChangeCategory(event: any, role: any) {
		this.selectedRoles.push(role.value);
	}

  addUser() {
    if (
      this.username !== '' && this.username !== null &&
      this.userpwd !== '' && this.userpwd !== null &&
      this.user_roles !== '' && this.user_roles !== null
    ) {
      const request: Request = {
        userName: this.username,
        userpwd: this.userpwd,
        roles: this.selectedRoles
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
