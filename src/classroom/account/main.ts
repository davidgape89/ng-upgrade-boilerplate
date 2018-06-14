import * as angular from 'angular';
import axios from 'axios';
import bootstrapAngularJS from './app/angularJSProj/app';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { setAngularJSGlobal } from '@angular/upgrade/static';

if (environment.production) {
  enableProdMode();
}

setAngularJSGlobal(angular);

const setConfigModule = (config) => {
  angular.module(config.config.moduleName, [])
    .constant(config.config.constantName, config);
};

// Get config proof of concept
axios.get('https://web-config.dev.ctx.ef.com/teacher.json')
  .then((response) => {
    const config = response.data;

    setConfigModule(config);

    bootstrapAngularJS();

    platformBrowserDynamic().bootstrapModule(AppModule)
      .catch(err => console.log(err));

  });
