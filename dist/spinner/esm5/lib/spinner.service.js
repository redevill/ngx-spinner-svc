/**
 * @fileoverview added by tsickle
 * Generated from: lib/spinner.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var SpinnerService = /** @class */ (function () {
    function SpinnerService() {
        this.spinnerCache = new Set();
    }
    /**
     * @param {?} spinner
     * @return {?}
     */
    SpinnerService.prototype._register = /**
     * @param {?} spinner
     * @return {?}
     */
    function (spinner) {
        this.spinnerCache.add(spinner);
    };
    /**
     * @param {?} spinnerToRemove
     * @return {?}
     */
    SpinnerService.prototype._unregister = /**
     * @param {?} spinnerToRemove
     * @return {?}
     */
    function (spinnerToRemove) {
        var _this = this;
        this.spinnerCache.forEach((/**
         * @param {?} spinner
         * @return {?}
         */
        function (spinner) {
            if (spinner === spinnerToRemove) {
                _this.spinnerCache.delete(spinner);
            }
        }));
    };
    /**
     * @param {?} spinnerGroup
     * @return {?}
     */
    SpinnerService.prototype._unregisterGroup = /**
     * @param {?} spinnerGroup
     * @return {?}
     */
    function (spinnerGroup) {
        var _this = this;
        this.spinnerCache.forEach((/**
         * @param {?} spinner
         * @return {?}
         */
        function (spinner) {
            if (spinner.group === spinnerGroup) {
                _this.spinnerCache.delete(spinner);
            }
        }));
    };
    /**
     * @return {?}
     */
    SpinnerService.prototype._unregisterAll = /**
     * @return {?}
     */
    function () {
        this.spinnerCache.clear();
    };
    /**
     * @param {?} spinnerName
     * @return {?}
     */
    SpinnerService.prototype.show = /**
     * @param {?} spinnerName
     * @return {?}
     */
    function (spinnerName) {
        this.spinnerCache.forEach((/**
         * @param {?} spinner
         * @return {?}
         */
        function (spinner) {
            if (spinner.name === spinnerName) {
                spinner.show = true;
            }
        }));
    };
    /**
     * @param {?} spinnerName
     * @return {?}
     */
    SpinnerService.prototype.hide = /**
     * @param {?} spinnerName
     * @return {?}
     */
    function (spinnerName) {
        this.spinnerCache.forEach((/**
         * @param {?} spinner
         * @return {?}
         */
        function (spinner) {
            if (spinner.name === spinnerName) {
                spinner.show = false;
            }
        }));
    };
    /**
     * @param {?} spinnerGroup
     * @return {?}
     */
    SpinnerService.prototype.showGroup = /**
     * @param {?} spinnerGroup
     * @return {?}
     */
    function (spinnerGroup) {
        this.spinnerCache.forEach((/**
         * @param {?} spinner
         * @return {?}
         */
        function (spinner) {
            if (spinner.group === spinnerGroup) {
                spinner.show = true;
            }
        }));
    };
    /**
     * @param {?} spinnerGroup
     * @return {?}
     */
    SpinnerService.prototype.hideGroup = /**
     * @param {?} spinnerGroup
     * @return {?}
     */
    function (spinnerGroup) {
        this.spinnerCache.forEach((/**
         * @param {?} spinner
         * @return {?}
         */
        function (spinner) {
            if (spinner.group === spinnerGroup) {
                spinner.show = false;
            }
        }));
    };
    /**
     * @return {?}
     */
    SpinnerService.prototype.showAll = /**
     * @return {?}
     */
    function () {
        this.spinnerCache.forEach((/**
         * @param {?} spinner
         * @return {?}
         */
        function (spinner) { return spinner.show = true; }));
    };
    /**
     * @return {?}
     */
    SpinnerService.prototype.hideAll = /**
     * @return {?}
     */
    function () {
        this.spinnerCache.forEach((/**
         * @param {?} spinner
         * @return {?}
         */
        function (spinner) { return spinner.show = false; }));
    };
    /**
     * @param {?} spinnerName
     * @return {?}
     */
    SpinnerService.prototype.isShowing = /**
     * @param {?} spinnerName
     * @return {?}
     */
    function (spinnerName) {
        /** @type {?} */
        var showing;
        this.spinnerCache.forEach((/**
         * @param {?} spinner
         * @return {?}
         */
        function (spinner) {
            if (spinner.name === spinnerName) {
                showing = spinner.show;
            }
        }));
        return showing;
    };
    SpinnerService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    SpinnerService.ctorParameters = function () { return []; };
    /** @nocollapse */ SpinnerService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SpinnerService_Factory() { return new SpinnerService(); }, token: SpinnerService, providedIn: "root" });
    return SpinnerService;
}());
export { SpinnerService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SpinnerService.prototype.spinnerCache;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3Bpbm5lci8iLCJzb3VyY2VzIjpbImxpYi9zcGlubmVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUczQztJQUtFO1FBRFEsaUJBQVksR0FBRyxJQUFJLEdBQUcsRUFBb0IsQ0FBQztJQUNuQyxDQUFDOzs7OztJQUVqQixrQ0FBUzs7OztJQUFULFVBQVUsT0FBeUI7UUFDakMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Ozs7SUFFRCxvQ0FBVzs7OztJQUFYLFVBQVksZUFBaUM7UUFBN0MsaUJBTUM7UUFMQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLE9BQU87WUFDL0IsSUFBSSxPQUFPLEtBQUssZUFBZSxFQUFFO2dCQUMvQixLQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNuQztRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCx5Q0FBZ0I7Ozs7SUFBaEIsVUFBaUIsWUFBb0I7UUFBckMsaUJBTUM7UUFMQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLE9BQU87WUFDL0IsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLFlBQVksRUFBRTtnQkFDbEMsS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDbkM7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCx1Q0FBYzs7O0lBQWQ7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRUQsNkJBQUk7Ozs7SUFBSixVQUFLLFdBQW1CO1FBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsT0FBTztZQUMvQixJQUFJLE9BQU8sQ0FBQyxJQUFJLEtBQUssV0FBVyxFQUFFO2dCQUNoQyxPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQzthQUNyQjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCw2QkFBSTs7OztJQUFKLFVBQUssV0FBbUI7UUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxPQUFPO1lBQy9CLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxXQUFXLEVBQUU7Z0JBQ2hDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO2FBQ3RCO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELGtDQUFTOzs7O0lBQVQsVUFBVSxZQUFvQjtRQUM1QixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLE9BQU87WUFDL0IsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLFlBQVksRUFBRTtnQkFDbEMsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7YUFDckI7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsa0NBQVM7Ozs7SUFBVCxVQUFVLFlBQW9CO1FBQzVCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsT0FBTztZQUMvQixJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssWUFBWSxFQUFFO2dCQUNsQyxPQUFPLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQzthQUN0QjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELGdDQUFPOzs7SUFBUDtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLEVBQW5CLENBQW1CLEVBQUMsQ0FBQztJQUM1RCxDQUFDOzs7O0lBRUQsZ0NBQU87OztJQUFQO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxPQUFPLENBQUMsSUFBSSxHQUFHLEtBQUssRUFBcEIsQ0FBb0IsRUFBQyxDQUFDO0lBQzdELENBQUM7Ozs7O0lBRUQsa0NBQVM7Ozs7SUFBVCxVQUFVLFdBQW1COztZQUN2QixPQUFPO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxPQUFPO1lBQy9CLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxXQUFXLEVBQUU7Z0JBQ2hDLE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO2FBQ3hCO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDSCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOztnQkEvRUYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7eUJBTEQ7Q0FtRkMsQUFoRkQsSUFnRkM7U0E3RVksY0FBYzs7Ozs7O0lBQ3pCLHNDQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNwaW5uZXJDb21wb25lbnQgfSBmcm9tICcuL3NwaW5uZXIuY29tcG9uZW50JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU3Bpbm5lclNlcnZpY2Uge1xuICBwcml2YXRlIHNwaW5uZXJDYWNoZSA9IG5ldyBTZXQ8U3Bpbm5lckNvbXBvbmVudD4oKTtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBfcmVnaXN0ZXIoc3Bpbm5lcjogU3Bpbm5lckNvbXBvbmVudCk6IHZvaWQge1xuICAgIHRoaXMuc3Bpbm5lckNhY2hlLmFkZChzcGlubmVyKTtcbiAgfVxuXG4gIF91bnJlZ2lzdGVyKHNwaW5uZXJUb1JlbW92ZTogU3Bpbm5lckNvbXBvbmVudCk6IHZvaWQge1xuICAgIHRoaXMuc3Bpbm5lckNhY2hlLmZvckVhY2goc3Bpbm5lciA9PiB7XG4gICAgICBpZiAoc3Bpbm5lciA9PT0gc3Bpbm5lclRvUmVtb3ZlKSB7XG4gICAgICAgIHRoaXMuc3Bpbm5lckNhY2hlLmRlbGV0ZShzcGlubmVyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIF91bnJlZ2lzdGVyR3JvdXAoc3Bpbm5lckdyb3VwOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnNwaW5uZXJDYWNoZS5mb3JFYWNoKHNwaW5uZXIgPT4ge1xuICAgICAgaWYgKHNwaW5uZXIuZ3JvdXAgPT09IHNwaW5uZXJHcm91cCkge1xuICAgICAgICB0aGlzLnNwaW5uZXJDYWNoZS5kZWxldGUoc3Bpbm5lcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBfdW5yZWdpc3RlckFsbCgpOiB2b2lkIHtcbiAgICB0aGlzLnNwaW5uZXJDYWNoZS5jbGVhcigpO1xuICB9XG5cbiAgc2hvdyhzcGlubmVyTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zcGlubmVyQ2FjaGUuZm9yRWFjaChzcGlubmVyID0+IHtcbiAgICAgIGlmIChzcGlubmVyLm5hbWUgPT09IHNwaW5uZXJOYW1lKSB7XG4gICAgICAgIHNwaW5uZXIuc2hvdyA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBoaWRlKHNwaW5uZXJOYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnNwaW5uZXJDYWNoZS5mb3JFYWNoKHNwaW5uZXIgPT4ge1xuICAgICAgaWYgKHNwaW5uZXIubmFtZSA9PT0gc3Bpbm5lck5hbWUpIHtcbiAgICAgICAgc3Bpbm5lci5zaG93ID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzaG93R3JvdXAoc3Bpbm5lckdyb3VwOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnNwaW5uZXJDYWNoZS5mb3JFYWNoKHNwaW5uZXIgPT4ge1xuICAgICAgaWYgKHNwaW5uZXIuZ3JvdXAgPT09IHNwaW5uZXJHcm91cCkge1xuICAgICAgICBzcGlubmVyLnNob3cgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaGlkZUdyb3VwKHNwaW5uZXJHcm91cDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zcGlubmVyQ2FjaGUuZm9yRWFjaChzcGlubmVyID0+IHtcbiAgICAgIGlmIChzcGlubmVyLmdyb3VwID09PSBzcGlubmVyR3JvdXApIHtcbiAgICAgICAgc3Bpbm5lci5zaG93ID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzaG93QWxsKCk6IHZvaWQge1xuICAgIHRoaXMuc3Bpbm5lckNhY2hlLmZvckVhY2goc3Bpbm5lciA9PiBzcGlubmVyLnNob3cgPSB0cnVlKTtcbiAgfVxuXG4gIGhpZGVBbGwoKTogdm9pZCB7XG4gICAgdGhpcy5zcGlubmVyQ2FjaGUuZm9yRWFjaChzcGlubmVyID0+IHNwaW5uZXIuc2hvdyA9IGZhbHNlKTtcbiAgfVxuXG4gIGlzU2hvd2luZyhzcGlubmVyTmFtZTogc3RyaW5nKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IHNob3dpbmc7XG4gICAgdGhpcy5zcGlubmVyQ2FjaGUuZm9yRWFjaChzcGlubmVyID0+IHtcbiAgICAgIGlmIChzcGlubmVyLm5hbWUgPT09IHNwaW5uZXJOYW1lKSB7XG4gICAgICAgIHNob3dpbmcgPSBzcGlubmVyLnNob3c7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHNob3dpbmc7XG4gIH1cbn1cbiJdfQ==