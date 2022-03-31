import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-swapi-character',
  templateUrl: './swapi-character.component.html',
  styleUrls: ['./swapi-character.component.css']
})
export class SwapiCharacterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() characterName!:string;
}
