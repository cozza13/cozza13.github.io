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
FemaleSideStepRight = function() {
    this.animation =
		{"name":"FemaleSideStepRight","settings":{"baseFrequency":430,"flyingHipsPitch":60,"takeFlightVelocity":40,"maxBankingAngle":40},"calibration":{"strideLengthLeft":0.40401554107666016,"strideLengthRight":0.5952868461608887},"joints":[{"name":"hips","pitch":0,"yaw":0,"roll":11.320754716981133,"pitchPhase":0,"yawPhase":0,"rollPhase":0,"pitchOffset":-6.132075471698112,"yawOffset":0,"rollOffset":0,"thrust":0,"bob":0,"sway":0,"thrustPhase":180,"bobPhase":0,"swayPhase":0,"thrustOffset":0,"bobOffset":0,"swayOffset":0},{"name":"upperLegs","pitch":18.339622641509436,"yaw":0,"roll":9.90566037735849,"pitchPhase":0,"yawPhase":0,"rollPhase":99.84905660377359,"pitchOffset":24.67924528301886,"yawOffset":0,"rollOffset":-6.264150943396228},{"name":"lowerLegs","pitch":37.35849056603774,"yaw":0,"roll":0,"pitchPhase":-180,"yawPhase":0,"rollPhase":0,"pitchOffset":-32.26415094339623,"yawOffset":0,"rollOffset":-0.07547169811320753},{"name":"feet","pitch":0,"yaw":0,"roll":0,"pitchPhase":0,"yawPhase":0,"rollPhase":0,"pitchOffset":1.132075471698113,"yawOffset":-5.471698113207546,"rollOffset":-4.716981132075471},{"name":"toes","pitch":0,"yaw":0,"roll":0,"pitchPhase":0,"yawPhase":0,"rollPhase":0,"pitchOffset":0,"yawOffset":0,"rollOffset":0},{"name":"spine","pitch":0,"yaw":0,"roll":7.094339622641509,"pitchPhase":0,"yawPhase":0,"rollPhase":175.92452830188677,"pitchOffset":0,"yawOffset":0,"rollOffset":0},{"name":"spine1","pitch":0,"yaw":0,"roll":4.528301886792453,"pitchPhase":0,"yawPhase":0,"rollPhase":180,"pitchOffset":0,"yawOffset":0,"rollOffset":0},{"name":"spine2","pitch":0,"yaw":0,"roll":3.6981132075471694,"pitchPhase":0,"yawPhase":0,"rollPhase":-180,"pitchOffset":0,"yawOffset":0,"rollOffset":0},{"name":"shoulders","pitch":0,"yaw":0,"roll":0,"pitchPhase":0,"yawPhase":0,"rollPhase":0,"pitchOffset":0,"yawOffset":0,"rollOffset":0},{"name":"upperArms","pitch":9.849056603773585,"yaw":0,"roll":0,"pitchPhase":171.8490566037736,"yawPhase":0,"rollPhase":-2.0377358490566166,"pitchOffset":72.67924528301886,"yawOffset":0,"rollOffset":0},{"name":"lowerArms","pitch":0,"yaw":0,"roll":0,"pitchPhase":0,"yawPhase":0,"rollPhase":0,"pitchOffset":-4.754716981132074,"yawOffset":0,"rollOffset":0},{"name":"hands","pitch":10.18867924528302,"yaw":0,"roll":0,"pitchPhase":91.69811320754718,"yawPhase":0,"rollPhase":0,"pitchOffset":-25.13207547169811,"yawOffset":0,"rollOffset":0},{"name":"head","pitch":0,"yaw":0,"roll":0,"pitchPhase":0,"yawPhase":0,"rollPhase":0,"pitchOffset":11.886792452830186,"yawOffset":24.792452830188672,"rollOffset":0}]};
	this.loadAnimation = function(){return this.animation;};
};