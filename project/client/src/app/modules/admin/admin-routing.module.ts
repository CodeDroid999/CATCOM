import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BloglistComponent } from './components/dashboard/bloglist/bloglist.component';
import { HomeComponent } from './components/dashboard/home/home.component';

const routes: Routes = [
  {
    path: "", component: DashboardComponent, children: [
      { path: "home", component: HomeComponent },
      { path: "bloglist", component: BloglistComponent },
      { path: "", redirectTo: "admin/home", pathMatch: "full" }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
