(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('spinner', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory(global.spinner = {}, global.ng.core, global.ng.common));
}(this, (function (exports, core, common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/spinner.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        SpinnerService.ctorParameters = function () { return []; };
        /** @nocollapse */ SpinnerService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function SpinnerService_Factory() { return new SpinnerService(); }, token: SpinnerService, providedIn: "root" });
        return SpinnerService;
    }());
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
    var SpinnerComponent = /** @class */ (function () {
        function SpinnerComponent(spinnerService) {
            this.spinnerService = spinnerService;
            this.isShowing = false;
            this.showChange = new core.EventEmitter();
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
            { type: core.Component, args: [{
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
            name: [{ type: core.Input }],
            group: [{ type: core.Input }],
            loadingImage: [{ type: core.Input }],
            showChange: [{ type: core.Output }],
            show: [{ type: core.Input }]
        };
        return SpinnerComponent;
    }());
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
    var SpinnerModule = /** @class */ (function () {
        function SpinnerModule() {
        }
        SpinnerModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [SpinnerComponent],
                        imports: [common.CommonModule],
                        exports: [SpinnerComponent],
                        providers: [SpinnerService]
                    },] }
        ];
        return SpinnerModule;
    }());

    exports.SpinnerComponent = SpinnerComponent;
    exports.SpinnerModule = SpinnerModule;
    exports.SpinnerService = SpinnerService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=spinner.umd.js.map
