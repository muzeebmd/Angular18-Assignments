import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from '../book-list.component';
import { SharedModule } from '../../shared/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: BookListComponent }
];

@NgModule({
  declarations: [BookListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
],
  exports: [BookListComponent]
})
export class BooksModule { }
