  import { NgModule } from '@angular/core';
  import { Routes, RouterModule } from '@angular/router';
  import { BaseComponent } from '../../components/base/base.component';

  const routes: Routes = [{path:'c',component:BaseComponent}];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  }) 
  export class BaseRoutingModule { }
