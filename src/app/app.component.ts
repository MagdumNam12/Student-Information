import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Student-Data';
  arr = [
    {
      SName: "Namrata",
      SMobileno: "******",
      SAdress: "Kolhapur"
    },
    {
      SName: "Prachi",
      SMobileno: "******",
      SAdress: "KPune"
    },
    {
      SName: "Shivani",
      SMobileno: "******",
      SAdress: "Kolhapur"
    },
    {
      SName: "Vaishnavi",
      SMobileno: "******",
      SAdress: "Mumbai"
    },
    {
      SName: "purva",
      SMobileno: "******",
      SAdress: "Banglore"
    } 
  ]
}


