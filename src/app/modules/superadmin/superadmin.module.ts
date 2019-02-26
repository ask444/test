import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperadminComponent } from './superadmin.component';
import { TooltipsComponent } from '../../tooltips/tooltips.component';
import { RouterModule, Routes } from "@angular/router";
import{SharedModule} from '../shared.module';

const routes: Routes = [
  {
    path: '',
    component: SuperadminComponent,
    children: [
      {
        path: '',
        component: TooltipsComponent
      }
    ]
  }];



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SuperadminComponent]
})
export class SuperadminModule { }
