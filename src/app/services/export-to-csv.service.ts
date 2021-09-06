import { Injectable } from '@angular/core';
import { AngularCsv } from 'angular7-csv/dist/Angular-csv'

@Injectable({
  providedIn: 'root'
})
export class ExportToCsvService {

  csvOptions = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    showTitle: true,
    title: 'BOND INSTRUCTION :',
    useBom: true,
    noDownload: false,
    headers: ['PLAYER NAME', 'PLAYER COUNTRY', 'PLAYER CLUB']
  };
  constructor() { }

  downloadCSV(data:any){
    //this.dtHolidays : JSONDATA , HolidayList : CSV file Name, this.csvOptions : file options
    new  AngularCsv(data, "HolidayList", this.csvOptions);
  }
}
