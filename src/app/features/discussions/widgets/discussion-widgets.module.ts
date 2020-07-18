import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscussionWidgetComponent } from './discussion-widget/discussion-widget.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    DiscussionWidgetComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    DiscussionWidgetComponent
  ],
  entryComponents : [
    DiscussionWidgetComponent
  ]
})
export class DiscussionWidgetModule { }
