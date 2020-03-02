import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SignInComponent } from './signin/signin.component';
import { VMessageModule } from './../shared/components/vmessage/vmessage.module';

@NgModule({
  declarations:
    [SignInComponent],

  imports:
    [
      CommonModule,
      ReactiveFormsModule,
      VMessageModule,
      RouterModule
    ]

})
export class HomeModule {
}
