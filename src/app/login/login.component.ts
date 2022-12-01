import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public flag: boolean = false;

  constructor(public router: Router, public global: GlobalService) { }

  ngOnInit(): void {
  }

  onLoginHandler(form: NgForm) {
    this.flag = true;
    if (form.invalid) {
      return;
    }
    console.log(form.value);
    this.global.postLoginDetails(form.value).subscribe(() => {
      this.global.loginSuccess = true;
      this.router.navigateByUrl("/dashboard");
    }, () => {
      alert("No such user Found");

    })

  }
}
