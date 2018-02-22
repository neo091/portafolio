import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProductosService } from "../../services/productos.service";

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
})
export class BuscarComponent {

  termino:string = undefined;

  constructor(private route:ActivatedRoute,
              private _ps:ProductosService) {
    route.params.subscribe(
      parametros=>{
        this.termino = parametros['termino'];
        // console.log(this.termino);
        _ps.buscar_producto( this.termino );

      })

  }

}
