import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';

@Component({
  selector: 'app-users-account',
  templateUrl: './users-account.component.html',
  styleUrls: ['./users-account.component.css']
})

export class UsersAccountComponent implements OnInit {
  userEmail;
  userPassword;

  constructor() { }

  ngOnInit() {
  }

}
