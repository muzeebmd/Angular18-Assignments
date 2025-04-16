import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'books',
    loadChildren: () => import('./book-list/books/books.module').then(m => m.BooksModule)
  },
  {
    path: 'genres',
    loadChildren: () => import('./genre-list/genres/genres.module').then(m => m.GenresModule)
  },
  { path: '', component:HomeComponent }, // 👈 optional landing
  { path: '**', redirectTo: '' } 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
