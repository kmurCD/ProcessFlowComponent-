/*
*This is auto generated from the ControlManifest.Input.xml file
*/

// Define IInputs and IOutputs Type. They should match with ControlManifest.
export interface IInputs {
    Phase: ComponentFramework.PropertyTypes.OptionSetProperty;
    ControlPhase: ComponentFramework.PropertyTypes.WholeNumberProperty;
}
export interface IOutputs {
    Phase?: number;
    ControlPhase?: number;
}
