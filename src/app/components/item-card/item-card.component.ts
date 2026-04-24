import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './item-card.component.html',
  styles: []
})
export class ItemCardComponent {
  @Input({ required: true }) item!: Item;
}
