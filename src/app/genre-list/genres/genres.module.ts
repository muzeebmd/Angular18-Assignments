import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenreListComponent } from '../genre-list.component';
import { SharedModule } from '../../shared/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: GenreListComponent }
];

@NgModule({
  declarations: [GenreListComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class GenresModule { }