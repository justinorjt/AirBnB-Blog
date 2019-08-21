import { Component,Input, Output, ViewEncapsulation, EventEmitter, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {Pipe} from '@angular/core';
import {Moment} from 'moment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

	// The time of the comment as a timestamp
  @Input() time;
  // The user object of the user who created the comment
  @Input() user;
  // The comment content
  @Input() content;
  @Input() editComment;

  // If a comment was edited this event will be emitted
  @Output() commentEdited = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onContentSaved(content) {
    this.commentEdited.next(content);
  }

}