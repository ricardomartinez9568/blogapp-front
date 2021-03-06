import { Component, OnInit } from '@angular/core';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../shared/user.service';


@Component({
  selector: 'app-blogs-create',
  templateUrl: './blogs-create.page.html',
  styleUrls: ['./blogs-create.page.scss'],
})
export class BlogsCreatePage implements OnInit {
  public form: FormGroup;

  lat;
  lng;
  timestamp;
  convertTime;
  location;
  date;

  constructor(private geo: Geolocation, public _formBuilder: FormBuilder, private userService: UserService, private router: Router) {
    this.form = this._formBuilder.group(
      {
        title: ['', Validators.required],
        description: ['', Validators.required]
      }
    );
  }

  ngOnInit() {
    this.geo.getCurrentPosition().then( res => {
      this.lat = res.coords.latitude;
      this.lng = res.coords.longitude;

      this.timestamp = res.timestamp;
      this.convertTime = new Date(res.timestamp);

      this.date = (this.convertTime.getMonth() + 1) + '/' + this.convertTime.getDate() + '/' + this.convertTime.getFullYear();
      console.log(this.date);
      this.location = this.lat + ',' + this.lng;


    }).catch((error) => {
      console.log('error getting location', error);
    });
  }


  createNote(){
    console.log(this.location);

    this.form.value.geolocation = this.location;
    this.form.value.date = this.date;
    this.form.value.username = this.userService.getData();
    console.log(this.form.value);
    console.log(this.userService.getData());
    this.userService.createNote(this.form.value).subscribe();
    this.router.navigateByUrl('/blogs-list');



  }

}
