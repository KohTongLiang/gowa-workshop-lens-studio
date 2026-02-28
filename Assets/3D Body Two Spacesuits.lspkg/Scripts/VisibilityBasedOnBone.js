// VisibilityBasedOnBone.js
// Version: 1.0.0
// Event: Initialized
// Description: Controls visibility of mesh depending on tracking state of the corresponding bone.

//@input SceneObject Head 

//@input SceneObject LeftArm
//@input SceneObject LeftForearm
//@input SceneObject LeftHand 

//@input SceneObject RightArm 
//@input SceneObject RightForearm 
//@input SceneObject RightHand

//@input SceneObject LeftUpLeg 
//@input SceneObject LeftLeg
//@input SceneObject LeftFoot

//@input SceneObject RightUpLeg 
//@input SceneObject RightLeg
//@input SceneObject RightFoot

//@input SceneObject LeftHandThumb1
//@input SceneObject LeftHandThumb2
//@input SceneObject LeftHandThumb3
//@input SceneObject LeftHandIndex1
//@input SceneObject LeftHandIndex2
//@input SceneObject LeftHandIndex3
//@input SceneObject LeftHandMiddle1
//@input SceneObject LeftHandMiddle2
//@input SceneObject LeftHandMiddle3
//@input SceneObject LeftHandRing1
//@input SceneObject LeftHandRing2
//@input SceneObject LeftHandRing3
//@input SceneObject LeftHandPinky1
//@input SceneObject LeftHandPinky2
//@input SceneObject LeftHandPinky3

//@input SceneObject RightHandThumb1
//@input SceneObject RightHandThumb2
//@input SceneObject RightHandThumb3
//@input SceneObject RightHandIndex1
//@input SceneObject RightHandIndex2
//@input SceneObject RightHandIndex3
//@input SceneObject RightHandMiddle1
//@input SceneObject RightHandMiddle2
//@input SceneObject RightHandMiddle3
//@input SceneObject RightHandRing1
//@input SceneObject RightHandRing2
//@input SceneObject RightHandRing3
//@input SceneObject RightHandPinky1
//@input SceneObject RightHandPinky2
//@input SceneObject RightHandPinky3


function setEnabled(mesh, stringname) {
    mesh.enabled= h3d.isAttachmentPointTracking(stringname);
}

function onUpdate() {
    if (script.LeftArm) {
        setEnabled(script.LeftArm, "LeftArm");
    }

    if (script.LeftForearm) {
        setEnabled(script.LeftForearm, "LeftForeArm");
    }

    if (script.LeftHand) {
        setEnabled(script.LeftHand, "LeftHand");
    }
    
    if (script.RightArm) {
        setEnabled(script.RightArm, "RightArm");
    }

    if (script.RightForearm) {
        setEnabled(script.RightForearm, "RightForeArm");
    }

    if (script.RightHand) {
        setEnabled(script.RightHand, "RightHand");
    }
    
    if (script.LeftFoot) {
        setEnabled(script.LeftFoot, "LeftFoot");
    }

    if (script.LeftLeg) {
        setEnabled(script.LeftLeg, "LeftLeg");
    }

    if (script.LeftUpLeg) {
        setEnabled(script.LeftUpLeg, "LeftUpLeg");
    }
    
    if (script.RightFoot) {
        setEnabled(script.RightFoot, "RightFoot");
    }

    if (script.RightLeg) {
        setEnabled(script.RightLeg,"RightLeg");
    }

    if (script.RightUpLeg) {
        setEnabled(script.RightUpLeg, "RightUpLeg");
    }
    
    if (script.Head) {
        setEnabled(script.Head, "Head");
    }
    
    if (script.LeftHandThumb1) {
        setEnabled(script.LeftHandThumb1, "LeftHandThumb1");
    }

    if (script.LeftHandThumb2) {
        setEnabled(script.LeftHandThumb2, "LeftHandThumb2");
    }

    if (script.LeftHandThumb3) {
        setEnabled(script.LeftHandThumb3, "LeftHandThumb3");
    }

    if (script.LeftHandIndex1) {
        setEnabled(script.LeftHandIndex1, "LeftHandIndex1");
    }

    if (script.LeftHandIndex2) {
        setEnabled(script.LeftHandIndex2, "LeftHandIndex2");
    }

    if (script.LeftHandIndex3) {
        setEnabled(script.LeftHandIndex3, "LeftHandIndex3");
    }

    if (script.LeftHandMiddle1) {
        setEnabled(script.LeftHandMiddle1, "LeftHandMiddle1");
    }

    if (script.LeftHandMiddle2) {
        setEnabled(script.LeftHandMiddle2, "LeftHandMiddle2");
    }

    if (script.LeftHandMiddle3) {
        setEnabled(script.LeftHandMiddle3, "LeftHandMiddle3");
    }

    if (script.LeftHandRing1) {
        setEnabled(script.LeftHandRing1, "LeftHandRing1");
    }

    if (script.LeftHandRing2) {
        setEnabled(script.LeftHandRing2, "LeftHandRing2");
    }

    if (script.LeftHandRing3) {
        setEnabled(script.LeftHandRing3, "LeftHandRing3");
    }

    if (script.LeftHandPinky1) {
        setEnabled(script.LeftHandPinky1, "LeftHandPinky1");
    }

    if (script.LeftHandPinky2) {
        setEnabled(script.LeftHandPinky2, "LeftHandPinky2");
    }

    if (script.LeftHandPinky3) {
        setEnabled(script.LeftHandPinky3, "LeftHandPinky3");
    }

    
    if (script.RightHandThumb1) {
        setEnabled(script.RightHandThumb1, "RightHandThumb1");
    }

    if (script.RightHandThumb2) {
        setEnabled(script.RightHandThumb2, "RightHandThumb2");
    }

    if (script.RightHandThumb3) {
        setEnabled(script.RightHandThumb3, "RightHandThumb3");
    }

    if (script.RightHandIndex1) {
        setEnabled(script.RightHandIndex1, "RightHandIndex1");
    }

    if (script.RightHandIndex2) {
        setEnabled(script.RightHandIndex2, "RightHandIndex2");
    }

    if (script.RightHandIndex3) {
        setEnabled(script.RightHandIndex3, "RightHandIndex3");
    }

    if (script.RightHandMiddle1) {
        setEnabled(script.RightHandMiddle1, "RightHandMiddle1");
    }

    if (script.RightHandMiddle2) {
        setEnabled(script.RightHandMiddle2, "RightHandMiddle2");
    }

    if (script.RightHandMiddle3) {
        setEnabled(script.RightHandMiddle3, "RightHandMiddle3");
    }

    if (script.RightHandRing1) {
        setEnabled(script.RightHandRing1, "RightHandRing1");
    }

    if (script.RightHandRing2) {
        setEnabled(script.RightHandRing2, "RightHandRing2");
    }

    if (script.RightHandRing3) {
        setEnabled(script.RightHandRing3, "RightHandRing3");
    }

    if (script.RightHandPinky1) {
        setEnabled(script.RightHandPinky1, "RightHandPinky1");
    }

    if (script.RightHandPinky2) {
        setEnabled(script.RightHandPinky2, "RightHandPinky2");
    }

    if (script.RightHandPinky3) {
        setEnabled(script.RightHandPinky3, "RightHandPinky3");
    }

}

var h3d=script.getSceneObject().getComponent("Component.ObjectTracking3D");
script.createEvent("UpdateEvent").bind(onUpdate);