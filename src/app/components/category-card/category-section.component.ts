import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Item } from '../../models/item.model';
import { ItemCardComponent } from '../item-card/item-card.component';

@Component({
  selector: 'app-category-section',
  standalone: true,
  imports: [CommonModule, RouterLink, ItemCardComponent],
  templateUrl: './category-section.component.html',
  styles: []
})
export class CategorySectionComponent {
  @Input({ required: true }) category!: string;
  @Input({ required: true }) items: Item[] = [];
}
