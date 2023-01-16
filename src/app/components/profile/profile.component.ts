import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id: string;
  user: any;

  constructor(private activatedRoute: ActivatedRoute, private userServices: UsersService, private route: Router) { }

  ngOnInit() {

    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    this.userServices.getUser(this.id).subscribe((response) => { this.user = response.user })



  }

  editUser(id: any) {


    this.route.navigate([`editProfile/${id}`]);
  }

}
