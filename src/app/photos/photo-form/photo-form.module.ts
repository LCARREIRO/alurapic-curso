import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { PhotoFormComponent } from './photo-form.component';
import { CommonModule } from '@angular/common';
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessage.module';

@NgModule({
    declarations: [
      PhotoFormComponent
    ],
    imports: [
      CommonModule,
      ReactiveFormsModule,
      VMessageModule,
      FormsModule
    ]
})
export class PhotoFormModule { }
