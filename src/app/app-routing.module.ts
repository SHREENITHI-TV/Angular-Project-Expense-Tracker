import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { ArticlesComponent } from './articles/articles.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RoutingGuardService } from './routing-guard.service';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {
    path: "login", component: LoginComponent
  },
  {
    path: "signup", component: SignupComponent
  },
  {
    path: "about", component: AboutComponent
  }, {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [RoutingGuardService]
  }, {
    path: "expense",
    component: AddExpenseComponent,
    canActivate: [RoutingGuardService]
  },
  {
    path: "", component: HomeComponent
  },
  {
    path: "how-it-works", component: HowItWorksComponent
  },
  {
    path: "articles", component: ArticlesComponent
  },
  {
    path: "contact-us", component: ContactUsComponent
  },
  {
    path: "logout", component: LogoutComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
