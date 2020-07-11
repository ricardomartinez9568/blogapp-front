import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.page.html',
  styleUrls: ['./blogs-list.page.scss'],
})
export class BlogsListPage implements OnInit {
  userDetails;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
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
