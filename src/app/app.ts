import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Note } from './models/note.model';
import { CommonModule } from '@angular/common';
import { Header } from './header/header';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [CommonModule, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  handleSubscribe() {
    console.log('work click');
  }

  title = 'Test title (file app.ts)';

  showConsole() {
    console.log('Click h1');
  }

  protected readonly notes = signal<Note[]>([
    {
      id: 1,
      title: 'First note',
      content: 'Hi, this is first note',
      createdAt: new Date(),
    },
    {
      id: 2,
      title: 'Second note',
      content: 'Hi, this is second note',
      createdAt: new Date(),
    },
  ]);
}
