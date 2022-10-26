import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { AdmincontrolsComponent } from './admincontrols/admincontrols.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { ViewallusersComponent } from './viewallusers/viewallusers.component';
import { CustomerComponent } from './customer/customer.component';
import { ManagerComponent } from './manager/manager.component';
import { EngineerComponent } from './engineer/engineer.component';
import { CreatecomplaintComponent } from './createcomplaint/createcomplaint.component';
import { ViewcomplaintComponent } from './viewcomplaint/viewcomplaint.component';
import { UpdatedetailsComponent } from './updatedetails/updatedetails.component';
import { AssignengineerComponent } from './assignengineer/assignengineer.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PageNotfoundComponent,
    AdmincontrolsComponent,
    AdminComponent,
    CreateuserComponent,
    ViewallusersComponent,
    CustomerComponent,
    ManagerComponent,
    EngineerComponent,
    CreatecomplaintComponent,
    ViewcomplaintComponent,
    UpdatedetailsComponent,
    AssignengineerComponent,
    AdminsignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
