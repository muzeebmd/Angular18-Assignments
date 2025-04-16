import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { AwardsComponent } from './component/awards/awards.component';
import { StatsComponent } from './component/stats/stats.component';

import { DatabindingComponent } from './databinding/databinding.component';
import { ComponentCommunicationComponent } from './component-communication/component-communication.component';
import { ComponentComponent } from './component/component.component';
import { FormsComponent } from './forms/forms.component';
import { TemplateformComponent } from './forms/templateform/templateform.component';
import { ReactiveformComponent } from './forms/reactiveform/reactiveform.component';
import { ApiCommunicationComponent } from './api-communication/api-communication.component';
import { StudentComponent } from './student-management-app/student-management-app.component';
import { DirectivesComponent } from './directives/directives.component';
import { StructuralComponent } from './directives/structural/structural.component';
import { AttributeComponent } from './directives/attribute/attribute.component';

import { UserDashboardComponent } from './Pipes/user-dashboard/user-dashboard.component';
import { ObservablesComponent } from './observables/observables.component';

export const routes: Routes = [
    //Components
    {
        path: "components",
        component: ComponentComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent,

            },
            {
                path: 'about',
                component: AboutComponent
            },
            {
                path: 'awards',
                component: AwardsComponent
            },
            {
                path: 'stats',
                component: StatsComponent,
            }]
    },
    //DataBinding
    {
        path: "databinding",
        component: DatabindingComponent
    },
    //component communication
    {
        path: "communication",
        component: ComponentCommunicationComponent,

    },
    //Forms
    {
        path: 'forms', component: FormsComponent,
        children: [
            { path: 'template', component: TemplateformComponent },
            { path: 'reactive', component: ReactiveformComponent },
        ]
    },
    //Api-Communication
    {
        path: 'Api-Communication', component: ApiCommunicationComponent,
    },
    //HTTP-Calls
    {
        path: 'Http-API', component: StudentComponent,
    },
    //Pipes
    {
        path: 'pipes', component: UserDashboardComponent,
    },
    //Directives
    {
        path: 'directives', component: DirectivesComponent,
        children: [
            { path: 'structural', component: StructuralComponent },
            { path: 'attribute', component: AttributeComponent },
        ]
    },
    //Observables
    {
        path: 'observables', component: ObservablesComponent,
    }
];

