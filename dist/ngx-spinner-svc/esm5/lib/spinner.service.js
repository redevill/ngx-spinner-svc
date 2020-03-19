/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXNwaW5uZXItc3ZjLyIsInNvdXJjZXMiOlsibGliL3NwaW5uZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFHM0M7SUFLRTtRQURRLGlCQUFZLEdBQUcsSUFBSSxHQUFHLEVBQW9CLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFFakIsa0NBQVM7Ozs7SUFBVCxVQUFVLE9BQXlCO1FBQ2pDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBRUQsb0NBQVc7Ozs7SUFBWCxVQUFZLGVBQWlDO1FBQTdDLGlCQU1DO1FBTEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxPQUFPO1lBQy9CLElBQUksT0FBTyxLQUFLLGVBQWUsRUFBRTtnQkFDL0IsS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDbkM7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQseUNBQWdCOzs7O0lBQWhCLFVBQWlCLFlBQW9CO1FBQXJDLGlCQU1DO1FBTEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxPQUFPO1lBQy9CLElBQUksT0FBTyxDQUFDLEtBQUssS0FBSyxZQUFZLEVBQUU7Z0JBQ2xDLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ25DO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsdUNBQWM7OztJQUFkO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7OztJQUVELDZCQUFJOzs7O0lBQUosVUFBSyxXQUFtQjtRQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLE9BQU87WUFDL0IsSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLFdBQVcsRUFBRTtnQkFDaEMsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7YUFDckI7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsNkJBQUk7Ozs7SUFBSixVQUFLLFdBQW1CO1FBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsT0FBTztZQUMvQixJQUFJLE9BQU8sQ0FBQyxJQUFJLEtBQUssV0FBVyxFQUFFO2dCQUNoQyxPQUFPLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQzthQUN0QjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxrQ0FBUzs7OztJQUFULFVBQVUsWUFBb0I7UUFDNUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxPQUFPO1lBQy9CLElBQUksT0FBTyxDQUFDLEtBQUssS0FBSyxZQUFZLEVBQUU7Z0JBQ2xDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2FBQ3JCO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELGtDQUFTOzs7O0lBQVQsVUFBVSxZQUFvQjtRQUM1QixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLE9BQU87WUFDL0IsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLFlBQVksRUFBRTtnQkFDbEMsT0FBTyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7YUFDdEI7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxnQ0FBTzs7O0lBQVA7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxFQUFuQixDQUFtQixFQUFDLENBQUM7SUFDNUQsQ0FBQzs7OztJQUVELGdDQUFPOzs7SUFBUDtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsT0FBTyxDQUFDLElBQUksR0FBRyxLQUFLLEVBQXBCLENBQW9CLEVBQUMsQ0FBQztJQUM3RCxDQUFDOzs7OztJQUVELGtDQUFTOzs7O0lBQVQsVUFBVSxXQUFtQjs7WUFDdkIsT0FBTztRQUNYLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsT0FBTztZQUMvQixJQUFJLE9BQU8sQ0FBQyxJQUFJLEtBQUssV0FBVyxFQUFFO2dCQUNoQyxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQzthQUN4QjtRQUNILENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7Z0JBL0VGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7O3lCQUxEO0NBbUZDLEFBaEZELElBZ0ZDO1NBN0VZLGNBQWM7Ozs7OztJQUN6QixzQ0FBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTcGlubmVyQ29tcG9uZW50IH0gZnJvbSAnLi9zcGlubmVyLmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNwaW5uZXJTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBzcGlubmVyQ2FjaGUgPSBuZXcgU2V0PFNwaW5uZXJDb21wb25lbnQ+KCk7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgX3JlZ2lzdGVyKHNwaW5uZXI6IFNwaW5uZXJDb21wb25lbnQpOiB2b2lkIHtcbiAgICB0aGlzLnNwaW5uZXJDYWNoZS5hZGQoc3Bpbm5lcik7XG4gIH1cblxuICBfdW5yZWdpc3RlcihzcGlubmVyVG9SZW1vdmU6IFNwaW5uZXJDb21wb25lbnQpOiB2b2lkIHtcbiAgICB0aGlzLnNwaW5uZXJDYWNoZS5mb3JFYWNoKHNwaW5uZXIgPT4ge1xuICAgICAgaWYgKHNwaW5uZXIgPT09IHNwaW5uZXJUb1JlbW92ZSkge1xuICAgICAgICB0aGlzLnNwaW5uZXJDYWNoZS5kZWxldGUoc3Bpbm5lcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBfdW5yZWdpc3Rlckdyb3VwKHNwaW5uZXJHcm91cDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zcGlubmVyQ2FjaGUuZm9yRWFjaChzcGlubmVyID0+IHtcbiAgICAgIGlmIChzcGlubmVyLmdyb3VwID09PSBzcGlubmVyR3JvdXApIHtcbiAgICAgICAgdGhpcy5zcGlubmVyQ2FjaGUuZGVsZXRlKHNwaW5uZXIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgX3VucmVnaXN0ZXJBbGwoKTogdm9pZCB7XG4gICAgdGhpcy5zcGlubmVyQ2FjaGUuY2xlYXIoKTtcbiAgfVxuXG4gIHNob3coc3Bpbm5lck5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3Bpbm5lckNhY2hlLmZvckVhY2goc3Bpbm5lciA9PiB7XG4gICAgICBpZiAoc3Bpbm5lci5uYW1lID09PSBzcGlubmVyTmFtZSkge1xuICAgICAgICBzcGlubmVyLnNob3cgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaGlkZShzcGlubmVyTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zcGlubmVyQ2FjaGUuZm9yRWFjaChzcGlubmVyID0+IHtcbiAgICAgIGlmIChzcGlubmVyLm5hbWUgPT09IHNwaW5uZXJOYW1lKSB7XG4gICAgICAgIHNwaW5uZXIuc2hvdyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2hvd0dyb3VwKHNwaW5uZXJHcm91cDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zcGlubmVyQ2FjaGUuZm9yRWFjaChzcGlubmVyID0+IHtcbiAgICAgIGlmIChzcGlubmVyLmdyb3VwID09PSBzcGlubmVyR3JvdXApIHtcbiAgICAgICAgc3Bpbm5lci5zaG93ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGhpZGVHcm91cChzcGlubmVyR3JvdXA6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3Bpbm5lckNhY2hlLmZvckVhY2goc3Bpbm5lciA9PiB7XG4gICAgICBpZiAoc3Bpbm5lci5ncm91cCA9PT0gc3Bpbm5lckdyb3VwKSB7XG4gICAgICAgIHNwaW5uZXIuc2hvdyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2hvd0FsbCgpOiB2b2lkIHtcbiAgICB0aGlzLnNwaW5uZXJDYWNoZS5mb3JFYWNoKHNwaW5uZXIgPT4gc3Bpbm5lci5zaG93ID0gdHJ1ZSk7XG4gIH1cblxuICBoaWRlQWxsKCk6IHZvaWQge1xuICAgIHRoaXMuc3Bpbm5lckNhY2hlLmZvckVhY2goc3Bpbm5lciA9PiBzcGlubmVyLnNob3cgPSBmYWxzZSk7XG4gIH1cblxuICBpc1Nob3dpbmcoc3Bpbm5lck5hbWU6IHN0cmluZyk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIGxldCBzaG93aW5nO1xuICAgIHRoaXMuc3Bpbm5lckNhY2hlLmZvckVhY2goc3Bpbm5lciA9PiB7XG4gICAgICBpZiAoc3Bpbm5lci5uYW1lID09PSBzcGlubmVyTmFtZSkge1xuICAgICAgICBzaG93aW5nID0gc3Bpbm5lci5zaG93O1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzaG93aW5nO1xuICB9XG59XG4iXX0=