import { Injectable } from '@angular/core';
import { jsPDF } from 'jspdf';

import 'jspdf-autotable';

@Injectable()
export class Exporttopdf {
 constructor(){}
  head = [['PLAYERNAME', 'PLAYERCOUNTRY', 'PLAYERCLUB']]


  public createPdf(data:any) {
    var doc = new jsPDF();

    doc.setFontSize(18);
    doc.text('My Team Detail', 11, 8);
    doc.setFontSize(11);
    doc.setTextColor(100);


    (doc as any).autoTable({
      head: this.head,
      body: data,
      theme: 'plain',
      didDrawCell: data => {
        console.log(data.column.index)
      }
    })

    // below line for Open PDF document in new tab
    doc.output('dataurlnewwindow')

    // below line for Download PDF document
    doc.save('myteamdetail.pdf');
  }

}
