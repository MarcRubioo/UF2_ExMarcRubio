import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { ProvesExMarcRubioComponent } from './proves-ex-marc-rubio/proves-ex-marc-rubio.component';

@NgModule({
  declarations: [
    AppComponent,
    ProvesExMarcRubioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
