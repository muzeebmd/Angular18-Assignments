import { loadRemoteModule } from '@angular-architects/module-federation';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule,  } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'realty-host';
  agentComponent:any;
  propertyComponent:any;
  async ngOnInit() {
    const agent = await loadRemoteModule({ //method by module-federation returns a promise
      type: 'module',
      remoteEntry: 'http://localhost:5000/remoteEntry.js',
      exposedModule: './Component',
    });
    this.agentComponent = agent.AppComponent; //initializing AppComponent
 
    const property = await loadRemoteModule({ //method by module-federation returns a promise
      type: 'module',
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      exposedModule: './Component',
    });
    this.propertyComponent = property.AppComponent;

  }
}
