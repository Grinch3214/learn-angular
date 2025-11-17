import { Injectable, signal } from '@angular/core';
import { Note } from '../models/note.model';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private notes = signal<Note[]>([
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
    {
      id: 3,
      title: 'Third note',
      content: 'Hi, this is Third note',
      createdAt: new Date(),
    },
  ]);

  getNotes() {
    return this.notes;
  }

  addNote(title: string, content: string) {
    const newNote: Note = {
      id: Date.now(),
      title: title,
      content: content,
      createdAt: new Date(),
    };

    this.notes.update((notes) => [...notes, newNote]);
  }
}
