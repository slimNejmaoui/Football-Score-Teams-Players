import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  Tblogs = [{ id: 1, date: " 8 - 10 - 1987", description: "hard party", offre: "gratuit" },
  { id: 2, date: " 8 - 10 - 1987", description: "hard party", offre: "gratuit" },
  { id: 3, date: "8 - 10 - 1987", description: "hard party", offre: "gratuit" },
  { id: 4, date: "8 - 10 - 1987", description: "hard party", offre: "gratuit" }];

  constructor() { }

  ngOnInit() {
  }

}
