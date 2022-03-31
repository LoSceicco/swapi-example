import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(
    private httpClient:HttpClient,
  ) { }

  public characters: string[] = [];

  public getCharacters(searchTerm:string) {
    const subscription = this.httpClient.get(`https://swapi.dev/api/people?search=${searchTerm}`)
      .pipe(
        map((result:any) => {
          console.log(result)
          const { results } = result;
          if(!results) {
            return [];
          }
          return results.map((r:any) => r.name);
        })
      )
      .subscribe({
        next: (characters:string[]) => {
          console.log(characters);
          this.characters = characters;
        },
        error: (err) => { alert(err && err.message) },
        complete: () => { subscription.unsubscribe() }
    })
  }
}
