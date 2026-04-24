import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home-page.component';
import { CategoryPageComponent } from './pages/category/category-page.component';
import { ItemDetailPageComponent } from './pages/detail/item-detail-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'category/:name', component: CategoryPageComponent },
  { path: 'item/:id', component: ItemDetailPageComponent },
  { path: '**', redirectTo: '' }
];
