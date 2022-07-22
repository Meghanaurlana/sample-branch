import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveformsModule } from './reactiveforms/reactiveforms.module';
import { FormsComponent } from './forms/forms.component';

@NgModule({
  declarations: [
    AppComponent,

    ChildComponent,
     FormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveformsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
