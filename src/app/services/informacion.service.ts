import { Injectable } from '@angular/core';
import { Http} from "@angular/http";





@Injectable()
export class InformacionService {
  info:any = {};
  carga:boolean = false;


  constructor(public http:Http) {
    this.http.get("assets/data/info.paginas.json")
    .subscribe(data=>{
        //console.log(data.json());
        this.carga = true;
        this.info = data.json();
      })
  }

}
