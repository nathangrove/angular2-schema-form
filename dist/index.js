module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var form_component_1 = __webpack_require__(1);
	exports.FormComponent = form_component_1.FormComponent;
	var widgetregistry_1 = __webpack_require__(39);
	exports.WidgetRegistry = widgetregistry_1.WidgetRegistry;
	__export(__webpack_require__(41));
	var schema_form_module_1 = __webpack_require__(42);
	exports.SchemaFormModule = schema_form_module_1.SchemaFormModule;
	var defaultwidgetregistry_1 = __webpack_require__(69);
	exports.DefaultWidgetRegistry = defaultwidgetregistry_1.DefaultWidgetRegistry;
	

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(2);
	var model_1 = __webpack_require__(3);
	var schemavalidatorfactory_1 = __webpack_require__(22);
	var widgetfactory_1 = __webpack_require__(38);
	var FormComponent = (function () {
	    function FormComponent(formPropertyFactory, actionRegistry, validatorRegistry, cdr) {
	        this.formPropertyFactory = formPropertyFactory;
	        this.actionRegistry = actionRegistry;
	        this.validatorRegistry = validatorRegistry;
	        this.cdr = cdr;
	        this.schema = null;
	        this.actions = {};
	        this.validators = {};
	        this.onChange = new core_1.EventEmitter();
	        this.rootProperty = null;
	    }
	    FormComponent.prototype.ngOnChanges = function (changes) {
	        var _this = this;
	        if (changes.validators) {
	            this.setValidators();
	        }
	        if (changes.actions) {
	            this.setActions();
	        }
	        if (this.schema && this.schema.type && changes.schema) {
	            model_1.SchemaPreprocessor.preprocess(this.schema);
	            this.rootProperty = this.formPropertyFactory.createProperty(this.schema);
	            this.rootProperty.valueChanges.subscribe(function (value) { _this.onChange.emit({ value: value }); });
	        }
	        if (this.schema && this.schema.type && (changes.model || changes.schema)) {
	            this.rootProperty.reset(this.model, false);
	            this.cdr.detectChanges();
	        }
	    };
	    FormComponent.prototype.setValidators = function () {
	        this.validatorRegistry.clear();
	        if (this.validators) {
	            for (var validatorId in this.validators) {
	                this.validatorRegistry.register(validatorId, this.validators[validatorId]);
	            }
	        }
	    };
	    FormComponent.prototype.setActions = function () {
	        this.actionRegistry.clear();
	        if (this.actions) {
	            for (var actionId in this.actions) {
	                this.actionRegistry.register(actionId, this.actions[actionId]);
	            }
	        }
	    };
	    FormComponent.prototype.reset = function () {
	        this.rootProperty.reset(null, true);
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], FormComponent.prototype, "schema", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], FormComponent.prototype, "model", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], FormComponent.prototype, "actions", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], FormComponent.prototype, "validators", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], FormComponent.prototype, "onChange", void 0);
	    FormComponent = __decorate([
	        core_1.Component({
	            selector: "schema-form",
	            template: __webpack_require__(40),
	            providers: [
	                model_1.ActionRegistry,
	                model_1.ValidatorRegistry,
	                model_1.SchemaPreprocessor,
	                widgetfactory_1.WidgetFactory,
	                {
	                    provide: schemavalidatorfactory_1.SchemaValidatorFactory,
	                    useClass: schemavalidatorfactory_1.ZSchemaValidatorFactory
	                }, {
	                    provide: model_1.FormPropertyFactory,
	                    useFactory: function (schemaValidatorFactory, validatorRegistry) {
	                        return new model_1.FormPropertyFactory(schemaValidatorFactory, validatorRegistry);
	                    },
	                    deps: [schemavalidatorfactory_1.SchemaValidatorFactory, model_1.ValidatorRegistry]
	                }
	            ]
	        }), 
	        __metadata('design:paramtypes', [model_1.FormPropertyFactory, model_1.ActionRegistry, model_1.ValidatorRegistry, core_1.ChangeDetectorRef])
	    ], FormComponent);
	    return FormComponent;
	}());
	exports.FormComponent = FormComponent;
	

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("@angular/core");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(4));
	__export(__webpack_require__(5));
	__export(__webpack_require__(6));
	__export(__webpack_require__(14));
	__export(__webpack_require__(17));
	__export(__webpack_require__(18));
	__export(__webpack_require__(19));
	__export(__webpack_require__(20));
	

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	var ActionRegistry = (function () {
	    function ActionRegistry() {
	        this.actions = {};
	    }
	    ActionRegistry.prototype.clear = function () {
	        this.actions = {};
	    };
	    ActionRegistry.prototype.register = function (actionId, action) {
	        this.actions[actionId] = action;
	    };
	    ActionRegistry.prototype.get = function (actionId) {
	        return this.actions[actionId];
	    };
	    return ActionRegistry;
	}());
	exports.ActionRegistry = ActionRegistry;
	

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var formproperty_1 = __webpack_require__(6);
	var numberproperty_1 = __webpack_require__(13);
	var stringproperty_1 = __webpack_require__(15);
	var booleanproperty_1 = __webpack_require__(16);
	var objectproperty_1 = __webpack_require__(17);
	var arrayproperty_1 = __webpack_require__(18);
	var FormPropertyFactory = (function () {
	    function FormPropertyFactory(schemaValidatorFactory, validatorRegistry) {
	        this.schemaValidatorFactory = schemaValidatorFactory;
	        this.validatorRegistry = validatorRegistry;
	    }
	    FormPropertyFactory.prototype.createProperty = function (schema, parent, propertyId) {
	        if (parent === void 0) { parent = null; }
	        var newProperty = null;
	        var path = "";
	        if (parent) {
	            path += parent.path;
	            if (parent.parent !== null) {
	                path += "/";
	            }
	            if (parent.type === "object") {
	                path += propertyId;
	            }
	            else if (parent.type === "array") {
	                path += "*";
	            }
	            else {
	                throw "Instanciation of a FormProperty with an unknown parent type: " + parent.type;
	            }
	        }
	        else {
	            path = "/";
	        }
	        switch (schema.type) {
	            case "integer":
	            case "number":
	                newProperty = new numberproperty_1.NumberProperty(this.schemaValidatorFactory, this.validatorRegistry, schema, parent, path);
	                break;
	            case "string":
	                newProperty = new stringproperty_1.StringProperty(this.schemaValidatorFactory, this.validatorRegistry, schema, parent, path);
	                break;
	            case "boolean":
	                newProperty = new booleanproperty_1.BooleanProperty(this.schemaValidatorFactory, this.validatorRegistry, schema, parent, path);
	                break;
	            case "object":
	                newProperty = new objectproperty_1.ObjectProperty(this, this.schemaValidatorFactory, this.validatorRegistry, schema, parent, path);
	                break;
	            case "array":
	                newProperty = new arrayproperty_1.ArrayProperty(this, this.schemaValidatorFactory, this.validatorRegistry, schema, parent, path);
	                break;
	            default:
	                throw new TypeError("Undefined type " + schema.type);
	        }
	        if (newProperty instanceof formproperty_1.PropertyGroup && parent === null) {
	            this.initializeRoot(newProperty);
	        }
	        return newProperty;
	    };
	    FormPropertyFactory.prototype.initializeRoot = function (rootProperty) {
	        rootProperty.reset(null, true);
	        rootProperty._bindVisibility();
	    };
	    return FormPropertyFactory;
	}());
	exports.FormPropertyFactory = FormPropertyFactory;
	

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(7);
	var BehaviorSubject_1 = __webpack_require__(8);
	__webpack_require__(9);
	__webpack_require__(10);
	__webpack_require__(11);
	__webpack_require__(12);
	var FormProperty = (function () {
	    function FormProperty(schemaValidatorFactory, validatorRegistry, schema, parent, path) {
	        this.validatorRegistry = validatorRegistry;
	        this.schema = schema;
	        this._value = null;
	        this._errors = null;
	        this._valueChanges = new BehaviorSubject_1.BehaviorSubject(null);
	        this._errorsChanges = new BehaviorSubject_1.BehaviorSubject(null);
	        this._visible = true;
	        this._visibilityChanges = new BehaviorSubject_1.BehaviorSubject(true);
	        this.schemaValidator = schemaValidatorFactory.createValidatorFn(this.schema);
	        this._parent = parent;
	        if (parent) {
	            this._root = parent.root;
	        }
	        else if (this instanceof PropertyGroup) {
	            this._root = this;
	        }
	        this._path = path;
	    }
	    Object.defineProperty(FormProperty.prototype, "valueChanges", {
	        get: function () {
	            return this._valueChanges;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormProperty.prototype, "errorsChanges", {
	        get: function () {
	            return this._errorsChanges;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormProperty.prototype, "type", {
	        get: function () {
	            return this.schema.type;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormProperty.prototype, "parent", {
	        get: function () {
	            return this._parent;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormProperty.prototype, "root", {
	        get: function () {
	            return this._root || this;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormProperty.prototype, "path", {
	        get: function () {
	            return this._path;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormProperty.prototype, "value", {
	        get: function () {
	            return this._value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormProperty.prototype, "visible", {
	        get: function () {
	            return this._visible;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormProperty.prototype, "valid", {
	        get: function () {
	            return this._errors === null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    FormProperty.prototype.updateValueAndValidity = function (onlySelf, emitEvent) {
	        if (onlySelf === void 0) { onlySelf = false; }
	        if (emitEvent === void 0) { emitEvent = true; }
	        this._updateValue();
	        if (emitEvent) {
	            this.valueChanges.next(this.value);
	        }
	        this._runValidation();
	        if (this.parent && !onlySelf) {
	            this.parent.updateValueAndValidity(onlySelf, emitEvent);
	        }
	    };
	    FormProperty.prototype._runValidation = function () {
	        var errors = this.schemaValidator(this._value) || [];
	        var customValidator = this.validatorRegistry.get(this.path);
	        if (customValidator) {
	            var customErrors = customValidator(this.value, this, this.findRoot());
	            errors = this.mergeErrors(errors, customErrors);
	        }
	        if (errors.length === 0) {
	            errors = null;
	        }
	        this._errors = errors;
	        this.setErrors(this._errors);
	    };
	    FormProperty.prototype.mergeErrors = function (errors, newErrors) {
	        if (newErrors) {
	            if (Array.isArray(newErrors)) {
	                errors = errors.concat.apply(errors, newErrors);
	            }
	            else {
	                errors.push(newErrors);
	            }
	        }
	        return errors;
	    };
	    FormProperty.prototype.setErrors = function (errors) {
	        this._errors = errors;
	        this._errorsChanges.next(errors);
	    };
	    FormProperty.prototype.searchProperty = function (path) {
	        var prop = this;
	        var base = null;
	        var result = null;
	        if (path[0] === "/") {
	            base = this.findRoot();
	            result = base.getProperty(path.substr(1));
	        }
	        else {
	            while (result === null && prop.parent !== null) {
	                prop = base = prop.parent;
	                result = base.getProperty(path);
	            }
	        }
	        return result;
	    };
	    FormProperty.prototype.findRoot = function () {
	        var property = this;
	        while (property.parent !== null) {
	            property = property.parent;
	        }
	        return property;
	    };
	    FormProperty.prototype.setVisible = function (visible) {
	        this._visible = visible;
	        this._visibilityChanges.next(visible);
	        this.updateValueAndValidity();
	        if (this.parent) {
	            this.parent.updateValueAndValidity(false, true);
	        }
	    };
	    FormProperty.prototype._bindVisibility = function () {
	        var _this = this;
	        var visibleIf = this.schema.visibleIf;
	        if (visibleIf !== undefined) {
	            var propertiesBinding = [];
	            var _loop_1 = function(dependencyPath) {
	                var property = this_1.searchProperty(dependencyPath);
	                if (property) {
	                    var valueCheck = property.valueChanges.map(function (value) { return visibleIf[dependencyPath].indexOf(value) !== -1; });
	                    var visibilityCheck = property._visibilityChanges;
	                    var and = Observable_1.Observable.combineLatest([valueCheck, visibilityCheck], function (v1, v2) { return v1 && v2; });
	                    propertiesBinding.push(and);
	                }
	                else {
	                    console.warn("Can't find property " + dependencyPath + " for visibility check of " + this_1.path);
	                }
	            };
	            var this_1 = this;
	            for (var dependencyPath in visibleIf) {
	                _loop_1(dependencyPath);
	            }
	            Observable_1.Observable.combineLatest(propertiesBinding, function () {
	                var values = [];
	                for (var _i = 0; _i < arguments.length; _i++) {
	                    values[_i - 0] = arguments[_i];
	                }
	                return values.indexOf(true) !== -1;
	            }).distinctUntilChanged().subscribe(function (visible) {
	                _this.setVisible(visible);
	            });
	        }
	    };
	    return FormProperty;
	}());
	exports.FormProperty = FormProperty;
	var PropertyGroup = (function (_super) {
	    __extends(PropertyGroup, _super);
	    function PropertyGroup() {
	        _super.apply(this, arguments);
	        this.properties = null;
	    }
	    PropertyGroup.prototype.getProperty = function (path) {
	        var subPathIdx = path.indexOf("/");
	        var propertyId = subPathIdx !== -1 ? path.substr(0, subPathIdx) : path;
	        var property = this.properties[propertyId];
	        if (property !== null && subPathIdx !== -1 && property instanceof PropertyGroup) {
	            var subPath = path.substr(subPathIdx + 1);
	            property = property.getProperty(subPath);
	        }
	        return property;
	    };
	    PropertyGroup.prototype.forEachChild = function (fn) {
	        for (var propertyId in this.properties) {
	            var property = this.properties[propertyId];
	            fn(property, propertyId);
	        }
	    };
	    PropertyGroup.prototype.forEachChildRecursive = function (fn) {
	        this.forEachChild(function (child) {
	            fn(child);
	            if (child instanceof PropertyGroup) {
	                child.forEachChildRecursive(fn);
	            }
	        });
	    };
	    PropertyGroup.prototype._bindVisibility = function () {
	        _super.prototype._bindVisibility.call(this);
	        this._bindVisibilityRecursive();
	    };
	    PropertyGroup.prototype._bindVisibilityRecursive = function () {
	        this.forEachChildRecursive(function (property) {
	            property._bindVisibility();
	        });
	    };
	    PropertyGroup.prototype.isRoot = function () {
	        return this === this.root;
	    };
	    return PropertyGroup;
	}(FormProperty));
	exports.PropertyGroup = PropertyGroup;
	

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("rxjs/Observable");

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("rxjs/BehaviorSubject");

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("rxjs/add/observable/combineLatest");

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("rxjs/add/operator/map");

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("rxjs/add/operator/do");

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = require("rxjs/add/operator/distinctUntilChanged");

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var atomicproperty_1 = __webpack_require__(14);
	var NumberProperty = (function (_super) {
	    __extends(NumberProperty, _super);
	    function NumberProperty() {
	        _super.apply(this, arguments);
	    }
	    NumberProperty.prototype.fallbackValue = function () {
	        var value;
	        if (this.schema.minimum !== undefined) {
	            value = this.schema.minimum;
	        }
	        else {
	            value = 0;
	        }
	        return value;
	    };
	    return NumberProperty;
	}(atomicproperty_1.AtomicProperty));
	exports.NumberProperty = NumberProperty;
	

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var formproperty_1 = __webpack_require__(6);
	var AtomicProperty = (function (_super) {
	    __extends(AtomicProperty, _super);
	    function AtomicProperty() {
	        _super.apply(this, arguments);
	    }
	    AtomicProperty.prototype.setValue = function (value, onlySelf) {
	        if (onlySelf === void 0) { onlySelf = false; }
	        this._value = value;
	        this.updateValueAndValidity(onlySelf, true);
	    };
	    AtomicProperty.prototype.reset = function (value, onlySelf) {
	        if (value === void 0) { value = null; }
	        if (onlySelf === void 0) { onlySelf = true; }
	        this.resetValue(value);
	        this.updateValueAndValidity(onlySelf, true);
	    };
	    AtomicProperty.prototype.resetValue = function (value) {
	        if (value === null) {
	            if (this.schema.default !== undefined) {
	                value = this.schema.default;
	            }
	            else {
	                value = this.fallbackValue();
	            }
	        }
	        this._value = value;
	    };
	    AtomicProperty.prototype._updateValue = function () { };
	    ;
	    return AtomicProperty;
	}(formproperty_1.FormProperty));
	exports.AtomicProperty = AtomicProperty;
	

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var atomicproperty_1 = __webpack_require__(14);
	var StringProperty = (function (_super) {
	    __extends(StringProperty, _super);
	    function StringProperty() {
	        _super.apply(this, arguments);
	    }
	    StringProperty.prototype.fallbackValue = function () {
	        return "";
	    };
	    return StringProperty;
	}(atomicproperty_1.AtomicProperty));
	exports.StringProperty = StringProperty;
	

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var atomicproperty_1 = __webpack_require__(14);
	var BooleanProperty = (function (_super) {
	    __extends(BooleanProperty, _super);
	    function BooleanProperty() {
	        _super.apply(this, arguments);
	    }
	    BooleanProperty.prototype.fallbackValue = function () {
	        return false;
	    };
	    return BooleanProperty;
	}(atomicproperty_1.AtomicProperty));
	exports.BooleanProperty = BooleanProperty;
	

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var formproperty_1 = __webpack_require__(6);
	var ObjectProperty = (function (_super) {
	    __extends(ObjectProperty, _super);
	    function ObjectProperty(formPropertyFactory, schemaValidatorFactory, validatorRegistry, schema, parent, path) {
	        _super.call(this, schemaValidatorFactory, validatorRegistry, schema, parent, path);
	        this.formPropertyFactory = formPropertyFactory;
	        this.propertiesId = [];
	        this.createProperties();
	    }
	    ObjectProperty.prototype.setValue = function (value, onlySelf) {
	        for (var propertyId in value) {
	            this.properties[propertyId].setValue(value[propertyId], true);
	        }
	        this.updateValueAndValidity(onlySelf, true);
	    };
	    ObjectProperty.prototype.reset = function (value, onlySelf) {
	        if (onlySelf === void 0) { onlySelf = true; }
	        value = value || this.schema.default || {};
	        this.resetProperties(value);
	        this.updateValueAndValidity(onlySelf, true);
	    };
	    ObjectProperty.prototype.resetProperties = function (value) {
	        for (var propertyId in this.schema.properties) {
	            this.properties[propertyId].reset(value[propertyId], true);
	        }
	    };
	    ObjectProperty.prototype.createProperties = function () {
	        this.properties = {};
	        this.propertiesId = [];
	        for (var propertyId in this.schema.properties) {
	            var propertySchema = this.schema.properties[propertyId];
	            var property = this.formPropertyFactory.createProperty(propertySchema, this, propertyId);
	            this.properties[propertyId] = property;
	            this.propertiesId.push(propertyId);
	        }
	    };
	    ObjectProperty.prototype._updateValue = function () {
	        this.reduceValue();
	    };
	    ObjectProperty.prototype.reduceValue = function () {
	        var value = {};
	        this.forEachChild(function (property, propertyId) {
	            if (property.visible) {
	                value[propertyId] = property.value;
	            }
	        });
	        this._value = value;
	    };
	    return ObjectProperty;
	}(formproperty_1.PropertyGroup));
	exports.ObjectProperty = ObjectProperty;
	

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var formproperty_1 = __webpack_require__(6);
	var ArrayProperty = (function (_super) {
	    __extends(ArrayProperty, _super);
	    function ArrayProperty(formPropertyFactory, schemaValidatorFactory, validatorRegistry, schema, parent, path) {
	        _super.call(this, schemaValidatorFactory, validatorRegistry, schema, parent, path);
	        this.formPropertyFactory = formPropertyFactory;
	    }
	    ArrayProperty.prototype.addItem = function (value) {
	        if (value === void 0) { value = null; }
	        var newProperty = this.addProperty();
	        newProperty.reset(value, false);
	        return newProperty;
	    };
	    ArrayProperty.prototype.addProperty = function () {
	        var newProperty = this.formPropertyFactory.createProperty(this.schema.items, this);
	        this.properties.push(newProperty);
	        return newProperty;
	    };
	    ArrayProperty.prototype.removeItem = function (index) {
	        this.properties.splice(index, 1);
	        this.updateValueAndValidity(false, true);
	    };
	    ArrayProperty.prototype.setValue = function (value, onlySelf) {
	        this.createProperties();
	        this.resetProperties(value);
	        this.updateValueAndValidity(onlySelf, true);
	    };
	    ArrayProperty.prototype._updateValue = function () {
	        this.reduceValue();
	    };
	    ArrayProperty.prototype.reduceValue = function () {
	        var value = [];
	        this.forEachChild(function (property, _) {
	            if (property.visible) {
	                value.push(property.value);
	            }
	        });
	        this._value = value;
	    };
	    ArrayProperty.prototype.reset = function (value, onlySelf) {
	        if (onlySelf === void 0) { onlySelf = true; }
	        value = value || this.schema.default || [];
	        this.properties = [];
	        this.resetProperties(value);
	        this.updateValueAndValidity(onlySelf, true);
	    };
	    ArrayProperty.prototype.createProperties = function () {
	        this.properties = [];
	    };
	    ArrayProperty.prototype.resetProperties = function (value) {
	        for (var idx in value) {
	            var property = this.addProperty();
	            property.reset(value[idx], true);
	        }
	    };
	    return ArrayProperty;
	}(formproperty_1.PropertyGroup));
	exports.ArrayProperty = ArrayProperty;
	

/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";
	var ValidatorRegistry = (function () {
	    function ValidatorRegistry() {
	        this.validators = [];
	    }
	    ValidatorRegistry.prototype.register = function (path, validator) {
	        this.validators[path] = validator;
	    };
	    ValidatorRegistry.prototype.get = function (path) {
	        return this.validators[path];
	    };
	    ValidatorRegistry.prototype.clear = function () {
	        this.validators = [];
	    };
	    return ValidatorRegistry;
	}());
	exports.ValidatorRegistry = ValidatorRegistry;
	

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var utils_1 = __webpack_require__(21);
	function formatMessage(message, path) {
	    return "Parsing error on " + path + ": " + message;
	}
	function schemaError(message, path) {
	    var mesg = formatMessage(message, path);
	    throw new Error(mesg);
	}
	function schemaWarning(message, path) {
	    var mesg = formatMessage(message, path);
	}
	var SchemaPreprocessor = (function () {
	    function SchemaPreprocessor() {
	    }
	    SchemaPreprocessor.preprocess = function (jsonSchema, path) {
	        if (path === void 0) { path = "/"; }
	        jsonSchema = jsonSchema || {};
	        if (jsonSchema.type === "object") {
	            SchemaPreprocessor.checkProperties(jsonSchema, path);
	            SchemaPreprocessor.checkAndCreateFieldsets(jsonSchema, path);
	            SchemaPreprocessor.normalizeRequired(jsonSchema);
	        }
	        else if (jsonSchema.type === "array") {
	            SchemaPreprocessor.checkItems(jsonSchema, path);
	        }
	        SchemaPreprocessor.normalizeWidget(jsonSchema);
	        SchemaPreprocessor.recursiveCheck(jsonSchema, path);
	    };
	    SchemaPreprocessor.checkProperties = function (jsonSchema, path) {
	        if (utils_1.isBlank(jsonSchema.properties)) {
	            jsonSchema.properties = {};
	            schemaWarning("Provided json schema does not contain a 'properties' entry. Output schema will be empty", path);
	        }
	    };
	    SchemaPreprocessor.checkAndCreateFieldsets = function (jsonSchema, path) {
	        if (jsonSchema.fieldsets === undefined) {
	            if (jsonSchema.order !== undefined) {
	                SchemaPreprocessor.replaceOrderByFieldsets(jsonSchema);
	            }
	            else {
	                SchemaPreprocessor.createFieldsets(jsonSchema);
	            }
	        }
	        SchemaPreprocessor.checkFieldsUsage(jsonSchema, path);
	    };
	    SchemaPreprocessor.checkFieldsUsage = function (jsonSchema, path) {
	        var fieldsId = Object.keys(jsonSchema.properties);
	        var usedFields = {};
	        for (var _i = 0, _a = jsonSchema.fieldsets; _i < _a.length; _i++) {
	            var fieldset = _a[_i];
	            for (var _b = 0, _c = fieldset.fields; _b < _c.length; _b++) {
	                var fieldId = _c[_b];
	                if (usedFields[fieldId] === undefined) {
	                    usedFields[fieldId] = [];
	                }
	                usedFields[fieldId].push(fieldset.id);
	            }
	        }
	        for (var _d = 0, fieldsId_1 = fieldsId; _d < fieldsId_1.length; _d++) {
	            var fieldId = fieldsId_1[_d];
	            if (usedFields.hasOwnProperty(fieldId)) {
	                if (usedFields[fieldId].length > 1) {
	                    schemaError(fieldId + " is referenced by more than one fieldset: " + usedFields[fieldId], path);
	                }
	                delete usedFields[fieldId];
	            }
	            else if (jsonSchema.required.indexOf(fieldId) > -1) {
	                schemaError(fieldId + " is a required field but it is not referenced as part of a 'order' or a 'fieldset' property", path);
	            }
	            else {
	                delete jsonSchema[fieldId];
	                schemaWarning("Removing unreferenced field '" + fieldId + "'", path);
	            }
	        }
	        for (var remainingfieldsId in usedFields) {
	            schemaWarning("Referencing non-existent field '" + remainingfieldsId + "' in one or more fieldsets", path);
	        }
	    };
	    SchemaPreprocessor.createFieldsets = function (jsonSchema) {
	        jsonSchema.order = Object.keys(jsonSchema.properties);
	        SchemaPreprocessor.replaceOrderByFieldsets(jsonSchema);
	    };
	    SchemaPreprocessor.replaceOrderByFieldsets = function (jsonSchema) {
	        jsonSchema.fieldsets = [{
	                id: "fieldset-default",
	                title: jsonSchema.description || "",
	                fields: jsonSchema.order
	            }];
	        delete jsonSchema.order;
	    };
	    SchemaPreprocessor.normalizeWidget = function (fieldSchema) {
	        var widget = fieldSchema.widget;
	        if (widget === undefined) {
	            widget = { "id": fieldSchema.type };
	        }
	        else if (typeof widget === "string") {
	            widget = { "id": widget };
	        }
	        fieldSchema.widget = widget;
	    };
	    SchemaPreprocessor.normalizeRequired = function (jsonSchema) {
	        if (jsonSchema.type === "object" && jsonSchema.required === undefined) {
	            jsonSchema.required = Object.keys(jsonSchema.properties);
	        }
	    };
	    SchemaPreprocessor.checkItems = function (jsonSchema, path) {
	        if (jsonSchema.items === undefined) {
	            schemaError("No 'items' property in array", path);
	        }
	    };
	    SchemaPreprocessor.recursiveCheck = function (jsonSchema, path) {
	        if (jsonSchema.type === "object") {
	            for (var fieldId in jsonSchema.properties) {
	                var fieldSchema = jsonSchema.properties[fieldId];
	                SchemaPreprocessor.preprocess(fieldSchema, path + fieldId + "/");
	            }
	        }
	        else if (jsonSchema.type === "array") {
	            SchemaPreprocessor.preprocess(jsonSchema.items, path + "*/");
	        }
	    };
	    return SchemaPreprocessor;
	}());
	exports.SchemaPreprocessor = SchemaPreprocessor;
	

/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";
	function isPresent(o) {
	    return o !== null && o !== undefined;
	}
	exports.isPresent = isPresent;
	function isBlank(o) {
	    return o === null || o === undefined;
	}
	exports.isBlank = isBlank;
	

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ZSchema = __webpack_require__(23);
	var SchemaValidatorFactory = (function () {
	    function SchemaValidatorFactory() {
	    }
	    return SchemaValidatorFactory;
	}());
	exports.SchemaValidatorFactory = SchemaValidatorFactory;
	var ZSchemaValidatorFactory = (function (_super) {
	    __extends(ZSchemaValidatorFactory, _super);
	    function ZSchemaValidatorFactory() {
	        _super.call(this);
	        this.zschema = new ZSchema({});
	    }
	    ZSchemaValidatorFactory.prototype.createValidatorFn = function (schema) {
	        var _this = this;
	        return function (value) {
	            if (schema.type === "number" || schema.type === "integer") {
	                value = +value;
	            }
	            var result = _this.zschema.validate(value, schema);
	            var err = _this.zschema.getLastErrors();
	            return err || null;
	        };
	    };
	    return ZSchemaValidatorFactory;
	}(SchemaValidatorFactory));
	exports.ZSchemaValidatorFactory = ZSchemaValidatorFactory;
	

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	__webpack_require__(25);
	var get               = __webpack_require__(26);
	var Report            = __webpack_require__(27);
	var FormatValidators  = __webpack_require__(30);
	var JsonValidation    = __webpack_require__(32);
	var SchemaCache       = __webpack_require__(33);
	var SchemaCompilation = __webpack_require__(34);
	var SchemaValidation  = __webpack_require__(35);
	var Utils             = __webpack_require__(29);
	var Draft4Schema      = __webpack_require__(36);
	var Draft4HyperSchema = __webpack_require__(37);

	/*
	    default options
	*/
	var defaultOptions = {
	    // default timeout for all async tasks
	    asyncTimeout: 2000,
	    // force additionalProperties and additionalItems to be defined on "object" and "array" types
	    forceAdditional: false,
	    // assume additionalProperties and additionalItems are defined as "false" where appropriate
	    assumeAdditional: false,
	    // force items to be defined on "array" types
	    forceItems: false,
	    // force minItems to be defined on "array" types
	    forceMinItems: false,
	    // force maxItems to be defined on "array" types
	    forceMaxItems: false,
	    // force minLength to be defined on "string" types
	    forceMinLength: false,
	    // force maxLength to be defined on "string" types
	    forceMaxLength: false,
	    // force properties or patternProperties to be defined on "object" types
	    forceProperties: false,
	    // ignore references that cannot be resolved (remote schemas) // TODO: make sure this is only for remote schemas, not local ones
	    ignoreUnresolvableReferences: false,
	    // disallow usage of keywords that this validator can't handle
	    noExtraKeywords: false,
	    // disallow usage of schema's without "type" defined
	    noTypeless: false,
	    // disallow zero length strings in validated objects
	    noEmptyStrings: false,
	    // disallow zero length arrays in validated objects
	    noEmptyArrays: false,
	    // forces "uri" format to be in fully rfc3986 compliant
	    strictUris: false,
	    // turn on some of the above
	    strictMode: false,
	    // report error paths as an array of path segments to get to the offending node
	    reportPathAsArray: false,
	    // stops validation as soon as an error is found, true by default but can be turned off
	    breakOnFirstError: true,
	    // check if schema follow best practices and common sence
	    pedanticCheck: false,
	    // ignore unknown formats (do not report them as an error)
	    ignoreUnknownFormats: false,
	    // function to be called on every schema
	    customValidator: null
	};

	/*
	    constructor
	*/
	function ZSchema(options) {
	    this.cache = {};
	    this.referenceCache = [];

	    this.setRemoteReference("http://json-schema.org/draft-04/schema", Draft4Schema);
	    this.setRemoteReference("http://json-schema.org/draft-04/hyper-schema", Draft4HyperSchema);

	    // options
	    if (typeof options === "object") {
	        var keys = Object.keys(options),
	            idx = keys.length,
	            key;

	        // check that the options are correctly configured
	        while (idx--) {
	            key = keys[idx];
	            if (defaultOptions[key] === undefined) {
	                throw new Error("Unexpected option passed to constructor: " + key);
	            }
	        }

	        // copy the default options into passed options
	        keys = Object.keys(defaultOptions);
	        idx = keys.length;
	        while (idx--) {
	            key = keys[idx];
	            if (options[key] === undefined) {
	                options[key] = Utils.clone(defaultOptions[key]);
	            }
	        }

	        this.options = options;
	    } else {
	        this.options = Utils.clone(defaultOptions);
	    }

	    if (this.options.strictMode === true) {
	        this.options.forceAdditional  = true;
	        this.options.forceItems       = true;
	        this.options.forceMaxLength   = true;
	        this.options.forceProperties  = true;
	        this.options.noExtraKeywords  = true;
	        this.options.noTypeless       = true;
	        this.options.noEmptyStrings   = true;
	        this.options.noEmptyArrays    = true;
	    }

	}

	/*
	    instance methods
	*/
	ZSchema.prototype.compileSchema = function (schema) {
	    var report = new Report(this.options);

	    schema = SchemaCache.getSchema.call(this, report, schema);

	    SchemaCompilation.compileSchema.call(this, report, schema);

	    this.lastReport = report;
	    return report.isValid();
	};
	ZSchema.prototype.validateSchema = function (schema) {
	    if (Array.isArray(schema) && schema.length === 0) {
	        throw new Error(".validateSchema was called with an empty array");
	    }

	    var report = new Report(this.options);

	    schema = SchemaCache.getSchema.call(this, report, schema);

	    var compiled = SchemaCompilation.compileSchema.call(this, report, schema);
	    if (compiled) { SchemaValidation.validateSchema.call(this, report, schema); }

	    this.lastReport = report;
	    return report.isValid();
	};
	ZSchema.prototype.validate = function (json, schema, options, callback) {

	    if (Utils.whatIs(options) === "function") {
	        callback = options;
	        options = {};
	    }
	    if (!options) { options = {}; }

	    var whatIs = Utils.whatIs(schema);
	    if (whatIs !== "string" && whatIs !== "object") {
	        var e = new Error("Invalid .validate call - schema must be an string or object but " + whatIs + " was passed!");
	        if (callback) {
	            process.nextTick(function () {
	                callback(e, false);
	            });
	            return;
	        }
	        throw e;
	    }

	    var foundError = false;
	    var report = new Report(this.options);

	    if (typeof schema === "string") {
	        var schemaName = schema;
	        schema = SchemaCache.getSchema.call(this, report, schemaName);
	        if (!schema) {
	            throw new Error("Schema with id '" + schemaName + "' wasn't found in the validator cache!");
	        }
	    } else {
	        schema = SchemaCache.getSchema.call(this, report, schema);
	    }

	    var compiled = false;
	    if (!foundError) {
	        compiled = SchemaCompilation.compileSchema.call(this, report, schema);
	    }
	    if (!compiled) {
	        this.lastReport = report;
	        foundError = true;
	    }

	    var validated = false;
	    if (!foundError) {
	        validated = SchemaValidation.validateSchema.call(this, report, schema);
	    }
	    if (!validated) {
	        this.lastReport = report;
	        foundError = true;
	    }

	    if (options.schemaPath) {
	        report.rootSchema = schema;
	        schema = get(schema, options.schemaPath);
	        if (!schema) {
	            throw new Error("Schema path '" + options.schemaPath + "' wasn't found in the schema!");
	        }
	    }

	    if (!foundError) {
	        JsonValidation.validate.call(this, report, schema, json);
	    }

	    if (callback) {
	        report.processAsyncTasks(this.options.asyncTimeout, callback);
	        return;
	    } else if (report.asyncTasks.length > 0) {
	        throw new Error("This validation has async tasks and cannot be done in sync mode, please provide callback argument.");
	    }

	    // assign lastReport so errors are retrievable in sync mode
	    this.lastReport = report;
	    return report.isValid();
	};
	ZSchema.prototype.getLastError = function () {
	    if (this.lastReport.errors.length === 0) {
	        return null;
	    }
	    var e = new Error();
	    e.name = "z-schema validation error";
	    e.message = this.lastReport.commonErrorMessage;
	    e.details = this.lastReport.errors;
	    return e;
	};
	ZSchema.prototype.getLastErrors = function () {
	    return this.lastReport && this.lastReport.errors.length > 0 ? this.lastReport.errors : undefined;
	};
	ZSchema.prototype.getMissingReferences = function (arr) {
	    arr = arr || this.lastReport.errors;
	    var res = [],
	        idx = arr.length;
	    while (idx--) {
	        var error = arr[idx];
	        if (error.code === "UNRESOLVABLE_REFERENCE") {
	            var reference = error.params[0];
	            if (res.indexOf(reference) === -1) {
	                res.push(reference);
	            }
	        }
	        if (error.inner) {
	            res = res.concat(this.getMissingReferences(error.inner));
	        }
	    }
	    return res;
	};
	ZSchema.prototype.getMissingRemoteReferences = function () {
	    var missingReferences = this.getMissingReferences(),
	        missingRemoteReferences = [],
	        idx = missingReferences.length;
	    while (idx--) {
	        var remoteReference = SchemaCache.getRemotePath(missingReferences[idx]);
	        if (remoteReference && missingRemoteReferences.indexOf(remoteReference) === -1) {
	            missingRemoteReferences.push(remoteReference);
	        }
	    }
	    return missingRemoteReferences;
	};
	ZSchema.prototype.setRemoteReference = function (uri, schema) {
	    if (typeof schema === "string") {
	        schema = JSON.parse(schema);
	    } else {
	        schema = Utils.cloneDeep(schema);
	    }
	    SchemaCache.cacheSchemaByUri.call(this, uri, schema);
	};
	ZSchema.prototype.getResolvedSchema = function (schema) {
	    var report = new Report(this.options);
	    schema = SchemaCache.getSchema.call(this, report, schema);

	    // clone before making any modifications
	    schema = Utils.cloneDeep(schema);

	    var visited = [];

	    // clean-up the schema and resolve references
	    var cleanup = function (schema) {
	        var key,
	            typeOf = Utils.whatIs(schema);
	        if (typeOf !== "object" && typeOf !== "array") {
	            return;
	        }

	        if (schema.___$visited) {
	            return;
	        }

	        schema.___$visited = true;
	        visited.push(schema);

	        if (schema.$ref && schema.__$refResolved) {
	            var from = schema.__$refResolved;
	            var to = schema;
	            delete schema.$ref;
	            delete schema.__$refResolved;
	            for (key in from) {
	                if (from.hasOwnProperty(key)) {
	                    to[key] = from[key];
	                }
	            }
	        }
	        for (key in schema) {
	            if (schema.hasOwnProperty(key)) {
	                if (key.indexOf("__$") === 0) {
	                    delete schema[key];
	                } else {
	                    cleanup(schema[key]);
	                }
	            }
	        }
	    };

	    cleanup(schema);
	    visited.forEach(function (s) {
	        delete s.___$visited;
	    });

	    this.lastReport = report;
	    if (report.isValid()) {
	        return schema;
	    } else {
	        throw this.getLastError();
	    }
	};
	ZSchema.prototype.setSchemaReader = function (schemaReader) {
	    return ZSchema.setSchemaReader(schemaReader);
	};
	ZSchema.prototype.getSchemaReader = function () {
	    return ZSchema.schemaReader;
	};

	/*
	    static methods
	*/
	ZSchema.setSchemaReader = function (schemaReader) {
	    ZSchema.schemaReader = schemaReader;
	};
	ZSchema.registerFormat = function (formatName, validatorFunction) {
	    FormatValidators[formatName] = validatorFunction;
	};
	ZSchema.unregisterFormat = function (formatName) {
	    delete FormatValidators[formatName];
	};
	ZSchema.getRegisteredFormats = function () {
	    return Object.keys(FormatValidators);
	};
	ZSchema.getDefaultOptions = function () {
	    return Utils.cloneDeep(defaultOptions);
	};

	module.exports = ZSchema;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(24)))

/***/ },
/* 24 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 25 */
/***/ function(module, exports) {

	// Number.isFinite polyfill
	// http://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.isfinite
	if (typeof Number.isFinite !== "function") {
	    Number.isFinite = function isFinite(value) {
	        // 1. If Type(number) is not Number, return false.
	        if (typeof value !== "number") {
	            return false;
	        }
	        // 2. If number is NaN, +∞, or −∞, return false.
	        if (value !== value || value === Infinity || value === -Infinity) {
	            return false;
	        }
	        // 3. Otherwise, return true.
	        return true;
	    };
	}


/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = require("lodash.get");

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	var get    = __webpack_require__(26);
	var Errors = __webpack_require__(28);
	var Utils  = __webpack_require__(29);

	function Report(parentOrOptions, reportOptions) {
	    this.parentReport = parentOrOptions instanceof Report ?
	                            parentOrOptions :
	                            undefined;

	    this.options = parentOrOptions instanceof Report ?
	                       parentOrOptions.options :
	                       parentOrOptions || {};

	    this.reportOptions = reportOptions || {};

	    this.errors = [];
	    this.path = [];
	    this.asyncTasks = [];
	}

	Report.prototype.isValid = function () {
	    if (this.asyncTasks.length > 0) {
	        throw new Error("Async tasks pending, can't answer isValid");
	    }
	    return this.errors.length === 0;
	};

	Report.prototype.addAsyncTask = function (fn, args, asyncTaskResultProcessFn) {
	    this.asyncTasks.push([fn, args, asyncTaskResultProcessFn]);
	};

	Report.prototype.processAsyncTasks = function (timeout, callback) {

	    var validationTimeout = timeout || 2000,
	        tasksCount        = this.asyncTasks.length,
	        idx               = tasksCount,
	        timedOut          = false,
	        self              = this;

	    function finish() {
	        process.nextTick(function () {
	            var valid = self.errors.length === 0,
	                err   = valid ? undefined : self.errors;
	            callback(err, valid);
	        });
	    }

	    function respond(asyncTaskResultProcessFn) {
	        return function (asyncTaskResult) {
	            if (timedOut) { return; }
	            asyncTaskResultProcessFn(asyncTaskResult);
	            if (--tasksCount === 0) {
	                finish();
	            }
	        };
	    }

	    if (tasksCount === 0 || this.errors.length > 0) {
	        finish();
	        return;
	    }

	    while (idx--) {
	        var task = this.asyncTasks[idx];
	        task[0].apply(null, task[1].concat(respond(task[2])));
	    }

	    setTimeout(function () {
	        if (tasksCount > 0) {
	            timedOut = true;
	            self.addError("ASYNC_TIMEOUT", [tasksCount, validationTimeout]);
	            callback(self.errors, false);
	        }
	    }, validationTimeout);

	};

	Report.prototype.getPath = function (returnPathAsString) {
	    var path = [];
	    if (this.parentReport) {
	        path = path.concat(this.parentReport.path);
	    }
	    path = path.concat(this.path);

	    if (returnPathAsString !== true) {
	        // Sanitize the path segments (http://tools.ietf.org/html/rfc6901#section-4)
	        path = "#/" + path.map(function (segment) {

	            if (Utils.isAbsoluteUri(segment)) {
	                return "uri(" + segment + ")";
	            }

	            return segment.replace(/\~/g, "~0").replace(/\//g, "~1");
	        }).join("/");
	    }
	    return path;
	};

	Report.prototype.getSchemaId = function () {

	    if (!this.rootSchema) {
	        return null;
	    }

	    // get the error path as an array
	    var path = [];
	    if (this.parentReport) {
	        path = path.concat(this.parentReport.path);
	    }
	    path = path.concat(this.path);

	    // try to find id in the error path
	    while (path.length > 0) {
	        var obj = get(this.rootSchema, path);
	        if (obj && obj.id) { return obj.id; }
	        path.pop();
	    }

	    // return id of the root
	    return this.rootSchema.id;
	};

	Report.prototype.hasError = function (errorCode, params) {
	    var idx = this.errors.length;
	    while (idx--) {
	        if (this.errors[idx].code === errorCode) {
	            // assume match
	            var match = true;

	            // check the params too
	            var idx2 = this.errors[idx].params.length;
	            while (idx2--) {
	                if (this.errors[idx].params[idx2] !== params[idx2]) {
	                    match = false;
	                }
	            }

	            // if match, return true
	            if (match) { return match; }
	        }
	    }
	    return false;
	};

	Report.prototype.addError = function (errorCode, params, subReports, schemaDescription) {
	    if (!errorCode) { throw new Error("No errorCode passed into addError()"); }

	    this.addCustomError(errorCode, Errors[errorCode], params, subReports, schemaDescription);
	};

	Report.prototype.addCustomError = function (errorCode, errorMessage, params, subReports, schemaDescription) {
	    if (this.errors.length >= this.reportOptions.maxErrors) {
	        return;
	    }

	    if (!errorMessage) { throw new Error("No errorMessage known for code " + errorCode); }

	    params = params || [];

	    var idx = params.length;
	    while (idx--) {
	        var whatIs = Utils.whatIs(params[idx]);
	        var param = (whatIs === "object" || whatIs === "null") ? JSON.stringify(params[idx]) : params[idx];
	        errorMessage = errorMessage.replace("{" + idx + "}", param);
	    }

	    var err = {
	        code: errorCode,
	        params: params,
	        message: errorMessage,
	        path: this.getPath(this.options.reportPathAsArray),
	        schemaId: this.getSchemaId()
	    };

	    if (schemaDescription) {
	        err.description = schemaDescription;
	    }

	    if (subReports != null) {
	        if (!Array.isArray(subReports)) {
	            subReports = [subReports];
	        }
	        err.inner = [];
	        idx = subReports.length;
	        while (idx--) {
	            var subReport = subReports[idx],
	                idx2 = subReport.errors.length;
	            while (idx2--) {
	                err.inner.push(subReport.errors[idx2]);
	            }
	        }
	        if (err.inner.length === 0) {
	            err.inner = undefined;
	        }
	    }

	    this.errors.push(err);
	};

	module.exports = Report;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(24)))

/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {

	    INVALID_TYPE:                           "Expected type {0} but found type {1}",
	    INVALID_FORMAT:                         "Object didn't pass validation for format {0}: {1}",
	    ENUM_MISMATCH:                          "No enum match for: {0}",
	    ANY_OF_MISSING:                         "Data does not match any schemas from 'anyOf'",
	    ONE_OF_MISSING:                         "Data does not match any schemas from 'oneOf'",
	    ONE_OF_MULTIPLE:                        "Data is valid against more than one schema from 'oneOf'",
	    NOT_PASSED:                             "Data matches schema from 'not'",

	    // Array errors
	    ARRAY_LENGTH_SHORT:                     "Array is too short ({0}), minimum {1}",
	    ARRAY_LENGTH_LONG:                      "Array is too long ({0}), maximum {1}",
	    ARRAY_UNIQUE:                           "Array items are not unique (indexes {0} and {1})",
	    ARRAY_ADDITIONAL_ITEMS:                 "Additional items not allowed",

	    // Numeric errors
	    MULTIPLE_OF:                            "Value {0} is not a multiple of {1}",
	    MINIMUM:                                "Value {0} is less than minimum {1}",
	    MINIMUM_EXCLUSIVE:                      "Value {0} is equal or less than exclusive minimum {1}",
	    MAXIMUM:                                "Value {0} is greater than maximum {1}",
	    MAXIMUM_EXCLUSIVE:                      "Value {0} is equal or greater than exclusive maximum {1}",

	    // Object errors
	    OBJECT_PROPERTIES_MINIMUM:              "Too few properties defined ({0}), minimum {1}",
	    OBJECT_PROPERTIES_MAXIMUM:              "Too many properties defined ({0}), maximum {1}",
	    OBJECT_MISSING_REQUIRED_PROPERTY:       "Missing required property: {0}",
	    OBJECT_ADDITIONAL_PROPERTIES:           "Additional properties not allowed: {0}",
	    OBJECT_DEPENDENCY_KEY:                  "Dependency failed - key must exist: {0} (due to key: {1})",

	    // String errors
	    MIN_LENGTH:                             "String is too short ({0} chars), minimum {1}",
	    MAX_LENGTH:                             "String is too long ({0} chars), maximum {1}",
	    PATTERN:                                "String does not match pattern {0}: {1}",

	    // Schema validation errors
	    KEYWORD_TYPE_EXPECTED:                  "Keyword '{0}' is expected to be of type '{1}'",
	    KEYWORD_UNDEFINED_STRICT:               "Keyword '{0}' must be defined in strict mode",
	    KEYWORD_UNEXPECTED:                     "Keyword '{0}' is not expected to appear in the schema",
	    KEYWORD_MUST_BE:                        "Keyword '{0}' must be {1}",
	    KEYWORD_DEPENDENCY:                     "Keyword '{0}' requires keyword '{1}'",
	    KEYWORD_PATTERN:                        "Keyword '{0}' is not a valid RegExp pattern: {1}",
	    KEYWORD_VALUE_TYPE:                     "Each element of keyword '{0}' array must be a '{1}'",
	    UNKNOWN_FORMAT:                         "There is no validation function for format '{0}'",
	    CUSTOM_MODE_FORCE_PROPERTIES:           "{0} must define at least one property if present",

	    // Remote errors
	    REF_UNRESOLVED:                         "Reference has not been resolved during compilation: {0}",
	    UNRESOLVABLE_REFERENCE:                 "Reference could not be resolved: {0}",
	    SCHEMA_NOT_REACHABLE:                   "Validator was not able to read schema with uri: {0}",
	    SCHEMA_TYPE_EXPECTED:                   "Schema is expected to be of type 'object'",
	    SCHEMA_NOT_AN_OBJECT:                   "Schema is not an object: {0}",
	    ASYNC_TIMEOUT:                          "{0} asynchronous task(s) have timed out after {1} ms",
	    PARENT_SCHEMA_VALIDATION_FAILED:        "Schema failed to validate against its parent schema, see inner errors for details.",
	    REMOTE_NOT_VALID:                       "Remote reference didn't compile successfully: {0}"

	};


/***/ },
/* 29 */
/***/ function(module, exports) {

	"use strict";

	exports.isAbsoluteUri = function (uri) {
	    return /^https?:\/\//.test(uri);
	};

	exports.isRelativeUri = function (uri) {
	    // relative URIs that end with a hash sign, issue #56
	    return /.+#/.test(uri);
	};

	exports.whatIs = function (what) {

	    var to = typeof what;

	    if (to === "object") {
	        if (what === null) {
	            return "null";
	        }
	        if (Array.isArray(what)) {
	            return "array";
	        }
	        return "object"; // typeof what === 'object' && what === Object(what) && !Array.isArray(what);
	    }

	    if (to === "number") {
	        if (Number.isFinite(what)) {
	            if (what % 1 === 0) {
	                return "integer";
	            } else {
	                return "number";
	            }
	        }
	        if (Number.isNaN(what)) {
	            return "not-a-number";
	        }
	        return "unknown-number";
	    }

	    return to; // undefined, boolean, string, function

	};

	exports.areEqual = function areEqual(json1, json2) {
	    // http://json-schema.org/latest/json-schema-core.html#rfc.section.3.6

	    // Two JSON values are said to be equal if and only if:
	    // both are nulls; or
	    // both are booleans, and have the same value; or
	    // both are strings, and have the same value; or
	    // both are numbers, and have the same mathematical value; or
	    if (json1 === json2) {
	        return true;
	    }

	    var i, len;

	    // both are arrays, and:
	    if (Array.isArray(json1) && Array.isArray(json2)) {
	        // have the same number of items; and
	        if (json1.length !== json2.length) {
	            return false;
	        }
	        // items at the same index are equal according to this definition; or
	        len = json1.length;
	        for (i = 0; i < len; i++) {
	            if (!areEqual(json1[i], json2[i])) {
	                return false;
	            }
	        }
	        return true;
	    }

	    // both are objects, and:
	    if (exports.whatIs(json1) === "object" && exports.whatIs(json2) === "object") {
	        // have the same set of property names; and
	        var keys1 = Object.keys(json1);
	        var keys2 = Object.keys(json2);
	        if (!areEqual(keys1, keys2)) {
	            return false;
	        }
	        // values for a same property name are equal according to this definition.
	        len = keys1.length;
	        for (i = 0; i < len; i++) {
	            if (!areEqual(json1[keys1[i]], json2[keys1[i]])) {
	                return false;
	            }
	        }
	        return true;
	    }

	    return false;
	};

	exports.isUniqueArray = function (arr, indexes) {
	    var i, j, l = arr.length;
	    for (i = 0; i < l; i++) {
	        for (j = i + 1; j < l; j++) {
	            if (exports.areEqual(arr[i], arr[j])) {
	                if (indexes) { indexes.push(i, j); }
	                return false;
	            }
	        }
	    }
	    return true;
	};

	exports.difference = function (bigSet, subSet) {
	    var arr = [],
	        idx = bigSet.length;
	    while (idx--) {
	        if (subSet.indexOf(bigSet[idx]) === -1) {
	            arr.push(bigSet[idx]);
	        }
	    }
	    return arr;
	};

	// NOT a deep version of clone
	exports.clone = function (src) {
	    if (typeof src === "undefined") { return void 0; }
	    if (typeof src !== "object" || src === null) { return src; }
	    var res, idx;
	    if (Array.isArray(src)) {
	        res = [];
	        idx = src.length;
	        while (idx--) {
	            res[idx] = src[idx];
	        }
	    } else {
	        res = {};
	        var keys = Object.keys(src);
	        idx = keys.length;
	        while (idx--) {
	            var key = keys[idx];
	            res[key] = src[key];
	        }
	    }
	    return res;
	};

	exports.cloneDeep = function (src) {
	    var visited = [], cloned = [];
	    function cloneDeep(src) {
	        if (typeof src !== "object" || src === null) { return src; }
	        var res, idx, cidx;

	        cidx = visited.indexOf(src);
	        if (cidx !== -1) { return cloned[cidx]; }

	        visited.push(src);
	        if (Array.isArray(src)) {
	            res = [];
	            cloned.push(res);
	            idx = src.length;
	            while (idx--) {
	                res[idx] = cloneDeep(src[idx]);
	            }
	        } else {
	            res = {};
	            cloned.push(res);
	            var keys = Object.keys(src);
	            idx = keys.length;
	            while (idx--) {
	                var key = keys[idx];
	                res[key] = cloneDeep(src[key]);
	            }
	        }
	        return res;
	    }
	    return cloneDeep(src);
	};

	/*
	  following function comes from punycode.js library
	  see: https://github.com/bestiejs/punycode.js
	*/
	/*jshint -W016*/
	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	exports.ucs2decode = function (string) {
	    var output = [],
	        counter = 0,
	        length = string.length,
	        value,
	        extra;
	    while (counter < length) {
	        value = string.charCodeAt(counter++);
	        if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
	            // high surrogate, and there is a next character
	            extra = string.charCodeAt(counter++);
	            if ((extra & 0xFC00) == 0xDC00) { // low surrogate
	                output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
	            } else {
	                // unmatched surrogate; only append this code unit, in case the next
	                // code unit is the high surrogate of a surrogate pair
	                output.push(value);
	                counter--;
	            }
	        } else {
	            output.push(value);
	        }
	    }
	    return output;
	};
	/*jshint +W016*/


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/*jshint maxlen: false*/

	var validator = __webpack_require__(31);

	var FormatValidators = {
	    "date": function (date) {
	        if (typeof date !== "string") {
	            return true;
	        }
	        // full-date from http://tools.ietf.org/html/rfc3339#section-5.6
	        var matches = /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/.exec(date);
	        if (matches === null) {
	            return false;
	        }
	        // var year = matches[1];
	        // var month = matches[2];
	        // var day = matches[3];
	        if (matches[2] < "01" || matches[2] > "12" || matches[3] < "01" || matches[3] > "31") {
	            return false;
	        }
	        return true;
	    },
	    "date-time": function (dateTime) {
	        if (typeof dateTime !== "string") {
	            return true;
	        }
	        // date-time from http://tools.ietf.org/html/rfc3339#section-5.6
	        var s = dateTime.toLowerCase().split("t");
	        if (!FormatValidators.date(s[0])) {
	            return false;
	        }
	        var matches = /^([0-9]{2}):([0-9]{2}):([0-9]{2})(.[0-9]+)?(z|([+-][0-9]{2}:[0-9]{2}))$/.exec(s[1]);
	        if (matches === null) {
	            return false;
	        }
	        // var hour = matches[1];
	        // var minute = matches[2];
	        // var second = matches[3];
	        // var fraction = matches[4];
	        // var timezone = matches[5];
	        if (matches[1] > "23" || matches[2] > "59" || matches[3] > "59") {
	            return false;
	        }
	        return true;
	    },
	    "email": function (email) {
	        if (typeof email !== "string") {
	            return true;
	        }
	        return validator.isEmail(email, { "require_tld": true });
	    },
	    "hostname": function (hostname) {
	        if (typeof hostname !== "string") {
	            return true;
	        }
	        /*
	            http://json-schema.org/latest/json-schema-validation.html#anchor114
	            A string instance is valid against this attribute if it is a valid
	            representation for an Internet host name, as defined by RFC 1034, section 3.1 [RFC1034].

	            http://tools.ietf.org/html/rfc1034#section-3.5

	            <digit> ::= any one of the ten digits 0 through 9
	            var digit = /[0-9]/;

	            <letter> ::= any one of the 52 alphabetic characters A through Z in upper case and a through z in lower case
	            var letter = /[a-zA-Z]/;

	            <let-dig> ::= <letter> | <digit>
	            var letDig = /[0-9a-zA-Z]/;

	            <let-dig-hyp> ::= <let-dig> | "-"
	            var letDigHyp = /[-0-9a-zA-Z]/;

	            <ldh-str> ::= <let-dig-hyp> | <let-dig-hyp> <ldh-str>
	            var ldhStr = /[-0-9a-zA-Z]+/;

	            <label> ::= <letter> [ [ <ldh-str> ] <let-dig> ]
	            var label = /[a-zA-Z](([-0-9a-zA-Z]+)?[0-9a-zA-Z])?/;

	            <subdomain> ::= <label> | <subdomain> "." <label>
	            var subdomain = /^[a-zA-Z](([-0-9a-zA-Z]+)?[0-9a-zA-Z])?(\.[a-zA-Z](([-0-9a-zA-Z]+)?[0-9a-zA-Z])?)*$/;

	            <domain> ::= <subdomain> | " "
	            var domain = null;
	        */
	        var valid = /^[a-zA-Z](([-0-9a-zA-Z]+)?[0-9a-zA-Z])?(\.[a-zA-Z](([-0-9a-zA-Z]+)?[0-9a-zA-Z])?)*$/.test(hostname);
	        if (valid) {
	            // the sum of all label octets and label lengths is limited to 255.
	            if (hostname.length > 255) { return false; }
	            // Each node has a label, which is zero to 63 octets in length
	            var labels = hostname.split(".");
	            for (var i = 0; i < labels.length; i++) { if (labels[i].length > 63) { return false; } }
	        }
	        return valid;
	    },
	    "host-name": function (hostname) {
	        return FormatValidators.hostname.call(this, hostname);
	    },
	    "ipv4": function (ipv4) {
	        if (typeof ipv4 !== "string") { return true; }
	        return validator.isIP(ipv4, 4);
	    },
	    "ipv6": function (ipv6) {
	        if (typeof ipv6 !== "string") { return true; }
	        return validator.isIP(ipv6, 6);
	    },
	    "regex": function (str) {
	        try {
	            RegExp(str);
	            return true;
	        } catch (e) {
	            return false;
	        }
	    },
	    "uri": function (uri) {
	        if (this.options.strictUris) {
	            return FormatValidators["strict-uri"].apply(this, arguments);
	        }
	        // https://github.com/zaggino/z-schema/issues/18
	        // RegExp from http://tools.ietf.org/html/rfc3986#appendix-B
	        return typeof uri !== "string" || RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?").test(uri);
	    },
	    "strict-uri": function (uri) {
	        return typeof uri !== "string" || validator.isURL(uri);
	    }
	};

	module.exports = FormatValidators;


/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = require("validator");

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var FormatValidators  = __webpack_require__(30),
	    Report            = __webpack_require__(27),
	    Utils             = __webpack_require__(29);

	var JsonValidators = {
	    multipleOf: function (report, schema, json) {
	        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.1.1.2
	        if (typeof json !== "number") {
	            return;
	        }
	        if (Utils.whatIs(json / schema.multipleOf) !== "integer") {
	            report.addError("MULTIPLE_OF", [json, schema.multipleOf], null, schema.description);
	        }
	    },
	    maximum: function (report, schema, json) {
	        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.1.2.2
	        if (typeof json !== "number") {
	            return;
	        }
	        if (schema.exclusiveMaximum !== true) {
	            if (json > schema.maximum) {
	                report.addError("MAXIMUM", [json, schema.maximum], null, schema.description);
	            }
	        } else {
	            if (json >= schema.maximum) {
	                report.addError("MAXIMUM_EXCLUSIVE", [json, schema.maximum], null, schema.description);
	            }
	        }
	    },
	    exclusiveMaximum: function () {
	        // covered in maximum
	    },
	    minimum: function (report, schema, json) {
	        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.1.3.2
	        if (typeof json !== "number") {
	            return;
	        }
	        if (schema.exclusiveMinimum !== true) {
	            if (json < schema.minimum) {
	                report.addError("MINIMUM", [json, schema.minimum], null, schema.description);
	            }
	        } else {
	            if (json <= schema.minimum) {
	                report.addError("MINIMUM_EXCLUSIVE", [json, schema.minimum], null, schema.description);
	            }
	        }
	    },
	    exclusiveMinimum: function () {
	        // covered in minimum
	    },
	    maxLength: function (report, schema, json) {
	        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.2.1.2
	        if (typeof json !== "string") {
	            return;
	        }
	        if (Utils.ucs2decode(json).length > schema.maxLength) {
	            report.addError("MAX_LENGTH", [json.length, schema.maxLength], null, schema.description);
	        }
	    },
	    minLength: function (report, schema, json) {
	        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.2.2.2
	        if (typeof json !== "string") {
	            return;
	        }
	        if (Utils.ucs2decode(json).length < schema.minLength) {
	            report.addError("MIN_LENGTH", [json.length, schema.minLength], null, schema.description);
	        }
	    },
	    pattern: function (report, schema, json) {
	        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.2.3.2
	        if (typeof json !== "string") {
	            return;
	        }
	        if (RegExp(schema.pattern).test(json) === false) {
	            report.addError("PATTERN", [schema.pattern, json], null, schema.description);
	        }
	    },
	    additionalItems: function (report, schema, json) {
	        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.3.1.2
	        if (!Array.isArray(json)) {
	            return;
	        }
	        // if the value of "additionalItems" is boolean value false and the value of "items" is an array,
	        // the json is valid if its size is less than, or equal to, the size of "items".
	        if (schema.additionalItems === false && Array.isArray(schema.items)) {
	            if (json.length > schema.items.length) {
	                report.addError("ARRAY_ADDITIONAL_ITEMS", null, null, schema.description);
	            }
	        }
	    },
	    items: function () { /*report, schema, json*/
	        // covered in additionalItems
	    },
	    maxItems: function (report, schema, json) {
	        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.3.2.2
	        if (!Array.isArray(json)) {
	            return;
	        }
	        if (json.length > schema.maxItems) {
	            report.addError("ARRAY_LENGTH_LONG", [json.length, schema.maxItems], null, schema.description);
	        }
	    },
	    minItems: function (report, schema, json) {
	        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.3.3.2
	        if (!Array.isArray(json)) {
	            return;
	        }
	        if (json.length < schema.minItems) {
	            report.addError("ARRAY_LENGTH_SHORT", [json.length, schema.minItems], null, schema.description);
	        }
	    },
	    uniqueItems: function (report, schema, json) {
	        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.3.4.2
	        if (!Array.isArray(json)) {
	            return;
	        }
	        if (schema.uniqueItems === true) {
	            var matches = [];
	            if (Utils.isUniqueArray(json, matches) === false) {
	                report.addError("ARRAY_UNIQUE", matches, null, schema.description);
	            }
	        }
	    },
	    maxProperties: function (report, schema, json) {
	        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.4.1.2
	        if (Utils.whatIs(json) !== "object") {
	            return;
	        }
	        var keysCount = Object.keys(json).length;
	        if (keysCount > schema.maxProperties) {
	            report.addError("OBJECT_PROPERTIES_MAXIMUM", [keysCount, schema.maxProperties], null, schema.description);
	        }
	    },
	    minProperties: function (report, schema, json) {
	        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.4.2.2
	        if (Utils.whatIs(json) !== "object") {
	            return;
	        }
	        var keysCount = Object.keys(json).length;
	        if (keysCount < schema.minProperties) {
	            report.addError("OBJECT_PROPERTIES_MINIMUM", [keysCount, schema.minProperties], null, schema.description);
	        }
	    },
	    required: function (report, schema, json) {
	        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.4.3.2
	        if (Utils.whatIs(json) !== "object") {
	            return;
	        }
	        var idx = schema.required.length;
	        while (idx--) {
	            var requiredPropertyName = schema.required[idx];
	            if (json[requiredPropertyName] === undefined) {
	                report.addError("OBJECT_MISSING_REQUIRED_PROPERTY", [requiredPropertyName], null, schema.description);
	            }
	        }
	    },
	    additionalProperties: function (report, schema, json) {
	        // covered in properties and patternProperties
	        if (schema.properties === undefined && schema.patternProperties === undefined) {
	            return JsonValidators.properties.call(this, report, schema, json);
	        }
	    },
	    patternProperties: function (report, schema, json) {
	        // covered in properties
	        if (schema.properties === undefined) {
	            return JsonValidators.properties.call(this, report, schema, json);
	        }
	    },
	    properties: function (report, schema, json) {
	        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.4.4.2
	        if (Utils.whatIs(json) !== "object") {
	            return;
	        }
	        var properties = schema.properties !== undefined ? schema.properties : {};
	        var patternProperties = schema.patternProperties !== undefined ? schema.patternProperties : {};
	        if (schema.additionalProperties === false) {
	            // The property set of the json to validate.
	            var s = Object.keys(json);
	            // The property set from "properties".
	            var p = Object.keys(properties);
	            // The property set from "patternProperties".
	            var pp = Object.keys(patternProperties);
	            // remove from "s" all elements of "p", if any;
	            s = Utils.difference(s, p);
	            // for each regex in "pp", remove all elements of "s" which this regex matches.
	            var idx = pp.length;
	            while (idx--) {
	                var regExp = RegExp(pp[idx]),
	                    idx2 = s.length;
	                while (idx2--) {
	                    if (regExp.test(s[idx2]) === true) {
	                        s.splice(idx2, 1);
	                    }
	                }
	            }
	            // Validation of the json succeeds if, after these two steps, set "s" is empty.
	            if (s.length > 0) {
	                // assumeAdditional can be an array of allowed properties
	                var idx3 = this.options.assumeAdditional.length;
	                if (idx3) {
	                    while (idx3--) {
	                        var io = s.indexOf(this.options.assumeAdditional[idx3]);
	                        if (io !== -1) {
	                            s.splice(io, 1);
	                        }
	                    }
	                }
	                if (s.length > 0) {
	                    report.addError("OBJECT_ADDITIONAL_PROPERTIES", [s], null, schema.description);
	                }
	            }
	        }
	    },
	    dependencies: function (report, schema, json) {
	        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.4.5.2
	        if (Utils.whatIs(json) !== "object") {
	            return;
	        }

	        var keys = Object.keys(schema.dependencies),
	            idx = keys.length;

	        while (idx--) {
	            // iterate all dependencies
	            var dependencyName = keys[idx];
	            if (json[dependencyName]) {
	                var dependencyDefinition = schema.dependencies[dependencyName];
	                if (Utils.whatIs(dependencyDefinition) === "object") {
	                    // if dependency is a schema, validate against this schema
	                    exports.validate.call(this, report, dependencyDefinition, json);
	                } else { // Array
	                    // if dependency is an array, object needs to have all properties in this array
	                    var idx2 = dependencyDefinition.length;
	                    while (idx2--) {
	                        var requiredPropertyName = dependencyDefinition[idx2];
	                        if (json[requiredPropertyName] === undefined) {
	                            report.addError("OBJECT_DEPENDENCY_KEY", [requiredPropertyName, dependencyName], null, schema.description);
	                        }
	                    }
	                }
	            }
	        }
	    },
	    enum: function (report, schema, json) {
	        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.5.1.2
	        var match = false,
	            idx = schema.enum.length;
	        while (idx--) {
	            if (Utils.areEqual(json, schema.enum[idx])) {
	                match = true;
	                break;
	            }
	        }
	        if (match === false) {
	            report.addError("ENUM_MISMATCH", [json], null, schema.description);
	        }
	    },
	    /*
	    type: function (report, schema, json) {
	        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.5.2.2
	        // type is handled before this is called so ignore
	    },
	    */
	    allOf: function (report, schema, json) {
	        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.5.3.2
	        var idx = schema.allOf.length;
	        while (idx--) {
	            var validateResult = exports.validate.call(this, report, schema.allOf[idx], json);
	            if (this.options.breakOnFirstError && validateResult === false) {
	                break;
	            }
	        }
	    },
	    anyOf: function (report, schema, json) {
	        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.5.4.2
	        var subReports = [],
	            passed = false,
	            idx = schema.anyOf.length;

	        while (idx-- && passed === false) {
	            var subReport = new Report(report);
	            subReports.push(subReport);
	            passed = exports.validate.call(this, subReport, schema.anyOf[idx], json);
	        }

	        if (passed === false) {
	            report.addError("ANY_OF_MISSING", undefined, subReports, schema.description);
	        }
	    },
	    oneOf: function (report, schema, json) {
	        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.5.5.2
	        var passes = 0,
	            subReports = [],
	            idx = schema.oneOf.length;

	        while (idx--) {
	            var subReport = new Report(report, { maxErrors: 1 });
	            subReports.push(subReport);
	            if (exports.validate.call(this, subReport, schema.oneOf[idx], json) === true) {
	                passes++;
	            }
	        }

	        if (passes === 0) {
	            report.addError("ONE_OF_MISSING", undefined, subReports, schema.description);
	        } else if (passes > 1) {
	            report.addError("ONE_OF_MULTIPLE", null, null, schema.description);
	        }
	    },
	    not: function (report, schema, json) {
	        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.5.6.2
	        var subReport = new Report(report);
	        if (exports.validate.call(this, subReport, schema.not, json) === true) {
	            report.addError("NOT_PASSED", null, null, schema.description);
	        }
	    },
	    definitions: function () { /*report, schema, json*/
	        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.5.7.2
	        // nothing to do here
	    },
	    format: function (report, schema, json) {
	        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.7.2
	        var formatValidatorFn = FormatValidators[schema.format];
	        if (typeof formatValidatorFn === "function") {
	            if (formatValidatorFn.length === 2) {
	                // async
	                report.addAsyncTask(formatValidatorFn, [json], function (result) {
	                    if (result !== true) {
	                        report.addError("INVALID_FORMAT", [schema.format, json], null, schema.description);
	                    }
	                });
	            } else {
	                // sync
	                if (formatValidatorFn.call(this, json) !== true) {
	                    report.addError("INVALID_FORMAT", [schema.format, json], null, schema.description);
	                }
	            }
	        } else if (this.options.ignoreUnknownFormats !== true) {
	            report.addError("UNKNOWN_FORMAT", [schema.format], null, schema.description);
	        }
	    }
	};

	var recurseArray = function (report, schema, json) {
	    // http://json-schema.org/latest/json-schema-validation.html#rfc.section.8.2

	    var idx = json.length;

	    // If "items" is an array, this situation, the schema depends on the index:
	    // if the index is less than, or equal to, the size of "items",
	    // the child instance must be valid against the corresponding schema in the "items" array;
	    // otherwise, it must be valid against the schema defined by "additionalItems".
	    if (Array.isArray(schema.items)) {

	        while (idx--) {
	            // equal to doesnt make sense here
	            if (idx < schema.items.length) {
	                report.path.push(idx.toString());
	                exports.validate.call(this, report, schema.items[idx], json[idx]);
	                report.path.pop();
	            } else {
	                // might be boolean, so check that it's an object
	                if (typeof schema.additionalItems === "object") {
	                    report.path.push(idx.toString());
	                    exports.validate.call(this, report, schema.additionalItems, json[idx]);
	                    report.path.pop();
	                }
	            }
	        }

	    } else if (typeof schema.items === "object") {

	        // If items is a schema, then the child instance must be valid against this schema,
	        // regardless of its index, and regardless of the value of "additionalItems".
	        while (idx--) {
	            report.path.push(idx.toString());
	            exports.validate.call(this, report, schema.items, json[idx]);
	            report.path.pop();
	        }

	    }
	};

	var recurseObject = function (report, schema, json) {
	    // http://json-schema.org/latest/json-schema-validation.html#rfc.section.8.3

	    // If "additionalProperties" is absent, it is considered present with an empty schema as a value.
	    // In addition, boolean value true is considered equivalent to an empty schema.
	    var additionalProperties = schema.additionalProperties;
	    if (additionalProperties === true || additionalProperties === undefined) {
	        additionalProperties = {};
	    }

	    // p - The property set from "properties".
	    var p = schema.properties ? Object.keys(schema.properties) : [];

	    // pp - The property set from "patternProperties". Elements of this set will be called regexes for convenience.
	    var pp = schema.patternProperties ? Object.keys(schema.patternProperties) : [];

	    // m - The property name of the child.
	    var keys = Object.keys(json),
	        idx = keys.length;

	    while (idx--) {
	        var m = keys[idx],
	            propertyValue = json[m];

	        // s - The set of schemas for the child instance.
	        var s = [];

	        // 1. If set "p" contains value "m", then the corresponding schema in "properties" is added to "s".
	        if (p.indexOf(m) !== -1) {
	            s.push(schema.properties[m]);
	        }

	        // 2. For each regex in "pp", if it matches "m" successfully, the corresponding schema in "patternProperties" is added to "s".
	        var idx2 = pp.length;
	        while (idx2--) {
	            var regexString = pp[idx2];
	            if (RegExp(regexString).test(m) === true) {
	                s.push(schema.patternProperties[regexString]);
	            }
	        }

	        // 3. The schema defined by "additionalProperties" is added to "s" if and only if, at this stage, "s" is empty.
	        if (s.length === 0 && additionalProperties !== false) {
	            s.push(additionalProperties);
	        }

	        // we are passing tests even without this assert because this is covered by properties check
	        // if s is empty in this stage, no additionalProperties are allowed
	        // report.expect(s.length !== 0, 'E001', m);

	        // Instance property value must pass all schemas from s
	        idx2 = s.length;
	        while (idx2--) {
	            report.path.push(m);
	            exports.validate.call(this, report, s[idx2], propertyValue);
	            report.path.pop();
	        }
	    }
	};

	exports.validate = function (report, schema, json) {

	    report.commonErrorMessage = "JSON_OBJECT_VALIDATION_FAILED";

	    // check if schema is an object
	    var to = Utils.whatIs(schema);
	    if (to !== "object") {
	        report.addError("SCHEMA_NOT_AN_OBJECT", [to], null, schema.description);
	        return false;
	    }

	    // check if schema is empty, everything is valid against empty schema
	    var keys = Object.keys(schema);
	    if (keys.length === 0) {
	        return true;
	    }

	    // this method can be called recursively, so we need to remember our root
	    var isRoot = false;
	    if (!report.rootSchema) {
	        report.rootSchema = schema;
	        isRoot = true;
	    }

	    // follow schema.$ref keys
	    if (schema.$ref !== undefined) {
	        // avoid infinite loop with maxRefs
	        var maxRefs = 99;
	        while (schema.$ref && maxRefs > 0) {
	            if (!schema.__$refResolved) {
	                report.addError("REF_UNRESOLVED", [schema.$ref], null, schema.description);
	                break;
	            } else if (schema.__$refResolved === schema) {
	                break;
	            } else {
	                schema = schema.__$refResolved;
	                keys = Object.keys(schema);
	            }
	            maxRefs--;
	        }
	        if (maxRefs === 0) {
	            throw new Error("Circular dependency by $ref references!");
	        }
	    }

	    // type checking first
	    // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.5.2.2
	    var jsonType = Utils.whatIs(json);
	    if (schema.type) {
	        if (typeof schema.type === "string") {
	            if (jsonType !== schema.type && (jsonType !== "integer" || schema.type !== "number")) {
	                report.addError("INVALID_TYPE", [schema.type, jsonType], null, schema.description);
	                if (this.options.breakOnFirstError) {
	                    return false;
	                }
	            }
	        } else {
	            if (schema.type.indexOf(jsonType) === -1 && (jsonType !== "integer" || schema.type.indexOf("number") === -1)) {
	                report.addError("INVALID_TYPE", [schema.type, jsonType], null, schema.description);
	                if (this.options.breakOnFirstError) {
	                    return false;
	                }
	            }
	        }
	    }

	    // now iterate all the keys in schema and execute validation methods
	    var idx = keys.length;
	    while (idx--) {
	        if (JsonValidators[keys[idx]]) {
	            JsonValidators[keys[idx]].call(this, report, schema, json);
	            if (report.errors.length && this.options.breakOnFirstError) { break; }
	        }
	    }

	    if (report.errors.length === 0 || this.options.breakOnFirstError === false) {
	        if (jsonType === "array") {
	            recurseArray.call(this, report, schema, json);
	        } else if (jsonType === "object") {
	            recurseObject.call(this, report, schema, json);
	        }
	    }

	    if (typeof this.options.customValidator === "function") {
	        this.options.customValidator(report, schema, json);
	    }

	    // we don't need the root pointer anymore
	    if (isRoot) {
	        report.rootSchema = undefined;
	    }

	    // return valid just to be able to break at some code points
	    return report.errors.length === 0;

	};


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Report              = __webpack_require__(27);
	var SchemaCompilation   = __webpack_require__(34);
	var SchemaValidation    = __webpack_require__(35);
	var Utils               = __webpack_require__(29);

	function decodeJSONPointer(str) {
	    // http://tools.ietf.org/html/draft-ietf-appsawg-json-pointer-07#section-3
	    return decodeURIComponent(str).replace(/~[0-1]/g, function (x) {
	        return x === "~1" ? "/" : "~";
	    });
	}

	function getRemotePath(uri) {
	    var io = uri.indexOf("#");
	    return io === -1 ? uri : uri.slice(0, io);
	}

	function getQueryPath(uri) {
	    var io = uri.indexOf("#");
	    var res = io === -1 ? undefined : uri.slice(io + 1);
	    // WARN: do not slice slash, #/ means take root and go down from it
	    // if (res && res[0] === "/") { res = res.slice(1); }
	    return res;
	}

	function findId(schema, id) {
	    // process only arrays and objects
	    if (typeof schema !== "object" || schema === null) {
	        return;
	    }

	    // no id means root so return itself
	    if (!id) {
	        return schema;
	    }

	    if (schema.id) {
	        if (schema.id === id || schema.id[0] === "#" && schema.id.substring(1) === id) {
	            return schema;
	        }
	    }

	    var idx, result;
	    if (Array.isArray(schema)) {
	        idx = schema.length;
	        while (idx--) {
	            result = findId(schema[idx], id);
	            if (result) { return result; }
	        }
	    } else {
	        var keys = Object.keys(schema);
	        idx = keys.length;
	        while (idx--) {
	            var k = keys[idx];
	            if (k.indexOf("__$") === 0) {
	                continue;
	            }
	            result = findId(schema[k], id);
	            if (result) { return result; }
	        }
	    }
	}

	exports.cacheSchemaByUri = function (uri, schema) {
	    var remotePath = getRemotePath(uri);
	    if (remotePath) {
	        this.cache[remotePath] = schema;
	    }
	};

	exports.removeFromCacheByUri = function (uri) {
	    var remotePath = getRemotePath(uri);
	    if (remotePath) {
	        delete this.cache[remotePath];
	    }
	};

	exports.checkCacheForUri = function (uri) {
	    var remotePath = getRemotePath(uri);
	    return remotePath ? this.cache[remotePath] != null : false;
	};

	exports.getSchema = function (report, schema) {
	    if (typeof schema === "object") {
	        schema = exports.getSchemaByReference.call(this, report, schema);
	    }
	    if (typeof schema === "string") {
	        schema = exports.getSchemaByUri.call(this, report, schema);
	    }
	    return schema;
	};

	exports.getSchemaByReference = function (report, key) {
	    var i = this.referenceCache.length;
	    while (i--) {
	        if (this.referenceCache[i][0] === key) {
	            return this.referenceCache[i][1];
	        }
	    }
	    // not found
	    var schema = Utils.cloneDeep(key);
	    this.referenceCache.push([key, schema]);
	    return schema;
	};

	exports.getSchemaByUri = function (report, uri, root) {
	    var remotePath = getRemotePath(uri),
	        queryPath = getQueryPath(uri),
	        result = remotePath ? this.cache[remotePath] : root;

	    if (result && remotePath) {
	        // we need to avoid compiling schemas in a recursive loop
	        var compileRemote = result !== root;
	        // now we need to compile and validate resolved schema (in case it's not already)
	        if (compileRemote) {

	            report.path.push(remotePath);

	            var remoteReport = new Report(report);
	            if (SchemaCompilation.compileSchema.call(this, remoteReport, result)) {
	                SchemaValidation.validateSchema.call(this, remoteReport, result);
	            }
	            var remoteReportIsValid = remoteReport.isValid();
	            if (!remoteReportIsValid) {
	                report.addError("REMOTE_NOT_VALID", [uri], remoteReport);
	            }

	            report.path.pop();

	            if (!remoteReportIsValid) {
	                return undefined;
	            }
	        }
	    }

	    if (result && queryPath) {
	        var parts = queryPath.split("/");
	        for (var idx = 0, lim = parts.length; result && idx < lim; idx++) {
	            var key = decodeJSONPointer(parts[idx]);
	            if (idx === 0) { // it's an id
	                result = findId(result, key);
	            } else { // it's a path behind id
	                result = result[key];
	            }
	        }
	    }

	    return result;
	};

	exports.getRemotePath = getRemotePath;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Report      = __webpack_require__(27);
	var SchemaCache = __webpack_require__(33);
	var Utils       = __webpack_require__(29);

	function mergeReference(scope, ref) {
	    if (Utils.isAbsoluteUri(ref)) {
	        return ref;
	    }

	    var joinedScope = scope.join(""),
	        isScopeAbsolute = Utils.isAbsoluteUri(joinedScope),
	        isScopeRelative = Utils.isRelativeUri(joinedScope),
	        isRefRelative = Utils.isRelativeUri(ref),
	        toRemove;

	    if (isScopeAbsolute && isRefRelative) {
	        toRemove = joinedScope.match(/\/[^\/]*$/);
	        if (toRemove) {
	            joinedScope = joinedScope.slice(0, toRemove.index + 1);
	        }
	    } else if (isScopeRelative && isRefRelative) {
	        joinedScope = "";
	    } else {
	        toRemove = joinedScope.match(/[^#/]+$/);
	        if (toRemove) {
	            joinedScope = joinedScope.slice(0, toRemove.index);
	        }
	    }

	    var res = joinedScope + ref;
	    res = res.replace(/##/, "#");
	    return res;
	}

	function collectReferences(obj, results, scope, path) {
	    results = results || [];
	    scope = scope || [];
	    path = path || [];

	    if (typeof obj !== "object" || obj === null) {
	        return results;
	    }

	    if (typeof obj.id === "string") {
	        scope.push(obj.id);
	    }

	    if (typeof obj.$ref === "string" && typeof obj.__$refResolved === "undefined") {
	        results.push({
	            ref: mergeReference(scope, obj.$ref),
	            key: "$ref",
	            obj: obj,
	            path: path.slice(0)
	        });
	    }
	    if (typeof obj.$schema === "string" && typeof obj.__$schemaResolved === "undefined") {
	        results.push({
	            ref: mergeReference(scope, obj.$schema),
	            key: "$schema",
	            obj: obj,
	            path: path.slice(0)
	        });
	    }

	    var idx;
	    if (Array.isArray(obj)) {
	        idx = obj.length;
	        while (idx--) {
	            path.push(idx.toString());
	            collectReferences(obj[idx], results, scope, path);
	            path.pop();
	        }
	    } else {
	        var keys = Object.keys(obj);
	        idx = keys.length;
	        while (idx--) {
	            // do not recurse through resolved references and other z-schema props
	            if (keys[idx].indexOf("__$") === 0) { continue; }
	            path.push(keys[idx]);
	            collectReferences(obj[keys[idx]], results, scope, path);
	            path.pop();
	        }
	    }

	    if (typeof obj.id === "string") {
	        scope.pop();
	    }

	    return results;
	}

	var compileArrayOfSchemasLoop = function (mainReport, arr) {
	    var idx = arr.length,
	        compiledCount = 0;

	    while (idx--) {

	        // try to compile each schema separately
	        var report = new Report(mainReport);
	        var isValid = exports.compileSchema.call(this, report, arr[idx]);
	        if (isValid) { compiledCount++; }

	        // copy errors to report
	        mainReport.errors = mainReport.errors.concat(report.errors);

	    }

	    return compiledCount;
	};

	function findId(arr, id) {
	    var idx = arr.length;
	    while (idx--) {
	        if (arr[idx].id === id) {
	            return arr[idx];
	        }
	    }
	    return null;
	}

	var compileArrayOfSchemas = function (report, arr) {

	    var compiled = 0,
	        lastLoopCompiled;

	    do {

	        // remove all UNRESOLVABLE_REFERENCE errors before compiling array again
	        var idx = report.errors.length;
	        while (idx--) {
	            if (report.errors[idx].code === "UNRESOLVABLE_REFERENCE") {
	                report.errors.splice(idx, 1);
	            }
	        }

	        // remember how many were compiled in the last loop
	        lastLoopCompiled = compiled;

	        // count how many are compiled now
	        compiled = compileArrayOfSchemasLoop.call(this, report, arr);

	        // fix __$missingReferences if possible
	        idx = arr.length;
	        while (idx--) {
	            var sch = arr[idx];
	            if (sch.__$missingReferences) {
	                var idx2 = sch.__$missingReferences.length;
	                while (idx2--) {
	                    var refObj = sch.__$missingReferences[idx2];
	                    var response = findId(arr, refObj.ref);
	                    if (response) {
	                        // this might create circular references
	                        refObj.obj["__" + refObj.key + "Resolved"] = response;
	                        // it's resolved now so delete it
	                        sch.__$missingReferences.splice(idx2, 1);
	                    }
	                }
	                if (sch.__$missingReferences.length === 0) {
	                    delete sch.__$missingReferences;
	                }
	            }
	        }

	        // keep repeating if not all compiled and at least one more was compiled in the last loop
	    } while (compiled !== arr.length && compiled !== lastLoopCompiled);

	    return report.isValid();

	};

	exports.compileSchema = function (report, schema) {

	    report.commonErrorMessage = "SCHEMA_COMPILATION_FAILED";

	    // if schema is a string, assume it's a uri
	    if (typeof schema === "string") {
	        var loadedSchema = SchemaCache.getSchemaByUri.call(this, report, schema);
	        if (!loadedSchema) {
	            report.addError("SCHEMA_NOT_REACHABLE", [schema]);
	            return false;
	        }
	        schema = loadedSchema;
	    }

	    // if schema is an array, assume it's an array of schemas
	    if (Array.isArray(schema)) {
	        return compileArrayOfSchemas.call(this, report, schema);
	    }

	    // if we have an id than it should be cached already (if this instance has compiled it)
	    if (schema.__$compiled && schema.id && SchemaCache.checkCacheForUri.call(this, schema.id) === false) {
	        schema.__$compiled = undefined;
	    }

	    // do not re-compile schemas
	    if (schema.__$compiled) {
	        return true;
	    }

	    if (schema.id && typeof schema.id === "string") {
	        // add this to our schemaCache (before compilation in case we have references including id)
	        SchemaCache.cacheSchemaByUri.call(this, schema.id, schema);
	    }

	    // this method can be called recursively, so we need to remember our root
	    var isRoot = false;
	    if (!report.rootSchema) {
	        report.rootSchema = schema;
	        isRoot = true;
	    }

	    // delete all __$missingReferences from previous compilation attempts
	    var isValidExceptReferences = report.isValid();
	    delete schema.__$missingReferences;

	    // collect all references that need to be resolved - $ref and $schema
	    var refs = collectReferences.call(this, schema),
	        idx = refs.length;
	    while (idx--) {
	        // resolve all the collected references into __xxxResolved pointer
	        var refObj = refs[idx];
	        var response = SchemaCache.getSchemaByUri.call(this, report, refObj.ref, schema);

	        // we can try to use custom schemaReader if available
	        if (!response) {
	            var schemaReader = this.getSchemaReader();
	            if (schemaReader) {
	                // it's supposed to return a valid schema
	                var s = schemaReader(refObj.ref);
	                if (s) {
	                    // it needs to have the id
	                    s.id = refObj.ref;
	                    // try to compile the schema
	                    var subreport = new Report(report);
	                    if (!exports.compileSchema.call(this, subreport, s)) {
	                        // copy errors to report
	                        report.errors = report.errors.concat(subreport.errors);
	                    } else {
	                        response = SchemaCache.getSchemaByUri.call(this, report, refObj.ref, schema);
	                    }
	                }
	            }
	        }

	        if (!response) {

	            var hasNotValid = report.hasError("REMOTE_NOT_VALID", [refObj.ref]);
	            var isAbsolute = Utils.isAbsoluteUri(refObj.ref);
	            var isDownloaded = false;
	            var ignoreUnresolvableRemotes = this.options.ignoreUnresolvableReferences === true;

	            if (isAbsolute) {
	                // we shouldn't add UNRESOLVABLE_REFERENCE for schemas we already have downloaded
	                // and set through setRemoteReference method
	                isDownloaded = SchemaCache.checkCacheForUri.call(this, refObj.ref);
	            }

	            if (hasNotValid) {
	                // already has REMOTE_NOT_VALID error for this one
	            } else if (ignoreUnresolvableRemotes && isAbsolute) {
	                // ignoreUnresolvableRemotes is on and remote isAbsolute
	            } else if (isDownloaded) {
	                // remote is downloaded, so no UNRESOLVABLE_REFERENCE
	            } else {
	                Array.prototype.push.apply(report.path, refObj.path);
	                report.addError("UNRESOLVABLE_REFERENCE", [refObj.ref]);
	                report.path = report.path.slice(0, -refObj.path.length);

	                // pusblish unresolved references out
	                if (isValidExceptReferences) {
	                    schema.__$missingReferences = schema.__$missingReferences || [];
	                    schema.__$missingReferences.push(refObj);
	                }
	            }
	        }
	        // this might create circular references
	        refObj.obj["__" + refObj.key + "Resolved"] = response;
	    }

	    var isValid = report.isValid();
	    if (isValid) {
	        schema.__$compiled = true;
	    } else {
	        if (schema.id && typeof schema.id === "string") {
	            // remove this schema from schemaCache because it failed to compile
	            SchemaCache.removeFromCacheByUri.call(this, schema.id);
	        }
	    }

	    // we don't need the root pointer anymore
	    if (isRoot) {
	        report.rootSchema = undefined;
	    }

	    return isValid;

	};


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var FormatValidators = __webpack_require__(30),
	    JsonValidation   = __webpack_require__(32),
	    Report           = __webpack_require__(27),
	    Utils            = __webpack_require__(29);

	var SchemaValidators = {
	    $ref: function (report, schema) {
	        // http://tools.ietf.org/html/draft-ietf-appsawg-json-pointer-07
	        // http://tools.ietf.org/html/draft-pbryan-zyp-json-ref-03
	        if (typeof schema.$ref !== "string") {
	            report.addError("KEYWORD_TYPE_EXPECTED", ["$ref", "string"]);
	        }
	    },
	    $schema: function (report, schema) {
	        // http://json-schema.org/latest/json-schema-core.html#rfc.section.6
	        if (typeof schema.$schema !== "string") {
	            report.addError("KEYWORD_TYPE_EXPECTED", ["$schema", "string"]);
	        }
	    },
	    multipleOf: function (report, schema) {
	        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.1.1.1
	        if (typeof schema.multipleOf !== "number") {
	            report.addError("KEYWORD_TYPE_EXPECTED", ["multipleOf", "number"]);
	        } else if (schema.multipleOf <= 0) {
	            report.addError("KEYWORD_MUST_BE", ["multipleOf", "strictly greater than 0"]);
	        }
	    },
	    maximum: function (report, schema) {
	        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.1.2.1
	        if (typeof schema.maximum !== "number") {
	            report.addError("KEYWORD_TYPE_EXPECTED", ["maximum", "number"]);
	        }
	    },
	    exclusiveMaximum: function (report, schema) {
	        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.1.2.1
	        if (typeof schema.exclusiveMaximum !== "boolean") {
	            report.addError("KEYWORD_TYPE_EXPECTED", ["exclusiveMaximum", "boolean"]);
	        } else if (schema.maximum === undefined) {
	            report.addError("KEYWORD_DEPENDENCY", ["exclusiveMaximum", "maximum"]);
	        }
	    },
	    minimum: function (report, schema) {
	        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.1.3.1
	        if (typeof schema.minimum !== "number") {
	            report.addError("KEYWORD_TYPE_EXPECTED", ["minimum", "number"]);
	        }
	    },
	    exclusiveMinimum: function (report, schema) {
	        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.1.3.1
	        if (typeof schema.exclusiveMinimum !== "boolean") {
	            report.addError("KEYWORD_TYPE_EXPECTED", ["exclusiveMinimum", "boolean"]);
	        } else if (schema.minimum === undefined) {
	            report.addError("KEYWORD_DEPENDENCY", ["exclusiveMinimum", "minimum"]);
	        }
	    },
	    maxLength: function (report, schema) {
	        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.2.1.1
	        if (Utils.whatIs(schema.maxLength) !== "integer") {
	            report.addError("KEYWORD_TYPE_EXPECTED", ["maxLength", "integer"]);
	        } else if (schema.maxLength < 0) {
	            report.addError("KEYWORD_MUST_BE", ["maxLength", "greater than, or equal to 0"]);
	        }
	    },
	    minLength: function (report, schema) {
	        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.2.2.1
	        if (Utils.whatIs(schema.minLength) !== "integer") {
	            report.addError("KEYWORD_TYPE_EXPECTED", ["minLength", "integer"]);
	        } else if (schema.minLength < 0) {
	            report.addError("KEYWORD_MUST_BE", ["minLength", "greater than, or equal to 0"]);
	        }
	    },
	    pattern: function (report, schema) {
	        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.2.3.1
	        if (typeof schema.pattern !== "string") {
	            report.addError("KEYWORD_TYPE_EXPECTED", ["pattern", "string"]);
	        } else {
	            try {
	                RegExp(schema.pattern);
	            } catch (e) {
	                report.addError("KEYWORD_PATTERN", ["pattern", schema.pattern]);
	            }
	        }
	    },
	    additionalItems: function (report, schema) {
	        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.3.1.1
	        var type = Utils.whatIs(schema.additionalItems);
	        if (type !== "boolean" && type !== "object") {
	            report.addError("KEYWORD_TYPE_EXPECTED", ["additionalItems", ["boolean", "object"]]);
	        } else if (type === "object") {
	            report.path.push("additionalItems");
	            exports.validateSchema.call(this, report, schema.additionalItems);
	            report.path.pop();
	        }
	    },
	    items: function (report, schema) {
	        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.3.1.1
	        var type = Utils.whatIs(schema.items);

	        if (type === "object") {
	            report.path.push("items");
	            exports.validateSchema.call(this, report, schema.items);
	            report.path.pop();
	        } else if (type === "array") {
	            var idx = schema.items.length;
	            while (idx--) {
	                report.path.push("items");
	                report.path.push(idx.toString());
	                exports.validateSchema.call(this, report, schema.items[idx]);
	                report.path.pop();
	                report.path.pop();
	            }
	        } else {
	            report.addError("KEYWORD_TYPE_EXPECTED", ["items", ["array", "object"]]);
	        }

	        // custom - strict mode
	        if (this.options.forceAdditional === true && schema.additionalItems === undefined && Array.isArray(schema.items)) {
	            report.addError("KEYWORD_UNDEFINED_STRICT", ["additionalItems"]);
	        }
	        // custome - assume defined false mode
	        if (this.options.assumeAdditional && schema.additionalItems === undefined && Array.isArray(schema.items)) {
	            schema.additionalItems = false;
	        }
	    },
	    maxItems: function (report, schema) {
	        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.3.2.1
	        if (typeof schema.maxItems !== "number") {
	            report.addError("KEYWORD_TYPE_EXPECTED", ["maxItems", "integer"]);
	        } else if (schema.maxItems < 0) {
	            report.addError("KEYWORD_MUST_BE", ["maxItems", "greater than, or equal to 0"]);
	        }
	    },
	    minItems: function (report, schema) {
	        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.3.3.1
	        if (Utils.whatIs(schema.minItems) !== "integer") {
	            report.addError("KEYWORD_TYPE_EXPECTED", ["minItems", "integer"]);
	        } else if (schema.minItems < 0) {
	            report.addError("KEYWORD_MUST_BE", ["minItems", "greater than, or equal to 0"]);
	        }
	    },
	    uniqueItems: function (report, schema) {
	        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.3.4.1
	        if (typeof schema.uniqueItems !== "boolean") {
	            report.addError("KEYWORD_TYPE_EXPECTED", ["uniqueItems", "boolean"]);
	        }
	    },
	    maxProperties: function (report, schema) {
	        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.4.1.1
	        if (Utils.whatIs(schema.maxProperties) !== "integer") {
	            report.addError("KEYWORD_TYPE_EXPECTED", ["maxProperties", "integer"]);
	        } else if (schema.maxProperties < 0) {
	            report.addError("KEYWORD_MUST_BE", ["maxProperties", "greater than, or equal to 0"]);
	        }
	    },
	    minProperties: function (report, schema) {
	        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.4.2.1
	        if (Utils.whatIs(schema.minProperties) !== "integer") {
	            report.addError("KEYWORD_TYPE_EXPECTED", ["minProperties", "integer"]);
	        } else if (schema.minProperties < 0) {
	            report.addError("KEYWORD_MUST_BE", ["minProperties", "greater than, or equal to 0"]);
	        }
	    },
	    required: function (report, schema) {
	        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.4.3.1
	        if (Utils.whatIs(schema.required) !== "array") {
	            report.addError("KEYWORD_TYPE_EXPECTED", ["required", "array"]);
	        } else if (schema.required.length === 0) {
	            report.addError("KEYWORD_MUST_BE", ["required", "an array with at least one element"]);
	        } else {
	            var idx = schema.required.length;
	            while (idx--) {
	                if (typeof schema.required[idx] !== "string") {
	                    report.addError("KEYWORD_VALUE_TYPE", ["required", "string"]);
	                }
	            }
	            if (Utils.isUniqueArray(schema.required) === false) {
	                report.addError("KEYWORD_MUST_BE", ["required", "an array with unique items"]);
	            }
	        }
	    },
	    additionalProperties: function (report, schema) {
	        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.4.4.1
	        var type = Utils.whatIs(schema.additionalProperties);
	        if (type !== "boolean" && type !== "object") {
	            report.addError("KEYWORD_TYPE_EXPECTED", ["additionalProperties", ["boolean", "object"]]);
	        } else if (type === "object") {
	            report.path.push("additionalProperties");
	            exports.validateSchema.call(this, report, schema.additionalProperties);
	            report.path.pop();
	        }
	    },
	    properties: function (report, schema) {
	        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.4.4.1
	        if (Utils.whatIs(schema.properties) !== "object") {
	            report.addError("KEYWORD_TYPE_EXPECTED", ["properties", "object"]);
	            return;
	        }

	        var keys = Object.keys(schema.properties),
	            idx = keys.length;
	        while (idx--) {
	            var key = keys[idx],
	                val = schema.properties[key];
	            report.path.push("properties");
	            report.path.push(key);
	            exports.validateSchema.call(this, report, val);
	            report.path.pop();
	            report.path.pop();
	        }

	        // custom - strict mode
	        if (this.options.forceAdditional === true && schema.additionalProperties === undefined) {
	            report.addError("KEYWORD_UNDEFINED_STRICT", ["additionalProperties"]);
	        }
	        // custome - assume defined false mode
	        if (this.options.assumeAdditional && schema.additionalProperties === undefined) {
	            schema.additionalProperties = false;
	        }
	        // custom - forceProperties
	        if (this.options.forceProperties === true && keys.length === 0) {
	            report.addError("CUSTOM_MODE_FORCE_PROPERTIES", ["properties"]);
	        }
	    },
	    patternProperties: function (report, schema) {
	        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.4.4.1
	        if (Utils.whatIs(schema.patternProperties) !== "object") {
	            report.addError("KEYWORD_TYPE_EXPECTED", ["patternProperties", "object"]);
	            return;
	        }

	        var keys = Object.keys(schema.patternProperties),
	            idx = keys.length;
	        while (idx--) {
	            var key = keys[idx],
	                val = schema.patternProperties[key];
	            try {
	                RegExp(key);
	            } catch (e) {
	                report.addError("KEYWORD_PATTERN", ["patternProperties", key]);
	            }
	            report.path.push("patternProperties");
	            report.path.push(key.toString());
	            exports.validateSchema.call(this, report, val);
	            report.path.pop();
	            report.path.pop();
	        }

	        // custom - forceProperties
	        if (this.options.forceProperties === true && keys.length === 0) {
	            report.addError("CUSTOM_MODE_FORCE_PROPERTIES", ["patternProperties"]);
	        }
	    },
	    dependencies: function (report, schema) {
	        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.4.5.1
	        if (Utils.whatIs(schema.dependencies) !== "object") {
	            report.addError("KEYWORD_TYPE_EXPECTED", ["dependencies", "object"]);
	        } else {
	            var keys = Object.keys(schema.dependencies),
	                idx = keys.length;
	            while (idx--) {
	                var schemaKey = keys[idx],
	                    schemaDependency = schema.dependencies[schemaKey],
	                    type = Utils.whatIs(schemaDependency);

	                if (type === "object") {
	                    report.path.push("dependencies");
	                    report.path.push(schemaKey);
	                    exports.validateSchema.call(this, report, schemaDependency);
	                    report.path.pop();
	                    report.path.pop();
	                } else if (type === "array") {
	                    var idx2 = schemaDependency.length;
	                    if (idx2 === 0) {
	                        report.addError("KEYWORD_MUST_BE", ["dependencies", "not empty array"]);
	                    }
	                    while (idx2--) {
	                        if (typeof schemaDependency[idx2] !== "string") {
	                            report.addError("KEYWORD_VALUE_TYPE", ["dependensices", "string"]);
	                        }
	                    }
	                    if (Utils.isUniqueArray(schemaDependency) === false) {
	                        report.addError("KEYWORD_MUST_BE", ["dependencies", "an array with unique items"]);
	                    }
	                } else {
	                    report.addError("KEYWORD_VALUE_TYPE", ["dependencies", "object or array"]);
	                }
	            }
	        }
	    },
	    enum: function (report, schema) {
	        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.5.1.1
	        if (Array.isArray(schema.enum) === false) {
	            report.addError("KEYWORD_TYPE_EXPECTED", ["enum", "array"]);
	        } else if (schema.enum.length === 0) {
	            report.addError("KEYWORD_MUST_BE", ["enum", "an array with at least one element"]);
	        } else if (Utils.isUniqueArray(schema.enum) === false) {
	            report.addError("KEYWORD_MUST_BE", ["enum", "an array with unique elements"]);
	        }
	    },
	    type: function (report, schema) {
	        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.5.2.1
	        var primitiveTypes = ["array", "boolean", "integer", "number", "null", "object", "string"],
	            primitiveTypeStr = primitiveTypes.join(","),
	            isArray = Array.isArray(schema.type);

	        if (isArray) {
	            var idx = schema.type.length;
	            while (idx--) {
	                if (primitiveTypes.indexOf(schema.type[idx]) === -1) {
	                    report.addError("KEYWORD_TYPE_EXPECTED", ["type", primitiveTypeStr]);
	                }
	            }
	            if (Utils.isUniqueArray(schema.type) === false) {
	                report.addError("KEYWORD_MUST_BE", ["type", "an object with unique properties"]);
	            }
	        } else if (typeof schema.type === "string") {
	            if (primitiveTypes.indexOf(schema.type) === -1) {
	                report.addError("KEYWORD_TYPE_EXPECTED", ["type", primitiveTypeStr]);
	            }
	        } else {
	            report.addError("KEYWORD_TYPE_EXPECTED", ["type", ["string", "array"]]);
	        }

	        if (this.options.noEmptyStrings === true) {
	            if (schema.type === "string" || isArray && schema.type.indexOf("string") !== -1) {
	                if (schema.minLength === undefined &&
	                    schema.enum === undefined &&
	                    schema.format === undefined) {

	                    schema.minLength = 1;
	                }
	            }
	        }
	        if (this.options.noEmptyArrays === true) {
	            if (schema.type === "array" || isArray && schema.type.indexOf("array") !== -1) {
	                if (schema.minItems === undefined) {
	                    schema.minItems = 1;
	                }
	            }
	        }
	        if (this.options.forceProperties === true) {
	            if (schema.type === "object" || isArray && schema.type.indexOf("object") !== -1) {
	                if (schema.properties === undefined && schema.patternProperties === undefined) {
	                    report.addError("KEYWORD_UNDEFINED_STRICT", ["properties"]);
	                }
	            }
	        }
	        if (this.options.forceItems === true) {
	            if (schema.type === "array" || isArray && schema.type.indexOf("array") !== -1) {
	                if (schema.items === undefined) {
	                    report.addError("KEYWORD_UNDEFINED_STRICT", ["items"]);
	                }
	            }
	        }
	        if (this.options.forceMinItems === true) {
	            if (schema.type === "array" || isArray && schema.type.indexOf("array") !== -1) {
	                if (schema.minItems === undefined) {
	                    report.addError("KEYWORD_UNDEFINED_STRICT", ["minItems"]);
	                }
	            }
	        }
	        if (this.options.forceMaxItems === true) {
	            if (schema.type === "array" || isArray && schema.type.indexOf("array") !== -1) {
	                if (schema.maxItems === undefined) {
	                    report.addError("KEYWORD_UNDEFINED_STRICT", ["maxItems"]);
	                }
	            }
	        }
	        if (this.options.forceMinLength === true) {
	            if (schema.type === "string" || isArray && schema.type.indexOf("string") !== -1) {
	                if (schema.minLength === undefined &&
	                    schema.format === undefined &&
	                    schema.enum === undefined &&
	                    schema.pattern === undefined) {
	                    report.addError("KEYWORD_UNDEFINED_STRICT", ["minLength"]);
	                }
	            }
	        }
	        if (this.options.forceMaxLength === true) {
	            if (schema.type === "string" || isArray && schema.type.indexOf("string") !== -1) {
	                if (schema.maxLength === undefined &&
	                    schema.format === undefined &&
	                    schema.enum === undefined &&
	                    schema.pattern === undefined) {
	                    report.addError("KEYWORD_UNDEFINED_STRICT", ["maxLength"]);
	                }
	            }
	        }
	    },
	    allOf: function (report, schema) {
	        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.5.3.1
	        if (Array.isArray(schema.allOf) === false) {
	            report.addError("KEYWORD_TYPE_EXPECTED", ["allOf", "array"]);
	        } else if (schema.allOf.length === 0) {
	            report.addError("KEYWORD_MUST_BE", ["allOf", "an array with at least one element"]);
	        } else {
	            var idx = schema.allOf.length;
	            while (idx--) {
	                report.path.push("allOf");
	                report.path.push(idx.toString());
	                exports.validateSchema.call(this, report, schema.allOf[idx]);
	                report.path.pop();
	                report.path.pop();
	            }
	        }
	    },
	    anyOf: function (report, schema) {
	        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.5.4.1
	        if (Array.isArray(schema.anyOf) === false) {
	            report.addError("KEYWORD_TYPE_EXPECTED", ["anyOf", "array"]);
	        } else if (schema.anyOf.length === 0) {
	            report.addError("KEYWORD_MUST_BE", ["anyOf", "an array with at least one element"]);
	        } else {
	            var idx = schema.anyOf.length;
	            while (idx--) {
	                report.path.push("anyOf");
	                report.path.push(idx.toString());
	                exports.validateSchema.call(this, report, schema.anyOf[idx]);
	                report.path.pop();
	                report.path.pop();
	            }
	        }
	    },
	    oneOf: function (report, schema) {
	        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.5.5.1
	        if (Array.isArray(schema.oneOf) === false) {
	            report.addError("KEYWORD_TYPE_EXPECTED", ["oneOf", "array"]);
	        } else if (schema.oneOf.length === 0) {
	            report.addError("KEYWORD_MUST_BE", ["oneOf", "an array with at least one element"]);
	        } else {
	            var idx = schema.oneOf.length;
	            while (idx--) {
	                report.path.push("oneOf");
	                report.path.push(idx.toString());
	                exports.validateSchema.call(this, report, schema.oneOf[idx]);
	                report.path.pop();
	                report.path.pop();
	            }
	        }
	    },
	    not: function (report, schema) {
	        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.5.6.1
	        if (Utils.whatIs(schema.not) !== "object") {
	            report.addError("KEYWORD_TYPE_EXPECTED", ["not", "object"]);
	        } else {
	            report.path.push("not");
	            exports.validateSchema.call(this, report, schema.not);
	            report.path.pop();
	        }
	    },
	    definitions: function (report, schema) {
	        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.5.7.1
	        if (Utils.whatIs(schema.definitions) !== "object") {
	            report.addError("KEYWORD_TYPE_EXPECTED", ["definitions", "object"]);
	        } else {
	            var keys = Object.keys(schema.definitions),
	                idx = keys.length;
	            while (idx--) {
	                var key = keys[idx],
	                    val = schema.definitions[key];
	                report.path.push("definitions");
	                report.path.push(key);
	                exports.validateSchema.call(this, report, val);
	                report.path.pop();
	                report.path.pop();
	            }
	        }
	    },
	    format: function (report, schema) {
	        if (typeof schema.format !== "string") {
	            report.addError("KEYWORD_TYPE_EXPECTED", ["format", "string"]);
	        } else {
	            if (FormatValidators[schema.format] === undefined && this.options.ignoreUnknownFormats !== true) {
	                report.addError("UNKNOWN_FORMAT", [schema.format]);
	            }
	        }
	    },
	    id: function (report, schema) {
	        // http://json-schema.org/latest/json-schema-core.html#rfc.section.7.2
	        if (typeof schema.id !== "string") {
	            report.addError("KEYWORD_TYPE_EXPECTED", ["id", "string"]);
	        }
	    },
	    title: function (report, schema) {
	        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.6.1
	        if (typeof schema.title !== "string") {
	            report.addError("KEYWORD_TYPE_EXPECTED", ["title", "string"]);
	        }
	    },
	    description: function (report, schema) {
	        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.6.1
	        if (typeof schema.description !== "string") {
	            report.addError("KEYWORD_TYPE_EXPECTED", ["description", "string"]);
	        }
	    },
	    "default": function (/* report, schema */) {
	        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.6.2
	        // There are no restrictions placed on the value of this keyword.
	    }
	};

	var validateArrayOfSchemas = function (report, arr) {
	    var idx = arr.length;
	    while (idx--) {
	        exports.validateSchema.call(this, report, arr[idx]);
	    }
	    return report.isValid();
	};

	exports.validateSchema = function (report, schema) {

	    report.commonErrorMessage = "SCHEMA_VALIDATION_FAILED";

	    // if schema is an array, assume it's an array of schemas
	    if (Array.isArray(schema)) {
	        return validateArrayOfSchemas.call(this, report, schema);
	    }

	    // do not revalidate schema that has already been validated once
	    if (schema.__$validated) {
	        return true;
	    }

	    // if $schema is present, this schema should validate against that $schema
	    var hasParentSchema = schema.$schema && schema.id !== schema.$schema;
	    if (hasParentSchema) {
	        if (schema.__$schemaResolved && schema.__$schemaResolved !== schema) {
	            var subReport = new Report(report);
	            var valid = JsonValidation.validate.call(this, subReport, schema.__$schemaResolved, schema);
	            if (valid === false) {
	                report.addError("PARENT_SCHEMA_VALIDATION_FAILED", null, subReport);
	            }
	        } else {
	            if (this.options.ignoreUnresolvableReferences !== true) {
	                report.addError("REF_UNRESOLVED", [schema.$schema]);
	            }
	        }
	    }

	    if (this.options.noTypeless === true) {
	        // issue #36 - inherit type to anyOf, oneOf, allOf if noTypeless is defined
	        if (schema.type !== undefined) {
	            var schemas = [];
	            if (Array.isArray(schema.anyOf)) { schemas = schemas.concat(schema.anyOf); }
	            if (Array.isArray(schema.oneOf)) { schemas = schemas.concat(schema.oneOf); }
	            if (Array.isArray(schema.allOf)) { schemas = schemas.concat(schema.allOf); }
	            schemas.forEach(function (sch) {
	                if (!sch.type) { sch.type = schema.type; }
	            });
	        }
	        // end issue #36
	        if (schema.enum === undefined &&
	            schema.type === undefined &&
	            schema.anyOf === undefined &&
	            schema.oneOf === undefined &&
	            schema.not === undefined &&
	            schema.$ref === undefined) {
	            report.addError("KEYWORD_UNDEFINED_STRICT", ["type"]);
	        }
	    }

	    var keys = Object.keys(schema),
	        idx = keys.length;
	    while (idx--) {
	        var key = keys[idx];
	        if (key.indexOf("__") === 0) { continue; }
	        if (SchemaValidators[key] !== undefined) {
	            SchemaValidators[key].call(this, report, schema);
	        } else if (!hasParentSchema) {
	            if (this.options.noExtraKeywords === true) {
	                report.addError("KEYWORD_UNEXPECTED", [key]);
	            }
	        }
	    }

	    if (this.options.pedanticCheck === true) {
	        if (schema.enum) {
	            // break recursion
	            var tmpSchema = Utils.clone(schema);
	            delete tmpSchema.enum;
	            delete tmpSchema.default;

	            report.path.push("enum");
	            idx = schema.enum.length;
	            while (idx--) {
	                report.path.push(idx.toString());
	                JsonValidation.validate.call(this, report, tmpSchema, schema.enum[idx]);
	                report.path.pop();
	            }
	            report.path.pop();
	        }

	        if (schema.default) {
	            report.path.push("default");
	            JsonValidation.validate.call(this, report, schema, schema.default);
	            report.path.pop();
	        }
	    }

	    var isValid = report.isValid();
	    if (isValid) {
	        schema.__$validated = true;
	    }
	    return isValid;
	};


/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = {
		"id": "http://json-schema.org/draft-04/schema#",
		"$schema": "http://json-schema.org/draft-04/schema#",
		"description": "Core schema meta-schema",
		"definitions": {
			"schemaArray": {
				"type": "array",
				"minItems": 1,
				"items": {
					"$ref": "#"
				}
			},
			"positiveInteger": {
				"type": "integer",
				"minimum": 0
			},
			"positiveIntegerDefault0": {
				"allOf": [
					{
						"$ref": "#/definitions/positiveInteger"
					},
					{
						"default": 0
					}
				]
			},
			"simpleTypes": {
				"enum": [
					"array",
					"boolean",
					"integer",
					"null",
					"number",
					"object",
					"string"
				]
			},
			"stringArray": {
				"type": "array",
				"items": {
					"type": "string"
				},
				"minItems": 1,
				"uniqueItems": true
			}
		},
		"type": "object",
		"properties": {
			"id": {
				"type": "string",
				"format": "uri"
			},
			"$schema": {
				"type": "string",
				"format": "uri"
			},
			"title": {
				"type": "string"
			},
			"description": {
				"type": "string"
			},
			"default": {},
			"multipleOf": {
				"type": "number",
				"minimum": 0,
				"exclusiveMinimum": true
			},
			"maximum": {
				"type": "number"
			},
			"exclusiveMaximum": {
				"type": "boolean",
				"default": false
			},
			"minimum": {
				"type": "number"
			},
			"exclusiveMinimum": {
				"type": "boolean",
				"default": false
			},
			"maxLength": {
				"$ref": "#/definitions/positiveInteger"
			},
			"minLength": {
				"$ref": "#/definitions/positiveIntegerDefault0"
			},
			"pattern": {
				"type": "string",
				"format": "regex"
			},
			"additionalItems": {
				"anyOf": [
					{
						"type": "boolean"
					},
					{
						"$ref": "#"
					}
				],
				"default": {}
			},
			"items": {
				"anyOf": [
					{
						"$ref": "#"
					},
					{
						"$ref": "#/definitions/schemaArray"
					}
				],
				"default": {}
			},
			"maxItems": {
				"$ref": "#/definitions/positiveInteger"
			},
			"minItems": {
				"$ref": "#/definitions/positiveIntegerDefault0"
			},
			"uniqueItems": {
				"type": "boolean",
				"default": false
			},
			"maxProperties": {
				"$ref": "#/definitions/positiveInteger"
			},
			"minProperties": {
				"$ref": "#/definitions/positiveIntegerDefault0"
			},
			"required": {
				"$ref": "#/definitions/stringArray"
			},
			"additionalProperties": {
				"anyOf": [
					{
						"type": "boolean"
					},
					{
						"$ref": "#"
					}
				],
				"default": {}
			},
			"definitions": {
				"type": "object",
				"additionalProperties": {
					"$ref": "#"
				},
				"default": {}
			},
			"properties": {
				"type": "object",
				"additionalProperties": {
					"$ref": "#"
				},
				"default": {}
			},
			"patternProperties": {
				"type": "object",
				"additionalProperties": {
					"$ref": "#"
				},
				"default": {}
			},
			"dependencies": {
				"type": "object",
				"additionalProperties": {
					"anyOf": [
						{
							"$ref": "#"
						},
						{
							"$ref": "#/definitions/stringArray"
						}
					]
				}
			},
			"enum": {
				"type": "array",
				"minItems": 1,
				"uniqueItems": true
			},
			"type": {
				"anyOf": [
					{
						"$ref": "#/definitions/simpleTypes"
					},
					{
						"type": "array",
						"items": {
							"$ref": "#/definitions/simpleTypes"
						},
						"minItems": 1,
						"uniqueItems": true
					}
				]
			},
			"format": {
				"type": "string"
			},
			"allOf": {
				"$ref": "#/definitions/schemaArray"
			},
			"anyOf": {
				"$ref": "#/definitions/schemaArray"
			},
			"oneOf": {
				"$ref": "#/definitions/schemaArray"
			},
			"not": {
				"$ref": "#"
			}
		},
		"dependencies": {
			"exclusiveMaximum": [
				"maximum"
			],
			"exclusiveMinimum": [
				"minimum"
			]
		},
		"default": {}
	};

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = {
		"$schema": "http://json-schema.org/draft-04/hyper-schema#",
		"id": "http://json-schema.org/draft-04/hyper-schema#",
		"title": "JSON Hyper-Schema",
		"allOf": [
			{
				"$ref": "http://json-schema.org/draft-04/schema#"
			}
		],
		"properties": {
			"additionalItems": {
				"anyOf": [
					{
						"type": "boolean"
					},
					{
						"$ref": "#"
					}
				]
			},
			"additionalProperties": {
				"anyOf": [
					{
						"type": "boolean"
					},
					{
						"$ref": "#"
					}
				]
			},
			"dependencies": {
				"additionalProperties": {
					"anyOf": [
						{
							"$ref": "#"
						},
						{
							"type": "array"
						}
					]
				}
			},
			"items": {
				"anyOf": [
					{
						"$ref": "#"
					},
					{
						"$ref": "#/definitions/schemaArray"
					}
				]
			},
			"definitions": {
				"additionalProperties": {
					"$ref": "#"
				}
			},
			"patternProperties": {
				"additionalProperties": {
					"$ref": "#"
				}
			},
			"properties": {
				"additionalProperties": {
					"$ref": "#"
				}
			},
			"allOf": {
				"$ref": "#/definitions/schemaArray"
			},
			"anyOf": {
				"$ref": "#/definitions/schemaArray"
			},
			"oneOf": {
				"$ref": "#/definitions/schemaArray"
			},
			"not": {
				"$ref": "#"
			},
			"links": {
				"type": "array",
				"items": {
					"$ref": "#/definitions/linkDescription"
				}
			},
			"fragmentResolution": {
				"type": "string"
			},
			"media": {
				"type": "object",
				"properties": {
					"type": {
						"description": "A media type, as described in RFC 2046",
						"type": "string"
					},
					"binaryEncoding": {
						"description": "A content encoding scheme, as described in RFC 2045",
						"type": "string"
					}
				}
			},
			"pathStart": {
				"description": "Instances' URIs must start with this value for this schema to apply to them",
				"type": "string",
				"format": "uri"
			}
		},
		"definitions": {
			"schemaArray": {
				"type": "array",
				"items": {
					"$ref": "#"
				}
			},
			"linkDescription": {
				"title": "Link Description Object",
				"type": "object",
				"required": [
					"href",
					"rel"
				],
				"properties": {
					"href": {
						"description": "a URI template, as defined by RFC 6570, with the addition of the $, ( and ) characters for pre-processing",
						"type": "string"
					},
					"rel": {
						"description": "relation to the target resource of the link",
						"type": "string"
					},
					"title": {
						"description": "a title for the link",
						"type": "string"
					},
					"targetSchema": {
						"description": "JSON Schema describing the link target",
						"$ref": "#"
					},
					"mediaType": {
						"description": "media type (as defined by RFC 2046) describing the link target",
						"type": "string"
					},
					"method": {
						"description": "method for requesting the target of the link (e.g. for HTTP this might be \"GET\" or \"DELETE\")",
						"type": "string"
					},
					"encType": {
						"description": "The media type in which to submit data along with the request",
						"type": "string",
						"default": "application/json"
					},
					"schema": {
						"description": "Schema describing the data to submit along with the request",
						"$ref": "#"
					}
				}
			}
		}
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(2);
	var widgetregistry_1 = __webpack_require__(39);
	var WidgetFactory = (function () {
	    function WidgetFactory(registry, resolver) {
	        this.registry = registry;
	        this.resolver = resolver;
	    }
	    WidgetFactory.prototype.createWidget = function (container, type) {
	        var componentClass = this.registry.getWidgetType(type);
	        var componentFactory = this.resolver.resolveComponentFactory(componentClass);
	        return container.createComponent(componentFactory);
	    };
	    WidgetFactory = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [widgetregistry_1.WidgetRegistry, core_1.ComponentFactoryResolver])
	    ], WidgetFactory);
	    return WidgetFactory;
	}());
	exports.WidgetFactory = WidgetFactory;
	

/***/ },
/* 39 */
/***/ function(module, exports) {

	"use strict";
	var WidgetRegistry = (function () {
	    function WidgetRegistry() {
	        this.widgets = {};
	    }
	    WidgetRegistry.prototype.setDefaultWidget = function (widget) {
	        this.defaultWidget = widget;
	    };
	    WidgetRegistry.prototype.getDefaultWidget = function () {
	        return this.defaultWidget;
	    };
	    WidgetRegistry.prototype.hasWidget = function (type) {
	        return this.widgets.hasOwnProperty(type);
	    };
	    WidgetRegistry.prototype.register = function (type, widget) {
	        this.widgets[type] = widget;
	    };
	    WidgetRegistry.prototype.getWidgetType = function (type) {
	        if (this.hasWidget(type)) {
	            return this.widgets[type];
	        }
	        return this.defaultWidget;
	    };
	    return WidgetRegistry;
	}());
	exports.WidgetRegistry = WidgetRegistry;
	

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = "<form-element *ngIf=\"rootProperty\" [formProperty]=\"rootProperty\"> </form-element>\n"

/***/ },
/* 41 */
/***/ function(module, exports) {

	"use strict";
	var Widget = (function () {
	    function Widget() {
	        this.id = "";
	        this.name = "";
	        this.schema = {};
	    }
	    return Widget;
	}());
	exports.Widget = Widget;
	var ControlWidget = (function (_super) {
	    __extends(ControlWidget, _super);
	    function ControlWidget() {
	        _super.apply(this, arguments);
	    }
	    ControlWidget.prototype.ngAfterViewInit = function () {
	        var _this = this;
	        var control = this.control;
	        this.formProperty.valueChanges.subscribe(function (newValue) {
	            if (control.value !== newValue) {
	                control.setValue(newValue, { emitEvent: false });
	            }
	        });
	        this.formProperty.errorsChanges.subscribe(function (errors) {
	            control.setErrors(errors, true);
	        });
	        control.valueChanges.subscribe(function (newValue) { _this.formProperty.setValue(newValue, false); });
	    };
	    return ControlWidget;
	}(Widget));
	exports.ControlWidget = ControlWidget;
	var ArrayLayoutWidget = (function (_super) {
	    __extends(ArrayLayoutWidget, _super);
	    function ArrayLayoutWidget() {
	        _super.apply(this, arguments);
	    }
	    return ArrayLayoutWidget;
	}(Widget));
	exports.ArrayLayoutWidget = ArrayLayoutWidget;
	var ObjectLayoutWidget = (function (_super) {
	    __extends(ObjectLayoutWidget, _super);
	    function ObjectLayoutWidget() {
	        _super.apply(this, arguments);
	    }
	    return ObjectLayoutWidget;
	}(Widget));
	exports.ObjectLayoutWidget = ObjectLayoutWidget;
	

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(2);
	var common_1 = __webpack_require__(43);
	var forms_1 = __webpack_require__(44);
	var formelement_component_1 = __webpack_require__(45);
	var form_component_1 = __webpack_require__(1);
	var widgetchooser_component_1 = __webpack_require__(47);
	var defaultwidgets_1 = __webpack_require__(48);
	var SchemaFormModule = (function () {
	    function SchemaFormModule() {
	    }
	    SchemaFormModule = __decorate([
	        core_1.NgModule({
	            imports: [common_1.CommonModule, forms_1.FormsModule, forms_1.ReactiveFormsModule],
	            declarations: [
	                formelement_component_1.FormElementComponent,
	                form_component_1.FormComponent,
	                widgetchooser_component_1.WidgetChooserComponent,
	                defaultwidgets_1.ArrayWidget,
	                defaultwidgets_1.ObjectWidget,
	                defaultwidgets_1.CheckboxWidget,
	                defaultwidgets_1.FileWidget,
	                defaultwidgets_1.IntegerWidget,
	                defaultwidgets_1.TextAreaWidget,
	                defaultwidgets_1.RadioWidget,
	                defaultwidgets_1.RangeWidget,
	                defaultwidgets_1.SelectWidget,
	                defaultwidgets_1.StringWidget,
	            ],
	            entryComponents: [
	                formelement_component_1.FormElementComponent,
	                form_component_1.FormComponent,
	                widgetchooser_component_1.WidgetChooserComponent,
	                defaultwidgets_1.ArrayWidget,
	                defaultwidgets_1.ObjectWidget,
	                defaultwidgets_1.CheckboxWidget,
	                defaultwidgets_1.FileWidget,
	                defaultwidgets_1.IntegerWidget,
	                defaultwidgets_1.TextAreaWidget,
	                defaultwidgets_1.RadioWidget,
	                defaultwidgets_1.RangeWidget,
	                defaultwidgets_1.SelectWidget,
	                defaultwidgets_1.StringWidget,
	            ],
	            exports: [
	                form_component_1.FormComponent,
	                formelement_component_1.FormElementComponent,
	                defaultwidgets_1.ArrayWidget,
	                defaultwidgets_1.ObjectWidget,
	                defaultwidgets_1.CheckboxWidget,
	                defaultwidgets_1.FileWidget,
	                defaultwidgets_1.IntegerWidget,
	                defaultwidgets_1.TextAreaWidget,
	                defaultwidgets_1.RadioWidget,
	                defaultwidgets_1.RangeWidget,
	                defaultwidgets_1.SelectWidget,
	                defaultwidgets_1.StringWidget
	            ]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], SchemaFormModule);
	    return SchemaFormModule;
	}());
	exports.SchemaFormModule = SchemaFormModule;
	

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = require("@angular/common");

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = require("@angular/forms");

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(2);
	var forms_1 = __webpack_require__(44);
	var model_1 = __webpack_require__(3);
	var FormElementComponent = (function () {
	    function FormElementComponent(actionRegistry) {
	        this.actionRegistry = actionRegistry;
	        this.control = new forms_1.FormControl("", function () { return null; });
	        this.widget = null;
	        this.buttons = [];
	    }
	    FormElementComponent.prototype.ngOnInit = function () {
	        this.parseButtons();
	    };
	    FormElementComponent.prototype.parseButtons = function () {
	        if (this.formProperty.schema.buttons !== undefined) {
	            this.buttons = this.formProperty.schema.buttons;
	            for (var _i = 0, _a = this.buttons; _i < _a.length; _i++) {
	                var button = _a[_i];
	                this.createButtonCallback(button);
	            }
	        }
	    };
	    FormElementComponent.prototype.createButtonCallback = function (button) {
	        var _this = this;
	        button.action = function (e) {
	            var action;
	            if (button.id && (action = _this.actionRegistry.get(button.id))) {
	                if (action) {
	                    action(_this.formProperty, button.parameters);
	                }
	            }
	            e.preventDefault();
	        };
	    };
	    FormElementComponent.prototype.onWidgetInstanciated = function (widget) {
	        this.widget = widget;
	        var id = "field" + (FormElementComponent.counter++);
	        this.widget.formProperty = this.formProperty;
	        this.widget.schema = this.formProperty.schema;
	        this.widget.name = id;
	        this.widget.id = id;
	        this.widget.control = this.control;
	    };
	    FormElementComponent.counter = 0;
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', model_1.FormProperty)
	    ], FormElementComponent.prototype, "formProperty", void 0);
	    FormElementComponent = __decorate([
	        core_1.Component({
	            selector: "form-element",
	            template: __webpack_require__(46)
	        }), 
	        __metadata('design:paramtypes', [model_1.ActionRegistry])
	    ], FormElementComponent);
	    return FormElementComponent;
	}());
	exports.FormElementComponent = FormElementComponent;
	

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = "<div *ngIf=\"formProperty.visible\">\n\t<ng2sf-widget-chooser\n\t(widgetInstanciated)=\"onWidgetInstanciated($event)\"\n  [widgetInfo]=\"formProperty.schema.widget\" \n  class=\"{{formProperty.schema.classes}}\">\n\t</ng2sf-widget-chooser>\n  <button *ngFor=\"let button of buttons\" (click)=\"button.action($event)\" class=\"{{button.class}}\">{{button.label}}</button>\n</div>\n"

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(2);
	var widgetfactory_1 = __webpack_require__(38);
	var WidgetChooserComponent = (function () {
	    function WidgetChooserComponent(widgetFactory, cdr) {
	        if (widgetFactory === void 0) { widgetFactory = null; }
	        this.widgetFactory = widgetFactory;
	        this.cdr = cdr;
	        this.widgetInstanciated = new core_1.EventEmitter();
	    }
	    WidgetChooserComponent.prototype.ngOnInit = function () {
	        var ref = this.widgetFactory.createWidget(this.container, this.widgetInfo.id);
	        this.widgetInstanciated.emit(ref.instance);
	        this.widgetInstance = ref.instance;
	        this.cdr.detectChanges();
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], WidgetChooserComponent.prototype, "widgetInfo", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], WidgetChooserComponent.prototype, "widgetInstanciated", void 0);
	    __decorate([
	        core_1.ViewChild("target", { read: core_1.ViewContainerRef }), 
	        __metadata('design:type', core_1.ViewContainerRef)
	    ], WidgetChooserComponent.prototype, "container", void 0);
	    WidgetChooserComponent = __decorate([
	        core_1.Component({
	            selector: "ng2sf-widget-chooser",
	            template: "<div #target></div>",
	        }), 
	        __metadata('design:paramtypes', [widgetfactory_1.WidgetFactory, core_1.ChangeDetectorRef])
	    ], WidgetChooserComponent);
	    return WidgetChooserComponent;
	}());
	exports.WidgetChooserComponent = WidgetChooserComponent;
	

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(49));
	__export(__webpack_require__(51));
	__export(__webpack_require__(53));
	__export(__webpack_require__(55));
	__export(__webpack_require__(57));
	__export(__webpack_require__(59));
	__export(__webpack_require__(61));
	__export(__webpack_require__(63));
	__export(__webpack_require__(65));
	__export(__webpack_require__(67));
	__export(__webpack_require__(69));
	

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(2);
	var widget_1 = __webpack_require__(41);
	var ArrayWidget = (function (_super) {
	    __extends(ArrayWidget, _super);
	    function ArrayWidget() {
	        _super.apply(this, arguments);
	    }
	    ArrayWidget.prototype.addItem = function () {
	        this.formProperty.addItem();
	    };
	    ArrayWidget.prototype.removeItem = function (index) {
	        this.formProperty.removeItem(index);
	    };
	    ArrayWidget = __decorate([
	        core_1.Component({
	            selector: "array-widget",
	            template: __webpack_require__(50)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ArrayWidget);
	    return ArrayWidget;
	}(widget_1.ArrayLayoutWidget));
	exports.ArrayWidget = ArrayWidget;
	

/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = "<div class=\"widget form-group\">\n\t<label [attr.for]=\"id\" class=\"horizontal control-label\">\n\t\t{{ schema.title }}\n\t</label>\n\t<span *ngIf=\"schema.description\" class=\"formHelp\">{{schema.description}}</span>\n\t<div *ngFor=\"let itemProperty of formProperty.properties; let i=index\">\n\t\t<form-element [formProperty]=\"itemProperty\"></form-element>\n\t\t<button (click)=\"removeItem(i)\" class=\"btn btn-default array-remove-button\">\n\t\t\t<span class=\"glyphicon glyphicon-minus\" aria-hidden=\"true\"></span> Remove\n\t\t</button>\n\t</div>\n\t<button (click)=\"addItem()\" class=\"btn btn-default array-add-button\">\n\t\t<span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span> Add\n\t</button>\n</div>\n"

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(2);
	var widget_1 = __webpack_require__(41);
	var ObjectWidget = (function (_super) {
	    __extends(ObjectWidget, _super);
	    function ObjectWidget() {
	        _super.apply(this, arguments);
	    }
	    ObjectWidget = __decorate([
	        core_1.Component({
	            selector: "form-object",
	            template: __webpack_require__(52)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ObjectWidget);
	    return ObjectWidget;
	}(widget_1.ObjectLayoutWidget));
	exports.ObjectWidget = ObjectWidget;
	

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = "<fieldset *ngFor=\"let fieldset of formProperty.schema.fieldsets\">\n\t<legend *ngIf=\"fieldset.title\">{{fieldset.title}}</legend>\n\t<div *ngFor=\"let fieldId of fieldset.fields\">\n\t\t<form-element [formProperty]=\"formProperty.getProperty(fieldId)\"></form-element>\n\t</div>\n</fieldset>\n"

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(2);
	var widget_1 = __webpack_require__(41);
	var CheckboxWidget = (function (_super) {
	    __extends(CheckboxWidget, _super);
	    function CheckboxWidget() {
	        _super.apply(this, arguments);
	    }
	    CheckboxWidget = __decorate([
	        core_1.Component({
	            selector: "checkbox-widget",
	            template: __webpack_require__(54)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], CheckboxWidget);
	    return CheckboxWidget;
	}(widget_1.ControlWidget));
	exports.CheckboxWidget = CheckboxWidget;
	

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = "<div class=\"widget form-group\">\n    <label [attr.for]=\"id\" class=\"horizontal control-label\">\n        {{ schema.title }}\n    </label>\n    <span *ngIf=\"schema.description\" class=\"formHelp\">{{schema.description}}</span>\n\t<div class=\"checkbox\">\n\t\t<label class=\"horizontal control-label\">\n\t\t\t<input [formControl]=\"control\" [attr.name]=\"name\" [indeterminate]=\"control.value !== false && control.value !== true ? true :null\" type=\"checkbox\" [attr.disabled]=\"schema.readOnly\">\n\t\t\t<input *ngIf=\"schema.readOnly\" [attr.name]=\"name\" type=\"hidden\" [formControl]=\"control\">\n\t\t\t{{schema.description}}\n\t\t</label>\n\t</div>\n</div>\n\n"

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(2);
	var widget_1 = __webpack_require__(41);
	var FileWidget = (function (_super) {
	    __extends(FileWidget, _super);
	    function FileWidget() {
	        _super.call(this);
	    }
	    FileWidget = __decorate([
	        core_1.Component({
	            selector: "file-widget",
	            template: __webpack_require__(56)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], FileWidget);
	    return FileWidget;
	}(widget_1.ControlWidget));
	exports.FileWidget = FileWidget;
	

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = "<!-- Support number and range -->\n<div class=\"widget form-group\">\n\t<label [attr.for]=\"id\" class=\"horizontal control-label\">\n\t\t{{ schema.title }}\n\t</label>\n    <span *ngIf=\"schema.description\" class=\"formHelp\">{{schema.description}}</span>\n\t<input [name]=\"name\" class=\"text-widget file-widget\" [attr.id]=\"id\" [formControl]=\"control\" type=\"file\" [attr.disabled]=\"schema.readOnly?true:null\" >\n\t<input *ngIf=\"schema.readOnly\" [attr.name]=\"name\" type=\"hidden\" [formControl]=\"control\">\n</div>\n"

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(2);
	var widget_1 = __webpack_require__(41);
	var IntegerWidget = (function (_super) {
	    __extends(IntegerWidget, _super);
	    function IntegerWidget() {
	        _super.apply(this, arguments);
	    }
	    IntegerWidget = __decorate([
	        core_1.Component({
	            selector: "integer-widget",
	            template: __webpack_require__(58)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], IntegerWidget);
	    return IntegerWidget;
	}(widget_1.ControlWidget));
	exports.IntegerWidget = IntegerWidget;
	

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = "<!-- Support number and range -->\n<div class=\"widget form-group\">\n\t<label [attr.for]=\"id\" class=\"horizontal control-label\">\n\t\t{{ schema.title }}\n\t</label>\n\t<div class=\"widget form-group\">\n    <span *ngIf=\"schema.description\" class=\"formHelp\">{{schema.description}}</span>\n\t<input [attr.readonly]=\"schema.readOnly?true:null\" [name]=\"name\" class=\"text-widget integer-widget form-control\" [formControl]=\"control\" [attr.type]=\"'number'\" [attr.min]=\"schema.minimum\" [attr.max]=\"schema.maximum\" [attr.placeholder]=\"schema.placeholder\" >\n</div>\n"

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(2);
	var widget_1 = __webpack_require__(41);
	var RadioWidget = (function (_super) {
	    __extends(RadioWidget, _super);
	    function RadioWidget() {
	        _super.apply(this, arguments);
	    }
	    RadioWidget = __decorate([
	        core_1.Component({
	            selector: "radio-widget",
	            template: __webpack_require__(60)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], RadioWidget);
	    return RadioWidget;
	}(widget_1.ControlWidget));
	exports.RadioWidget = RadioWidget;
	

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = "<div class=\"widget form-group\">\n\t<label>{{schema.title}}</label>\n    <span *ngIf=\"schema.description\" class=\"formHelp\">{{schema.description}}</span>\n\t<div *ngFor=\"let option of schema.oneOf\" class=\"radio\">\n\t\t<label class=\"horizontal control-label\">\n\t\t\t<input [formControl]=\"control\" [attr.name]=\"name\" value=\"{{option.enum[0]}}\" type=\"radio\"  [attr.disabled]=\"schema.readOnly\">\n\t\t\t{{option.description}}\n\t\t</label>\n\t</div>\n\t<input *ngIf=\"schema.readOnly\" [attr.name]=\"name\" type=\"hidden\" [formControl]=\"control\">\n</div>\n"

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(2);
	var widget_1 = __webpack_require__(41);
	var RangeWidget = (function (_super) {
	    __extends(RangeWidget, _super);
	    function RangeWidget() {
	        _super.apply(this, arguments);
	    }
	    RangeWidget = __decorate([
	        core_1.Component({
	            selector: "range-widget",
	            template: __webpack_require__(62)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], RangeWidget);
	    return RangeWidget;
	}(widget_1.ControlWidget));
	exports.RangeWidget = RangeWidget;
	

/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports = "<div class=\"widget form-group\">\n\t<label [attr.for]=\"id\" class=\"horizontal control-label\">\n\t\t{{ schema.title }}\n\t</label>\n    <span *ngIf=\"schema.description\" class=\"formHelp\">{{schema.description}}</span>\t\n\t<input [name]=\"name\" class=\"text-widget range-widget\" [attr.id]=\"id\"\n\t[formControl]=\"control\" [attr.type]=\"'range'\" [attr.min]=\"schema.minimum\" [attr.max]=\"schema.maximum\" [attr.disabled]=\"schema.readOnly?true:null\" >\n\t<input *ngIf=\"schema.readOnly\" [attr.name]=\"name\" type=\"hidden\">\n</div>\n"

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(2);
	var widget_1 = __webpack_require__(41);
	var SelectWidget = (function (_super) {
	    __extends(SelectWidget, _super);
	    function SelectWidget() {
	        _super.apply(this, arguments);
	    }
	    SelectWidget = __decorate([
	        core_1.Component({
	            selector: "select-widget",
	            template: __webpack_require__(64)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], SelectWidget);
	    return SelectWidget;
	}(widget_1.ControlWidget));
	exports.SelectWidget = SelectWidget;
	

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = "<div class=\"widget form-group\">\n\t<label [attr.for]=\"id\" class=\"horizontal control-label\">\n\t\t{{ schema.title }}\n\t</label>\n    <span *ngIf=\"schema.description\" class=\"formHelp\">{{schema.description}}</span>\n\t<select [formControl]=\"control\" [attr.name]=\"name\" [attr.disabled]=\"schema.readOnly\" class=\"form-control\">\n\t<option *ngFor=\"let option of schema.oneOf\" [ngValue]=\"option.enum[0]\" >{{option.description}}</option>\n\t</select>\n\t<input *ngIf=\"schema.readOnly\" [attr.name]=\"name\" type=\"hidden\" [formControl]=\"control\">\n</div>\n"

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(2);
	var widget_1 = __webpack_require__(41);
	var StringWidget = (function (_super) {
	    __extends(StringWidget, _super);
	    function StringWidget() {
	        _super.apply(this, arguments);
	    }
	    StringWidget.prototype.getInputType = function () {
	        if (!this.schema.widget.id || this.schema.widget.id === 'string') {
	            return 'text';
	        }
	        else {
	            return this.schema.widget.id;
	        }
	    };
	    StringWidget = __decorate([
	        core_1.Component({
	            selector: "string-widget",
	            template: __webpack_require__(66)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], StringWidget);
	    return StringWidget;
	}(widget_1.ControlWidget));
	exports.StringWidget = StringWidget;
	

/***/ },
/* 66 */
/***/ function(module, exports) {

	module.exports = "<div class=\"widget form-group\">\n    <label [attr.for]=\"id\" class=\"horizontal control-label\">\n    \t{{ schema.title }}\n    </label>\n    <span *ngIf=\"schema.description\" class=\"formHelp\">{{schema.description}}</span>\n    <input [name]=\"name\" [attr.readonly]=\"(schema.widget.id!=='color') && schema.readOnly?true:null\"  class=\"text-widget.id textline-widget form-control\" [attr.type]=\"this.getInputType()\" [attr.id]=\"id\"  [formControl]=\"control\" [attr.placeholder]=\"schema.placeholder\" [attr.disabled]=\"(schema.widget.id=='color' && schema.readOnly)?true:null\">\n    <input *ngIf=\"(schema.widget.id==='color' && schema.readOnly)\" [attr.name]=\"name\" type=\"hidden\" [formControl]=\"control\">\n</div>\n"

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(2);
	var widget_1 = __webpack_require__(41);
	var TextAreaWidget = (function (_super) {
	    __extends(TextAreaWidget, _super);
	    function TextAreaWidget() {
	        _super.apply(this, arguments);
	    }
	    TextAreaWidget = __decorate([
	        core_1.Component({
	            selector: "textarea-widget",
	            template: __webpack_require__(68)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], TextAreaWidget);
	    return TextAreaWidget;
	}(widget_1.ControlWidget));
	exports.TextAreaWidget = TextAreaWidget;
	

/***/ },
/* 68 */
/***/ function(module, exports) {

	module.exports = "<div class=\"widget form-group\">\n\t<label [attr.for]=\"id\" class=\"horizontal control-label\">\n\t\t{{ schema.title }}\n\t</label>\n    <span *ngIf=\"schema.description\" class=\"formHelp\">{{schema.description}}</span>\n\t<textarea [attr.readonly]=\"schema.readOnly\" [name]=\"name\" class=\"text-widget textarea-widget form-control\" [formControl]=\"control\"></textarea>\n</div>\n"

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _1 = __webpack_require__(48);
	var widgetregistry_1 = __webpack_require__(39);
	var DefaultWidgetRegistry = (function (_super) {
	    __extends(DefaultWidgetRegistry, _super);
	    function DefaultWidgetRegistry() {
	        _super.call(this);
	        this.register("array", _1.ArrayWidget);
	        this.register("object", _1.ObjectWidget);
	        this.register("string", _1.StringWidget);
	        this.register("search", _1.StringWidget);
	        this.register("tel", _1.StringWidget);
	        this.register("url", _1.StringWidget);
	        this.register("email", _1.StringWidget);
	        this.register("password", _1.StringWidget);
	        this.register("color", _1.StringWidget);
	        this.register("date", _1.StringWidget);
	        this.register("date-time", _1.StringWidget);
	        this.register("time", _1.StringWidget);
	        this.register("integer", _1.IntegerWidget);
	        this.register("number", _1.IntegerWidget);
	        this.register("range", _1.RangeWidget);
	        this.register("textarea", _1.TextAreaWidget);
	        this.register("file", _1.FileWidget);
	        this.register("select", _1.SelectWidget);
	        this.register("radio", _1.RadioWidget);
	        this.register("boolean", _1.CheckboxWidget);
	        this.register("checkbox", _1.CheckboxWidget);
	        this.setDefaultWidget(_1.StringWidget);
	    }
	    return DefaultWidgetRegistry;
	}(widgetregistry_1.WidgetRegistry));
	exports.DefaultWidgetRegistry = DefaultWidgetRegistry;
	

/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map