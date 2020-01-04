import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { TemplateGridService, GridViews } from '@workflow/grid';
import { UserService } from '../../../../core/services/user/user.service';


@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {
  menuItems: any = [];

  constructor(
    private location: Location,
    private readonly userService: UserService,
  ) {}

  ngOnInit() {
  }

  authenticateUser() {
    this.userService.setAsyncUserData(true);
    this.location.back();
  
  }


}

