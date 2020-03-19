/**
 * @fileoverview added by tsickle
 * Generated from: lib/spinner.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SpinnerService } from './spinner.service';
var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent(spinnerService) {
        this.spinnerService = spinnerService;
        this.isShowing = false;
        this.showChange = new EventEmitter();
    }
    Object.defineProperty(SpinnerComponent.prototype, "show", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isShowing;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this.isShowing = val;
            this.showChange.emit(this.isShowing);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SpinnerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.name) {
            throw new Error('Spinner must have a \'name\' attribute.');
        }
        this.spinnerService._register(this);
    };
    /**
     * @return {?}
     */
    SpinnerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.spinnerService._unregister(this);
    };
    SpinnerComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'spinner',
                    template: "\n    <div *ngIf=\"show\">\n      <img *ngIf=\"loadingImage\" [src]=\"loadingImage\" />\n      <ng-content></ng-content>\n    </div>\n  "
                }] }
    ];
    /** @nocollapse */
    SpinnerComponent.ctorParameters = function () { return [
        { type: SpinnerService }
    ]; };
    SpinnerComponent.propDecorators = {
        name: [{ type: Input }],
        group: [{ type: Input }],
        loadingImage: [{ type: Input }],
        showChange: [{ type: Output }],
        show: [{ type: Input }]
    };
    return SpinnerComponent;
}());
export { SpinnerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zcGlubmVyLyIsInNvdXJjZXMiOlsibGliL3NwaW5uZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFxQixZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRW5EO0lBWUUsMEJBQW9CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQU0xQyxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBRWhCLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBUlcsQ0FBQztJQVV0RCxzQkFDSSxrQ0FBSTs7OztRQURSO1lBRUUsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3hCLENBQUM7Ozs7O1FBRUQsVUFBUyxHQUFZO1lBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2QyxDQUFDOzs7T0FMQTs7OztJQU9ELG1DQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO1NBQUU7UUFFL0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7OztJQUVELHNDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7O2dCQXhDRixTQUFTLFNBQUM7O29CQUVULFFBQVEsRUFBRSxTQUFTO29CQUNuQixRQUFRLEVBQUUsMElBS1Q7aUJBRUY7Ozs7Z0JBWlEsY0FBYzs7O3VCQWdCcEIsS0FBSzt3QkFDTCxLQUFLOytCQUNMLEtBQUs7NkJBSUwsTUFBTTt1QkFFTixLQUFLOztJQW1CUix1QkFBQztDQUFBLEFBekNELElBeUNDO1NBOUJZLGdCQUFnQjs7O0lBRzNCLGdDQUFzQjs7SUFDdEIsaUNBQXVCOztJQUN2Qix3Q0FBOEI7Ozs7O0lBRTlCLHFDQUEwQjs7SUFFMUIsc0NBQTBDOzs7OztJQVI5QiwwQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIE9uSW5pdCwgT25EZXN0cm95LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNwaW5uZXJTZXJ2aWNlIH0gZnJvbSAnLi9zcGlubmVyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ3NwaW5uZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgKm5nSWY9XCJzaG93XCI+XG4gICAgICA8aW1nICpuZ0lmPVwibG9hZGluZ0ltYWdlXCIgW3NyY109XCJsb2FkaW5nSW1hZ2VcIiAvPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFNwaW5uZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3Bpbm5lclNlcnZpY2U6IFNwaW5uZXJTZXJ2aWNlKSB7fVxuXG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgZ3JvdXA6IHN0cmluZztcbiAgQElucHV0KCkgbG9hZGluZ0ltYWdlOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBpc1Nob3dpbmcgPSBmYWxzZTtcblxuICBAT3V0cHV0KCkgc2hvd0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASW5wdXQoKVxuICBnZXQgc2hvdygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc1Nob3dpbmc7XG4gIH1cblxuICBzZXQgc2hvdyh2YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmlzU2hvd2luZyA9IHZhbDtcbiAgICB0aGlzLnNob3dDaGFuZ2UuZW1pdCh0aGlzLmlzU2hvd2luZyk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMubmFtZSkgeyB0aHJvdyBuZXcgRXJyb3IoJ1NwaW5uZXIgbXVzdCBoYXZlIGEgXFwnbmFtZVxcJyBhdHRyaWJ1dGUuJyk7IH1cblxuICAgIHRoaXMuc3Bpbm5lclNlcnZpY2UuX3JlZ2lzdGVyKHRoaXMpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zcGlubmVyU2VydmljZS5fdW5yZWdpc3Rlcih0aGlzKTtcbiAgfVxufVxuIl19