import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavigationComponent } from './components/dashboard/navigation/navigation.component';
import { FooterComponent } from './components/dashboard/footer/footer.component';


@NgModule({
  declarations: [
    DashboardComponent,
    NavigationComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
