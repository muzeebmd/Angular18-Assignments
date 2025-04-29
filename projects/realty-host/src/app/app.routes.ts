import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
export const routes: Routes = [
    {
        path: 'agent',
        loadComponent: () =>
            loadRemoteModule({
                type: 'module',
                remoteEntry: 'http://localhost:5000/remoteEntry.js',
                exposedModule: './Component',
            }).then(m => m.AppComponent),
    },
   

    {
        path: 'property',
        loadComponent: () =>
            loadRemoteModule({
                type: 'module',
                remoteEntry: 'http://localhost:4202/remoteEntry.js',
                exposedModule: './Component',
            }).then(m => m.AppComponent),
    }

];
