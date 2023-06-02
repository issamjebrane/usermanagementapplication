import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { HttpUsersListResponse, users } from 'src/app/types/users.types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  users: users[] = [];
  constructor(private usersService:UsersService){}

  ngOnInit(): void {
    this.usersService.getUser(1).subscribe(
      (response : HttpUsersListResponse)=>{
        this.users = response.data;
      }
    )
  }
}

