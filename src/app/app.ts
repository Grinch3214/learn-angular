import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, FormsModule, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  handleSubscribe() {
    console.log('work click');
  }

  title = 'Angular App';
}
