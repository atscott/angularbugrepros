import * as ng from 'angular';

// import Angular dependencies
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {setUpLocationSync} from '@angular/router/upgrade';
import {Ng1AppModule} from './app/ng1_app';
import {Ng2AppModule} from './app/ng2_app';

console.log(ng.version);

/**
 * We bootstrap the Angular 2 module first, and then, once it's done,
 * bootstrap the Angular 1 module.
 */
platformBrowserDynamic().bootstrapModule(Ng2AppModule).then(ref => {
  const upgrade = (<any>ref.instance).upgrade;
  // bootstrap AngularJS
  upgrade.bootstrap(document.body, [Ng1AppModule.name]);
  setUpLocationSync(upgrade);
});
