/**
 * @fileoverview added by tsickle
 * Generated from: lib/spinner.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SpinnerService } from './spinner.service';
export class SpinnerComponent {
    /**
     * @param {?} spinnerService
     */
    constructor(spinnerService) {
        this.spinnerService = spinnerService;
        this.isShowing = false;
        this.showChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get show() {
        return this.isShowing;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set show(val) {
        this.isShowing = val;
        this.showChange.emit(this.isShowing);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.name) {
            throw new Error('Spinner must have a \'name\' attribute.');
        }
        this.spinnerService._register(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.spinnerService._unregister(this);
    }
}
SpinnerComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'spinner',
                template: `
    <div *ngIf="show">
      <img *ngIf="loadingImage" [src]="loadingImage" />
      <ng-content></ng-content>
    </div>
  `
            }] }
];
/** @nocollapse */
SpinnerComponent.ctorParameters = () => [
    { type: SpinnerService }
];
SpinnerComponent.propDecorators = {
    name: [{ type: Input }],
    group: [{ type: Input }],
    loadingImage: [{ type: Input }],
    showChange: [{ type: Output }],
    show: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SpinnerComponent.prototype.name;
    /** @type {?} */
    SpinnerComponent.prototype.group;
    /** @type {?} */
    SpinnerComponent.prototype.loadingImage;
    /**
     * @type {?}
     * @private
     */
    SpinnerComponent.prototype.isShowing;
    /** @type {?} */
    SpinnerComponent.prototype.showChange;
    /**
     * @type {?}
     * @private
     */
    SpinnerComponent.prototype.spinnerService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zcGlubmVyLyIsInNvdXJjZXMiOlsibGliL3NwaW5uZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFxQixZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBYW5ELE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFDM0IsWUFBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBTTFDLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFaEIsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFSVyxDQUFDOzs7O0lBVXRELElBQ0ksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDOzs7OztJQUVELElBQUksSUFBSSxDQUFDLEdBQVk7UUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7U0FBRTtRQUUvRSxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7OztZQXhDRixTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSxTQUFTO2dCQUNuQixRQUFRLEVBQUU7Ozs7O0dBS1Q7YUFFRjs7OztZQVpRLGNBQWM7OzttQkFnQnBCLEtBQUs7b0JBQ0wsS0FBSzsyQkFDTCxLQUFLO3lCQUlMLE1BQU07bUJBRU4sS0FBSzs7OztJQVJOLGdDQUFzQjs7SUFDdEIsaUNBQXVCOztJQUN2Qix3Q0FBOEI7Ozs7O0lBRTlCLHFDQUEwQjs7SUFFMUIsc0NBQTBDOzs7OztJQVI5QiwwQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIE9uSW5pdCwgT25EZXN0cm95LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNwaW5uZXJTZXJ2aWNlIH0gZnJvbSAnLi9zcGlubmVyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ3NwaW5uZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgKm5nSWY9XCJzaG93XCI+XG4gICAgICA8aW1nICpuZ0lmPVwibG9hZGluZ0ltYWdlXCIgW3NyY109XCJsb2FkaW5nSW1hZ2VcIiAvPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFNwaW5uZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3Bpbm5lclNlcnZpY2U6IFNwaW5uZXJTZXJ2aWNlKSB7fVxuXG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgZ3JvdXA6IHN0cmluZztcbiAgQElucHV0KCkgbG9hZGluZ0ltYWdlOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBpc1Nob3dpbmcgPSBmYWxzZTtcblxuICBAT3V0cHV0KCkgc2hvd0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASW5wdXQoKVxuICBnZXQgc2hvdygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc1Nob3dpbmc7XG4gIH1cblxuICBzZXQgc2hvdyh2YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmlzU2hvd2luZyA9IHZhbDtcbiAgICB0aGlzLnNob3dDaGFuZ2UuZW1pdCh0aGlzLmlzU2hvd2luZyk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMubmFtZSkgeyB0aHJvdyBuZXcgRXJyb3IoJ1NwaW5uZXIgbXVzdCBoYXZlIGEgXFwnbmFtZVxcJyBhdHRyaWJ1dGUuJyk7IH1cblxuICAgIHRoaXMuc3Bpbm5lclNlcnZpY2UuX3JlZ2lzdGVyKHRoaXMpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zcGlubmVyU2VydmljZS5fdW5yZWdpc3Rlcih0aGlzKTtcbiAgfVxufVxuIl19