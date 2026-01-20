import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MoviesService } from '../../services/movies';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movies',
  imports: [CommonModule, FormsModule],
  templateUrl: './movies.html',
  styleUrl: './movies.scss',
})
export class Movies {
  constructor(private movieService: MoviesService) {}

  searchTitle = signal('');
  movies = signal<any[]>([]);
  errorMessage = signal('');

  search() {
    const title = this.searchTitle();
    if (!title.trim()) return;

    this.movieService.searchMovies(title).subscribe({
      next: (response) => {
        if (response.Search) {
          console.log(response.Search);
          this.movies.set(response.Search);
          this.errorMessage.set('');
        } else {
          this.movies.set([]);
          this.errorMessage.set(response.Error || 'No results');
        }
      },
      error: () => {
        this.errorMessage.set('Error fetching movies');
        this.movies.set([]);
      },
    });
  }
}
