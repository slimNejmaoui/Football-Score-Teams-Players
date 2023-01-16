import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userIsAuthenticated = false;
  clientIsAuthenticated: any;
  storeIsAuthenticated: any;
  adminIsAuthenticated: any;

  private authListenerSubs: Subscription;
  private authClient: Subscription;
  private authStore: Subscription;
  private authAdmin: Subscription;

  profile: any;
  username: string
  profileisSet = false
  userRole: string;
  role: string;
  users: any = [];
  id: any;
  user: any;

  constructor(private route: Router, private activatedRoute: ActivatedRoute, private auth: AuthService, private userservice: UsersService) { }

  ngOnInit() {


    this.id = this.activatedRoute.snapshot.paramMap.get('id');


    this.userservice.getUser(this.id).subscribe((response) => { this.user = response.user })

    this.userIsAuthenticated = this.auth.getIsAuth();
    console.log('here auth', this.userIsAuthenticated);
    this.authListenerSubs = this.auth.getAuthStatusListener().subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;


    });
    this.clientIsAuthenticated = this.auth.getIsAuthClient();
    console.log('here auth client', this.clientIsAuthenticated);
    this.authClient = this.auth.getAuthClient().subscribe(isClent => {
      this.clientIsAuthenticated = isClent;
    });

    this.adminIsAuthenticated = this.auth.getIsAuthAdmin();
    console.log('here auth admin ', this.adminIsAuthenticated);
    this.authAdmin = this.auth.getAuthAdmin().subscribe(isAdmin => {
      this.adminIsAuthenticated = isAdmin;
    });

    this.userservice.getallusers().subscribe((response) => { this.users = response.users });
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
    this.authClient.unsubscribe();
    this.authStore.unsubscribe();
    this.authAdmin.unsubscribe();

    this.role = localStorage.getItem("role")


  }

  onLogout() {
    this.auth.logout();
    this.role = localStorage.getItem("role")

  }




}
