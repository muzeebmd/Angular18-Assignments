import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from '../book.service';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [BookService, provideClientHydration(withEventReplay())]
})
export class CoreModule { }
