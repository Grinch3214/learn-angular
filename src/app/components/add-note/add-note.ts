import { Component, signal } from '@angular/core';
import { NoteService } from '../../services/note';
import { Note } from '../../models/note.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-note',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-note.html',
  styleUrl: './add-note.scss',
})
export class AppAddNote {
  constructor(private noteService: NoteService) {}

  protected submitted = false;

  protected notes() {
    return this.noteService.getNotes()();
  }

  protected newNote = signal<Partial<Note>>({
    title: '',
    content: '',
  });

  protected addNote(form: any) {
    this.submitted = true;

    if (form.invalid) return;

    const noteData = this.newNote();

    if (!noteData.title || !noteData.content) return;

    this.noteService.addNote(noteData.title, noteData.content);

    this.newNote.set({
      title: '',
      content: '',
    });

    form.resetForm();
    this.submitted = false;
  }
}
