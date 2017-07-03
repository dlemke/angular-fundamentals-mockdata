import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent {
  public iconColor: string;
  @Input() set voted(val) { this.iconColor = val ? 'red' : 'white'; }
  @Input() count: number;
  @Output() vote = new EventEmitter();

  onClick() {
    this.vote.emit({});
  }
}
