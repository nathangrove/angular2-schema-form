import { OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ActionRegistry, FormProperty } from "./model";
export declare class FormElementComponent implements OnInit {
    private actionRegistry;
    formProperty: FormProperty;
    control: FormControl;
    private widget;
    private buttons;
    private static counter;
    constructor(actionRegistry: ActionRegistry);
    ngOnInit(): void;
    private parseButtons();
    private createButtonCallback(button);
    private onWidgetInstanciated(widget);
}
