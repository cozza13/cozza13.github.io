//
//  dd-flying-down-animation.js
//
//  Created by Davedub, August 2014
//
//  Procedural animation datafile - use with walk.js
//
//  Saved animation file containing all the settings, properties and joint details to animate a High Fidelity character
//
//	'q' will dump your animation to the console or log. Copy / paste to here for formatted JSON:
//  http://jsonformatter.curiousconcept.com/
//
//  Distributed under the Apache License, Version 2.0.
//  See the accompanying file LICENSE or http://www.apache.org/licenses/LICENSE-2.0.html
//
MaleFlyingDown = function() {
    this.animation =
		{"name":"MaleFlyingDown","settings":{"baseFrequency":75.89433962264151,"flyingHipsPitch":60,"takeFlightVelocity":40,"maxBankingAngle":40},"joints":[{"name":"hips","pitch":0,"yaw":0,"roll":0,"pitchPhase":0,"yawPhase":0,"rollPhase":0,"pitchOffset":-5.377358490566037,"yawOffset":0,"rollOffset":0,"thrust":0,"bob":0,"sway":0,"thrustPhase":180,"bobPhase":0,"swayPhase":-90,"thrustOffset":0,"bobOffset":0,"swayOffset":0},{"name":"upperLegs","pitch":0,"yaw":0,"roll":0,"pitchPhase":0,"yawPhase":0,"rollPhase":0,"pitchOffset":0.2264150943396226,"yawOffset":-0.5283018867924527,"rollOffset":-2.6415094339622636},{"name":"lowerLegs","pitch":0,"yaw":0,"roll":0,"pitchPhase":0,"yawPhase":0,"rollPhase":0,"pitchOffset":-13.245283018867921,"yawOffset":0,"rollOffset":6.71698113207547},{"name":"feet","pitch":0,"yaw":0,"roll":0,"pitchPhase":0,"yawPhase":0,"rollPhase":0,"pitchOffset":-28.754716981132077,"yawOffset":0,"rollOffset":0},{"name":"toes","pitch":0,"yaw":0,"roll":0,"pitchPhase":0,"yawPhase":0,"rollPhase":0,"pitchOffset":0,"yawOffset":0,"rollOffset":0},{"name":"spine","pitch":1.660377358490566,"yaw":0,"roll":0,"pitchPhase":-180,"yawPhase":0,"rollPhase":0,"pitchOffset":-11.207547169811319,"yawOffset":0,"rollOffset":0},{"name":"spine1","pitch":0,"yaw":0,"roll":0,"pitchPhase":0,"yawPhase":0,"rollPhase":0,"pitchOffset":3.7358490566037728,"yawOffset":0,"rollOffset":0},{"name":"spine2","pitch":2.1132075471698113,"yaw":0,"roll":0,"pitchPhase":-0.6792452830188722,"yawPhase":0,"rollPhase":0,"pitchOffset":-1.0188679245283017,"yawOffset":0,"rollOffset":0},{"name":"shoulders","pitch":0,"yaw":0,"roll":0,"pitchPhase":0,"yawPhase":0,"rollPhase":0,"pitchOffset":0,"yawOffset":0,"rollOffset":0},{"name":"upperArms","pitch":0,"yaw":0,"roll":0,"pitchPhase":0,"yawPhase":0,"rollPhase":0,"pitchOffset":58.754716981132084,"yawOffset":32.26415094339622,"rollOffset":0},{"name":"lowerArms","pitch":0,"yaw":0,"roll":0,"pitchPhase":0,"yawPhase":0,"rollPhase":0,"pitchOffset":0,"yawOffset":0,"rollOffset":0},{"name":"hands","pitch":0,"yaw":0,"roll":0,"pitchPhase":0,"yawPhase":0,"rollPhase":0,"pitchOffset":0,"yawOffset":0,"rollOffset":0},{"name":"head","pitch":0,"yaw":1.7358490566037734,"roll":3.3962264150943393,"pitchPhase":-79.47169811320755,"yawPhase":94.41509433962267,"rollPhase":0,"pitchOffset":8.490566037735848,"yawOffset":0,"rollOffset":0}]};
    this.loadAnimation = function(){return this.animation;};
};