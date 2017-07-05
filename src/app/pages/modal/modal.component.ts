import { Component, Inject } from '@angular/core';
import { MD_DIALOG_DATA } from '@angular/material';
import { MdDialog } from '@angular/material';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  constructor( @Inject(MD_DIALOG_DATA) public foundSessions: any, private dialog: MdDialog) { }

  closeModal() {
    this.dialog.closeAll();
  }
}