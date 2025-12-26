import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-note-detail',
  imports: [],
  templateUrl: './note-detail.html',
  styleUrl: './note-detail.scss',
})
export class NoteDetail {
  noteId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.noteId = this.route.snapshot.paramMap.get('id');
  }
}
