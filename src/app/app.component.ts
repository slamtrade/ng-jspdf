import { Component } from '@angular/core';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-jspdf';

  downloadPDF(){
      console.log("downloading pdf ...");
      const pdf = new jsPDF();
      var data = document.getElementById('capture');  


      html2canvas(data).then(canvas => {  
        // Few necessary setting options  
        var imgWidth = 400;   
        var pageHeight = 600;    
        var imgHeight = canvas.height * imgWidth / canvas.width;  
        var heightLeft = imgHeight;  
    
        const contentDataURL = canvas.toDataURL('image/png')  
        var position = 0;  
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
        pdf.save('MYPdf.pdf'); // Generated PDF   
    });
 }
}