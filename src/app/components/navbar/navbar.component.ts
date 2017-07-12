import { Component } from '@angular/core';
import { AuthenticationService } from '../../providers/authentication.service';
import { EventService } from '../../providers/event.service';
import { ISessionModel } from '../../models/ISessionModel';
import { ModalComponent } from '../modal/modal.component';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  searchTerm: string = '';
  foundSessions: ISessionModel[];
  dialogRef: MdDialogRef<any>;

  constructor(private authService: AuthenticationService, private eventService: EventService, private dialog: MdDialog) { }

  openDialog() {
    this.dialogRef = this.dialog.open(ModalComponent, {
      height: '400px',
      width: '600px',
      data: this.foundSessions
    });
  }

  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm)
      .subscribe(sessions => {
        this.foundSessions = sessions;
        this.openDialog();
      });
  }
}
