import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscussionThreadComponent } from './components/containers/discussion-thread/discussion-thread.component';

import './discussions.registry';
import { DiscussionWidgetComponent } from './components/containers/discussion-widget/discussion-widget.component';

@NgModule({
  declarations: [DiscussionThreadComponent, DiscussionWidgetComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    DiscussionThreadComponent
  ],
  entryComponents : [
    DiscussionWidgetComponent
  ]
})
export class DiscussionsModule { }
