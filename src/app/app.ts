import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Note } from './models/note.model';
import { CommonModule } from '@angular/common';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { FormsModule } from '@angular/forms';
import { NoteService } from './services/note';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  constructor(private noteService: NoteService) {}

  handleSubscribe() {
    console.log('work click');
  }

  title = 'Test title (file app.ts)';

  protected notes() {
    return this.noteService.getNotes()();
  }

  showConsole() {
    console.log('Click h1');
  }

  protected newNote = signal<Partial<Note>>({
    title: '',
    content: '',
  });

  protected addNote() {
    const noteData = this.newNote();

    if (!noteData.title || !noteData.content) return;

    this.noteService.addNote(noteData.title, noteData.content);

    this.newNote.set({
      title: '',
      content: '',
    });
  }
}
