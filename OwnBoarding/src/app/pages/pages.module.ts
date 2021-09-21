import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuiensomosComponent } from './quiensomos/quiensomos.component';
import { QuehacemosComponent } from './quehacemos/quehacemos.component';
import { PorquehacemosComponent } from './porquehacemos/porquehacemos.component';
import { AppRoutingModule } from '../app-routing.module';




@NgModule({
  declarations: [
    QuiensomosComponent,
    QuehacemosComponent,
    PorquehacemosComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[QuiensomosComponent, QuehacemosComponent, PorquehacemosComponent]
})
export class PagesModule { }
