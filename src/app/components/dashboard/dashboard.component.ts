import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  actualDate: any;
  // title: string = 'Dashboard';
  constructor() { }

  ngOnInit() {

    this.actualDate = new Date()
  }

}
