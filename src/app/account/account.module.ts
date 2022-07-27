import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account/account.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { AddEditComponent } from './add-edit/add-edit.component';
import { HttpClientModule } from '@angular/common/http'
@NgModule({
  declarations: [
    AccountComponent,
    ProfileComponent,
    AddEditComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ButtonModule,
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule,
    TableModule
  ]
})
export class AccountModule { }
