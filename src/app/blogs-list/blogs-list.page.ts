import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.page.html',
  styleUrls: ['./blogs-list.page.scss'],
})
export class BlogsListPage implements OnInit {

  constructor(private userService: UserService, private router: Router, route: ActivatedRoute) {
    route.params.subscribe(val => {
      this.userService.getUserProfile().subscribe(
        res => {
          this.userDetails = res['user'];
          // this.userDetails.notes.reverse();
          this.userService.setData(this.userDetails.username);
          console.log(this.userDetails.username);
        },
        err => {
          console.log(err);
        }
      );
    });
  }

  userDetails;

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
        console.log(this.userDetails);
        // this.userDetails.notes.reverse();
        this.userService.setData(this.userDetails.username);
      },
      err => {
        console.log(err);
      }

    );
  }

  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }

}
