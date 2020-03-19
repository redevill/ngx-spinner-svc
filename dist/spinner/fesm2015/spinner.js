import { Injectable, ɵɵdefineInjectable, EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/spinner.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SpinnerService {
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
/** @nocollapse */ SpinnerService.ngInjectableDef = ɵɵdefineInjectable({ factory: function SpinnerService_Factory() { return new SpinnerService(); }, token: SpinnerService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    SpinnerService.prototype.spinnerCache;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/spinner.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SpinnerComponent {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/spinner.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SpinnerModule {
}
SpinnerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SpinnerComponent],
                imports: [CommonModule],
                exports: [SpinnerComponent],
                providers: [SpinnerService]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: spinner.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { SpinnerComponent, SpinnerModule, SpinnerService };
//# sourceMappingURL=spinner.js.map
