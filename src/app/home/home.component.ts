import { Component, OnInit } from '@angular/core';
import { SuggestedProduct } from '../models/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  suggestedProducts: SuggestedProduct[] = [
   
    {
      banerimage: 'Baner/Baner_Laptop.jpeg',
      category: {
        id: 1,
        category: 'electronics',
        subCategory: 'laptops',
      },
    },
    {
      banerimage: 'Baner/Baner_Chair.jpg',
      category: {
        id: 1,
        category: 'furniture',
        subCategory: 'chairs',
      },
    },
    {
      banerimage: 'Baner/Baner_Mobile.jpg',
      category: {
        id: 0,
        category: 'electronics',
        subCategory: 'mobiles',
      },
    },

 
    {
      banerimage: 'Baner/Baner_Table.png',
      category: {
        id: 1,
        category: 'furniture',
        subCategory: 'Tables',
      },
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
