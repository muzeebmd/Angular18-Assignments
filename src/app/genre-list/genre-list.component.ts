import { Component } from '@angular/core';
import { BookService } from '../coreModule/book.service';

@Component({
  selector: 'app-genre-list',
  standalone: false,
  templateUrl: './genre-list.component.html',
  styleUrl: './genre-list.component.css'
})
export class GenreListComponent {
  books: any[] = [];
  filteredBooks: any[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe((data: any[]) => {
      this.books = data;
      this.filteredBooks = data; // Initially display all books
    });
  }

  // Filter books by genre
  filterBooks(genre: string) {
    if (genre === 'all') {
      this.filteredBooks = this.books;
    } else {
      this.filteredBooks = this.books.filter(book => book.genre.toLowerCase() === genre.toLowerCase());
    }
  }
}
