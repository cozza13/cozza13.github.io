//
//  male standing animation
//
//
//  Created by Davedub, August 2014
//
//  Procedural animation datafile
//
//  Saved animation file containing all the settings, properties and joint details to animate a High Fidelity character
//
//	'q' will dump your animation to the console or log. Copy / paste to here for formatted JSON:
//  http://jsonformatter.curiousconcept.com/
//
//  Distributed under the Apache License, Version 2.0.
//  See the accompanying file LICENSE or http://www.apache.org/licenses/LICENSE-2.0.html
//
MaleStandingOne = function() {
    this.animation =
		{"name":"MaleStandingOne","settings":{"baseFrequency":60,"flyingHipsPitch":60,"takeFlightVelocity":40,"maxBankingAngle":40},"joints":[{"name":"hips","pitch":0,"yaw":0,"roll":0,"pitchPhase":0,"yawPhase":0,"rollPhase":0,"pitchOffset":2.3585,"yawOffset":0,"rollOffset":0,"thrust":0,"bob":0,"sway":0,"thrustPhase":180,"bobPhase":0,"swayPhase":-90,"thrustOffset":0,"bobOffset":0,"swayOffset":0},{"name":"upperLegs","pitch":0,"yaw":0,"roll":0,"pitchPhase":0,"yawPhase":0,"rollPhase":0,"pitchOffset":0.2264150943396226,"yawOffset":-0.5283018867924527,"rollOffset":-8.226415094339623},{"name":"lowerLegs","pitch":0,"yaw":0,"roll":0,"pitchPhase":0,"yawPhase":0,"rollPhase":0,"pitchOffset":0,"yawOffset":0,"rollOffset":5.20754716981132},{"name":"feet","pitch":0,"yaw":0,"roll":0,"pitchPhase":0,"yawPhase":0,"rollPhase":0,"pitchOffset":0,"yawOffset":2.4528301886792447,"rollOffset":-17.547169811320757},{"name":"toes","pitch":0,"yaw":0,"roll":0,"pitchPhase":0,"yawPhase":0,"rollPhase":0,"pitchOffset":0,"yawOffset":0,"rollOffset":0.2264150943396226},{"name":"spine","pitch":1.660377358490566,"yaw":0,"roll":0,"pitchPhase":-180,"yawPhase":0,"rollPhase":0,"pitchOffset":0,"yawOffset":0,"rollOffset":0},{"name":"spine1","pitch":1.5094339622641508,"yaw":0,"roll":0,"pitchPhase":0.6792452830188722,"yawPhase":0,"rollPhase":0,"pitchOffset":0,"yawOffset":0,"rollOffset":0},{"name":"spine2","pitch":0.7547169811320754,"yaw":0,"roll":0,"pitchPhase":-0.6792452830188722,"yawPhase":0,"rollPhase":0,"pitchOffset":-3.7358490566037728,"yawOffset":0,"rollOffset":0},{"name":"shoulders","pitch":0,"yaw":0,"roll":0,"pitchPhase":0,"yawPhase":0,"rollPhase":0,"pitchOffset":0,"yawOffset":0,"rollOffset":0},{"name":"upperArms","pitch":0,"yaw":0,"roll":3.0566037735849054,"pitchPhase":0,"yawPhase":0,"rollPhase":180,"pitchOffset":71.32075471698111,"yawOffset":9.169811320754715,"rollOffset":0},{"name":"lowerArms","pitch":0,"yaw":0,"roll":0,"pitchPhase":0,"yawPhase":0,"rollPhase":0,"pitchOffset":12.905660377358487,"yawOffset":0,"rollOffset":0},{"name":"hands","pitch":0,"yaw":0,"roll":0,"pitchPhase":0,"yawPhase":0,"rollPhase":0,"pitchOffset":0,"yawOffset":0,"rollOffset":0},{"name":"head","pitch":0,"yaw":0,"roll":0,"pitchPhase":-79.47169811320755,"yawPhase":94.41509433962267,"rollPhase":0,"pitchOffset":0,"yawOffset":0,"rollOffset":0}]};
    this.loadAnimation = function(){return this.animation;};
};