import { Component ,inject} from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { signal } from '@angular/core';
import { EditTransaction } from '../edit-transaction/edit-transaction';
import { FormsModule } from '@angular/forms';
import { AddTransaction } from '../add-transaction/add-transaction';

import {
  LucideWallet,
  LucideTrendingUp,
  LucideTrendingDown
} from '@lucide/angular';


@Component({
  imports: [
    EditTransaction,
     FormsModule, 
     LucideTrendingDown,LucideWallet,LucideTrendingUp,
    AddTransaction],
  selector: 'app-dashboard',
  styleUrl: './dashboard.css',
  templateUrl: './dashboard.html',

})
export class Dashboard {
  readonly transactionService = inject(TransactionService);
  selectedTransactionId = signal<string | null>(null);

}
