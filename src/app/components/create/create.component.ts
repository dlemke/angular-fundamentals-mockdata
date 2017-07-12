import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../../providers/event.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  isDirty: boolean = true;

  constructor(private router: Router, private eventService: EventService) { }

  saveEvent(formValues) {
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(['list']);
  }

  cancel() {
    this.router.navigate(['list']);
  }
}
