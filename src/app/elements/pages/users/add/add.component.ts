import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms'
import {ActivatedRoute} from "@angular/router";
import { UsersService } from 'src/app/services/users.service';
import {UserType} from "../../../../types/users.types";
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  public formData!:FormGroup;
  totalPages:number=1;
  user!: UserType;
constructor(private route:ActivatedRoute,private usersService : UsersService) {
}
ngOnInit(): void {
    // this.formData= new FormGroup({
    //   email: new FormControl("",Validators.compose(
    //     [
    //       Validators.required,
    //       Validators.email
    //     ]
    //   )),
    //   password : new FormControl("",Validators.compose([
    //     Validators.required,
    //     Validators.pattern(/^[a-zA-Z]\w{3,14}$/)
    //   ]))
    // })
    this.route.params.subscribe(params=>{
      this.totalPages=params['pages'];
    })
    this.formData=new FormGroup({
        first_name:new FormControl("",Validators.compose([
          Validators.required
        ])),
        last_name:new FormControl("",Validators.compose([
          Validators.required
        ])),
        email:new FormControl("",Validators.compose([
          Validators.required,
          Validators.email
        ]))
    });
}

  onClickSubmit(){
    console.log(this.formData.value)
    // this.usersService.addUser(this.totalPages,this.user);
  }
}
