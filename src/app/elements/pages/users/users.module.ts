import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { UsersRoutingModule } from './users-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    UsersRoutingModule
  ],
  declarations: [
    AddComponent,
    ListComponent
  ]
})
export class UsersModule { }
