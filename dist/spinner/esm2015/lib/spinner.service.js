/**
 * @fileoverview added by tsickle
 * Generated from: lib/spinner.service.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3Bpbm5lci8iLCJzb3VyY2VzIjpbImxpYi9zcGlubmVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU0zQyxNQUFNLE9BQU8sY0FBYztJQUV6QjtRQURRLGlCQUFZLEdBQUcsSUFBSSxHQUFHLEVBQW9CLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFFakIsU0FBUyxDQUFDLE9BQXlCO1FBQ2pDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLGVBQWlDO1FBQzNDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTzs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ2xDLElBQUksT0FBTyxLQUFLLGVBQWUsRUFBRTtnQkFDL0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDbkM7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsWUFBb0I7UUFDbkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDbEMsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLFlBQVksRUFBRTtnQkFDbEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDbkM7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxjQUFjO1FBQ1osSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7OztJQUVELElBQUksQ0FBQyxXQUFtQjtRQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU87Ozs7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNsQyxJQUFJLE9BQU8sQ0FBQyxJQUFJLEtBQUssV0FBVyxFQUFFO2dCQUNoQyxPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQzthQUNyQjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxJQUFJLENBQUMsV0FBbUI7UUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDbEMsSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLFdBQVcsRUFBRTtnQkFDaEMsT0FBTyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7YUFDdEI7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLFlBQW9CO1FBQzVCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTzs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ2xDLElBQUksT0FBTyxDQUFDLEtBQUssS0FBSyxZQUFZLEVBQUU7Z0JBQ2xDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2FBQ3JCO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxZQUFvQjtRQUM1QixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU87Ozs7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNsQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssWUFBWSxFQUFFO2dCQUNsQyxPQUFPLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQzthQUN0QjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELE9BQU87UUFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU87Ozs7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxFQUFDLENBQUM7SUFDNUQsQ0FBQzs7OztJQUVELE9BQU87UUFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU87Ozs7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsS0FBSyxFQUFDLENBQUM7SUFDN0QsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsV0FBbUI7O1lBQ3ZCLE9BQU87UUFDWCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU87Ozs7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNsQyxJQUFJLE9BQU8sQ0FBQyxJQUFJLEtBQUssV0FBVyxFQUFFO2dCQUNoQyxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQzthQUN4QjtRQUNILENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7O1lBL0VGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7Ozs7OztJQUVDLHNDQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNwaW5uZXJDb21wb25lbnQgfSBmcm9tICcuL3NwaW5uZXIuY29tcG9uZW50JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU3Bpbm5lclNlcnZpY2Uge1xuICBwcml2YXRlIHNwaW5uZXJDYWNoZSA9IG5ldyBTZXQ8U3Bpbm5lckNvbXBvbmVudD4oKTtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBfcmVnaXN0ZXIoc3Bpbm5lcjogU3Bpbm5lckNvbXBvbmVudCk6IHZvaWQge1xuICAgIHRoaXMuc3Bpbm5lckNhY2hlLmFkZChzcGlubmVyKTtcbiAgfVxuXG4gIF91bnJlZ2lzdGVyKHNwaW5uZXJUb1JlbW92ZTogU3Bpbm5lckNvbXBvbmVudCk6IHZvaWQge1xuICAgIHRoaXMuc3Bpbm5lckNhY2hlLmZvckVhY2goc3Bpbm5lciA9PiB7XG4gICAgICBpZiAoc3Bpbm5lciA9PT0gc3Bpbm5lclRvUmVtb3ZlKSB7XG4gICAgICAgIHRoaXMuc3Bpbm5lckNhY2hlLmRlbGV0ZShzcGlubmVyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIF91bnJlZ2lzdGVyR3JvdXAoc3Bpbm5lckdyb3VwOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnNwaW5uZXJDYWNoZS5mb3JFYWNoKHNwaW5uZXIgPT4ge1xuICAgICAgaWYgKHNwaW5uZXIuZ3JvdXAgPT09IHNwaW5uZXJHcm91cCkge1xuICAgICAgICB0aGlzLnNwaW5uZXJDYWNoZS5kZWxldGUoc3Bpbm5lcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBfdW5yZWdpc3RlckFsbCgpOiB2b2lkIHtcbiAgICB0aGlzLnNwaW5uZXJDYWNoZS5jbGVhcigpO1xuICB9XG5cbiAgc2hvdyhzcGlubmVyTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zcGlubmVyQ2FjaGUuZm9yRWFjaChzcGlubmVyID0+IHtcbiAgICAgIGlmIChzcGlubmVyLm5hbWUgPT09IHNwaW5uZXJOYW1lKSB7XG4gICAgICAgIHNwaW5uZXIuc2hvdyA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBoaWRlKHNwaW5uZXJOYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnNwaW5uZXJDYWNoZS5mb3JFYWNoKHNwaW5uZXIgPT4ge1xuICAgICAgaWYgKHNwaW5uZXIubmFtZSA9PT0gc3Bpbm5lck5hbWUpIHtcbiAgICAgICAgc3Bpbm5lci5zaG93ID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzaG93R3JvdXAoc3Bpbm5lckdyb3VwOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnNwaW5uZXJDYWNoZS5mb3JFYWNoKHNwaW5uZXIgPT4ge1xuICAgICAgaWYgKHNwaW5uZXIuZ3JvdXAgPT09IHNwaW5uZXJHcm91cCkge1xuICAgICAgICBzcGlubmVyLnNob3cgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaGlkZUdyb3VwKHNwaW5uZXJHcm91cDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zcGlubmVyQ2FjaGUuZm9yRWFjaChzcGlubmVyID0+IHtcbiAgICAgIGlmIChzcGlubmVyLmdyb3VwID09PSBzcGlubmVyR3JvdXApIHtcbiAgICAgICAgc3Bpbm5lci5zaG93ID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzaG93QWxsKCk6IHZvaWQge1xuICAgIHRoaXMuc3Bpbm5lckNhY2hlLmZvckVhY2goc3Bpbm5lciA9PiBzcGlubmVyLnNob3cgPSB0cnVlKTtcbiAgfVxuXG4gIGhpZGVBbGwoKTogdm9pZCB7XG4gICAgdGhpcy5zcGlubmVyQ2FjaGUuZm9yRWFjaChzcGlubmVyID0+IHNwaW5uZXIuc2hvdyA9IGZhbHNlKTtcbiAgfVxuXG4gIGlzU2hvd2luZyhzcGlubmVyTmFtZTogc3RyaW5nKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IHNob3dpbmc7XG4gICAgdGhpcy5zcGlubmVyQ2FjaGUuZm9yRWFjaChzcGlubmVyID0+IHtcbiAgICAgIGlmIChzcGlubmVyLm5hbWUgPT09IHNwaW5uZXJOYW1lKSB7XG4gICAgICAgIHNob3dpbmcgPSBzcGlubmVyLnNob3c7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHNob3dpbmc7XG4gIH1cbn1cbiJdfQ==