import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlogsCreatePageRoutingModule } from './blogs-create-routing.module';

import { BlogsCreatePage } from './blogs-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlogsCreatePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [BlogsCreatePage]
})
export class BlogsCreatePageModule {}
