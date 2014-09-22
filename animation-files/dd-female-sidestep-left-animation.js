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
FemaleSideStepLeft = function() {
    this.animation =
		{"name":"FemaleSideStepLeft","settings":{"baseFrequency":430,"flyingHipsPitch":60,"takeFlightVelocity":40,"maxBankingAngle":40},"calibration":{"strideLengthLeft":0.6367158889770508,"strideLengthRight":0.40361881256103516},"joints":[{"name":"hips","pitch":0,"yaw":0,"roll":11.226415094339623,"pitchPhase":0,"yawPhase":0,"rollPhase":0,"pitchOffset":-6.132075471698112,"yawOffset":0,"rollOffset":0,"thrust":0,"bob":0,"sway":0,"thrustPhase":180,"bobPhase":0,"swayPhase":0,"thrustOffset":0,"bobOffset":0,"swayOffset":0},{"name":"upperLegs","pitch":17.320754716981135,"yaw":0,"roll":9.90566037735849,"pitchPhase":-0.6792452830188722,"yawPhase":0,"rollPhase":-83.54716981132076,"pitchOffset":25.13207547169811,"yawOffset":0,"rollOffset":-7.320754716981133},{"name":"lowerLegs","pitch":38.37735849056604,"yaw":0,"roll":0,"pitchPhase":-180,"yawPhase":0,"rollPhase":0,"pitchOffset":-33.62264150943396,"yawOffset":0,"rollOffset":1.7358490566037732},{"name":"feet","pitch":0,"yaw":0,"roll":0,"pitchPhase":0,"yawPhase":0,"rollPhase":0,"pitchOffset":7.924528301886791,"yawOffset":0,"rollOffset":0},{"name":"toes","pitch":21.735849056603772,"yaw":0,"roll":0,"pitchPhase":0.6792452830188722,"yawPhase":0,"rollPhase":0,"pitchOffset":0,"yawOffset":0,"rollOffset":0},{"name":"spine","pitch":0,"yaw":0,"roll":8,"pitchPhase":0,"yawPhase":0,"rollPhase":-171.8490566037736,"pitchOffset":0,"yawOffset":0,"rollOffset":0},{"name":"spine1","pitch":0,"yaw":0,"roll":4.528301886792453,"pitchPhase":0,"yawPhase":0,"rollPhase":180,"pitchOffset":0,"yawOffset":0,"rollOffset":0},{"name":"spine2","pitch":0,"yaw":0,"roll":4.150943396226415,"pitchPhase":0,"yawPhase":0,"rollPhase":-173.20754716981133,"pitchOffset":0,"yawOffset":0,"rollOffset":0},{"name":"shoulders","pitch":0,"yaw":0,"roll":0,"pitchPhase":0,"yawPhase":0,"rollPhase":0,"pitchOffset":0,"yawOffset":0.6792452830188678,"rollOffset":0.6792452830188678},{"name":"upperArms","pitch":9.169811320754718,"yaw":0,"roll":0,"pitchPhase":174.56603773584908,"yawPhase":0,"rollPhase":0,"pitchOffset":63.169811320754704,"yawOffset":0.6792452830188678,"rollOffset":0},{"name":"lowerArms","pitch":0,"yaw":0,"roll":0,"pitchPhase":0,"yawPhase":0,"rollPhase":0,"pitchOffset":-7.4716981132075455,"yawOffset":0,"rollOffset":3.396226415094339},{"name":"hands","pitch":9.169811320754718,"yaw":0,"roll":0,"pitchPhase":86.2641509433962,"yawPhase":0,"rollPhase":0,"pitchOffset":-22.415094339622637,"yawOffset":0,"rollOffset":0},{"name":"head","pitch":0,"yaw":0,"roll":0,"pitchPhase":0,"yawPhase":2.0377358490566166,"rollPhase":4.754716981132077,"pitchOffset":10.52830188679245,"yawOffset":-22.75471698113208,"rollOffset":1.0188679245283017}]};
	this.loadAnimation = function(){return this.animation;};
};
