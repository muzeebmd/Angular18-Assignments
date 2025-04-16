import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HoverEffectDirective } from '../hover-effect.directive';

@Component({
  selector: 'app-directives',
  imports: [RouterOutlet, RouterLink, HoverEffectDirective],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  
}
