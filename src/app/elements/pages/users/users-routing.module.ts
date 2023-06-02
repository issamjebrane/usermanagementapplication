import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';

const userRoutes: Routes = [
  {path:"users/add",component:AddComponent},
  {path:"users/list",component:ListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})

export class UsersRoutingModule{

}
