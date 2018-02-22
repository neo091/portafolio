import { Component } from '@angular/core';

import { ProductosService }  from "../../services/productos.service";

@Component({
  selector: 'app-portafolios',
  templateUrl: './portafolios.component.html',
})
export class PortafoliosComponent {

  constructor(public _ps:ProductosService){

  }

}
