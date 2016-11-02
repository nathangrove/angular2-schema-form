import { FormProperty } from "./formproperty";
export declare abstract class AtomicProperty extends FormProperty {
    setValue(value: any, onlySelf?: boolean): void;
    reset(value?: any, onlySelf?: boolean): void;
    protected resetValue(value: any): any;
    protected abstract fallbackValue(): any;
    _updateValue(): void;
}
