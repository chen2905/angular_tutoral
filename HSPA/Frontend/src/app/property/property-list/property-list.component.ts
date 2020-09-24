import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<any> =[
  {
    "Id":1,
    "Name": "Chen House",
    "Type":"House",
    "Price":120000
  },
  {
    "Id":2,
    "Name": "Bruce House",
    "Type":"Apartment",
    "Price":54000
  },
  {
    "Id":3,
    "Name": "Amanda House",
    "Type":"House",
    "Price":37000
  },
  {
    "Id":4,
    "Name": "Jonn House",
    "Type":"House",
    "Price":150000
  },
  {
    "Id":5,
    "Name": "Nikko House",
    "Type":"House",
    "Price":56000
  },
  {
    "Id":6,
    "Name": "Manoj House",
    "Type":"House",
    "Price":84000
  },
  {
    "Id":6,
    "Name": "Krishna House",
    "Type":"House",
    "Price":75000
  }
]

  constructor() { }

  ngOnInit(): void {
  }

}
