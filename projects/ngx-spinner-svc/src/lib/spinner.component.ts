import { Component, Input, Output, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { SpinnerService } from './spinner.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'spinner',
  template: `
    <div *ngIf="show">
      <img *ngIf="loadingImage" [src]="loadingImage" />
      <ng-content></ng-content>
    </div>
  `,
  styles: []
})
export class SpinnerComponent implements OnInit, OnDestroy {
  constructor(private spinnerService: SpinnerService) {
    this.name = '';
    this.group = '';
    this.loadingImage = '';
  }

  @Input() public name: string;
  @Input() public group: string;
  @Input() public loadingImage: string;

  private isShowing = false;

  @Output() showChange = new EventEmitter();

  @Input()
  get show(): boolean {
    return this.isShowing;
  }

  set show(val: boolean) {
    this.isShowing = val;
    this.showChange.emit(this.isShowing);
  }

  ngOnInit(): void {
    if (!this.name) { throw new Error('Spinner must have a \'name\' attribute.'); }

    this.spinnerService._register(this);
  }

  ngOnDestroy(): void {
    this.spinnerService._unregister(this);
  }
}
