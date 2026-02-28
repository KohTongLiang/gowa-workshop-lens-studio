// SetResolution.js
// Version: 0.0.1
// Event: Lens Initialized
// Description: Change resolution of a render target texture by a multiplier

//@input Asset.Texture renderTarget
//@input float resolutionMultiplier = 0.5 {"label":"Resolution"}

var newRez = new vec2 (script.renderTarget.control.resolution.x * script.resolutionMultiplier,script.renderTarget.control.resolution.y * script.resolutionMultiplier);
script.renderTarget.control.useScreenResolution = false;
script.renderTarget.control.resolution = new vec2(newRez.x, newRez.y);
