import { Component ,inject, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TransactionService } from '../../services/transaction.service';
import { input,output } from '@angular/core';//Başka bir componentten veri almak için.
//output dashBoarda işlemin bittiğini haber verecek
@Component({
  imports: [FormsModule],
  selector: 'app-edit-transaction',
  styleUrl: './edit-transaction.css',
  templateUrl: './edit-transaction.html',
})
export class EditTransaction implements OnInit {

title = '';
amount: number | null = null;
type: 'income' | 'expense' = 'expense';
category = '';
 transactionService=inject(TransactionService);
//component'e dışarıdan veri aktarılmasını sağlar.
//string --> gelen verinin türü.
transactionId = input.required<string>();
updateCompleted = output<void>();
errorMessage='';

  //İlk açıldıgında işlme bilgilerini otomatik forma aktarır.
  ngOnInit() {
  this.loadTransaction();
}
loadTransaction() {
  const transaction = this.transactionService.getTransactionById(
    this.transactionId());

     if (!transaction) return;
   
  this.title = transaction.title;
  this.amount = transaction.amount;
  this.type = transaction.type;
  this.category = transaction.category;

}
editTransaction() {
  if (!this.title.trim()) {
  this.errorMessage = 'İşlem açıklaması boş olamaz.';
  return;
}

if (this.amount === null || this.amount <= 0) {
   this.errorMessage = 'Tutar sıfırdan büyük olmalıdır.';
  return;
}

if (!this.category) {
  this.errorMessage = 'Lütfen bir kategori seçin.';
  return;
}

  this.transactionService.updateTransaction(
    this.transactionId(),
    this.title,
    this.amount,
    this.type,
    this.category
  );
  this.updateCompleted.emit();
  this.errorMessage='';
}
}
