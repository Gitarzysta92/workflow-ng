import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscussionThreadComponent } from './components/containers/discussion-thread/discussion-thread.component';

import './discussions.registry';
import { DiscussionWidgetComponent } from './components/containers/discussion-widget/discussion-widget.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    DiscussionThreadComponent, 
    DiscussionWidgetComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    DiscussionThreadComponent
  ],
  entryComponents : [
    DiscussionWidgetComponent
  ]
})
export class DiscussionsModule { }
