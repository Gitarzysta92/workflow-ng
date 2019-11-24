import { Component, OnInit, TemplateRef, ViewChild, ElementRef } from '@angular/core';

import { UserService } from '../../services/shared-api/shared-api.service';


@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  @ViewChild('tripleColumnGrid', { static: false }) tripleColumnGrid: ElementRef;
  @ViewChild('tripleColumnGrid', { static: false }) singleColumnGrid: ElementRef;

  isUserExists: boolean;

  constructor(
    private readonly userService: UserService,
  ) {}

  ngOnInit() {
    const AuthorizedUser = this.userService.getAsyncUserData();
    AuthorizedUser.subscribe(isExists => this.isUserExists = isExists);
  }
}
