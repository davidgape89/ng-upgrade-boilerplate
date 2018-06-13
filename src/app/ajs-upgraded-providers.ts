import { TestService } from './angularJSProj/services/testService.ng';

export function TestServiceFactory(i: any) {
  return i.get('testService');
}

export const testServiceProvider = {
  provide: TestService,
  useFactory: TestServiceFactory,
  deps: ['$injector']
};
