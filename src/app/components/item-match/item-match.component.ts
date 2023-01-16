import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-match',
  templateUrl: './item-match.component.html',
  styleUrls: ['./item-match.component.css']
})
export class ItemMatchComponent implements OnInit {

  @Input() searchMatch: any;


  constructor() { }

  ngOnInit() {
  }




}
