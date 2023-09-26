import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPage} from "./layout/login/login.component";
import {P404Component} from "./layout/error/404.component";
import {MyCounterComponent} from "./layout/identifiComponent/my-counter.component";
import {NzDemoLayoutCustomTriggerComponent} from "./layout/SidebarLayout/layoutlogged.component";
import {SourceManagementComponent} from "./layout/sourceManagement/sourceManagement.component";
import {VersionManagementComponent} from "./layout/versionManagement/versionManagement.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'welcome', component: MyCounterComponent },
  { path: '', component: NzDemoLayoutCustomTriggerComponent, children: [
      {
        path: 'dau-hieu-nhan-dang',
        component: MyCounterComponent
      },
      {
        path: 'quan-ly-nguon-cap',
        component: SourceManagementComponent
      },
      {
        path: 'quan-ly-phien-ban',
        component: VersionManagementComponent
      },
    ] },
  { path: 'login', component: LoginPage },
  { path: '**', component: P404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
