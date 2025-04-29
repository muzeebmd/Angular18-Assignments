import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit  {
  title = 'property-app';
  allproperties: any = [
    { id: 1, name: 'Villa A', location: 'LA',imageUrl:'https://imperiobanus.com/wp/wp-content/uploads/2018/04/1-1.jpg'},
    { id: 2, name: 'Villa B', location: 'NY' ,imageUrl:'https://img.jamesedition.com/listing_images/2019/12/02/16/05/26/5c27acda-74a5-48ba-9ba7-48ec3fb6c0bd/je/2000xxs.jpg'},
    { id: 3, name: 'Beachfront Estate', location: 'Miami' ,imageUrl:'https://th.bing.com/th/id/R.3e834fc3195054d8be88371419d917e7?rik=pq6Gj%2fxv7UFpXA&riu=http%3a%2f%2fwww.idesignarch.com%2fwp-content%2fuploads%2fBeachfront-Estate-Maui_23.jpg&ehk=4zGh9ZpA5JzpLsN1dRmPs3VNUD1skZ4t3NwLtdrBwTU%3d&risl=&pid=ImgRaw&r=0'},
    { id: 4, name: 'Mountain Retreat', location: 'Colorado',imageUrl:'https://th.bing.com/th/id/OIP.ZplrCc_N6f1E7653jEuDZwHaFj?rs=1&pid=ImgDetMain' },
    { id: 5, name: 'Luxury Penthouse', location: 'Chicago',imageUrl:'https://th.bing.com/th/id/OIP.9_bdgDs-AAL6Dr3xBvIDfwHaEc?rs=1&pid=ImgDetMain'},
    { id: 6, name: 'Modern Loft', location: 'San Francisco',imageUrl:'https://th.bing.com/th/id/R.02e308df635517552ca75f09658c80a5?rik=Kp3%2bfWQD2%2bIFnw&riu=http%3a%2f%2fcdn.home-designing.com%2fwp-content%2fuploads%2f2016%2f05%2fBrick-Loft.jpg&ehk=gUcWS7VGOl2RShNk%2bsqAuhnBrX3l%2fli0wsY3OoUa%2f9U%3d&risl=&pid=ImgRaw&r=0' },
    { id: 7, name: 'Country Mansion', location: 'Texas',imageUrl:'https://th.bing.com/th/id/OIP.Eukz7cclSeUnrlO34zu1fQHaE8?rs=1&pid=ImgDetMain' },
    { id: 8, name: 'City Center Condo', location: 'Boston',imageUrl:'https://th.bing.com/th/id/OIP._vbDWe0ZeF70XxqIb22viwHaEr?rs=1&pid=ImgDetMain' },
    { id: 9, name: 'Desert Oasis', location: 'Arizona',imageUrl:'https://th.bing.com/th/id/OIP.x0oXrytCg25P6t5snZEvUAHaE8?rs=1&pid=ImgDetMain' },
    { id: 10, name: 'Urban Loft', location: 'New York',imageUrl:'https://th.bing.com/th/id/OIP.zDHMv8Q64XBSHsxHvDBspAHaHa?rs=1&pid=ImgDetMain' },
  ];
  
 properties:any;
 ngOnInit(): void {
  this.properties=this.allproperties;
}

  selectProperty(property:any){
    const event=new CustomEvent('property-selected',{detail:property})
    window.dispatchEvent(event);
  }
 
}
