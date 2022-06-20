import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BodyRoutingModule } from './body-routing.module';
import { BodyComponent } from './body/body.component';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { AppMaterialModule } from '../shared/app/app-material.module';
import { ListOfTasksComponent } from './list-of-tasks/list-of-tasks.component';
import { ActionsListComponent } from './actions-list/actions-list.component';


@NgModule({
  declarations: [
    BodyComponent,
    ToolbarComponent,
    ListOfTasksComponent,
    ActionsListComponent,
  ],
  imports: [
    CommonModule,
    BodyRoutingModule,
    AppMaterialModule,
  ]
})
export class BodyModule { }
