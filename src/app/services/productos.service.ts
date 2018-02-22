import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class ProductosService {

  productos:any[] = [];
  productos_filtro:any[] = [];
  cargando:boolean = true;

  constructor( private http:Http ) {
    this.cargar_productos();
  }

  public buscar_producto( termino:string ){
    // console.log("Buscando Producto...");
    // console.log( this.productos.length );

    if (this.productos.length === 0) {
        this.cargar_productos().then(()=>{
          this.filtrar_productos(termino);
        });
    }else{
      this.filtrar_productos(termino);
    }


  }

  private filtrar_productos(termino:string){

    this.productos_filtro = [];
    termino = termino.toLowerCase();


    this.productos.forEach( prod=>{

      if (prod.categoria.indexOf( termino ) >= 0 || prod.titulo.toLowerCase().indexOf( termino ) >= 0) {
        this.productos_filtro.push( prod );
        // console.log(prod);
      }
      // console.log(prod);
    });
  }

  public cargar_producto( id:string ){

    return this.http.get("https://appportafolios.firebaseio.com/productos/"+ id +".json");
  }

  public cargar_productos(){
    this.cargando = true;

    let promesa = new Promise((resolve, reject)=>{

      this.http.get("https://appportafolios.firebaseio.com/productos_idx.json")
      .subscribe( res=>{

        //console.log(res.json());

          this.productos = res.json();

          this.cargando = false;

          resolve();
      });
    });

    return promesa;
  }

}
