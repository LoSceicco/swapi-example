import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, filter } from 'rxjs';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-swapi-form',
  templateUrl: './swapi-form.component.html',
  styleUrls: ['./swapi-form.component.css']
})
export class SwapiFormComponent implements OnInit {

  constructor(
    private swapi:SwapiService
  ) { }

  ngOnInit(): void {
    this.swapiForm.get('characterName')?.valueChanges
      .pipe(
        filter(val => val && val.length > 2),
        debounceTime(1000)
      )
      .subscribe((searchTerm:string) => {
        this.swapi.getCharacters(searchTerm);
      })
  }

  public swapiForm: FormGroup = new FormGroup({
    characterName: new FormControl(),
  })

}
