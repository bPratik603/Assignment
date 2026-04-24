import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Item } from '../../models/item.model';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-item-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './item-detail-page.component.html',
  styles: []
})
export class ItemDetailPageComponent implements OnInit {
  item$!: Observable<Item | undefined>;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.item$ = this.route.paramMap.pipe(
      switchMap(params => {
        const name = params.get('id') || '';
        return this.dataService.getItemByName(name);
      })
    );
  }
}
