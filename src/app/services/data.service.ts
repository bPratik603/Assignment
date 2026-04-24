import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, shareReplay } from 'rxjs';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataUrl = '/data/data.json';
  private items$: Observable<Item[]>;

  constructor(private http: HttpClient) {
    this.items$ = this.http.get<Item[]>(this.dataUrl).pipe(
      shareReplay(1)
    );
  }

  getItems(): Observable<Item[]> {
    return this.items$;
  }

  getCategories(): Observable<string[]> {
    return this.items$.pipe(
      map(items => [...new Set(items.map(item => item.category))])
    );
  }

  getItemsByCategory(category: string): Observable<Item[]> {
    return this.items$.pipe(
      map(items => items.filter(item => item.category.toLowerCase() === category.toLowerCase()))
    );
  }

  getItemByName(name: string): Observable<Item | undefined> {
    return this.items$.pipe(
      map(items => items.find(item => item.itemname.toLowerCase() === name.toLowerCase()))
    );
  }
}
