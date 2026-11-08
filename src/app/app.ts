import { Component, signal } from '@angular/core';

import { Dashboard } from './components/dashboard/dashboard';


@Component({
  imports: [Dashboard, 
    ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

}
