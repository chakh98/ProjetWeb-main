import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { CreatePublicationComponent } from "../components/create-publication/create-publication.component";

@NgModule({
  declarations: [],
  imports: [CommonModule, DashboardComponent ],
  exports: [DashboardComponent]
})
export class DashboardModule {}
