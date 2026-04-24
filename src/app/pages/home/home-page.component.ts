import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Item } from '../../models/item.model';
import { CategorySectionComponent } from '../../components/category-card/category-section.component';
import { Observable, forkJoin, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CategorySectionComponent],
  templateUrl: './home-page.component.html',
  styles: []
})
export class HomePageComponent implements OnInit {
  categoriesWithItems$!: Observable<{ name: string; items: Item[] }[]>;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.categoriesWithItems$ = this.dataService.getCategories().pipe(
      switchMap(categories => {
        const requests = categories.map(cat => 
          this.dataService.getItemsByCategory(cat).pipe(
            map(items => ({ name: cat, items: items.slice(0, 4) }))
          )
        );
        return forkJoin(requests);
      })
    );
  }
}
