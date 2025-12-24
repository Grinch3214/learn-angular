import { Component, signal } from '@angular/core';
import { NoteService } from '../../services/note';
import { Note } from '../../models/note.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  constructor(private noteService: NoteService) {}

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
