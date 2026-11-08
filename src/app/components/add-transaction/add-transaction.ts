import { Component,inject } from '@angular/core';
//Form işleleri için kullanacağım kütüphane.
import { FormsModule } from '@angular/forms';
//addTransaction methoduna erişeceğimiz için.
import { TransactionService } from '../../services/transaction.service';
import { Transaction } from '../../models/transaction.model';

@Component({
  imports: [FormsModule],
  selector: 'app-add-transaction',
  styleUrl: './add-transaction.css',
  templateUrl: './add-transaction.html',
})
export class AddTransaction {
 transactionService=inject(TransactionService);
title = '';
amount: number | null = null; 
type: 'income' | 'expense' = 'expense';
category = '';
errorMessage = '';

addTransaction() {
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
const newTransaction:Transaction ={
 id: crypto.randomUUID(),
    title: this.title,
    amount: this.amount!,
    type: this.type,
    category: this.category,
    date: new Date()
  };
  this.transactionService.addTransaction(newTransaction);
  //Form submit olduktan sonra alanları temizlek için.
  this.title = '';
this.amount = null;
this.type = 'expense';
this.category = '';
this.errorMessage = '';
}
}

