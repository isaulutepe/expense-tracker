import { Injectable, signal ,computed,effect } from '@angular/core';
import { Transaction } from '../models/transaction.model';
//Angular bu sınıfın DI ile kullanacağını bilriri.
@Injectable({
  providedIn: 'root' //Servisi uygulama genelinde kullanılabilir hale getirir.
})
export class TransactionService {

  constructor() {
  effect(() => {
    localStorage.setItem(
      'transactions',
      JSON.stringify(this.transactions())
    );
  });
  }

//Verileri oku
  transactions = signal<Transaction[]>(this.loadTransactions());
  //Filtreleme için
filterType = signal<'all' | 'income' | 'expense'>('all');
categoryFilter = signal<string>('all');

filteredTransaction=computed(()=>{
  const filter=this.filterType();
  const category= this.categoryFilter();

  return this.transactions().filter(transaction=>
    {
      const matchesType = filter ==='all' || transaction.type===filter;
      const matchesCategory =
      category === 'all' || transaction.category === category;

    return matchesType && matchesCategory;
    });
});
clearFilters() {
  this.filterType.set('all');
  this.categoryFilter.set('all');
}

  //Verileri getirmek için yaptım.
  private loadTransactions():Transaction[]{
  const data=localStorage.getItem('transactions');
  if(data){
    return JSON.parse(data).map((transaction: Transaction) => ({
  ...transaction,
  date: new Date(transaction.date)
}));
  }
  return [];
  }

  totalInCome=computed(()=>{
  return this.transactions()
  .filter(transaction=>transaction.type==='income')
  .reduce((total,transaction)=>total+transaction.amount,0);
  });
  totalExpense=computed(()=>{
  return this.transactions()
  .filter(transaction=>transaction.type==='expense')
  .reduce((total,transaction)=>total+transaction.amount,0);
  });
  //Reduce --> bir dizi içindeki verileri toplar.
  //total = o ana kadar biriken toplam
  //transaction = dizideki mevcut işlem
  //0 = toplamın başlangıç değeri.

  balance=computed(()=>{
  return this.totalInCome()-this.totalExpense();

  });

  //Ekleme işlemi. TypeScriptte methot oluşturma işlemi bu şekilde oluyor. 
  addTransaction(transaction: Transaction) {
   this.transactions.update(currentTransactions => [
    ...currentTransactions,
    transaction
  ]);
  //update methodu mevcut değeri alıp yeni bir değer üretmemizi sağlar.
  //... --> Spread operatörüyle ile mevcut dizideki tüm elemanlar kopyalanır sonuna da yeni transaction eklenir.
  //currentTransaction --> Mevcut işlemler dizimizi tutan callback adı.
  //...currentTransactions --> Dizideki mevcut işlemleri yine diziye aktarır.
  //transaction --> Yeni işlemi dizinin sonuna ekler
 };
 deleteTransaction(id:string){
  this.transactions.update(currentTransaction=>currentTransaction.filter(transaction=>transaction.id !==id));
  //verdiğim id yi yeni listeye eklemez.
 }
getTransactionById(id: string) {
  return this.transactions().find(transaction => transaction.id === id);
}
updateTransaction(id:string, title:string,amount:number,type:'income' | 'expense', category:string){
  
  this.transactions.update(currentTransactions=>currentTransactions.map(transaction=>transaction.id===id ?{
    ...transaction,title,amount,type,category
  }:transaction));
//map() bütün işlemleri dolaşır.
// ID eşleşirse yeni bir nesne oluşturur ve güncel bilgileri aktarır.
}
}