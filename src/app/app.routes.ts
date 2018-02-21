import { RouterModule, Routes } from '@angular/router';

import {
  AboutComponent,
  PortafoliosComponent,
  ProductoComponent,
  BuscarComponent
} from './components/index.paginas';


const app_routes: Routes = [
  { path: 'home', component: PortafoliosComponent },
  { path: 'about', component: AboutComponent },
  { path: 'producto/:id', component: ProductoComponent },
  { path: 'buscar/:termino', component: BuscarComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes, {useHash:true});
