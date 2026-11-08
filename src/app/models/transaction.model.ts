export interface Transaction {
  id: string;
  title: string;
  amount: number;
  type: 'income' | 'expense'; //Union type gelir ve gider durumunu aytı olarak almak yerine tek bir tip belirledim.s
  category: string;
  date: Date;
}