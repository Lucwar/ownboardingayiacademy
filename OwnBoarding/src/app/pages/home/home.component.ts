import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   
  //Boton seleccionado por defecto
  selected = "button0";

  buttonSelect(aux: any){
    //Saco la clase "selected" de todos los li
    for(let i = 0; i < 4; i++){
      document.getElementsByTagName('li')[i].classList.remove('selected');
    }
    //Agrego la clase al seleccionado
    document.getElementsByClassName(aux)[0].classList.add('selected');
    //Asigno el valor al seleccionado
    this.selected = aux;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
