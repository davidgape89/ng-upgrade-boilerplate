import * as angular from 'angular';
import { downgradeComponent } from '@angular/upgrade/static';
import { SuperDuperComponent } from './superDuper.component';

export default angular.module('superDuperModule', [])
  .directive('appSuperDuper', downgradeComponent({component: SuperDuperComponent}));
