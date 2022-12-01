import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { HttpClientModule } from "@angular/common/http";
import { ArticlesComponent } from './articles/articles.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    AddExpenseComponent,
    DashboardComponent,
    AboutComponent,
    HomeComponent,
    HowItWorksComponent,
    ArticlesComponent,
    ContactUsComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
