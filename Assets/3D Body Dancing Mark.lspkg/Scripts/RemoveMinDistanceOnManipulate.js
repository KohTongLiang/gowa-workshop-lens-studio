// RemoveMinDistanceOnManipulate.js
// Version: 0.0.1
// Event: FrameUpdated
// Description: Allows you to manipulate on an axis facing the camera 
// by removing minDistance of the manipulate component

// @input Component.ManipulateComponent manipulateComponent

if (script.manipulateComponent) {
    script.manipulateComponent.minDistance = -9999;
} else {
    print("WARNING: Please assign a Manipulate Component");
}
