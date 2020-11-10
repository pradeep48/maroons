import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResistrationComponent } from './resistration/resistration.component';
import { MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [AppComponent, ResistrationComponent],
  imports: [BrowserModule, AppRoutingModule, MatInputModule, MatFormFieldModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
