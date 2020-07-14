import { Component } from '@angular/core';
import { Router,Route } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  public constructor(  private router:Router ){
     this.router.config.unshift( {path:'base',loadChildren: () => import('./modules/base/base.module').then(m => m.BaseModule)} );

   console.log(this.router.config );
   let cfg=this.router.config[0];
   console.log('this.cfg is')
  console.log(   cfg.loadChildren);
  } 
}
