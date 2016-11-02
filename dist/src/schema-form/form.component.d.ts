import { ChangeDetectorRef, OnChanges, EventEmitter } from "@angular/core";
import { Action, ActionRegistry, FormPropertyFactory, FormProperty, ValidatorRegistry, Validator } from "./model";
export declare class FormComponent implements OnChanges {
    private formPropertyFactory;
    private actionRegistry;
    private validatorRegistry;
    private cdr;
    schema: any;
    model: any;
    actions: {
        [actionId: string]: Action;
    };
    validators: {
        [path: string]: Validator;
    };
    onChange: EventEmitter<{
        value: any;
    }>;
    rootProperty: FormProperty;
    constructor(formPropertyFactory: FormPropertyFactory, actionRegistry: ActionRegistry, validatorRegistry: ValidatorRegistry, cdr: ChangeDetectorRef);
    ngOnChanges(changes: any): void;
    private setValidators();
    private setActions();
    reset(): void;
}
