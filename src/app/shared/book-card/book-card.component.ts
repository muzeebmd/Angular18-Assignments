import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-card',
  standalone: false,
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css'
})
export class BookCardComponent {
  @Input() book: any;
  ngOnInit() {
    console.log('Book received in card:', this.book);
  }


}
