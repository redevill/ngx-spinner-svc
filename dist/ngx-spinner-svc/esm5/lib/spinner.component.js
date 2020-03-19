/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtc3Bpbm5lci1zdmMvIiwic291cmNlcyI6WyJsaWIvc3Bpbm5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBcUIsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVuRDtJQVlFLDBCQUFvQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFNMUMsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUVoQixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQVJXLENBQUM7SUFVdEQsc0JBQ0ksa0NBQUk7Ozs7UUFEUjtZQUVFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN4QixDQUFDOzs7OztRQUVELFVBQVMsR0FBWTtZQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztZQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkMsQ0FBQzs7O09BTEE7Ozs7SUFPRCxtQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQztTQUFFO1FBRS9FLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCxzQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDOztnQkF4Q0YsU0FBUyxTQUFDOztvQkFFVCxRQUFRLEVBQUUsU0FBUztvQkFDbkIsUUFBUSxFQUFFLDBJQUtUO2lCQUVGOzs7O2dCQVpRLGNBQWM7Ozt1QkFnQnBCLEtBQUs7d0JBQ0wsS0FBSzsrQkFDTCxLQUFLOzZCQUlMLE1BQU07dUJBRU4sS0FBSzs7SUFtQlIsdUJBQUM7Q0FBQSxBQXpDRCxJQXlDQztTQTlCWSxnQkFBZ0I7OztJQUczQixnQ0FBc0I7O0lBQ3RCLGlDQUF1Qjs7SUFDdkIsd0NBQThCOzs7OztJQUU5QixxQ0FBMEI7O0lBRTFCLHNDQUEwQzs7Ozs7SUFSOUIsMENBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBPbkluaXQsIE9uRGVzdHJveSwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTcGlubmVyU2VydmljZSB9IGZyb20gJy4vc3Bpbm5lci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdzcGlubmVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2ICpuZ0lmPVwic2hvd1wiPlxuICAgICAgPGltZyAqbmdJZj1cImxvYWRpbmdJbWFnZVwiIFtzcmNdPVwibG9hZGluZ0ltYWdlXCIgLz5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBTcGlubmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNwaW5uZXJTZXJ2aWNlOiBTcGlubmVyU2VydmljZSkge31cblxuICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGdyb3VwOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxvYWRpbmdJbWFnZTogc3RyaW5nO1xuXG4gIHByaXZhdGUgaXNTaG93aW5nID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpIHNob3dDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQElucHV0KClcbiAgZ2V0IHNob3coKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNTaG93aW5nO1xuICB9XG5cbiAgc2V0IHNob3codmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5pc1Nob3dpbmcgPSB2YWw7XG4gICAgdGhpcy5zaG93Q2hhbmdlLmVtaXQodGhpcy5pc1Nob3dpbmcpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm5hbWUpIHsgdGhyb3cgbmV3IEVycm9yKCdTcGlubmVyIG11c3QgaGF2ZSBhIFxcJ25hbWVcXCcgYXR0cmlidXRlLicpOyB9XG5cbiAgICB0aGlzLnNwaW5uZXJTZXJ2aWNlLl9yZWdpc3Rlcih0aGlzKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Bpbm5lclNlcnZpY2UuX3VucmVnaXN0ZXIodGhpcyk7XG4gIH1cbn1cbiJdfQ==