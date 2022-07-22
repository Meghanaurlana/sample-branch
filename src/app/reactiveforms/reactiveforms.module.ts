import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ReactiveformsComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    FormsModule,

  ]
})
export class ReactiveformsModule { }
