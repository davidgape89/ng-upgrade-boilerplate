import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TestService } from '../angularJSProj/services/testService.ng';

@Component({
  selector: 'app-super-duper',
  templateUrl: './superDuper.component.html'
})
export class SuperDuperComponent {
  @Input() someInput: any;
  @Output() someOutput = new EventEmitter<any>();

  public text: string;

  private _testService: TestService;

  constructor(testService: TestService) {
    this._testService = testService;
  }

  public onClick() {
    this._testService.getSomething();
    this.someOutput.emit({attribute: 'lol what mate?'});
    alert(this.text);
  }
}
