import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent {

  @ViewChild('invoiceArea') invoiceArea!: ElementRef;

  today: string = new Date().toLocaleDateString();

  showInvoice = false;

  invoiceNumber = '';

  gstRate = 18;

  description = '';

  customer = {
    name: '',
    email: '',
    address: ''
  };

  items = [
    { product:'', price:0, qty:1 }
  ];

  addItem(){
    this.items.push({ product:'', price:0, qty:1 });
  }

  generateInvoice(){

    const random = Math.floor(1000 + Math.random()*9000);

    this.invoiceNumber = "INV-" + new Date().getFullYear() + "-" + random;

    this.showInvoice = true;
  }

  getSubtotal(){
    return this.items.reduce((sum,item)=>sum+(item.price*item.qty),0);
  }

  getGST(){
    return this.getSubtotal()*this.gstRate/100;
  }

  getGrandTotal(){
    return this.getSubtotal()+this.getGST();
  }

  formatCurrency(value:number){
    return new Intl.NumberFormat('en-IN',{
      style:'currency',
      currency:'INR'
    }).format(value);
  }

  downloadPDF(){

const data = this.invoiceArea.nativeElement;

html2canvas(data,{
scale:2
}).then(canvas=>{

const imgWidth = 208;
const imgHeight = canvas.height * imgWidth / canvas.width;

const imgData = canvas.toDataURL('image/png');

const pdf = new jsPDF('p','mm','a4');

pdf.addImage(imgData,'PNG',0,10,imgWidth,imgHeight);

pdf.save(this.invoiceNumber + ".pdf");

});

}

}