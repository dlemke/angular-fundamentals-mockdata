///<reference path="../../../../node_modules/moment/moment.d.ts" />
import { Component, OnInit } from '@angular/core';
import { EventService } from '../../providers/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEventModel } from '../../models/IEventModel';
import * as moment from 'moment';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  now: any;
  events: IEventModel;

  constructor(private eventService: EventService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.now = moment().format('LLLL');
    this.events = this.route.snapshot.data['events'];
  }
}
