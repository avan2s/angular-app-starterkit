import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormioAppConfig, FormioModule} from 'angular-formio';
import {FormManagerConfig, FormManagerService} from 'angular-formio/manager';
import {FormioAuthConfig, FormioAuthService} from 'angular-formio/auth';
import {FormioResources} from 'angular-formio/resource';
import {AppConfig, AuthConfig} from '../config';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {HeroComponent} from './hero/hero.component';
import {ButtonModule} from 'primeng/button';
import {ComplexCustomComponent} from './complex-custom/complex-custom.component';
import {ButtonComponent} from './button/button.component';
import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    HeroComponent,
    ComplexCustomComponent,
    ButtonComponent
  ],
  entryComponents: [
    ComplexCustomComponent
  ],
  imports: [
    BrowserModule,
    FormioModule,
    ButtonModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'
      },
      {
        path: 'form',
        loadChildren: './form/form.module#FormModule'
      },
      {
        path: 'event',
        loadChildren: './event/event.module#EventModule'
      },
      {
        path: 'employee',
        loadChildren: './employee/employee.module#EmployeeModule'
      }
    ])
  ],
  providers: [
    FormioResources,
    FormioAuthService,
    FormManagerService,
    {
      provide: FormManagerConfig, useValue: {
        tag: 'common'
      }
    },
    {provide: FormioAuthConfig, useValue: AuthConfig},
    {provide: FormioAppConfig, useValue: AppConfig}
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const complexCustomComponent = createCustomElement(ComplexCustomComponent, {injector: this.injector});
    customElements.define('complex-custom', complexCustomComponent);
  }

  ngDoBootstrap() {
  }

}
