import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css'],
  imports:[CommonModule]
})
export class ObservablesComponent implements OnInit {

  messages: string[] = [];

  ngOnInit(): void {
    const fruitObservable = new Observable<string>((observer) => {
      setTimeout(() => observer.next('🍎 Apple'), 1000);
      setTimeout(() => observer.next('🍌 Banana'), 2000);
      setTimeout(() => observer.next('🍊 Orange'), 3000);
      setTimeout(() => observer.complete(), 4000);

      // Optional: trigger error at any step
      setTimeout(() => observer.error('Something went wrong!'), 2500);
      setTimeout(() => observer.complete(), 4000);
    });

    fruitObservable.subscribe({
      next: (val) => this.messages.push(`Next: ${val}`),
      error: (err) => this.messages.push(`Error: ${err}`),
      complete: () => this.messages.push('✅ Stream Completed')
    });
  }
}
