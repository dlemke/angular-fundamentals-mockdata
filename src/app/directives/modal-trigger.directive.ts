import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';
import { JQ_TOKEN } from '../providers/jQuery.service';

@Directive({
  selector: '[model-trigger]'
})
export class ModalTriggerDirective implements OnInit {
  @Input('model-trigger') modalId: string;
  private htmlElement: HTMLElement;
  
  constructor(element: ElementRef, @Inject(JQ_TOKEN) private $: any) {
    this.htmlElement = element.nativeElement;
  }

  ngOnInit() {
    this.htmlElement.addEventListener('click', e => {
      this.$(`#${this.modalId}`).modal({});
    })
  }
}
