import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  model = {
    username: '',
    password: ''
  };

  serverErrorMessages: string;

  ngOnInit() {
   if (this.userService.isLoggedIn())
   {
    this.router.navigateByUrl('/login');
   }
  }

  onSubmit(form: NgForm){
    console.log(form.value);
    this.userService.login(form.value).subscribe(
      res => {
        this.userService.setToken(res['token']);
        this.router.navigateByUrl('/blogs-list');
        console.log(res);
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }

}
