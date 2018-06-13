
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';
import { AppComponent } from './app.component';
import { SuperDuperComponent } from './components/superDuper.component';
import { AppJSModule } from './angularJSProj/appJS.module';
import { testServiceProvider } from './ajs-upgraded-providers';

@NgModule({
  declarations: [
    AppComponent,
    SuperDuperComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule,
    AppJSModule
  ],
  providers: [
    testServiceProvider
  ],
  entryComponents: [
    SuperDuperComponent
  ]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) { }

  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['appModule'], { strictDi: true });
  }
}
