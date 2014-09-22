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
MaleSideStepRight = function() {
    this.animation =
		{"name":"MaleSideStepRight","settings":{"baseFrequency":430,"flyingHipsPitch":60,"takeFlightVelocity":40,"maxBankingAngle":40},"calibration":{"sideStepCycleStartRight":90,"strideLengthRight":0.8628132343292236},"joints":[{"name":"hips","pitch":0,"yaw":0,"roll":11.320754716981133,"pitchPhase":0,"yawPhase":0,"rollPhase":0,"pitchOffset":1.4150943396226412,"yawOffset":0,"rollOffset":0,"thrust":0,"bob":0,"sway":0,"thrustPhase":180,"bobPhase":0,"swayPhase":0,"thrustOffset":0,"bobOffset":0,"swayOffset":0},{"name":"upperLegs","pitch":12.566037735849056,"yaw":0,"roll":10.962264150943396,"pitchPhase":0,"yawPhase":0,"rollPhase":99.84905660377359,"pitchOffset":24.67924528301886,"yawOffset":0,"rollOffset":0},{"name":"lowerLegs","pitch":16.9811320754717,"yaw":0,"roll":0,"pitchPhase":-180,"yawPhase":0,"rollPhase":0,"pitchOffset":-29.547169811320757,"yawOffset":0,"rollOffset":6.11320754716981},{"name":"feet","pitch":0,"yaw":0,"roll":0,"pitchPhase":0,"yawPhase":0,"rollPhase":0,"pitchOffset":1.132075471698113,"yawOffset":-5.471698113207546,"rollOffset":-4.716981132075471},{"name":"toes","pitch":0,"yaw":0,"roll":0,"pitchPhase":0,"yawPhase":0,"rollPhase":0,"pitchOffset":0,"yawOffset":0,"rollOffset":0},{"name":"spine","pitch":0,"yaw":0,"roll":9.81132075471698,"pitchPhase":0,"yawPhase":0,"rollPhase":175.92452830188677,"pitchOffset":0,"yawOffset":0,"rollOffset":0},{"name":"spine1","pitch":0,"yaw":0,"roll":0,"pitchPhase":0,"yawPhase":0,"rollPhase":0,"pitchOffset":0,"yawOffset":0,"rollOffset":0},{"name":"spine2","pitch":0,"yaw":0,"roll":3.320754716981132,"pitchPhase":0,"yawPhase":0,"rollPhase":131.09433962264154,"pitchOffset":0,"yawOffset":0,"rollOffset":0},{"name":"shoulders","pitch":0,"yaw":0,"roll":0,"pitchPhase":0,"yawPhase":0,"rollPhase":0,"pitchOffset":0,"yawOffset":0,"rollOffset":0},{"name":"upperArms","pitch":0.33962264150943394,"yaw":0,"roll":0,"pitchPhase":171.8490566037736,"yawPhase":0,"rollPhase":-2.0377358490566166,"pitchOffset":59.0943396226415,"yawOffset":0,"rollOffset":0},{"name":"lowerArms","pitch":0,"yaw":0,"roll":0,"pitchPhase":0,"yawPhase":0,"rollPhase":0,"pitchOffset":14.264150943396224,"yawOffset":0,"rollOffset":0},{"name":"hands","pitch":3.735849056603773,"yaw":0,"roll":0,"pitchPhase":-83.54716981132076,"yawPhase":0,"rollPhase":0,"pitchOffset":-2.0377358490566033,"yawOffset":0,"rollOffset":0},{"name":"head","pitch":0,"yaw":0,"roll":0,"pitchPhase":0,"yawPhase":0,"rollPhase":0,"pitchOffset":0,"yawOffset":0,"rollOffset":0}]};
	this.loadAnimation = function(){return this.animation;};
};