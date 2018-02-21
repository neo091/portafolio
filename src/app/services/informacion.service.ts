import { Injectable } from '@angular/core';
import { Http} from "@angular/http";





@Injectable()
export class InformacionService {
  info:any = {};
  equipo:any[] = [];
  carga:boolean = false;
  carga_sobre_nosotros_is:boolean = false;


  constructor(public http:Http) {
    this.carga_info();
    this.carga_sobre_nosotros();
  }

  public carga_info(){

    this.http.get("assets/data/info.paginas.json")
    .subscribe(data=>{
        //console.log(data.json());
        this.carga = true;
        this.info = data.json();
      })

  }

  public carga_sobre_nosotros(){
    this.http.get("https://appportafolios.firebaseio.com/equipo.json")
    .subscribe(data=>{
        console.log(data.json());
        this.carga_sobre_nosotros_is = true;
        this.equipo = data.json();
      })
  }




}
