import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogsCreatePage } from './blogs-create.page';

const routes: Routes = [
  {
    path: '',
    component: BlogsCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogsCreatePageRoutingModule {}
