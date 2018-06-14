import * as angular from 'angular';

export class TestService {
  constructor() {}

  public getSomething() {
    console.log('Trying to get something');
  }
}

export default angular.module('testServiceModule', [])
.service('testService', () => new TestService());
