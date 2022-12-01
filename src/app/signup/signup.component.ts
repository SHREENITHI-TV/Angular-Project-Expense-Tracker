import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public flag: boolean = false;
  constructor(public route: Router, public global: GlobalService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.flag = true;
    if (form.invalid) {
      return;
    }
    this.global.postRegisterDetails(form.value).subscribe((response) => {
      this.route.navigateByUrl("/login");
    }, (error) => {

    })

  }
}
