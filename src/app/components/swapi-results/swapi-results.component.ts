import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-swapi-results',
  templateUrl: './swapi-results.component.html',
  styleUrls: ['./swapi-results.component.css']
})
export class SwapiResultsComponent implements OnInit {

  constructor(
    public swapi:SwapiService,
  ) { }

  ngOnInit(): void {
  }

}
