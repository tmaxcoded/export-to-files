import { Component } from '@angular/core';
import { ExcelService } from './services/excel.service';
import { ExportToCsvService } from './services/export-to-csv.service';
import { ExportToPdfService } from './services/services.export-to-pdf.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'export-table-data-to-any-format';

  dataOfFootballers: any = [{
    playerName: 'Cristiano Ronaldo',
    playerCountry: 'Pourtgal',
    playerClub: 'Juventus'
  },
  {
    playerName: 'Lionel Messi',
    playerCountry: 'Argentina',
    playerClub: 'Barcelona'
  },
  {
    playerName: 'Neymar Junior',
    playerCountry: 'Brazil',
    playerClub: 'PSG'
  },
  {
  playerName: 'Tonni Kroos',
  playerCountry: 'Germany',
  playerClub: 'Real Madrid'
  },
  {
    playerName: 'Paul Pogba',
    playerCountry: 'France',
    playerClub: 'Manchester United'
  }];

  constructor(private excelService:ExcelService,
    private exportPdf: ExportToPdfService,
    private exportToCsv: ExportToCsvService){

  }

  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(this.dataOfFootballers, 'footballer_data');
  }

  exportToPdf(): void {
    const objEntries =this.dataOfFootballers.map(obj => {
      return Object.values(obj);
    })

    console.log("object entries --> ", objEntries)
    this.exportPdf.createPdf(objEntries)
  }

  exportToCsvWeb(): void{
    this.exportToCsv.downloadCSV(this.dataOfFootballers)
  }
}
