import { ShowIfLoggedModule } from './../shared/directives/show-if-logged/shiow-if-logged.module';
import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from './auth/request.interceptor';
import { AlertModule } from '../shared/components/alert/alert.module';
import { MenuModule } from '../shared/components/menu/menu.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],

  exports: [
    HeaderComponent,
    FooterComponent
  ],

  imports: [
    CommonModule,
    RouterModule,
    AlertModule,
    MenuModule,
    ShowIfLoggedModule
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }
  ]
})
export class CoreModule { }
