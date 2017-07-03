import { Component, Input, ViewChild, ElementRef, Inject } from '@angular/core';
import { JQ_TOKEN } from '../../providers/jQuery.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() title: string;
  @Input() elementId: string;
  @Input() closeOnBodyClick: string;
  @ViewChild('modalcontainer') containerElement: ElementRef;

  constructor( @Inject(JQ_TOKEN) private $: any) { }

  closeModal() {
    if (this.closeOnBodyClick.toLocaleLowerCase() === 'true') {
      this.$(this.containerElement.nativeElement).modal('hide');
    }
  }
}
