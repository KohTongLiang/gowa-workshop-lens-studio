//@input int handType = 0 {"widget":"combobox","values":[{"value":"0","label":"Any"},{"value":"1","label":"Left"},{"value":"2","label":"Right"}]}
//@input int checkType = 0 {"widget":"combobox","values":[{"value":"0","label":"Joints & Joints"},{"value":"1","label":"Joints & Object"}]}
//@input string[] jointGroupA
//@input string[] jointGroupB {"showIf":"checkType","showIfValue":"0"}
//@input SceneObject targetObject {"showIf":"checkType","showIfValue":"1"}

//@input bool visualizeDistance

//@ui {"widget":"separator"}
//@input bool setMaterialParameter
//@input Asset.Material material {"showIf":"setMaterialParameter","label":"Material"}
//@input string parameter {"showIf":"setMaterialParameter","label":"Parameter"}
//@input float remapInputMinValue {"showIf":"setMaterialParameter","label":"Remap Input Minimum Value"}
//@input float remapInputMaxValue {"showIf":"setMaterialParameter","label":"Remap Input Maximum Value"}
//@input float remapOutputMinValue {"showIf":"setMaterialParameter","label":"Remap Output Minimum Value"}
//@input float remapOutputMaxValue {"showIf":"setMaterialParameter","label":"Remap Output Maximum Value"}

var rawDistance = 0
var getDistance, getPosition

var distanceLoggerObject

var outofRangeColor, inRangeColor

function initialize() {
  switch (script.handType) {
    case 1:
      getDistance = global.leftHand().getJointsDistance
      getPosition = global.leftHand().getJointsAveragePosition
      break
    case 2:
      getDistance = global.rightHand().getJointsDistance
      getPosition = global.rightHand().getJointsAveragePosition
      break
  }

  if (script.visualizeDistance) {
    initializeDistanceLoggerVisual()
  }

  script.createEvent("UpdateEvent").bind(onUpdate)
}

function onUpdate() {
  if (!global.getActiveHandController()) {
    return
  }

  if ((!getDistance || !getPosition) && script.handType == 0) {
    getDistance = global.getJointsDistance
    getPosition = global.getJointsAveragePosition
  }

  if (script.checkType == 0) {
    rawDistance = getDistance(script.jointGroupA, script.jointGroupB)
  } else if (script.checkType == 1) {
    rawDistance = getPosition(script.jointGroupA).distance(script.targetObject.getTransform().getWorldPosition())
  }

  if (script.setMaterialParameter && script.material && script.parameter) {
    const parameterName = script.parameter
    const t = (rawDistance - script.remapInputMinValue) / (script.remapInputMaxValue - script.remapInputMinValue)
    const remappedValue = script.remapOutputMinValue + t * (script.remapOutputMaxValue - script.remapOutputMinValue)
    script.material.mainPass[parameterName] = remappedValue
  }
}

function initializeDistanceLoggerVisual() {
  var objB = script.checkType == 0 ? script.jointGroupB : script.targetObject
  distanceLoggerObject = global.createDistanceLogger(script.jointGroupA, objB)
}

function checkHandTracking() {
  if (script.handType == 0) {
    return global.getActiveHandController() !== null
  } else if (script.handType == 1) {
    return global.getHand() == "L"
  } else if (script.handType == 2) {
    return global.getHand() == "R"
  }
}

script.getDistance = function () {
  return rawDistance
}

script.isWithinRange = function () {
  if (!checkHandTracking()) {
    return false
  }
  return global.checkWithinRange(rawDistance, script.minDistance, script.maxDistance)
}

script.overwriteVisualizer = function (b, defaultTextColor) {
  if (b && !distanceLoggerObject) {
    initializeDistanceLoggerVisual()
    distanceLoggerObject.setTextColor(defaultTextColor)
  } else if (!b && distanceLoggerObject) {
    distanceLoggerObject.toggleVisual(false)
  }
}

script.setTextColor = function (inC, outC) {
  inRangeColor = inC
  outofRangeColor = outC
}

initialize()
