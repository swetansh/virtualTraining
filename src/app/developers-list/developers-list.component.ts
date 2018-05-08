import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-developers-list',
  templateUrl: './developers-list.component.html',
  styleUrls: ['./developers-list.component.css']
})
export class DevelopersListComponent implements OnInit {

  developers: any[] = [
    { name: 'ABC' },
    { name: 'XYZ' }
  ];

  selectedDevelopers: any[];

  constructor() { }

  ngOnInit() {
  }

}
