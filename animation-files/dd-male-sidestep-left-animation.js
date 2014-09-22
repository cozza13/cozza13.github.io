//
//  side step animation js
//
//
//  Created by Davedub, August 2014
//
//  Procedural animation datafile for walk.js
//
//  Saved animation file containing all the settings, properties and joint details to animate a High Fidelity character
//
//  Distributed under the Apache License, Version 2.0.
//  See the accompanying file LICENSE or http://www.apache.org/licenses/LICENSE-2.0.html
//
MaleSideStepLeft = function() {
    this.animation =
		{"name":"MaleSideStepLeft","settings":{"baseFrequency":430,"flyingHipsPitch":60,"takeFlightVelocity":40,"maxBankingAngle":40},"calibration":{"strideLengthLeft":0.7189682722091675,"sideStepCycleStartLeft":270},"joints":[{"name":"hips","pitch":0,"yaw":0,"roll":11.226415094339623,"pitchPhase":0,"yawPhase":0,"rollPhase":0,"pitchOffset":5.566037735849055,"yawOffset":0,"rollOffset":0,"thrust":0,"bob":0,"sway":0,"thrustPhase":180,"bobPhase":0,"swayPhase":0,"thrustOffset":0,"bobOffset":0,"swayOffset":0},{"name":"upperLegs","pitch":22.07547169811321,"yaw":0,"roll":7.9245283018867925,"pitchPhase":-0.6792452830188722,"yawPhase":0,"rollPhase":-91.69811320754717,"pitchOffset":17.886792452830186,"yawOffset":0,"rollOffset":2.7924528301886786},{"name":"lowerLegs","pitch":38.37735849056604,"yaw":0,"roll":0,"pitchPhase":-180,"yawPhase":0,"rollPhase":0,"pitchOffset":-33.62264150943396,"yawOffset":0,"rollOffset":8.377358490566035},{"name":"feet","pitch":0,"yaw":0,"roll":0,"pitchPhase":0,"yawPhase":0,"rollPhase":0,"pitchOffset":0,"yawOffset":0,"rollOffset":0},{"name":"toes","pitch":0,"yaw":0,"roll":0,"pitchPhase":0,"yawPhase":0,"rollPhase":0,"pitchOffset":0,"yawOffset":0,"rollOffset":0},{"name":"spine","pitch":0,"yaw":0,"roll":6.188679245283018,"pitchPhase":0,"yawPhase":0,"rollPhase":163.69811320754718,"pitchOffset":0,"yawOffset":0,"rollOffset":0},{"name":"spine1","pitch":0,"yaw":0,"roll":0,"pitchPhase":0,"yawPhase":0,"rollPhase":0,"pitchOffset":0,"yawOffset":0,"rollOffset":0},{"name":"spine2","pitch":0,"yaw":0,"roll":5.283018867924528,"pitchPhase":0,"yawPhase":0,"rollPhase":151.47169811320754,"pitchOffset":0,"yawOffset":0,"rollOffset":0.18867924528301883},{"name":"shoulders","pitch":0,"yaw":0,"roll":0,"pitchPhase":0,"yawPhase":0,"rollPhase":0,"pitchOffset":0,"yawOffset":0,"rollOffset":0},{"name":"upperArms","pitch":1.3584905660377358,"yaw":0,"roll":0,"pitchPhase":0,"yawPhase":0,"rollPhase":0,"pitchOffset":57.73584905660376,"yawOffset":0,"rollOffset":0},{"name":"lowerArms","pitch":0,"yaw":0,"roll":0,"pitchPhase":0,"yawPhase":0,"rollPhase":0,"pitchOffset":16.981132075471695,"yawOffset":0,"rollOffset":0},{"name":"hands","pitch":8.150943396226415,"yaw":0,"roll":0,"pitchPhase":0,"yawPhase":0,"rollPhase":0,"pitchOffset":2.0377358490566033,"yawOffset":0,"rollOffset":0},{"name":"head","pitch":0,"yaw":0,"roll":0,"pitchPhase":0,"yawPhase":0,"rollPhase":0,"pitchOffset":0,"yawOffset":0,"rollOffset":0}]};

	this.loadAnimation = function(){return this.animation;};
};
