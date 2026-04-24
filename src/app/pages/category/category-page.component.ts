import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Item } from '../../models/item.model';
import { ItemCardComponent } from '../../components/item-card/item-card.component';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, RouterLink, ItemCardComponent],
  templateUrl: './category-page.component.html',
  styles: []
})
export class CategoryPageComponent implements OnInit {
  categoryName: string = '';
  items$!: Observable<Item[]>;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.items$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.categoryName = params.get('name') || '';
        return this.dataService.getItemsByCategory(this.categoryName);
      })
    );
  }
}
