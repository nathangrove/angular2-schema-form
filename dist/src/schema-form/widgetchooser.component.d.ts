import { ChangeDetectorRef, EventEmitter, OnInit } from "@angular/core";
import { WidgetFactory } from "./widgetfactory";
export declare class WidgetChooserComponent implements OnInit {
    private widgetFactory;
    private cdr;
    widgetInfo: any;
    widgetInstanciated: EventEmitter<any>;
    private container;
    private widgetInstance;
    constructor(widgetFactory: WidgetFactory, cdr: ChangeDetectorRef);
    ngOnInit(): void;
}
