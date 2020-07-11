import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlogsListPageRoutingModule } from './blogs-list-routing.module';

import { BlogsListPage } from './blogs-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlogsListPageRoutingModule
  ],
  declarations: [BlogsListPage]
})
export class BlogsListPageModule {}
