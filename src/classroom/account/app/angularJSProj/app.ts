import * as angular from 'angular';
import titleModule from './components/titleComponent/titleComponent.ng';
import { SuperDuperComponent } from '../components/superDuper.component';
import { downgradeComponent } from '@angular/upgrade/static';

export default () => (
  angular.module('appModule', [
    'cx.config',
    titleModule.name
  ])

  .run([
      '$rootScope',
      'APP_CONFIG',
      ($scope, config) =>  {
        console.log('AngularJS app loaded');
        $scope.title = 'hello world';
        console.log(config);
      }
    ]
  )
);
