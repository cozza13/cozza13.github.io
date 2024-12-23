//
//  standing animation js
//
//
//  Created by Davedub, August 2014
//
//  Procedural animation datafile
//
//  Saved animation file containing all the settings, properties and joint details to animate a High Fidelity character
//
//  Distributed under the Apache License, Version 2.0.
//  See the accompanying file LICENSE or http://www.apache.org/licenses/LICENSE-2.0.html
//
FemaleStandingOne = function() {
    this.animation =
		{"name":"FemaleStandingOne","settings":{"baseFrequency":35,"flyingHipsPitch":60,"takeFlightVelocity":40,"maxBankingAngle":40},"calibration":{"strideLengthForwards":2.021,"strideLengthBackwards":0.9417},"adjusters":{"legsSeparation":{"strength":-0.03679245283018867,"separationAngle":50},"stride":{"strength":0,"upperLegsPitch":30,"lowerLegsPitch":15,"upperLegsPitchOffset":0.2,"lowerLegsPitchOffset":1.5}},"joints":[{"name":"hips","pitch":0,"yaw":0,"roll":0,"pitchPhase":0,"yawPhase":0,"rollPhase":0,"pitchOffset":0,"yawOffset":0,"rollOffset":0,"thrust":0,"bob":0,"sway":0,"thrustPhase":180,"bobPhase":0,"swayPhase":-90,"thrustOffset":0,"bobOffset":0,"swayOffset":0},{"name":"upperLegs","pitch":0,"yaw":0,"roll":0,"pitchPhase":0,"yawPhase":0,"rollPhase":0,"pitchOffset":0,"yawOffset":0,"rollOffset":0},{"name":"lowerLegs","pitch":0,"yaw":0,"roll":0,"pitchPhase":0,"yawPhase":0,"rollPhase":0,"pitchOffset":0,"yawOffset":0,"rollOffset":0},{"name":"feet","pitch":0,"yaw":0,"roll":0,"pitchPhase":0,"yawPhase":0,"rollPhase":0,"pitchOffset":0,"yawOffset":0,"rollOffset":0},{"name":"toes","pitch":2.0377358490566038,"yaw":0,"roll":0,"pitchPhase":0,"yawPhase":0,"rollPhase":0,"pitchOffset":4.415094339622641,"yawOffset":0,"rollOffset":0},{"name":"spine","pitch":0.9056603773584905,"yaw":0,"roll":0,"pitchPhase":-180,"yawPhase":0,"rollPhase":0,"pitchOffset":0,"yawOffset":0,"rollOffset":0},{"name":"spine1","pitch":0,"yaw":0,"roll":0,"pitchPhase":0,"yawPhase":0,"rollPhase":0,"pitchOffset":0,"yawOffset":0,"rollOffset":0},{"name":"spine2","pitch":1.7358490566037734,"yaw":0,"roll":0,"pitchPhase":-0.6792452830188722,"yawPhase":0,"rollPhase":0,"pitchOffset":0,"yawOffset":0,"rollOffset":0},{"name":"shoulders","pitch":0,"yaw":0,"roll":0,"pitchPhase":0,"yawPhase":0,"rollPhase":0,"pitchOffset":0.6792452830188678,"yawOffset":-5.20754716981132,"rollOffset":-2.9433962264150937},{"name":"upperArms","pitch":0,"yaw":0,"roll":0,"pitchPhase":0,"yawPhase":0,"rollPhase":0,"pitchOffset":77.77358490566039,"yawOffset":9.169811320754715,"rollOffset":0},{"name":"lowerArms","pitch":0,"yaw":0,"roll":0,"pitchPhase":0,"yawPhase":0,"rollPhase":0,"pitchOffset":0,"yawOffset":0,"rollOffset":0},{"name":"hands","pitch":0,"yaw":0,"roll":0,"pitchPhase":0,"yawPhase":0,"rollPhase":0,"pitchOffset":1.6981132075471694,"yawOffset":-1.0188679245283017,"rollOffset":1.0188679245283017},{"name":"head","pitch":0,"yaw":0,"roll":0,"pitchPhase":-90.33962264150944,"yawPhase":94.41509433962267,"rollPhase":0,"pitchOffset":1.6981132075471694,"yawOffset":0,"rollOffset":0}]};
    this.loadAnimation = function(){return this.animation;};
};