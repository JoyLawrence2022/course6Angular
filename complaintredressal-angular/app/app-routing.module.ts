import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdmincontrolsComponent } from './admincontrols/admincontrols.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
import { AssignengineerComponent } from './assignengineer/assignengineer.component';
import { CreatecomplaintComponent } from './createcomplaint/createcomplaint.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { CustomerComponent } from './customer/customer.component';
import { EngineerComponent } from './engineer/engineer.component';
import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './manager/manager.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { UpdatedetailsComponent } from './updatedetails/updatedetails.component';
import { ViewallusersComponent } from './viewallusers/viewallusers.component';
import { ViewcomplaintComponent } from './viewcomplaint/viewcomplaint.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'login', component:LoginComponent},
  {path: 'admin', component:AdminComponent},
  {path: 'adminsignup', component:AdminsignupComponent},
  {path: 'admincontrols', component:AdmincontrolsComponent},
  {path: 'assignEngineer', component: AssignengineerComponent},
  {path: 'createComplaint', component:CreatecomplaintComponent},
  {path: 'createUser', component:CreateuserComponent},
  {path: 'customer', component:CustomerComponent},
  {path: 'engineer', component:EngineerComponent},
  {path: 'manager', component:ManagerComponent},
  {path: 'updatePersonalDetails', component: UpdatedetailsComponent},
  {path: 'viewAllUsers', component: ViewallusersComponent},
  {path: 'viewComplaint', component: ViewcomplaintComponent},
  {path: 'not-found', component:PageNotfoundComponent},
  {path: '**', redirectTo:'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
