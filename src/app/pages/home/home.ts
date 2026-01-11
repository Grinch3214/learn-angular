import { Component, signal } from '@angular/core';
import { NoteService } from '../../services/note';
import { Note } from '../../models/note.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AppAddNote } from '../../components/add-note/add-note';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, AppAddNote],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  constructor(private noteService: NoteService, private router: Router) {}

  protected notes() {
    return this.noteService.getNotes()();
  }

  navigateToNote(noteId: number): void {
    this.router.navigate(['/note', noteId]);
  }

  showConsole() {
    console.log('Click h1');
  }
}
