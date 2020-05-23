import { PhotoModule } from './../photo/photo.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { PhotoFormComponent } from './photo-form.component';
import { CommonModule } from '@angular/common';
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { ImmediateClickModule } from 'src/app/shared/directives/immediate-click/immediate-click.module';

@NgModule({
    declarations: [
      PhotoFormComponent
    ],
    imports: [
      CommonModule,
      ReactiveFormsModule,
      VMessageModule,
      FormsModule,
      RouterModule,
      PhotoModule,
      ImmediateClickModule
    ]
})
export class PhotoFormModule { }


