import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExcelService } from './services/excel.service';
import { FormsModule } from '@angular/forms';
import { Exporttopdf } from './services/exportpdf.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [ExcelService,Exporttopdf],
  bootstrap: [AppComponent]
})
export class AppModule { }
