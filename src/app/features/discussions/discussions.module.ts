import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscussionThreadComponent } from './components/containers/discussion-thread/discussion-thread.component';

import './discussions.registry';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    DiscussionThreadComponent, 
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    DiscussionThreadComponent
  ]
})
export class DiscussionsModule { }
