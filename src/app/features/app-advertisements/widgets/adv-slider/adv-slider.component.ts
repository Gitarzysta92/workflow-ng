import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { TemplateGridService, GridViews } from '@workflow/grid';
import { UserService } from '../../../../core/services/user/user.service';


@Component({
  selector: 'adv-slider',
  templateUrl: './adv-slider.component.html',
  styleUrls: ['./adv-slider.component.css']
})

export class AdvSliderComponent implements OnInit {
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

