import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from '../models/UserModel.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-viewallusers',
  templateUrl: './viewallusers.component.html',
  styleUrls: ['./viewallusers.component.css']
})
export class ViewallusersComponent implements OnInit {
  users: UserModel[];
  
  constructor(
    private router: Router,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.doInit();
  }

  

  doDelete(userName) {
    console.log('user to be deleted : ' + userName);
    this.authService.deleteUser(userName).subscribe(
      (resp) => {
        console.log('deleted user', resp);
        this.ngOnInit();
      }, 
      err => {
        console.log(err);
      }
    );
    this.doInit();
  }

  doInit() {
    this.authService.getAllUsers().subscribe((usrs:UserModel[]) => {
      this.users = usrs;
      console.log(usrs);
    });
  }


}
