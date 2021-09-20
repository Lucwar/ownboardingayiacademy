import { identifierModuleUrl } from '@angular/compiler';
import { Attribute, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  selected = "button0";

  buttonSelect(aux: any){
    for(let i = 0; i < 4; i++){
      document.getElementsByClassName('aux')[i].classList.remove('selected');
    }
    document.getElementsByClassName(aux)[0].classList.add('selected');
    //Recorro el array de estados y los pongo todos en falso
    this.selected = aux;
  }
}
