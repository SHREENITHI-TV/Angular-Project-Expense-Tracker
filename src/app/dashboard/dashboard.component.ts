import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public expense: string = "Expense Title"; //interpolation binding
  public Ecategory:string = "Expense Category";
  
  public expenseButton: string = "submit";//property binding
  public expenseClass: string = "btn btn-secondary";//property binding
  public searchName: string = "";
  public list: any = [];
  public flag: boolean = true;
  public editIndex: number = -1;
  public title: string = '';
  public category: string = '';
  public amount: number = 0;
  public date: any;

  public constructor(public router: Router, public global: GlobalService) {

  }
  onEditHandler(i: any) {
    this.title = this.list[i].title;
    this.category = this.list[i].category;
    this.amount = this.list[i].amount;
    this.date = this.list[i].date;
    this.editIndex = i;
  }
  onDeleteHandler(i: any) {
    alert(i + 1);
    let id = this.list[i]._id;
    this.global.deleteExpenseDetails(id).subscribe((success: any) => {
      this.onFetchDetails();
    }, (failure) => {
      console.log("error", failure);
    })
  }
  onFinalSubmitHandler() {
    let id = this.list[this.editIndex]._id;
    let obj = {
      title: this.title,
      category: this.category,
      amount: this.amount,
      date: this.date
    };
    this.global.updateExpenseDetails(id, obj).subscribe((success: any) => {
      this.onFetchDetails();
    }, (failure) => {
      console.log("error", failure);
    })
  }

  onFetchDetails() {
    this.global.getExpenseDetails().subscribe((success: any) => {
      console.log(success.list);
      if (success && success.list.length > 0) {
        let details: any = success.list;
        this.list = [];
        this.list.push(...details);
      }
    }, (failure) => {
      console.log("error", failure);
    })
  }
  ngOnInit(): void {
    this.onFetchDetails();
  }
  onSubmitHandler(event: any) {//event binding
    event.preventDefault();
    alert("No details found");
  }
  onaddExpenseHandler(event: any) {
    this.router.navigateByUrl("/expense");
  }
  onShowHandler() {
    this.flag = !this.flag;
  }
}
