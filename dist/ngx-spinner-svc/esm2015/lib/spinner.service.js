/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class SpinnerService {
    constructor() {
        this.spinnerCache = new Set();
    }
    /**
     * @param {?} spinner
     * @return {?}
     */
    _register(spinner) {
        this.spinnerCache.add(spinner);
    }
    /**
     * @param {?} spinnerToRemove
     * @return {?}
     */
    _unregister(spinnerToRemove) {
        this.spinnerCache.forEach((/**
         * @param {?} spinner
         * @return {?}
         */
        spinner => {
            if (spinner === spinnerToRemove) {
                this.spinnerCache.delete(spinner);
            }
        }));
    }
    /**
     * @param {?} spinnerGroup
     * @return {?}
     */
    _unregisterGroup(spinnerGroup) {
        this.spinnerCache.forEach((/**
         * @param {?} spinner
         * @return {?}
         */
        spinner => {
            if (spinner.group === spinnerGroup) {
                this.spinnerCache.delete(spinner);
            }
        }));
    }
    /**
     * @return {?}
     */
    _unregisterAll() {
        this.spinnerCache.clear();
    }
    /**
     * @param {?} spinnerName
     * @return {?}
     */
    show(spinnerName) {
        this.spinnerCache.forEach((/**
         * @param {?} spinner
         * @return {?}
         */
        spinner => {
            if (spinner.name === spinnerName) {
                spinner.show = true;
            }
        }));
    }
    /**
     * @param {?} spinnerName
     * @return {?}
     */
    hide(spinnerName) {
        this.spinnerCache.forEach((/**
         * @param {?} spinner
         * @return {?}
         */
        spinner => {
            if (spinner.name === spinnerName) {
                spinner.show = false;
            }
        }));
    }
    /**
     * @param {?} spinnerGroup
     * @return {?}
     */
    showGroup(spinnerGroup) {
        this.spinnerCache.forEach((/**
         * @param {?} spinner
         * @return {?}
         */
        spinner => {
            if (spinner.group === spinnerGroup) {
                spinner.show = true;
            }
        }));
    }
    /**
     * @param {?} spinnerGroup
     * @return {?}
     */
    hideGroup(spinnerGroup) {
        this.spinnerCache.forEach((/**
         * @param {?} spinner
         * @return {?}
         */
        spinner => {
            if (spinner.group === spinnerGroup) {
                spinner.show = false;
            }
        }));
    }
    /**
     * @return {?}
     */
    showAll() {
        this.spinnerCache.forEach((/**
         * @param {?} spinner
         * @return {?}
         */
        spinner => spinner.show = true));
    }
    /**
     * @return {?}
     */
    hideAll() {
        this.spinnerCache.forEach((/**
         * @param {?} spinner
         * @return {?}
         */
        spinner => spinner.show = false));
    }
    /**
     * @param {?} spinnerName
     * @return {?}
     */
    isShowing(spinnerName) {
        /** @type {?} */
        let showing;
        this.spinnerCache.forEach((/**
         * @param {?} spinner
         * @return {?}
         */
        spinner => {
            if (spinner.name === spinnerName) {
                showing = spinner.show;
            }
        }));
        return showing;
    }
}
SpinnerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
SpinnerService.ctorParameters = () => [];
/** @nocollapse */ SpinnerService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SpinnerService_Factory() { return new SpinnerService(); }, token: SpinnerService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    SpinnerService.prototype.spinnerCache;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXNwaW5uZXItc3ZjLyIsInNvdXJjZXMiOlsibGliL3NwaW5uZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFNM0MsTUFBTSxPQUFPLGNBQWM7SUFFekI7UUFEUSxpQkFBWSxHQUFHLElBQUksR0FBRyxFQUFvQixDQUFDO0lBQ25DLENBQUM7Ozs7O0lBRWpCLFNBQVMsQ0FBQyxPQUF5QjtRQUNqQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxlQUFpQztRQUMzQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU87Ozs7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNsQyxJQUFJLE9BQU8sS0FBSyxlQUFlLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ25DO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLFlBQW9CO1FBQ25DLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTzs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ2xDLElBQUksT0FBTyxDQUFDLEtBQUssS0FBSyxZQUFZLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ25DO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsY0FBYztRQUNaLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFRCxJQUFJLENBQUMsV0FBbUI7UUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDbEMsSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLFdBQVcsRUFBRTtnQkFDaEMsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7YUFDckI7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsSUFBSSxDQUFDLFdBQW1CO1FBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTzs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ2xDLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxXQUFXLEVBQUU7Z0JBQ2hDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO2FBQ3RCO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxZQUFvQjtRQUM1QixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU87Ozs7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNsQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssWUFBWSxFQUFFO2dCQUNsQyxPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQzthQUNyQjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsWUFBb0I7UUFDNUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDbEMsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLFlBQVksRUFBRTtnQkFDbEMsT0FBTyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7YUFDdEI7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksRUFBQyxDQUFDO0lBQzVELENBQUM7Ozs7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLEtBQUssRUFBQyxDQUFDO0lBQzdELENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLFdBQW1COztZQUN2QixPQUFPO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDbEMsSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLFdBQVcsRUFBRTtnQkFDaEMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7YUFDeEI7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7OztZQS9FRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7Ozs7Ozs7SUFFQyxzQ0FBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTcGlubmVyQ29tcG9uZW50IH0gZnJvbSAnLi9zcGlubmVyLmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNwaW5uZXJTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBzcGlubmVyQ2FjaGUgPSBuZXcgU2V0PFNwaW5uZXJDb21wb25lbnQ+KCk7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgX3JlZ2lzdGVyKHNwaW5uZXI6IFNwaW5uZXJDb21wb25lbnQpOiB2b2lkIHtcbiAgICB0aGlzLnNwaW5uZXJDYWNoZS5hZGQoc3Bpbm5lcik7XG4gIH1cblxuICBfdW5yZWdpc3RlcihzcGlubmVyVG9SZW1vdmU6IFNwaW5uZXJDb21wb25lbnQpOiB2b2lkIHtcbiAgICB0aGlzLnNwaW5uZXJDYWNoZS5mb3JFYWNoKHNwaW5uZXIgPT4ge1xuICAgICAgaWYgKHNwaW5uZXIgPT09IHNwaW5uZXJUb1JlbW92ZSkge1xuICAgICAgICB0aGlzLnNwaW5uZXJDYWNoZS5kZWxldGUoc3Bpbm5lcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBfdW5yZWdpc3Rlckdyb3VwKHNwaW5uZXJHcm91cDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zcGlubmVyQ2FjaGUuZm9yRWFjaChzcGlubmVyID0+IHtcbiAgICAgIGlmIChzcGlubmVyLmdyb3VwID09PSBzcGlubmVyR3JvdXApIHtcbiAgICAgICAgdGhpcy5zcGlubmVyQ2FjaGUuZGVsZXRlKHNwaW5uZXIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgX3VucmVnaXN0ZXJBbGwoKTogdm9pZCB7XG4gICAgdGhpcy5zcGlubmVyQ2FjaGUuY2xlYXIoKTtcbiAgfVxuXG4gIHNob3coc3Bpbm5lck5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3Bpbm5lckNhY2hlLmZvckVhY2goc3Bpbm5lciA9PiB7XG4gICAgICBpZiAoc3Bpbm5lci5uYW1lID09PSBzcGlubmVyTmFtZSkge1xuICAgICAgICBzcGlubmVyLnNob3cgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaGlkZShzcGlubmVyTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zcGlubmVyQ2FjaGUuZm9yRWFjaChzcGlubmVyID0+IHtcbiAgICAgIGlmIChzcGlubmVyLm5hbWUgPT09IHNwaW5uZXJOYW1lKSB7XG4gICAgICAgIHNwaW5uZXIuc2hvdyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2hvd0dyb3VwKHNwaW5uZXJHcm91cDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zcGlubmVyQ2FjaGUuZm9yRWFjaChzcGlubmVyID0+IHtcbiAgICAgIGlmIChzcGlubmVyLmdyb3VwID09PSBzcGlubmVyR3JvdXApIHtcbiAgICAgICAgc3Bpbm5lci5zaG93ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGhpZGVHcm91cChzcGlubmVyR3JvdXA6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3Bpbm5lckNhY2hlLmZvckVhY2goc3Bpbm5lciA9PiB7XG4gICAgICBpZiAoc3Bpbm5lci5ncm91cCA9PT0gc3Bpbm5lckdyb3VwKSB7XG4gICAgICAgIHNwaW5uZXIuc2hvdyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2hvd0FsbCgpOiB2b2lkIHtcbiAgICB0aGlzLnNwaW5uZXJDYWNoZS5mb3JFYWNoKHNwaW5uZXIgPT4gc3Bpbm5lci5zaG93ID0gdHJ1ZSk7XG4gIH1cblxuICBoaWRlQWxsKCk6IHZvaWQge1xuICAgIHRoaXMuc3Bpbm5lckNhY2hlLmZvckVhY2goc3Bpbm5lciA9PiBzcGlubmVyLnNob3cgPSBmYWxzZSk7XG4gIH1cblxuICBpc1Nob3dpbmcoc3Bpbm5lck5hbWU6IHN0cmluZyk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgIGxldCBzaG93aW5nO1xuICAgIHRoaXMuc3Bpbm5lckNhY2hlLmZvckVhY2goc3Bpbm5lciA9PiB7XG4gICAgICBpZiAoc3Bpbm5lci5uYW1lID09PSBzcGlubmVyTmFtZSkge1xuICAgICAgICBzaG93aW5nID0gc3Bpbm5lci5zaG93O1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzaG93aW5nO1xuICB9XG59XG4iXX0=