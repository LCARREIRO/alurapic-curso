import { SignUpService } from './signup/signup.service';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home.routing.module';

import { HomeComponent } from './home.component';
import { SignInComponent } from './signin/signin.component';
import { VMessageModule } from './../shared/components/vmessage/vmessage.module';
import { SignUpComponent } from './signup/signup.component';

@NgModule({
  declarations:
    [
      HomeComponent,
      SignInComponent,
      SignUpComponent,
    ],

  imports:
    [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      VMessageModule,
      RouterModule,
      HomeRoutingModule
    ],
  providers: [
    SignUpService
  ]

})
export class HomeModule {
}
