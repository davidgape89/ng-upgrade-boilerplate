import * as angular from 'angular';
import superDuperModule from '../../../components/superDuper.component.ajs';

import testServiceModule, { TestService } from '../../services/testService.ng';

class TitleComponentCtrl {
  public randomObject: any;

  private _testService: TestService;

  constructor(testService) {
    this._testService = testService;
    this.randomObject = {
      attribute1: 'cool',
      attribute2: 'nice'
    };
  }

  public onClick() {
    this._testService.getSomething();
  }

  public eventListener(event) {
    console.log(event);
  }
}

export default angular.module('titleComponentModule', [
  testServiceModule.name,
  superDuperModule.name
])
  .component('titleComponent', {
    templateUrl: './titleComponent.tpl.html',
    controller: [
      'testService',
      (testService) => new TitleComponentCtrl(testService)
    ]
  });
