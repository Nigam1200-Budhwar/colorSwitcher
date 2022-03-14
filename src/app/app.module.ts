import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorSelectorComponent } from './color-selector/color-selector.component';
import { FormsModule } from '@angular/forms';
import { BackgroundColorComponent } from './background-color/background-color.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorSelectorComponent,
    BackgroundColorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
