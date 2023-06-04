import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ListComponent,
    AddComponent
  ],
    imports: [
        CommonModule,
        UsersRoutingModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (http: HttpClient) => new TranslateHttpLoader(http),
                deps: [HttpClient]
            }
        }),
        NgbDropdownModule,
        ReactiveFormsModule
    ]
})
export class UsersModule { }
