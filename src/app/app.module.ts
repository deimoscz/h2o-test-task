import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactBookComponent } from './components/contact-book/contact-book.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactBookComponent,
    ContactDetailsComponent,
    ContactListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
