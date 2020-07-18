import { Component, OnInit, Input } from '@angular/core';
import { DashboardTileButton } from '../../../../features/dashboard/models/injection-spots';
import { DynamicComponent } from 'src/app/core/services/dynamic-components-registry/dynamic-component.decorator';


const discussionModel = {
  numberOfComments: 1,
  comments: []
}


@Component({
  selector: 'app-discussion-widget',
  templateUrl: './discussion-widget.component.html',
  styleUrls: ['./discussion-widget.component.scss']
})
@DynamicComponent()
export class DiscussionWidgetComponent implements OnInit, DashboardTileButton  {

  @Input() discussionId: number;
  @Input() activityId: number;
  @Input() authorId: number;

  public commentsNumber: string = '';
  public isHovered: boolean = true;

  public newComment: string = '';

  constructor() { }

  ngOnInit() {



    this.commentsNumber = `${discussionModel.numberOfComments}`;
  }

}
