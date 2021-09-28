import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuiensomosComponent } from './quiensomos/quiensomos.component';
import { QuehacemosComponent } from './quehacemos/quehacemos.component';
import { PorquehacemosComponent } from './porquehacemos/porquehacemos.component';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from './home/home.component';




@NgModule({
  declarations: [
    QuiensomosComponent,
    QuehacemosComponent,
    PorquehacemosComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[QuiensomosComponent, QuehacemosComponent, PorquehacemosComponent, HomeComponent]
})
export class PagesModule { }
