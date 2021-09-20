import { identifierModuleUrl } from '@angular/compiler';
import { Attribute, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
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
}
