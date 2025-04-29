import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';


import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit  {
  title = 'agent-app';
  property: any| null = null;
  agents: any = [
    { 
      id: 1, 
      name: 'James Johnson', 
      propertyId: 1, 
      email: 'james.johnson@example.com', 
      phone: '+1 555-0101', 
      experience: '5 years', 
      location: 'Los Angeles'
    },
    { 
      id: 2, 
      name: 'Maria Garcia', 
      propertyId: 2, 
      email: 'maria.garcia@example.com', 
      phone: '+1 555-0102', 
      experience: '7 years', 
      location: 'New York'
    },
    { 
      id: 3, 
      name: 'David Smith', 
      propertyId: 3, 
      email: 'david.smith@example.com', 
      phone: '+1 555-0103', 
      experience: '4 years', 
      location: 'San Francisco'
    },
    { 
      id: 4, 
      name: 'Linda Brown', 
      propertyId: 4, 
      email: 'linda.brown@example.com', 
      phone: '+1 555-0104', 
      experience: '6 years', 
      location: 'Chicago'
    },
    { 
      id: 5, 
      name: 'Michael Lee', 
      propertyId: 5, 
      email: 'michael.lee@example.com', 
      phone: '+1 555-0105', 
      experience: '8 years', 
      location: 'Miami'
    },
    { 
      id: 6, 
      name: 'Emily Martinez', 
      propertyId: 6, 
      email: 'emily.martinez@example.com', 
      phone: '+1 555-0106', 
      experience: '3 years', 
      location: 'Dallas'
    },
    { 
      id: 7, 
      name: 'Christopher Taylor', 
      propertyId: 7, 
      email: 'christopher.taylor@example.com', 
      phone: '+1 555-0107', 
      experience: '5 years', 
      location: 'Boston'
    },
    { 
      id: 8, 
      name: 'Sophia Wilson', 
      propertyId: 8, 
      email: 'sophia.wilson@example.com', 
      phone: '+1 555-0108', 
      experience: '10 years', 
      location: 'Austin'
    },
    { 
      id: 9, 
      name: 'William Anderson', 
      propertyId: 9, 
      email: 'william.anderson@example.com', 
      phone: '+1 555-0109', 
      experience: '12 years', 
      location: 'Denver'
    },
    { 
      id: 10, 
      name: 'Olivia Thomas', 
      propertyId: 10, 
      email: 'olivia.thomas@example.com', 
      phone: '+1 555-0110', 
      experience: '9 years', 
      location: 'Seattle'
    }
  ]; 
  agent!:any[];
agentName:any;
agentEmail:any;
agentExp:any;
agentLocation:any;
 ngOnInit(): void {
   window.addEventListener('property-selected',(event:any)=>{
    this.property=event.detail;
this.agent = this.agents.filter((ag:any) => ag.propertyId === this.property?.id);
this.agentName=this.agent[0].name;
this.agentEmail=this.agent[0].email;
this.agentExp=this.agent[0].experience;
this.agentLocation=this.agent[0].location;
    })

   }
  }

