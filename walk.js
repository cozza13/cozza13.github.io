//
//  walk.js
//
//  version 1.004b
//
//  Created by Davedub, August / September 2014
//
//
//  Distributed under the Apache License, Version 2.0.
//  See the accompanying file LICENSE or http://www.apache.org/licenses/LICENSE-2.0.html
//


// Set asset paths here:

// path to the animation files
var pathToAnimFiles = 'http://localhost/downloads/hf/scripts/animation-files/';									// loads fine (files must be present on localhost)
//var pathToAnimFiles = 'http://highfidelity.davedub.co.uk/procedural/walk/animation-files/';         				// files present, but load with errors - weird
//var pathToAnimFiles = 'http://s3-us-west-1.amazonaws.com/highfidelity-public/procedural-animator/files/';			// working (but only without https)

// path to the images used for the overlays
var pathToOverlays = 'http://localhost/downloads/hf/scripts/overlays/';													// loads fine (files must be present on localhost)
//var pathToOverlays = 'http://highfidelity.davedub.co.uk/procedural/walk/overlays/';								// files present, but won't load - weird
//var pathToOverlays = 'http://s3-us-west-1.amazonaws.com/highfidelity-public/procedural-animator/images/';			// working (but only without https)

// path to the sounds used for the footsteps
var pathToSounds = 'http://highfidelity-public.s3-us-west-1.amazonaws.com/sounds/Footsteps/';
//var pathToSounds = 'http://localhost/downloads/hf/sounds/Footsteps/';


// load all the animation datafiles ( 15 female, 15 male ~ 240k )
Script.include(pathToAnimFiles+"dd-female-cool-walk-animation.js");
Script.include(pathToAnimFiles+"dd-female-elderly-walk-animation.js");
Script.include(pathToAnimFiles+"dd-female-power-walk-animation.js");
Script.include(pathToAnimFiles+"dd-female-run-animation.js");
Script.include(pathToAnimFiles+"dd-female-sexy-walk-animation.js");
Script.include(pathToAnimFiles+"dd-female-shuffle-animation.js");
Script.include(pathToAnimFiles+"dd-female-random-walk-animation.js");
Script.include(pathToAnimFiles+"dd-female-strut-walk-animation.js");
Script.include(pathToAnimFiles+"dd-female-tough-walk-animation.js");
Script.include(pathToAnimFiles+"dd-female-flying-up-animation.js");
Script.include(pathToAnimFiles+"dd-female-flying-animation.js");
Script.include(pathToAnimFiles+"dd-female-flying-down-animation.js");
Script.include(pathToAnimFiles+"dd-female-standing-one-animation.js");
Script.include(pathToAnimFiles+"dd-female-standing-two-animation.js");
Script.include(pathToAnimFiles+"dd-female-sidestep-animation.js");
Script.include(pathToAnimFiles+"dd-male-cool-walk-animation.js");
Script.include(pathToAnimFiles+"dd-male-elderly-walk-animation.js");
Script.include(pathToAnimFiles+"dd-male-power-walk-animation.js");
Script.include(pathToAnimFiles+"dd-male-run-animation.js");
Script.include(pathToAnimFiles+"dd-male-sexy-walk-animation.js");
Script.include(pathToAnimFiles+"dd-male-shuffle-animation.js");
Script.include(pathToAnimFiles+"dd-male-random-walk-animation.js");
Script.include(pathToAnimFiles+"dd-male-strut-walk-animation.js");
Script.include(pathToAnimFiles+"dd-male-tough-walk-animation.js");
Script.include(pathToAnimFiles+"dd-male-flying-up-animation.js");
Script.include(pathToAnimFiles+"dd-male-flying-animation.js");
Script.include(pathToAnimFiles+"dd-male-flying-down-animation.js");
Script.include(pathToAnimFiles+"dd-male-standing-one-animation.js");
Script.include(pathToAnimFiles+"dd-male-standing-two-animation.js");
Script.include(pathToAnimFiles+"dd-male-sidestep-animation.js");

// read in the data from the animation files
var FemaleCoolWalkFile = new FemaleCoolWalk();
var femaleCoolWalk = FemaleCoolWalkFile.loadAnimation();
var FemaleElderlyWalkFile = new FemaleElderlyWalk();
var femaleElderlyWalk = FemaleElderlyWalkFile.loadAnimation();
var FemalePowerWalkFile = new FemalePowerWalk();
var femalePowerWalk = FemalePowerWalkFile.loadAnimation();
var FemaleRunFile = new FemaleRun();
var femaleRun = FemaleRunFile.loadAnimation();
var FemaleSexyWalkFile = new FemaleSexyWalk();
var femaleSexyWalk = FemaleSexyWalkFile.loadAnimation();
var FemaleShuffleFile = new FemaleShuffle();
var femaleShuffle = FemaleShuffleFile.loadAnimation();
var FemaleRandomWalkFile = new FemaleRandomWalk();
var femaleRandomWalk = FemaleRandomWalkFile.loadAnimation();
var FemaleStrutWalkFile = new FemaleStrutWalk();
var femaleStrutWalk = FemaleStrutWalkFile.loadAnimation();
var FemaleToughWalkFile = new FemaleToughWalk();
var femaleToughWalk = FemaleToughWalkFile.loadAnimation();
var FemaleFlyingUpFile = new FemaleFlyingUp();
var femaleFlyingUp = FemaleFlyingUpFile.loadAnimation();
var FemaleFlyingFile = new FemaleFlying();
var femaleFlying = FemaleFlyingFile.loadAnimation();
var FemaleFlyingDownFile = new FemaleFlyingDown();
var femaleFlyingDown = FemaleFlyingDownFile.loadAnimation();
var FemaleStandOneFile = new FemaleStandingOne();
var femaleStandOne = FemaleStandOneFile.loadAnimation();
var FemaleStandTwoFile = new FemaleStandingTwo();
var femaleStandTwo = FemaleStandTwoFile.loadAnimation();
var FemaleSideStepFile = new FemaleSideStep();
var femaleSideStep = FemaleSideStepFile.loadAnimation();
var MaleCoolWalkFile = new MaleCoolWalk();
var maleCoolWalk = MaleCoolWalkFile.loadAnimation();
var MaleElderlyWalkFile = new MaleElderlyWalk();
var maleElderlyWalk = MaleElderlyWalkFile.loadAnimation();
var MalePowerWalkFile = new MalePowerWalk();
var malePowerWalk = MalePowerWalkFile.loadAnimation();
var MaleRunFile = new MaleRun();
var maleRun = MaleRunFile.loadAnimation();
var MaleSexyWalkFile = new MaleSexyWalk();
var maleSexyWalk = MaleSexyWalkFile.loadAnimation();
var MaleShuffleFile = new MaleShuffle();
var maleShuffle = MaleShuffleFile.loadAnimation();
var MaleRandomWalkFile = new MaleRandomWalk();
var maleRandomWalk = MaleRandomWalkFile.loadAnimation();
var MaleStrutWalkFile = new MaleStrutWalk();
var maleStrutWalk = MaleStrutWalkFile.loadAnimation();
var MaleToughWalkFile = new MaleToughWalk();
var maleToughWalk = MaleToughWalkFile.loadAnimation();
var MaleFlyingUpFile = new MaleFlyingUp();
var maleFlyingUp = MaleFlyingUpFile.loadAnimation();
var MaleFlyingFile = new MaleFlying();
var maleFlying = MaleFlyingFile.loadAnimation();
var MaleFlyingDownFile = new MaleFlyingDown();
var maleFlyingDown = MaleFlyingDownFile.loadAnimation();
var MaleStandOneFile = new MaleStandingOne();
var maleStandOne = MaleStandOneFile.loadAnimation();
var MaleStandTwoFile = new MaleStandingTwo();
var maleStandTwo = MaleStandTwoFile.loadAnimation();
var MaleSideStepFile = new MaleSideStep();
var maleSideStep = MaleSideStepFile.loadAnimation();

// read in the sounds
var footsteps = [];
footsteps.push(new Sound(pathToSounds+"FootstepW2Left-12db.wav"));
footsteps.push(new Sound(pathToSounds+"FootstepW2Right-12db.wav"));
footsteps.push(new Sound(pathToSounds+"FootstepW3Left-12db.wav"));
footsteps.push(new Sound(pathToSounds+"FootstepW3Right-12db.wav"));
footsteps.push(new Sound(pathToSounds+"FootstepW5Left-12db.wav"));
footsteps.push(new Sound(pathToSounds+"FootstepW5Right-12db.wav"));

// all slider controls have a range (with the exception of phase controls that are always +-180) so we store them all here
var sliderRanges = {"joints":[{"name":"hips","pitchRange":25,"yawRange":25,"rollRange":25,"pitchOffsetRange":25,"yawOffsetRange":25,"rollOffsetRange":25,"thrustRange":0.1,"bobRange":0.5,"swayRange":0.08},{"name":"upperLegs","pitchRange":90,"yawRange":35,"rollRange":35,"pitchOffsetRange":60,"yawOffsetRange":20,"rollOffsetRange":20},{"name":"lowerLegs","pitchRange":90,"yawRange":20,"rollRange":20,"pitchOffsetRange":90,"yawOffsetRange":20,"rollOffsetRange":20},{"name":"feet","pitchRange":60,"yawRange":20,"rollRange":20,"pitchOffsetRange":60,"yawOffsetRange":50,"rollOffsetRange":50},{"name":"toes","pitchRange":90,"yawRange":20,"rollRange":20,"pitchOffsetRange":90,"yawOffsetRange":20,"rollOffsetRange":20},{"name":"spine","pitchRange":40,"yawRange":40,"rollRange":40,"pitchOffsetRange":90,"yawOffsetRange":50,"rollOffsetRange":50},{"name":"spine1","pitchRange":20,"yawRange":40,"rollRange":20,"pitchOffsetRange":90,"yawOffsetRange":50,"rollOffsetRange":50},{"name":"spine2","pitchRange":20,"yawRange":40,"rollRange":20,"pitchOffsetRange":90,"yawOffsetRange":50,"rollOffsetRange":50},{"name":"shoulders","pitchRange":35,"yawRange":40,"rollRange":20,"pitchOffsetRange":180,"yawOffsetRange":180,"rollOffsetRange":180},{"name":"upperArms","pitchRange":90,"yawRange":90,"rollRange":90,"pitchOffsetRange":180,"yawOffsetRange":180,"rollOffsetRange":180},{"name":"lowerArms","pitchRange":90,"yawRange":90,"rollRange":120,"pitchOffsetRange":180,"yawOffsetRange":180,"rollOffsetRange":180},{"name":"hands","pitchRange":90,"yawRange":180,"rollRange":90,"pitchOffsetRange":180,"yawOffsetRange":180,"rollOffsetRange":180},{"name":"head","pitchRange":20,"yawRange":20,"rollRange":20,"pitchOffsetRange":90,"yawOffsetRange":90,"rollOffsetRange":90}]};

//  internal state (FSM based) constants
var STANDING = 2;
var WALKING = 4;
var SIDE_STEPPING = 8;
var FLYING = 16;
var CONFIG_WALK_STYLES = 32;
var CONFIG_WALK_TWEAKS = 64;
var CONFIG_WALK_JOINTS = 128;
var CONFIG_STANDING = 256;
var CONFIG_FLYING = 512;
var INTERNAL_STATE = STANDING;

// status
var powerOn = true;
var paused = false; // pause animation playback whilst adjusting certain parameters
var minimised = false;
var armsFree = true; // set true for hydra support - experimental
var statsOn = false;
var playFootStepSounds = false;

// constants
var MAX_WALK_SPEED = 1257; // max oscillation speed
var FLYING_SPEED = 6.4;// 12.4;  // m/s - real humans can't run any faster than 12.4 m/s
var TERMINAL_VELOCITY = 300;  // max speed imposed by Interface
var DIRECTION_UP = 1;
var DIRECTION_DOWN = 2;
var DIRECTION_LEFT = 4;
var DIRECTION_RIGHT = 8;
var DIRECTION_FORWARDS = 16;
var DIRECTION_BACKWARDS = 32;
var MALE = 64;
var FEMALE = 128;

// start of animation control section
var cumulativeTime = 0.0;
var lastOrientation;
var movementDirection = DIRECTION_FORWARDS;
var avatarGender = MALE;
var selectedWalk = maleStrutWalk; // the currently selected animation walk file (to edit any animation, paste it's name here and select walk editing mode)
var selectedStand = maleStandOne;
var selectedFlyUp = maleFlyingUp;
var selectedFly = maleFlying;
var selectedFlyDown = maleFlyingDown;
var selectedSideStepLeft = maleSideStep;
var selectedSideStepRight = maleSideStep;
var currentAnimation = selectedStand; // the current animation
var selectedJointIndex = 0; // the index of the joint currently selected for editing
var currentTransition = null; // used as a pointer to a Transition

// walkwheel (foot / ground speed matching)
var walkCycleStart = 105; // best foot forwards - TODO: if found to be different for different anims, add as setting to anim files
var walkWheelPosition = walkCycleStart;
var nextStep = DIRECTION_RIGHT; // first step is always right, because the sine waves say so. Unless you're mirrored.
var nFrames = 0; // for showing walk wheel stats only
var strideLength = 0; // stride calibration
var aviFootSize = {x:0.1, y:0.1, z:0.25}; // experimental values for addition to stride length - TODO: analyse and confirm is increasing smaller stride lengths accuracy

// constructor for recent RecentMotion (i.e. frame data) class
function RecentMotion(velocity, acceleration, principleDirection) {
	this.velocity = velocity;
	this.acceleration = acceleration;
	this.principleDirection = principleDirection;
	// add INTERNAL_STATE so can remove 'hints' system for state changes?
}

// constructor for animation Transition class
function Transition(lastAnimation, nextAnimation, reachPoses, transitionDuration, easingLower, easingUpper) {
	this.lastAnimation = lastAnimation; 			// name of last animation
	if(lastAnimation === selectedWalk)
		this.beginWalking = true;					// boolean - is the last animation a walking animation?
	else
		this.beginWalking = false;					// boolean - is the last animation a walking animation?
	this.nextAnimation = nextAnimation;				// name of next animation
	if(nextAnimation === selectedWalk)
		this.endWalking = true;						// boolean - is the next animation a walking animation?
	else
		this.endWalking = false;					// boolean - is the next animation a walking animation?
	this.reachPoses = reachPoses;					// array of reach poses - am very much looking forward to putting these it!
	this.transitionDuration = transitionDuration;	// length of transition (seconds)
	this.easingLower = easingLower;					// Bezier curve handle (normalised)
	this.easingUpper = easingUpper;					// Bezier curve handle (normalised)
	this.startTime = new Date().getTime();			// Starting timestamp (seconds)
	this.progress = 0;								// how far are we through the transition?
	this.startingQuadrant = 0;						// helps decide which direction to turn the walkwheel when aiming for stop position
}

// convert a local (to the avi) translation to a global one
function localToGlobal(localTranslation) {

        var aviOrientation = MyAvatar.orientation;
        var front = Quat.getFront(aviOrientation);
        var right = Quat.getRight(aviOrientation);
        var up    = Quat.getUp   (aviOrientation);
        var aviFront = Vec3.multiply(front,localTranslation.z);
        var aviRight = Vec3.multiply(right,localTranslation.x);
        var aviUp    = Vec3.multiply(up   ,localTranslation.y);
        var globalTranslation = {x:0,y:0,z:0}; // final value
        globalTranslation = Vec3.sum(globalTranslation, aviFront);
        globalTranslation = Vec3.sum(globalTranslation, aviRight);
        globalTranslation = Vec3.sum(globalTranslation, aviUp);
		return globalTranslation;
}

// similar ot above - convert hips translations to global and apply
function translateHips(localHipsTranslation) {
        var aviOrientation = MyAvatar.orientation;
        var front = Quat.getFront(aviOrientation);
        var right = Quat.getRight(aviOrientation);
        var up    = Quat.getUp   (aviOrientation);
        var aviFront = Vec3.multiply(front,localHipsTranslation.y);
        var aviRight = Vec3.multiply(right,localHipsTranslation.x);
        var aviUp    = Vec3.multiply(up   ,localHipsTranslation.z);
        var AviTranslationOffset = {x:0,y:0,z:0}; // final value
        AviTranslationOffset = Vec3.sum(AviTranslationOffset, aviFront);
        AviTranslationOffset = Vec3.sum(AviTranslationOffset, aviRight);
        AviTranslationOffset = Vec3.sum(AviTranslationOffset, aviUp);

        //MyAvatar.addThrust(AviTranslationOffset * 10);
        MyAvatar.position = {x: MyAvatar.position.x + AviTranslationOffset.x,
                             y: MyAvatar.position.y + AviTranslationOffset.y,
                             z: MyAvatar.position.z + AviTranslationOffset.z };
}

// clear all joint data
function resetJoints() {
    var avatarJointNames = MyAvatar.getJointNames();
    for (var i = 0; i < avatarJointNames.length; i++) {
        //MyAvatar.setJointData(avatarJointNames[i], Quat.fromPitchYawRollDegrees(0,0,0));
        MyAvatar.clearJointData(avatarJointNames[i]);
    }
}
// play footstep sound
function playFootstep(side) {
    var options = new AudioInjectionOptions();
    options.position = Camera.getPosition();
    options.volume = 0.7;
    var walkNumber = 2; // 0 to 2
    if(side===DIRECTION_RIGHT && playFootStepSounds) {
		//print('playing right footstep - if you can not hear sound, try turning your mic on then off again.');
		Audio.playSound(footsteps[walkNumber+1], options);
	}
    else if(side===DIRECTION_LEFT && playFootStepSounds) {
		//print('playing left footstep - if you can not hear sound, try turning your mic on then off again.');
		Audio.playSound(footsteps[walkNumber], options);
	}
}
// this is work in progress
// currently, it's not known if there are working finger joints on the avi
function curlFingers() {
    MyAvatar.setJointData("RightHandMiddle1", Quat.fromPitchYawRollDegrees(90,0,0));
    for(var i = 24 ; i < 44 ; i++) {
        MyAvatar.setJointData(jointList[i], Quat.fromPitchYawRollDegrees(0,90,0));
    }
    for(var i = 48 ; i < 68 ; i++) {
        MyAvatar.setJointData(jointList[i], Quat.fromPitchYawRollDegrees(10,0,90));
    }
}


// maths functions
function degToRad(degreesValue) {
    return degreesValue * Math.PI / 180;
}
function radToDeg(radiansValue) {
	return radiansValue * 180 / Math.PI;
}
function cubicRoot(x) {
    var y = Math.pow(Math.abs(x), 1/3);
    return x < 0 ? -y : y;
}

// animateAvatar - animates the avatar
function animateAvatar(deltaTime, velocity, principleDirection) {

	    // some slider adjustemnts cause a nasty flicker when adjusting
	    // pausing the animation stops this
        if(paused) return;

        var transitionProgress = 1;

        // is there any Transition to include?
        if(currentTransition!==null) {

			var elapasedTime = (new Date().getTime() - currentTransition.startTime) / 1000;
			currentTransition.progress = elapasedTime / currentTransition.transitionDuration;

			transitionProgress = getBezier((1-currentTransition.progress), {x:0,y:0}, currentTransition.easingLower, currentTransition.easingUpper, {x:1,y:1}).y;

			//print('Checking Bezier response: currentTransition.progress '+currentTransition.progress.toFixed(2)+' transitionProgress '+transitionProgress.toFixed(2));

			if(currentTransition.progress>=1) {

				// time to kill off the transition
				delete currentTransition;
				currentTransition = null;

			} else {

				// define angle(s) of the walk wheel at which we should stop walking
				var leftStop = 105;
				var rightStop = 290;
				var tolerance = 2;

				if(principleDirection===DIRECTION_BACKWARDS) {
					leftStop = 55;
					rightStop = 235;
				}

				if(currentTransition.startingQuadrant===0) {
					if(walkWheelPosition<leftStop) currentTransition.startingQuadrant = 1;
					else if(walkWheelPosition<leftStop+90) currentTransition.startingQuadrant = 2;
					else if(walkWheelPosition<rightStop) currentTransition.startingQuadrant = 3;
					else if(walkWheelPosition<rightStop+90) currentTransition.startingQuadrant = 4;
					else currentTransition.startingQuadrant = 1;
				}

				// keep the walkwheel turning until our feet are tucked nicely underneath us
				if(currentTransition.beginWalking) {
					// fold back (reverse walk) if we narrowly missed our stop target on the walkwheel when we stopped walking
					if(currentTransition.startingQuadrant%2===0)
						walkWheelPosition -= 3; // careful tweaking here, can't go too low, as any remaining velocity will go to negate this...
					else
						walkWheelPosition += 3;
				}

				// keep walking until both feet are below the avi, then hold that walk wheel position for remainder of transition
				if( ( walkWheelPosition > (leftStop - tolerance)  && walkWheelPosition < (leftStop  + tolerance) ) ||
					( walkWheelPosition > (rightStop - tolerance) && walkWheelPosition < (rightStop + tolerance) ) ){
					currentTransition.beginWalking = false;
				}
				//print('strideLength '+strideLength.toFixed(3)
				//	+ ' elapasedTime '+elapasedTime
				//	+ ' progress '+transitionProgress.toFixed(3)
				//	+ ' walkWheelPosition '+walkWheelPosition.toFixed(0)
				//	+ ' beginWalking ' + currentTransition.beginWalking
				//	+ ' endWalking ' + currentTransition.endWalking
				//	+ ' starting quadrant '+currentTransition.startingQuadrant);
			}
		}

        var adjustedFrequency = currentAnimation.settings.baseFrequency;  // only relevant for standing and flying

		// upper legs phase reversal for walking backwards
        var forwardModifier = 1;
        if(principleDirection===DIRECTION_BACKWARDS) {
			forwardModifier = -1;
		}

        // don't want to lean forwards if going directly upwards
        var leanPitchModifier = 1;
        if(principleDirection===DIRECTION_UP) {
			leanPitchModifier = 0;
		}

		// adjust the side stepping animation for left / right
		var directionModifier = -1;
		if(principleDirection===DIRECTION_RIGHT) {
			directionModifier = 1;
		}

        if(currentAnimation === selectedWalk ||
           currentAnimation === selectedSideStepLeft ||
           currentAnimation === selectedSideStepRight ||
           currentTransition !== null) {

			if(INTERNAL_STATE!==SIDE_STEPPING && currentTransition===null) {

				// if the timing's right, take a snapshot of the stride max and recalibrate the stride length
				var tolerance = 1.0; // higher the number, the higher the chance of a calibration taking place, but is traded off with lower accuracy
				if(walkWheelPosition < tolerance || walkWheelPosition > (360-tolerance) ||
				  (walkWheelPosition < (180+tolerance) && walkWheelPosition >(180-tolerance) )) {

					// calculate the feet's offset from the hips (in local Z only)
					//var hipsPos = localToGlobal(MyAvatar.getJointPosition("Hips"));
					var footRPos = localToGlobal(MyAvatar.getJointPosition("RightFoot"));
					var footLPos = localToGlobal(MyAvatar.getJointPosition("LeftFoot"));
					var footOffsetZ = Math.abs(footRPos.z - footLPos.z);
					strideLength = 2 * footOffsetZ + aviFootSize.z;
					print('Stride length calibrated to '+strideLength.toFixed(4)+' metres');
					if(principleDirection===DIRECTION_FORWARDS) {
						currentAnimation.calibration.strideLengthForwards = strideLength;
					} else if (principleDirection===DIRECTION_BACKWARDS) {
						currentAnimation.calibration.strideLengthBackwards = strideLength;
					}
				}
				else {

					if(principleDirection===DIRECTION_FORWARDS) {
						strideLength = currentAnimation.calibration.strideLengthForwards;
					} else if (principleDirection===DIRECTION_BACKWARDS) {
						strideLength = currentAnimation.calibration.strideLengthBackwards;
					}
				}
			}
			else if(INTERNAL_STATE===SIDE_STEPPING) {

				// calculate lateral stride - same same, but different
				// if the timing's right, take a snapshot of the stride max and recalibrate the stride length
				var tolerance = 1.0; // higher the number, the higher the chance of a calibration taking place, but is traded off with lower accuracy
				if(walkWheelPosition < (90+tolerance) && walkWheelPosition > (90-tolerance) ||
				  (walkWheelPosition < (270+tolerance) && walkWheelPosition >(270-tolerance) )) {

					// calculate the feet's offset from the hips (in local Z only)
					//var hipsPos = localToGlobal(MyAvatar.getJointPosition("Hips"));
					var footRPos = localToGlobal(MyAvatar.getJointPosition("RightFoot"));
					var footLPos = localToGlobal(MyAvatar.getJointPosition("LeftFoot"));
					var footOffsetX = Math.abs(footRPos.x - footLPos.x);
					strideLength = footOffsetX;
					print('Stride width calibrated to '+strideLength.toFixed(4)+ ' metres for sidestepping (work in progress)');
					if(principleDirection===DIRECTION_LEFT) {
						currentAnimation.calibration.strideLengthLeft = strideLength;
					} else if (principleDirection===DIRECTION_RIGHT) {
						currentAnimation.calibration.strideLengthRight = strideLength;
					}
				}
				else {

					if(principleDirection===DIRECTION_LEFT) {
						strideLength = currentAnimation.calibration.strideLengthLeft;
					} else if (principleDirection===DIRECTION_RIGHT) {
						strideLength = currentAnimation.calibration.strideLengthRight;
					}
				}
			}

			// wrap the stride length around a 'surveyor's wheel' twice and calculate the angular velocity at the given (linear) velocity
			// omega = v / r , where r = circumference / 2 PI , where circumference = 2 * stride length
			var wheelRadius = strideLength / Math.PI;
			var angularVelocity = velocity / wheelRadius;

			// calculate the degrees turned (at this angular velocity) since last frame
			var radiansTurnedSinceLastFrame = deltaTime * angularVelocity;
			var degreesTurnedSinceLastFrame = radToDeg(radiansTurnedSinceLastFrame);

			// if we are in an edit mode, we will need fake time to turn the wheel
			if(INTERNAL_STATE!==WALKING)
				degreesTurnedSinceLastFrame = currentAnimation.settings.baseFrequency / 70;

			// advance the walk wheel the appropriate amount
			// TODO: use radians, as Math.sin needs radians below anyway!
			walkWheelPosition += degreesTurnedSinceLastFrame;

			if( walkWheelPosition >= 360 )
				walkWheelPosition = walkWheelPosition % 360;

			// set the new values for the exact correct walk cycle speed at this velocity
			adjustedFrequency = 1;
			cumulativeTime = walkWheelPosition;

			// show stats and walk wheel?
			if(statsOn) {

				nFrames++;
				var distanceTravelled = velocity * deltaTime;
				var deltaTimeMS = deltaTime * 1000;

				if(INTERNAL_STATE===SIDE_STEPPING) {

					// draw the walk wheel turning around the z axis for sidestepping
					var yOffset = hipsToFeetDistance - (wheelRadius/1.1); // /1.1 is a visual kludge, probably necessary because of either the 'avi feet penetrate floor' issue or this script not including the avi's foot length in the walkwheel circumference - TODO - once ground plane following is in Interface, lock this down
					var sinWalkWheelPosition = wheelRadius * Math.sin(degToRad((directionModifier*-1) * walkWheelPosition));
					var cosWalkWheelPosition = wheelRadius * Math.cos(degToRad((directionModifier*-1) * -walkWheelPosition));
					var wheelXPos = {x: cosWalkWheelPosition, y:-sinWalkWheelPosition - yOffset, z: 0};
					var wheelXEnd = {x: -cosWalkWheelPosition, y:sinWalkWheelPosition - yOffset, z: 0};
					sinWalkWheelPosition = wheelRadius * Math.sin(degToRad(directionModifier * walkWheelPosition+90));
					cosWalkWheelPosition = wheelRadius * Math.cos(degToRad(directionModifier * walkWheelPosition+90));
					var wheelYPos = {x:cosWalkWheelPosition, y:sinWalkWheelPosition - yOffset, z: 0};
					var wheelYEnd = {x:-cosWalkWheelPosition, y:-sinWalkWheelPosition - yOffset, z: 0};
					Overlays.editOverlay(walkWheelYLine, {visible: true, position:wheelYPos, end:wheelYEnd});
					Overlays.editOverlay(walkWheelZLine, {visible: true, position:wheelXPos, end:wheelXEnd});

				} else {

					// draw the walk wheel turning around the x axis for walking forwards or backwards
					var yOffset = hipsToFeetDistance - (wheelRadius/1.1); // /1.1 is a visual kludge, probably necessary because of either the 'avi feet penetrate floor' issue or this script not including the avi's foot length in the walkwheel circumference - TODO - once ground plane following is in Interface, lock this down
					var sinWalkWheelPosition = wheelRadius * Math.sin(degToRad((forwardModifier*-1) * walkWheelPosition));
					var cosWalkWheelPosition = wheelRadius * Math.cos(degToRad((forwardModifier*-1) * -walkWheelPosition));
					var wheelZPos = {x:0, y:-sinWalkWheelPosition - yOffset, z: cosWalkWheelPosition};
					var wheelZEnd = {x:0, y:sinWalkWheelPosition - yOffset, z: -cosWalkWheelPosition};
					sinWalkWheelPosition = wheelRadius * Math.sin(degToRad(forwardModifier * walkWheelPosition+90));
					cosWalkWheelPosition = wheelRadius * Math.cos(degToRad(forwardModifier * walkWheelPosition+90));
					var wheelYPos = {x:0, y:sinWalkWheelPosition - yOffset, z: cosWalkWheelPosition};
					var wheelYEnd = {x:0, y:-sinWalkWheelPosition - yOffset, z: -cosWalkWheelPosition};
					Overlays.editOverlay(walkWheelYLine, { visible: true, position:wheelYPos, end:wheelYEnd });
					Overlays.editOverlay(walkWheelZLine, { visible: true, position:wheelZPos, end:wheelZEnd });
				}

				// populate debug overlay
				var debugInfo = 'Frame number: '+nFrames
							  + '\nFrame time: '+deltaTimeMS.toFixed(2)
							  + ' mS\nVelocity: '+velocity.toFixed(2)
							  + ' m/s\nDistance: '+distanceTravelled.toFixed(3)
							  + ' m\nOmega: '+angularVelocity.toFixed(3)
							  + ' rad / s\nDeg to turn: '+degreesTurnedSinceLastFrame.toFixed(2)
							  + ' deg\nStride: '+strideLength.toFixed(3)
							  + ' m\nWheel position: '+cumulativeTime.toFixed(1)
							  + ' deg\n';
				Overlays.editOverlay(debugText, {text: debugInfo});
			}

		} else {
			// not performing an action that requires ground / foot syncing
			//Overlays.editOverlay(walkWheelYLine, { visible: false });
			//Overlays.editOverlay(walkWheelZLine, { visible: false });
			nFrames = 0;
			if(currentTransition===null)
				walkWheelPosition = walkCycleStart; // best foot forwards for next time (set after any transitions have finished)
		}

        // TODO: optimise by precalculating and re-using Math.sin((cumulativeTime * femaleSexyWalk.settings.baseFrequency) when there is no phase to be applied
        // TODO: optimise by 'baking' offsets and phases after editing and use during normal playback

        var pitchOffset = 0;
        var yawOffset = 0;
        var rollOffset = 0;

		// calcualte any hips translation (only for sidestepping at the moment)
		if(INTERNAL_STATE===SIDE_STEPPING) {

			// do the translation
        	var motorOscillation  = 0;
        	var swayOscillation   = 0;
			if(principleDirection===DIRECTION_RIGHT)
				swayOscillation = Math.sin(degToRad((cumulativeTime * adjustedFrequency ) + currentAnimation.joints[0].swayPhase)) + currentAnimation.joints[0].swayOffset;
		   	else
		   		swayOscillation = Math.sin(degToRad((cumulativeTime * adjustedFrequency ) + (180-currentAnimation.joints[0].swayPhase) )) + currentAnimation.joints[0].swayOffset;

        	var bobOscillation    = 0;//Math.sin(degToRad((cumulativeTime * adjustedFrequency * 2) + currentAnimation.joints[0].bobPhase)) + currentAnimation.joints[0].bobOffset;

			translateHips({ x:swayOscillation * currentAnimation.joints[0].sway,
							y:bobOscillation,
							z:motorOscillation });
		}

        // calculate hips translation TODO: get this working!
        //var motorOscillation  = Math.sin(degToRad((cumulativeTime * adjustedFrequency * 2) + currentAnimation.joints[0].thrustPhase)) + currentAnimation.joints[0].thrustOffset;
        //var swayOscillation   = Math.sin(degToRad((cumulativeTime * adjustedFrequency    ) + currentAnimation.joints[0].swayPhase)) + currentAnimation.joints[0].swayOffset;
        //var bobOscillation    = Math.sin(degToRad((cumulativeTime * adjustedFrequency * 2) + currentAnimation.joints[0].bobPhase)) + currentAnimation.joints[0].bobOffset;

        // apply hips translation TODO: get this working!
        //translateHips({x:swayOscillation*currentAnimation.joints[0].sway, y:motorOscillation*currentAnimation.joints[0].thrust, z:bobOscillation*currentAnimation.joints[0].bob});

        // calculate hips rotation
        var pitchOscillation = currentAnimation.joints[0].pitch * Math.sin(degToRad((cumulativeTime * adjustedFrequency * 2)
                               + currentAnimation.joints[0].pitchPhase)) + currentAnimation.joints[0].pitchOffset;
        var yawOscillation   = currentAnimation.joints[0].yaw   * Math.sin(degToRad((cumulativeTime * adjustedFrequency )
                               + currentAnimation.joints[0].yawPhase))   + currentAnimation.joints[0].yawOffset;
        var rollOscillation  = (currentAnimation.joints[0].roll  * Math.sin(degToRad((cumulativeTime * adjustedFrequency )
                               + currentAnimation.joints[0].rollPhase))  + currentAnimation.joints[0].rollOffset);

        // apply the current Transition?
        if(currentTransition!==null) {

			var pitchOscillationLast = currentTransition.lastAnimation.joints[0].pitch * Math.sin(degToRad((walkWheelPosition * 2)
								   + currentTransition.lastAnimation.joints[0].pitchPhase)) + currentTransition.lastAnimation.joints[0].pitchOffset;
			var yawOscillationLast   = currentTransition.lastAnimation.joints[0].yaw   * Math.sin(degToRad((walkWheelPosition )
								   + currentTransition.lastAnimation.joints[0].yawPhase))   + currentTransition.lastAnimation.joints[0].yawOffset;
			var rollOscillationLast  = (currentTransition.lastAnimation.joints[0].roll  * Math.sin(degToRad((walkWheelPosition )
								   + currentTransition.lastAnimation.joints[0].rollPhase))  + currentTransition.lastAnimation.joints[0].rollOffset);

			pitchOscillation = (transitionProgress * pitchOscillation) + ((1-transitionProgress) * pitchOscillationLast);
			yawOscillation   = (transitionProgress * yawOscillation)   + ((1-transitionProgress) * yawOscillationLast);
			rollOscillation  = (transitionProgress * rollOscillation)  + ((1-transitionProgress) * rollOscillationLast);
		}

        // apply hips rotation
        MyAvatar.setJointData("Hips", Quat.fromPitchYawRollDegrees(-pitchOscillation + (leanPitchModifier * getLeanPitch(velocity)),   // getLeanPitch - lean forwards as velocity increases
                                                                    yawOscillation,                                       // Yup, that's correct ;-)
                                                                    rollOscillation + getLeanRoll(deltaTime, velocity))); // getLeanRoll - banking on cornering

		if(INTERNAL_STATE!==SIDE_STEPPING) {

			// calculate upper leg rotations
			// TODO: increase stride a bit as velocity increases
			var runningModifier = velocity / 12.4;//currentAnimation.settings.takeFlightVelocity;
			if(runningModifier>1) {
				runningModifier *= 2;
				runningModifier += 0.5;
			}
			else if(runningModifier>0) {
				runningModifier *= 2;
				runningModifier += 0.5;
			}
			else runningModifier = 1; // standing

			runningModifier = 1; // disabling hack for work in progress

			pitchOscillation = runningModifier * currentAnimation.joints[1].pitch *
							   Math.sin(degToRad((cumulativeTime * adjustedFrequency ) + (forwardModifier * currentAnimation.joints[1].pitchPhase)));
			yawOscillation   = currentAnimation.joints[1].yaw   * Math.sin(degToRad((cumulativeTime * adjustedFrequency ) + currentAnimation.joints[1].yawPhase));
			rollOscillation  = currentAnimation.joints[1].roll  * Math.sin(degToRad((cumulativeTime * adjustedFrequency ) + currentAnimation.joints[1].rollPhase));

			// apply the current Transition for the upper legs?
			if(currentTransition!==null) {

				var pitchOscillationLast = runningModifier * currentTransition.lastAnimation.joints[1].pitch *
							   				Math.sin(degToRad((walkWheelPosition * adjustedFrequency ) + (forwardModifier * currentTransition.lastAnimation.joints[1].pitchPhase)));
				var yawOscillationLast   = currentTransition.lastAnimation.joints[1].yaw   * Math.sin(degToRad((walkWheelPosition ) + currentTransition.lastAnimation.joints[1].yawPhase));
				var rollOscillationLast  = currentTransition.lastAnimation.joints[1].roll  * Math.sin(degToRad((walkWheelPosition ) + currentTransition.lastAnimation.joints[1].rollPhase));

				var pitchOffsetLast = currentTransition.lastAnimation.joints[1].pitchOffset;
				var pitchOffset = currentAnimation.joints[1].pitchOffset;
				var yawOffsetLast = currentTransition.lastAnimation.joints[1].yawOffset;
				var yawOffset = currentAnimation.joints[1].yawOffset;
				var rollOffsetLast = currentTransition.lastAnimation.joints[1].rollOffset;
				var rollOffset = currentAnimation.joints[1].rollOffset;

				pitchOffset = (transitionProgress * pitchOffset) + ((1-transitionProgress) * pitchOffsetLast);
				yawOffset = (transitionProgress * yawOffset) + ((1-transitionProgress) * yawOffsetLast);
				rollOffset = (transitionProgress * rollOffset) + ((1-transitionProgress) * rollOffsetLast);

				pitchOscillation = (transitionProgress * pitchOscillation) + ((1-transitionProgress) * pitchOscillationLast);
				yawOscillation   = (transitionProgress * yawOscillation)   + ((1-transitionProgress) * yawOscillationLast);
				rollOscillation  = (transitionProgress * rollOscillation)  + ((1-transitionProgress) * rollOscillationLast);

				//print('pitchOscillation '+pitchOscillation.toFixed(2)
				//	+' yawOscillation '+yawOscillation.toFixed(2)
				//	+' rollOscillation '+rollOscillation.toFixed(2)
				//	+' pitchOffset '+pitchOffset.toFixed(2)
				//	+' yawOffset '+yawOffset.toFixed(2)
				//	+' rollOffset '+rollOffset.toFixed(2)
				//	+' beginWalking '+currentTransition.beginWalking
				//	+' walkWheelPosition '+ walkWheelPosition);

				// apply the upper leg rotations
				MyAvatar.setJointData("RightUpLeg", Quat.fromPitchYawRollDegrees(
					pitchOscillation + pitchOffset,
					yawOscillation + yawOffset,
				   -rollOscillation - rollOffset ));
				MyAvatar.setJointData("LeftUpLeg",  Quat.fromPitchYawRollDegrees(
				   -pitchOscillation + pitchOffset,
					yawOscillation - yawOffset,
				   -rollOscillation + rollOffset ));
			}
			else {
				// apply the upper leg rotations
				MyAvatar.setJointData("RightUpLeg", Quat.fromPitchYawRollDegrees(
					pitchOscillation + currentAnimation.joints[1].pitchOffset,
					yawOscillation + currentAnimation.joints[1].yawOffset,
				   -rollOscillation - currentAnimation.joints[1].rollOffset ));
				MyAvatar.setJointData("LeftUpLeg",  Quat.fromPitchYawRollDegrees(
				   - pitchOscillation + currentAnimation.joints[1].pitchOffset,
					yawOscillation - currentAnimation.joints[1].yawOffset,
				   -rollOscillation + currentAnimation.joints[1].rollOffset ));
			}

			// calculate lower leg joint rotations
			strideAdjusterPitch = 0;
			strideAdjusterPitchOffset = 0;
			if(INTERNAL_STATE===WALKING ||
			   INTERNAL_STATE===CONFIG_WALK_STYLES ||
			   INTERNAL_STATE===CONFIG_WALK_TWEAKS ||
			   INTERNAL_STATE===CONFIG_WALK_JOINTS) {
				strideAdjusterPitch = currentAnimation.adjusters.stride.strength * currentAnimation.adjusters.stride.lowerLegsPitch;
				strideAdjusterPitchOffset = currentAnimation.adjusters.stride.strength*currentAnimation.adjusters.stride.lowerLegsPitchOffset;
			}
			pitchOscillation = currentAnimation.joints[2].pitch * Math.sin(degToRad((cumulativeTime * adjustedFrequency ) + currentAnimation.joints[2].pitchPhase));
			yawOscillation   = currentAnimation.joints[2].yaw   * Math.sin(degToRad((cumulativeTime * adjustedFrequency ) + currentAnimation.joints[2].yawPhase));
			rollOscillation  = currentAnimation.joints[2].roll  * Math.sin(degToRad((cumulativeTime * adjustedFrequency ) + currentAnimation.joints[2].rollPhase));

			// apply the current Transition for the lower legs
			if(currentTransition!==null) {

				var pitchOscillationLast = currentTransition.lastAnimation.joints[2].pitch * Math.sin(degToRad((walkWheelPosition ) + currentTransition.lastAnimation.joints[2].pitchPhase));
				var yawOscillationLast   = currentTransition.lastAnimation.joints[2].yaw   * Math.sin(degToRad((walkWheelPosition ) + currentTransition.lastAnimation.joints[2].yawPhase));
				var rollOscillationLast  = currentTransition.lastAnimation.joints[2].roll  * Math.sin(degToRad((walkWheelPosition ) + currentTransition.lastAnimation.joints[2].rollPhase));

				var pitchOffsetLast = currentTransition.lastAnimation.joints[2].pitchOffset;
				pitchOffset = currentAnimation.joints[2].pitchOffset;
				var yawOffsetLast = currentTransition.lastAnimation.joints[2].yawOffset;
				yawOffset = currentAnimation.joints[2].yawOffset;
				var rollOffsetLast = currentTransition.lastAnimation.joints[2].rollOffset;
				rollOffset = currentAnimation.joints[2].rollOffset;

				pitchOffset = (transitionProgress * pitchOffset) + ((1-transitionProgress) * pitchOffsetLast);
				yawOffset = (transitionProgress * yawOffset) + ((1-transitionProgress) * yawOffsetLast);
				rollOffset = (transitionProgress * rollOffset) + ((1-transitionProgress) * rollOffsetLast);

				// if stopping a walk, continue the walk until the legs are in a good position
				pitchOscillation = (transitionProgress * pitchOscillation) + ((1-transitionProgress) * pitchOscillationLast);
				yawOscillation   = (transitionProgress * yawOscillation)   + ((1-transitionProgress) * yawOscillationLast);
				rollOscillation  = (transitionProgress * rollOscillation)  + ((1-transitionProgress) * rollOscillationLast);

				// apply lower leg joint rotations
				MyAvatar.setJointData("RightLeg", Quat.fromPitchYawRollDegrees(
					-pitchOscillation + pitchOffset,
					 yawOscillation - yawOffset,
					 rollOscillation - rollOffset)); // TODO: needs a kick just before fwd peak
				MyAvatar.setJointData("LeftLeg",  Quat.fromPitchYawRollDegrees(
					 pitchOscillation + pitchOffset,
					 yawOscillation + yawOffset,
					 rollOscillation + rollOffset));
			}
			else {
				// apply lower leg joint rotations
				MyAvatar.setJointData("RightLeg", Quat.fromPitchYawRollDegrees(
					-pitchOscillation + currentAnimation.joints[2].pitchOffset,
					 yawOscillation - currentAnimation.joints[2].yawOffset,
					 rollOscillation - currentAnimation.joints[2].rollOffset)); // TODO: needs a kick just before fwd peak
				MyAvatar.setJointData("LeftLeg",  Quat.fromPitchYawRollDegrees(
					 pitchOscillation + currentAnimation.joints[2].pitchOffset,
					 yawOscillation + currentAnimation.joints[2].yawOffset,
					 rollOscillation + currentAnimation.joints[2].rollOffset));
			 }
		// end if !SIDE_STEPPING
	   }
	   else if( INTERNAL_STATE===SIDE_STEPPING ) {

		   	// sidestepping uses the leg's sinewave generators slightly differently
		   	var rollAngle = (cumulativeTime * adjustedFrequency ) + currentAnimation.joints[1].rollPhase;
		   	var rollOscillationLeft;
			var rollOscillationRight;

		   	if(principleDirection===DIRECTION_RIGHT)
		   		pitchOscillation = currentAnimation.joints[1].pitch * Math.sin(degToRad((cumulativeTime * adjustedFrequency ) + currentAnimation.joints[1].pitchPhase));
		   	else
				pitchOscillation = currentAnimation.joints[1].pitch * Math.sin(degToRad((cumulativeTime * adjustedFrequency ) - currentAnimation.joints[1].pitchPhase));

			yawOscillation   = currentAnimation.joints[1].yaw   * Math.sin(degToRad((cumulativeTime * adjustedFrequency ) + currentAnimation.joints[1].yawPhase));
			if(rollAngle%360<180) {
				rollOscillationRight = currentAnimation.joints[1].roll * Math.sin(degToRad(rollAngle));
				rollOscillationLeft  = 0;//(rollAngle/180) * -0.25 * currentAnimation.joints[1].roll * Math.sin(degToRad(rollAngle));
			} else {
				rollOscillationRight = 0;//((rollAngle-180)/180) * -0.25 * currentAnimation.joints[1].roll * Math.sin(degToRad(rollAngle));
				rollOscillationLeft  = currentAnimation.joints[1].roll * Math.sin(degToRad(rollAngle));
			}

			// apply upper leg rotations for sidestepping
			MyAvatar.setJointData("RightUpLeg", Quat.fromPitchYawRollDegrees(
				pitchOscillation + currentAnimation.joints[1].pitchOffset,
				yawOscillation + currentAnimation.joints[1].yawOffset,
			   -rollOscillationRight  - currentAnimation.joints[1].rollOffset ));
			MyAvatar.setJointData("LeftUpLeg",  Quat.fromPitchYawRollDegrees(
			   - pitchOscillation + currentAnimation.joints[1].pitchOffset,
				yawOscillation - currentAnimation.joints[1].yawOffset,
			   -rollOscillationLeft  + currentAnimation.joints[1].rollOffset ));

			// calculate lower leg joint rotations for sidestepping
			strideAdjusterPitch = 0;
			strideAdjusterPitchOffset = 0;
			if(INTERNAL_STATE===WALKING ||
			   INTERNAL_STATE===CONFIG_WALK_STYLES ||
			   INTERNAL_STATE===CONFIG_WALK_TWEAKS ||
			   INTERNAL_STATE===CONFIG_WALK_JOINTS) {
				strideAdjusterPitch = currentAnimation.adjusters.stride.strength * currentAnimation.adjusters.stride.lowerLegsPitch;
				strideAdjusterPitchOffset = currentAnimation.adjusters.stride.strength*currentAnimation.adjusters.stride.lowerLegsPitchOffset;
			}
			if(principleDirection===DIRECTION_RIGHT)
		   		pitchOscillation = currentAnimation.joints[2].pitch * Math.sin(degToRad((cumulativeTime * adjustedFrequency ) + currentAnimation.joints[2].pitchPhase));
		   	else
		   		pitchOscillation = currentAnimation.joints[2].pitch * Math.sin(degToRad((cumulativeTime * adjustedFrequency ) - currentAnimation.joints[2].pitchPhase));

			yawOscillation   = currentAnimation.joints[2].yaw   * Math.sin(degToRad((cumulativeTime * adjustedFrequency ) + currentAnimation.joints[2].yawPhase));
			rollOscillation  = currentAnimation.joints[2].roll  * Math.sin(degToRad((cumulativeTime * adjustedFrequency ) + currentAnimation.joints[2].rollPhase));

			// apply lower leg joint rotations
			MyAvatar.setJointData("RightLeg", Quat.fromPitchYawRollDegrees(
				-pitchOscillation + currentAnimation.joints[2].pitchOffset - strideAdjusterPitch * (Math.sin(degToRad((cumulativeTime * adjustedFrequency) + currentAnimation.joints[2].pitchPhase)) + strideAdjusterPitchOffset),
				 yawOscillation - currentAnimation.joints[2].yawOffset,
				 rollOscillation - currentAnimation.joints[2].rollOffset)); // TODO: needs a kick just before fwd peak
			MyAvatar.setJointData("LeftLeg",  Quat.fromPitchYawRollDegrees(
				 pitchOscillation + currentAnimation.joints[2].pitchOffset + strideAdjusterPitch * (Math.sin(degToRad((cumulativeTime * adjustedFrequency) + currentAnimation.joints[2].pitchPhase)) - strideAdjusterPitchOffset),
				 yawOscillation + currentAnimation.joints[2].yawOffset,
				 rollOscillation + currentAnimation.joints[2].rollOffset));
	   }

		// foot joint oscillation is a hard curve to replicate
		pitchOscillation = currentAnimation.joints[3].pitch * Math.sin(degToRad((cumulativeTime * adjustedFrequency ) + currentAnimation.joints[3].pitchPhase));
		yawOscillation   = currentAnimation.joints[3].yaw  * Math.sin(degToRad((cumulativeTime * adjustedFrequency    ) + currentAnimation.joints[3].yawPhase));
		rollOscillation  = currentAnimation.joints[3].roll * Math.sin(degToRad((cumulativeTime * adjustedFrequency    ) + currentAnimation.joints[3].rollPhase));
		if(currentTransition!==null) {

			pitchOscillationLast = currentTransition.lastAnimation.joints[3].pitch * Math.sin(degToRad((walkWheelPosition ) + currentTransition.lastAnimation.joints[3].pitchPhase));
			yawOscillationLast   = currentTransition.lastAnimation.joints[3].yaw   * Math.sin(degToRad((walkWheelPosition ) + currentTransition.lastAnimation.joints[3].yawPhase));
			rollOscillationLast  = currentTransition.lastAnimation.joints[3].roll  * Math.sin(degToRad((walkWheelPosition ) + currentTransition.lastAnimation.joints[3].rollPhase));


			pitchOscillation = (transitionProgress * pitchOscillation) + ((1-transitionProgress) * pitchOscillationLast);
			yawOscillation   = (transitionProgress * yawOscillation)   + ((1-transitionProgress) * yawOscillationLast);
			rollOscillation  = (transitionProgress * rollOscillation)  + ((1-transitionProgress) * rollOscillationLast);
		}
		MyAvatar.setJointData("RightFoot", Quat.fromPitchYawRollDegrees( pitchOscillation + currentAnimation.joints[3].pitchOffset, yawOscillation + currentAnimation.joints[3].yawOffset, rollOscillation + currentAnimation.joints[3].rollOffset));
		MyAvatar.setJointData("LeftFoot",  Quat.fromPitchYawRollDegrees(-pitchOscillation + currentAnimation.joints[3].pitchOffset, yawOscillation - currentAnimation.joints[3].yawOffset, rollOscillation - currentAnimation.joints[3].rollOffset));

		// play footfall sound yet? To determine this, we take the differential of
		// the foot's pitch curve to decide when the foot hits the ground.
		if(INTERNAL_STATE===WALKING ||
		   INTERNAL_STATE===CONFIG_WALK_STYLES ||
		   INTERNAL_STATE===CONFIG_WALK_TWEAKS ||
		   INTERNAL_STATE===CONFIG_WALK_JOINTS) {
			// As luck would have it, we're using a sine wave, so finding dy/dx is as
			// simple as determining the cosine wave for the foot's pitch function.
			var feetPitchDifferential = Math.cos(degToRad((cumulativeTime * adjustedFrequency ) + currentAnimation.joints[3].pitchPhase));
			var threshHold = 0.9; // sets the audio trigger point. with accuracy.
			if(feetPitchDifferential<-threshHold &&
			   nextStep===DIRECTION_LEFT &&
			   principleDirection!==DIRECTION_UP &&
			   principleDirection!==DIRECTION_DOWN) {
				playFootstep(DIRECTION_LEFT);
				nextStep = DIRECTION_RIGHT;
			}
			else if(feetPitchDifferential>threshHold &&
					nextStep===DIRECTION_RIGHT &&
					principleDirection!==DIRECTION_UP &&
					principleDirection!==DIRECTION_DOWN) {
				playFootstep(DIRECTION_RIGHT);
				nextStep = DIRECTION_LEFT;
			}
		}

		// toes joint oscillation
		pitchOscillation = currentAnimation.joints[4].pitch * Math.sin(degToRad((cumulativeTime * adjustedFrequency) + currentAnimation.joints[4].pitchPhase));
		yawOscillation   = currentAnimation.joints[4].yaw   * Math.sin(degToRad((cumulativeTime * adjustedFrequency) + currentAnimation.joints[4].yawPhase)) + currentAnimation.joints[4].yawOffset;
		rollOscillation  = currentAnimation.joints[4].roll  * Math.sin(degToRad((cumulativeTime * adjustedFrequency) + currentAnimation.joints[4].rollPhase)) + currentAnimation.joints[4].rollOffset;
		pitchOffset = currentAnimation.joints[4].pitchOffset;
		if(currentTransition!==null) {

			var pitchOffsetLast = currentTransition.lastAnimation.joints[4].pitchOffset;
			pitchOscillationLast = currentTransition.lastAnimation.joints[4].pitch * Math.sin(degToRad((walkWheelPosition ) + currentTransition.lastAnimation.joints[4].pitchPhase));
			yawOscillationLast   = currentTransition.lastAnimation.joints[4].yaw   * Math.sin(degToRad((walkWheelPosition ) + currentTransition.lastAnimation.joints[4].yawPhase)) + currentAnimation.joints[4].yawOffset;;
			rollOscillationLast  = currentTransition.lastAnimation.joints[4].roll  * Math.sin(degToRad((walkWheelPosition ) + currentTransition.lastAnimation.joints[4].rollPhase))+ currentAnimation.joints[4].rollOffset;
			pitchOffset = (transitionProgress * pitchOffset) + ((1-transitionProgress) * pitchOffsetLast);
			pitchOscillation = (transitionProgress * pitchOscillation) + ((1-transitionProgress) * pitchOscillationLast);
			yawOscillation   = (transitionProgress * yawOscillation)   + ((1-transitionProgress) * yawOscillationLast);
			rollOscillation  = (transitionProgress * rollOscillation)  + ((1-transitionProgress) * rollOscillationLast);
		}
		MyAvatar.setJointData("RightToeBase", Quat.fromPitchYawRollDegrees(-pitchOscillation + pitchOffset, yawOscillation, rollOscillation));
		MyAvatar.setJointData("LeftToeBase",  Quat.fromPitchYawRollDegrees( pitchOscillation + pitchOffset, yawOscillation, rollOscillation));


		// calculate spine joint rotations
		pitchOscillation = currentAnimation.joints[5].pitch * Math.sin(degToRad(( cumulativeTime * adjustedFrequency * 2) + currentAnimation.joints[5].pitchPhase)) + currentAnimation.joints[5].pitchOffset;
		yawOscillation   = currentAnimation.joints[5].yaw   * Math.sin(degToRad(( cumulativeTime * adjustedFrequency    ) + currentAnimation.joints[5].yawPhase)) + currentAnimation.joints[5].yawOffset;
		rollOscillation  = currentAnimation.joints[5].roll  * Math.sin(degToRad(( cumulativeTime * adjustedFrequency    ) + currentAnimation.joints[5].rollPhase)) + currentAnimation.joints[5].rollOffset;
		if(currentTransition!==null) {

			pitchOscillationLast = currentTransition.lastAnimation.joints[5].pitch
									* Math.sin(degToRad((walkWheelPosition ) + currentTransition.lastAnimation.joints[5].pitchPhase))
									+ currentTransition.lastAnimation.joints[5].pitchOffset;
			yawOscillationLast   = currentTransition.lastAnimation.joints[5].yaw
									* Math.sin(degToRad((walkWheelPosition ) + currentTransition.lastAnimation.joints[5].yawPhase))
									+ currentTransition.lastAnimation.joints[5].yawOffset;
			rollOscillationLast  = currentTransition.lastAnimation.joints[5].roll
									* Math.sin(degToRad((walkWheelPosition ) + currentTransition.lastAnimation.joints[5].rollPhase))
									+ currentTransition.lastAnimation.joints[5].rollOffset;

			pitchOscillation = (transitionProgress * pitchOscillation) + ((1-transitionProgress) * pitchOscillationLast);
			yawOscillation   = (transitionProgress * yawOscillation)   + ((1-transitionProgress) * yawOscillationLast);
			rollOscillation  = (transitionProgress * rollOscillation)  + ((1-transitionProgress) * rollOscillationLast);
		}
		// apply spine joint rotations
		MyAvatar.setJointData("Spine", Quat.fromPitchYawRollDegrees(-pitchOscillation, yawOscillation, rollOscillation));

		// calcualte spine 1 rotatations
		pitchOscillation = currentAnimation.joints[6].pitch * Math.sin(degToRad(( cumulativeTime * adjustedFrequency * 2) + currentAnimation.joints[6].pitchPhase)) + currentAnimation.joints[6].pitchOffset;
		yawOscillation   = currentAnimation.joints[6].yaw   * Math.sin(degToRad(( cumulativeTime * adjustedFrequency    ) + currentAnimation.joints[6].yawPhase))   + currentAnimation.joints[6].yawOffset;
		rollOscillation  = currentAnimation.joints[6].roll  * Math.sin(degToRad(( cumulativeTime * adjustedFrequency    ) + currentAnimation.joints[6].rollPhase))  + currentAnimation.joints[6].rollOffset;
		if(currentTransition!==null) {

			pitchOscillationLast = currentTransition.lastAnimation.joints[6].pitch
									* Math.sin(degToRad((walkWheelPosition ) + currentTransition.lastAnimation.joints[6].pitchPhase))
									+ currentTransition.lastAnimation.joints[6].pitchOffset;
			yawOscillationLast   = currentTransition.lastAnimation.joints[6].yaw
									* Math.sin(degToRad((walkWheelPosition ) + currentTransition.lastAnimation.joints[6].yawPhase))
									+ currentTransition.lastAnimation.joints[6].yawOffset;
			rollOscillationLast  = currentTransition.lastAnimation.joints[6].roll
									* Math.sin(degToRad((walkWheelPosition ) + currentTransition.lastAnimation.joints[6].rollPhase))
									+ currentTransition.lastAnimation.joints[6].rollOffset;

			pitchOscillation = (transitionProgress * pitchOscillation) + ((1-transitionProgress) * pitchOscillationLast);
			yawOscillation   = (transitionProgress * yawOscillation)   + ((1-transitionProgress) * yawOscillationLast);
			rollOscillation  = (transitionProgress * rollOscillation)  + ((1-transitionProgress) * rollOscillationLast);
		}
		// apply spine1 joint rotations
		MyAvatar.setJointData("Spine1", Quat.fromPitchYawRollDegrees( pitchOscillation, -yawOscillation, rollOscillation));

		// spine 2
		pitchOscillation = currentAnimation.joints[7].pitch * Math.sin(degToRad(( cumulativeTime * adjustedFrequency * 2) + currentAnimation.joints[7].pitchPhase)) + currentAnimation.joints[7].pitchOffset;
		yawOscillation   = currentAnimation.joints[7].yaw   * Math.sin(degToRad(( cumulativeTime * adjustedFrequency    ) + currentAnimation.joints[7].yawPhase))   + currentAnimation.joints[7].yawOffset;
		rollOscillation  = currentAnimation.joints[7].roll  * Math.sin(degToRad(( cumulativeTime * adjustedFrequency    ) + currentAnimation.joints[7].rollPhase))  + currentAnimation.joints[7].rollOffset;
		if(currentTransition!==null) {

			pitchOscillationLast = currentTransition.lastAnimation.joints[7].pitch
									* Math.sin(degToRad((walkWheelPosition ) + currentTransition.lastAnimation.joints[7].pitchPhase))
									+ currentTransition.lastAnimation.joints[7].pitchOffset;
			yawOscillationLast   = currentTransition.lastAnimation.joints[7].yaw
									* Math.sin(degToRad((walkWheelPosition ) + currentTransition.lastAnimation.joints[7].yawPhase))
									+ currentTransition.lastAnimation.joints[7].yawOffset;
			rollOscillationLast  = currentTransition.lastAnimation.joints[7].roll
									* Math.sin(degToRad((walkWheelPosition ) + currentTransition.lastAnimation.joints[7].rollPhase))
									+ currentTransition.lastAnimation.joints[7].rollOffset;

			pitchOscillation = (transitionProgress * pitchOscillation) + ((1-transitionProgress) * pitchOscillationLast);
			yawOscillation   = (transitionProgress * yawOscillation)   + ((1-transitionProgress) * yawOscillationLast);
			rollOscillation  = (transitionProgress * rollOscillation)  + ((1-transitionProgress) * rollOscillationLast);
		}
		// apply spine2 joint rotations
		MyAvatar.setJointData("Spine2", Quat.fromPitchYawRollDegrees(-pitchOscillation, yawOscillation, -rollOscillation));

		if(!armsFree) {

			// shoulders
			pitchOscillation = currentAnimation.joints[8].pitch * Math.sin(degToRad(( cumulativeTime * adjustedFrequency    ) + currentAnimation.joints[8].pitchPhase)) + currentAnimation.joints[8].pitchOffset;
			yawOscillation   = currentAnimation.joints[8].yaw   * Math.sin(degToRad(( cumulativeTime * adjustedFrequency    ) + currentAnimation.joints[8].yawPhase));
			rollOscillation  = currentAnimation.joints[8].roll  * Math.sin(degToRad(( cumulativeTime * adjustedFrequency * 2) + currentAnimation.joints[8].rollPhase))  + currentAnimation.joints[8].rollOffset;
			yawOffset = currentAnimation.joints[8].yawOffset;
			if(currentTransition!==null) {

				pitchOscillationLast = currentTransition.lastAnimation.joints[8].pitch
										* Math.sin(degToRad((walkWheelPosition ) + currentTransition.lastAnimation.joints[8].pitchPhase))
										+ currentTransition.lastAnimation.joints[8].pitchOffset;
				yawOscillationLast   = currentTransition.lastAnimation.joints[8].yaw
										* Math.sin(degToRad((walkWheelPosition ) + currentTransition.lastAnimation.joints[8].yawPhase))

				rollOscillationLast  = currentTransition.lastAnimation.joints[8].roll
										* Math.sin(degToRad((walkWheelPosition ) + currentTransition.lastAnimation.joints[8].rollPhase))
										+ currentTransition.lastAnimation.joints[8].rollOffset;
				var yawOffsetLast = currentTransition.lastAnimation.joints[8].yawOffset;

				pitchOscillation = (transitionProgress * pitchOscillation) + ((1-transitionProgress) * pitchOscillationLast);
				yawOscillation   = (transitionProgress * yawOscillation)   + ((1-transitionProgress) * yawOscillationLast);
				rollOscillation  = (transitionProgress * rollOscillation)  + ((1-transitionProgress) * rollOscillationLast);

				yawOffset = (transitionProgress * yawOffset) + ((1-transitionProgress) * yawOffsetLast);
			}
			MyAvatar.setJointData("RightShoulder", Quat.fromPitchYawRollDegrees(pitchOscillation, yawOscillation + yawOffset,  rollOscillation ));
			MyAvatar.setJointData("LeftShoulder",  Quat.fromPitchYawRollDegrees(pitchOscillation, yawOscillation - yawOffset, -rollOscillation ));

			// upper arms
			pitchOscillation = currentAnimation.joints[9].pitch * Math.sin(degToRad(( cumulativeTime * adjustedFrequency ) + currentAnimation.joints[9].pitchPhase));
			yawOscillation   = currentAnimation.joints[9].yaw   * Math.sin(degToRad(( cumulativeTime * adjustedFrequency ) + currentAnimation.joints[9].yawPhase));
			rollOscillation  = currentAnimation.joints[9].roll  * Math.sin(degToRad(( cumulativeTime * adjustedFrequency * 2) + currentAnimation.joints[9].rollPhase)) + currentAnimation.joints[9].rollOffset;
			pitchOffset = currentAnimation.joints[9].pitchOffset;
			yawOffset = currentAnimation.joints[9].yawOffset;
			if(currentTransition!==null) {

				pitchOscillationLast = currentTransition.lastAnimation.joints[9].pitch
										* Math.sin(degToRad((walkWheelPosition ) + currentTransition.lastAnimation.joints[9].pitchPhase))

				yawOscillationLast   = currentTransition.lastAnimation.joints[9].yaw
										* Math.sin(degToRad((walkWheelPosition ) + currentTransition.lastAnimation.joints[9].yawPhase))

				rollOscillationLast  = currentTransition.lastAnimation.joints[9].roll
										* Math.sin(degToRad((walkWheelPosition ) + currentTransition.lastAnimation.joints[9].rollPhase))
										+ currentTransition.lastAnimation.joints[9].rollOffset;
				var pitchOffsetLast = currentTransition.lastAnimation.joints[9].pitchOffset;
				var yawOffsetLast = currentTransition.lastAnimation.joints[9].yawOffset;

				pitchOscillation = (transitionProgress * pitchOscillation) + ((1-transitionProgress) * pitchOscillationLast);
				yawOscillation   = (transitionProgress * yawOscillation)   + ((1-transitionProgress) * yawOscillationLast);
				rollOscillation  = (transitionProgress * rollOscillation)  + ((1-transitionProgress) * rollOscillationLast);

				pitchOffset = (transitionProgress * pitchOffset) + ((1-transitionProgress) * pitchOffsetLast);
				yawOffset = (transitionProgress * yawOffset) + ((1-transitionProgress) * yawOffsetLast);
			}
			MyAvatar.setJointData("RightArm", Quat.fromPitchYawRollDegrees( -1 * pitchOscillation - ( -1 * pitchOffset),  yawOscillation - yawOffset,  rollOscillation ));
			MyAvatar.setJointData("LeftArm",  Quat.fromPitchYawRollDegrees( pitchOscillation + pitchOffset,  yawOscillation + yawOffset, -rollOscillation ));

			// forearms
			pitchOscillation = currentAnimation.joints[10].pitch * Math.sin(degToRad(( cumulativeTime * adjustedFrequency    ) + currentAnimation.joints[10].pitchPhase)) + currentAnimation.joints[10].pitchOffset;
			yawOscillation   = currentAnimation.joints[10].yaw   * Math.sin(degToRad(( cumulativeTime * adjustedFrequency    ) + currentAnimation.joints[10].yawPhase));
			rollOscillation  = currentAnimation.joints[10].roll  * Math.sin(degToRad(( cumulativeTime * adjustedFrequency    ) + currentAnimation.joints[10].rollPhase));
			yawOffset = currentAnimation.joints[10].yawOffset;
			rollOffset = currentAnimation.joints[10].rollOffset;
			if(currentTransition!==null) {

				pitchOscillationLast = currentTransition.lastAnimation.joints[10].pitch
										* Math.sin(degToRad((walkWheelPosition )
										+ currentTransition.lastAnimation.joints[10].pitchPhase))
				yawOscillationLast   = currentTransition.lastAnimation.joints[10].yaw
										* Math.sin(degToRad((walkWheelPosition )
										+ currentTransition.lastAnimation.joints[10].yawPhase))
				rollOscillationLast  = currentTransition.lastAnimation.joints[10].roll
										* Math.sin(degToRad((walkWheelPosition ) + currentTransition.lastAnimation.joints[10].rollPhase))
										+ currentTransition.lastAnimation.joints[10].rollOffset;

				var yawOffsetLast  = currentTransition.lastAnimation.joints[10].yawOffset;
				var rollOffsetLast = currentTransition.lastAnimation.joints[10].rollOffset;

				pitchOscillation = (transitionProgress * pitchOscillation) + ((1-transitionProgress) * pitchOscillationLast);
				yawOscillation   = (transitionProgress * yawOscillation)   + ((1-transitionProgress) * yawOscillationLast);
				rollOscillation  = (transitionProgress * rollOscillation)  + ((1-transitionProgress) * rollOscillationLast);

				yawOffset  = (transitionProgress * yawOffset) +  ((1-transitionProgress) * yawOffsetLast);
				rollOffset = (transitionProgress * rollOffset) + ((1-transitionProgress) * rollOffsetLast);
			}
			MyAvatar.setJointData("RightForeArm", Quat.fromPitchYawRollDegrees( pitchOscillation,  yawOscillation + yawOffset,  rollOscillation + rollOffset ));
			MyAvatar.setJointData("LeftForeArm",  Quat.fromPitchYawRollDegrees( pitchOscillation,  yawOscillation - yawOffset,  rollOscillation - rollOffset ));

			// hands
			var sideStepSign = 1;
			if(INTERNAL_STATE===SIDE_STEPPING) {
				sideStepSign = -1;
			}
			pitchOscillation = currentAnimation.joints[11].pitch * Math.sin(degToRad(( cumulativeTime * adjustedFrequency    ) + currentAnimation.joints[11].pitchPhase)) + currentAnimation.joints[11].pitchOffset;
			yawOscillation   = currentAnimation.joints[11].yaw   * Math.sin(degToRad(( cumulativeTime * adjustedFrequency    ) + currentAnimation.joints[11].yawPhase))   + currentAnimation.joints[11].yawOffset;
			rollOscillation  = currentAnimation.joints[11].roll  * Math.sin(degToRad(( cumulativeTime * adjustedFrequency    ) + currentAnimation.joints[11].rollPhase))  ;
			rollOffset = currentAnimation.joints[11].rollOffset;
			if(currentTransition!==null) {

				pitchOscillationLast = currentTransition.lastAnimation.joints[11].pitch
										* Math.sin(degToRad((walkWheelPosition ) + currentTransition.lastAnimation.joints[11].pitchPhase))
										+ currentTransition.lastAnimation.joints[11].pitchOffset;
				yawOscillationLast   = currentTransition.lastAnimation.joints[11].yaw
										* Math.sin(degToRad((walkWheelPosition ) + currentTransition.lastAnimation.joints[11].yawPhase))
										+ currentTransition.lastAnimation.joints[11].yawOffset;
				rollOscillationLast  = currentTransition.lastAnimation.joints[11].roll
										* Math.sin(degToRad((walkWheelPosition ) + currentTransition.lastAnimation.joints[11].rollPhase))

				var rollOffsetLast = currentTransition.lastAnimation.joints[11].rollOffset;

				pitchOscillation = (transitionProgress * pitchOscillation) + ((1-transitionProgress) * pitchOscillationLast);
				yawOscillation   = (transitionProgress * yawOscillation)   + ((1-transitionProgress) * yawOscillationLast);
				rollOscillation  = (transitionProgress * rollOscillation)  + ((1-transitionProgress) * rollOscillationLast);

				rollOffset = (transitionProgress * rollOffset) + ((1-transitionProgress) * rollOffsetLast);
			}
			MyAvatar.setJointData("RightHand", Quat.fromPitchYawRollDegrees( sideStepSign * pitchOscillation,  yawOscillation,  rollOscillation + rollOffset));
			MyAvatar.setJointData("LeftHand",  Quat.fromPitchYawRollDegrees( pitchOscillation, -yawOscillation,  rollOscillation - rollOffset));

		} // if(!armsFree)
		//else {
			// TODO: free up the arms for the Hydras somehow? Code below fails...
			//MyAvatar.clearJointData("LeftShoulder");
			//MyAvatar.clearJointData("RightShoulder");
			//MyAvatar.clearJointData("LeftArm");
			//MyAvatar.clearJointData("RightArm");
			//MyAvatar.clearJointData("LeftForeArm");
			//MyAvatar.clearJointData("RightForeArm");
			//MyAvatar.clearJointData("LeftHand");
			//MyAvatar.clearJointData("RightHand");
		//}

        // head
        pitchOscillation = 0.5 * currentAnimation.joints[12].pitch * Math.sin(degToRad(( cumulativeTime * adjustedFrequency * 2) + currentAnimation.joints[12].pitchPhase)) + currentAnimation.joints[12].pitchOffset;
        yawOscillation   = 0.5 * currentAnimation.joints[12].yaw   * Math.sin(degToRad(( cumulativeTime * adjustedFrequency    ) + currentAnimation.joints[12].yawPhase))   + currentAnimation.joints[12].yawOffset;
        rollOscillation  = 0.5 * currentAnimation.joints[12].roll  * Math.sin(degToRad(( cumulativeTime * adjustedFrequency    ) + currentAnimation.joints[12].rollPhase))  + currentAnimation.joints[12].rollOffset;
		if(currentTransition!==null) {

			pitchOscillationLast = 0.5 * currentTransition.lastAnimation.joints[12].pitch
									* Math.sin(degToRad((walkWheelPosition * 2) + currentTransition.lastAnimation.joints[12].pitchPhase))
									+ currentTransition.lastAnimation.joints[12].pitchOffset;
			yawOscillationLast   = 0.5 * currentTransition.lastAnimation.joints[12].yaw
									* Math.sin(degToRad((walkWheelPosition ) + currentTransition.lastAnimation.joints[12].yawPhase))
									+ currentTransition.lastAnimation.joints[12].yawOffset;
			rollOscillationLast  = 0.5 * currentTransition.lastAnimation.joints[12].roll
									* Math.sin(degToRad((walkWheelPosition ) + currentTransition.lastAnimation.joints[12].rollPhase))
									+ currentTransition.lastAnimation.joints[12].rollOffset;

			// TODO: track down and fix glitch
			//pitchOscillation = (transitionProgress * pitchOscillation) ;//+ ((1-transitionProgress) * pitchOscillationLast);
			//yawOscillation   = (transitionProgress * yawOscillation)   ;//+ ((1-transitionProgress) * yawOscillationLast);
			//rollOscillation  = (transitionProgress * rollOscillation)  ;//+ ((1-transitionProgress) * rollOscillationLast);

			//pitchOscillation = (transitionProgress * pitchOscillation) + ((1-transitionProgress) * pitchOscillationLast);
			//yawOscillation   = (transitionProgress * yawOscillation)   + ((1-transitionProgress) * yawOscillationLast);
			//rollOscillation  = (transitionProgress * rollOscillation)  + ((1-transitionProgress) * rollOscillationLast);
		}
        MyAvatar.setJointData("Head", Quat.fromPitchYawRollDegrees( pitchOscillation, yawOscillation, rollOscillation));
        MyAvatar.setJointData("Neck", Quat.fromPitchYawRollDegrees( pitchOscillation, yawOscillation, rollOscillation));
}



// getBezier - working - source: http://13thparallel.com/archive/bezier-curves/
//====================================\\
// 13thParallel.org Beziér Curve Code \\
//   by Dan Pupius (www.pupius.net)   \\
//====================================\\
/**/
Coord = function (x,y) {
	if(!x) var x=0;
	if(!y) var y=0;
	return {x: x, y: y};
}

function B1(t) { return t*t*t }
function B2(t) { return 3*t*t*(1-t) }
function B3(t) { return 3*t*(1-t)*(1-t) }
function B4(t) { return (1-t)*(1-t)*(1-t) }

function getBezier(percent,C1,C2,C3,C4) {
	var pos = new Coord();
	pos.x = C1.x*B1(percent) + C2.x*B2(percent) + C3.x*B3(percent) + C4.x*B4(percent);
	pos.y = C1.y*B1(percent) + C2.y*B2(percent) + C3.y*B3(percent) + C4.y*B4(percent);
	return pos;
}

/* Butterworth LP filter - working but not currently used - kept for future use
// coeffs calculated using: http://www-users.cs.york.ac.uk/~fisher/mkfilter/trad.html
var NZEROS = 8;
var NPOLES = 8;
var GAIN =  34.17516196;
var xv = [0,0,0,0,0,0,0,0,0];
//xv.length = NZEROS+1;
var yv = [0,0,0,0,0,0,0,0,0];
//yv.length = NPOLES+1;

function filterButterworth(nextInputValue)
{
	xv[0] = xv[1]; xv[1] = xv[2]; xv[2] = xv[3]; xv[3] = xv[4]; xv[4] = xv[5]; xv[5] = xv[6]; xv[6] = xv[7]; xv[7] = xv[8];
			xv[8] = nextInputValue / GAIN;
			yv[0] = yv[1]; yv[1] = yv[2]; yv[2] = yv[3]; yv[3] = yv[4]; yv[4] = yv[5]; yv[5] = yv[6]; yv[6] = yv[7]; yv[7] = yv[8];
			yv[8] =   (xv[0] + xv[8]) + 8 * (xv[1] + xv[7]) + 28 * (xv[2] + xv[6])
						 + 56 * (xv[3] + xv[5]) + 70 * xv[4]
						 + ( -0.0008613684 * yv[0]) + ( -0.0122466702 * yv[1])
						 + ( -0.0820901316 * yv[2]) + ( -0.3191759432 * yv[3])
						 + ( -0.8694409155 * yv[4]) + ( -1.5326255633 * yv[5])
				 + ( -2.0838133003 * yv[6]) + ( -1.5905664958 * yv[7]);
	return yv[8];
}
*/

// the faster we go, the further we lean forward. the angle is calcualted here
var leanAngles = []; // smooth out and add damping with simple averaging filter.
leanAngles.length = 15;
//var accelerationResponseAngles = [];
//accelerationResponseAngles.length = 15;

function getLeanPitch(velocity) {
/*
	// lean backwards when decelerating a lot. skid to a halt. working, but I don't like the effect - will use a reach pose later instead

	var accelerationResponse = recentMotions[0].acceleration.z;
	var accelerationResponseMax = 45; // max degrees hip pitch

	if(velocity<FLYING_SPEED) accelerationResponse /= 10; // tweak here - 10 gives a big response, 50 very little
	else accelerationResponse /= 2000;
	if(accelerationResponse>accelerationResponseMax)
		accelerationResponse = accelerationResponseMax;
	else if(accelerationResponse<-accelerationResponseMax)
		accelerationResponse = -accelerationResponseMax;
	// apply yet another averaging filter...
	accelerationResponseAngles.push(accelerationResponse);
	accelerationResponseAngles.shift();
	var finalAccelerationResponse = 0;
    for(ea in accelerationResponseAngles) finalAccelerationResponse += accelerationResponseAngles[ea];
    finalAccelerationResponse /= accelerationResponseAngles.length;

    // calculate any skid for this frame and apply it
    var skidDistance = -0.01 * hipsToFeetDistance * Math.sin(degToRad(finalAccelerationResponse));
    if(Math.abs(skidDistance)>0.001 && INTERNAL_STATE===STANDING) { // show skids when stopping
		var skidVector = localToGlobal({ x:0, y:0, z:skidDistance });
		print('skidDistance '+skidDistance+' metres');
		MyAvatar.position = Vec3.sum(MyAvatar.position, skidVector);
	}
	if(Math.abs(accelerationResponse)>0) print('accelerationResponse '+accelerationResponse.toFixed(3)+' recent acceleration '+recentMotions[0].acceleration.z.toFixed(3));
*/
	if(velocity>TERMINAL_VELOCITY) velocity=TERMINAL_VELOCITY;
	var leanProgress = velocity / TERMINAL_VELOCITY;
	var responseSharpness = 1.8;
	if(principleDirection==DIRECTION_BACKWARDS) responseSharpness = 3.6; // lean back a bit extra when walking backwards
	var leanProgressBezier = getBezier((1-leanProgress),{x:0,y:0},{x:0,y:responseSharpness},{x:0,y:1},{x:1,y:1}).y;
	//var leanProgressButterworth = filterButterworth(leanProgressBezier);

	// simple averaging filter seems to give best results
    leanAngles.push(leanProgressBezier);
    leanAngles.shift(); // FIFO
    var totalLeanAngles = 0;
    for(ea in leanAngles) totalLeanAngles += leanAngles[ea];
    var leanProgressAverageFiltered = totalLeanAngles / leanAngles.length;

	// calculate final return value
	var leanPitchFinal = 0;
	if(principleDirection===DIRECTION_BACKWARDS) {
		leanPitchFinal = -currentAnimation.settings.flyingHipsPitch * leanProgressAverageFiltered;// + finalAccelerationResponse;
	} else {
		leanPitchFinal = currentAnimation.settings.flyingHipsPitch * leanProgressAverageFiltered;// + finalAccelerationResponse;
	}
    return leanPitchFinal;
}

// calculate the angle at which to bank into corners when turning
var leanRollAngles = [];  // smooth out and add damping with simple averaging filter
leanRollAngles.length = 15;
var angularVelocities = []; // keep a record of the last few so can filter out spurious values
angularVelocities.length = 5;

function getLeanRoll(deltaTime, velocity) {

	// what's our current anglular velocity?
	var angularVelocityMax = 70; // from observation
	var currentOrientationVec3 = Quat.safeEulerAngles(MyAvatar.orientation);
    var lastOrientationVec3 = Quat.safeEulerAngles(lastOrientation);
    var deltaYaw = lastOrientationVec3.y-currentOrientationVec3.y;
    lastOrientation = MyAvatar.orientation;

    var angularVelocity = deltaYaw / deltaTime;
    if(angularVelocity>angularVelocityMax) angularVelocity = angularVelocityMax;
    if(angularVelocity<-angularVelocityMax) angularVelocity = -angularVelocityMax;

	var angularVelocityAverage = 0;
	for(var ea in angularVelocities) angularVelocityAverage += angularVelocities[ea];
	angularVelocityAverage /= angularVelocities.length;

	var deltaOmega = angularVelocityAverage - angularVelocity;

    if(Math.abs(deltaOmega)>55) // considered erroneous (usually due to false report of deltaYaw = 0)
		angularVelocity = angularVelocityAverage;

	angularVelocities.push(angularVelocity);
	angularVelocities.shift(); // FIFO

    var turnSign = 1;
    if(angularVelocity<0)
    	turnSign = -1;
    if(principleDirection===DIRECTION_BACKWARDS)
    	turnSign *= -1;

    // calculate the amount of roll based on angular and linear velocity
	if(velocity>TERMINAL_VELOCITY) velocity=TERMINAL_VELOCITY;
	var leanRollProgress = (velocity / TERMINAL_VELOCITY) * (Math.abs(angularVelocity) / angularVelocityMax);

	// apply our response curve
	var leanRollProgressBezier = getBezier((1-leanRollProgress),{x:0,y:0},{x:0,y:2.5},{x:0,y:1},{x:1,y:1}).y;

	// simple averaging filter
    leanRollAngles.push(turnSign * leanRollProgressBezier);
    leanRollAngles.shift(); // FIFO
    var totalLeanRollAngles = 0;
    for(var ea in leanRollAngles) totalLeanRollAngles += leanRollAngles[ea];
    var leanRollProgressAverageFiltered = totalLeanRollAngles / leanRollAngles.length;

    return currentAnimation.settings.maxBankingAngle * leanRollProgressAverageFiltered;
}

// set up the interface components, update the internal state and kick off any transitions
function setInternalState(newInternalState) {

    switch(newInternalState) {

        case WALKING:
        	//print('WALKING');
            if(!minimised) doStandardMenu();
            INTERNAL_STATE = WALKING;

            // very first time only
            if(strideLength===0) {
				if(principleDirection===DIRECTION_BACKWARDS)
					strideLength = selectedWalk.calibration.strideLengthBackwards;
				else
            		strideLength = selectedWalk.calibration.strideLengthForwards;
			}
            // initiate the transition
            if(currentTransition) {
				delete currentTransition;
				currentTransition = null;
			}
            currentTransition = new Transition(currentAnimation, selectedWalk, [], 0.1, {x:0.0,y:1.0}, {x:0.0,y:1.0}); // 'r' shaped Bezier response
            currentAnimation = selectedWalk;
            break;

        case FLYING:
        	//print('FLYING');
            if(!minimised) doStandardMenu();
            INTERNAL_STATE = FLYING;
            // initiate the transition
            if(currentTransition) {
				delete currentTransition;
				currentTransition = null;
			}
            currentTransition = new Transition(currentAnimation, selectedFly, [], 1.0, {x:0.5,y:0.0}, {x:0.5,y:1.0}); // 's' shaped Bezier response
            currentAnimation = selectedFly;
            break;

        case SIDE_STEPPING:
        	//print('SIDE_STEPPING');
            if(!minimised) doStandardMenu();
            INTERNAL_STATE = SIDE_STEPPING;
            // current animation already selected by left / right keydown event
            break;

        case CONFIG_WALK_STYLES:
            INTERNAL_STATE = CONFIG_WALK_STYLES;
            currentAnimation = selectedWalk;
            if(!minimised) {
				hidebuttonOverlays();
				hideJointControls();
				showFrontPanelButtons(false);
				showWalkStyleButtons(true);
				setBackground(controlsBackgroundWalkEditStyles);
				setButtonOverlayVisible(onButton);
				setButtonOverlayVisible(configWalkStylesButtonSelected);
				setButtonOverlayVisible(configWalkTweaksButton);
				setButtonOverlayVisible(configWalkJointsButton);
				setButtonOverlayVisible(backButton);
				setSliderThumbsVisible(false);
			}
            break;

        case CONFIG_WALK_TWEAKS:
            INTERNAL_STATE = CONFIG_WALK_TWEAKS;
            currentAnimation = selectedWalk;
            if(!minimised) {
				hidebuttonOverlays();
				hideJointControls();
				showFrontPanelButtons(false);
				showWalkStyleButtons(false);
				setBackground(controlsBackgroundWalkEditTweaks);
				setButtonOverlayVisible(onButton);
				setButtonOverlayVisible(configWalkStylesButton);
				setButtonOverlayVisible(configWalkTweaksButtonSelected);
				setButtonOverlayVisible(configWalkJointsButton);
				setButtonOverlayVisible(backButton);
				initialiseWalkTweaks();
			}
            break;

        case CONFIG_WALK_JOINTS:
        	INTERNAL_STATE = CONFIG_WALK_JOINTS;
        	currentAnimation = selectedWalk;
        	if(!minimised) {
				hidebuttonOverlays();
				showFrontPanelButtons(false);
				showWalkStyleButtons(false);
				setBackground(controlsBackgroundWalkEditJoints);
				setButtonOverlayVisible(onButton);
				setButtonOverlayVisible(configWalkStylesButton);
				setButtonOverlayVisible(configWalkTweaksButton);
				setButtonOverlayVisible(configWalkJointsButtonSelected);
				setButtonOverlayVisible(backButton);
				initialiseJointsEditingPanel(selectedJointIndex);
			}
            break;

        case CONFIG_STANDING:
            INTERNAL_STATE = CONFIG_STANDING;
            currentAnimation = selectedStand;
            if(!minimised) {
				hidebuttonOverlays();
				hideJointControls();
				doStandardMenu();
				showFrontPanelButtons(false);
				showWalkStyleButtons(false);
				setBackground(controlsBackgroundWalkEditJoints);
				setButtonOverlayVisible(configStandButtonSelected);
				initialiseJointsEditingPanel(selectedJointIndex);
			}
            break;

        case CONFIG_FLYING:
            INTERNAL_STATE = CONFIG_FLYING;
            currentAnimation = selectedFly;
            if(!minimised) {
				hidebuttonOverlays();
				hideJointControls();
				doStandardMenu();
				showFrontPanelButtons(false);
				showWalkStyleButtons(false);
				setBackground(controlsBackgroundWalkEditJoints);
				setButtonOverlayVisible(configFlyingButtonSelected);
				initialiseJointsEditingPanel(selectedJointIndex);
			}
            break;

        case STANDING:
        default:
        	//print('STANDING');
            INTERNAL_STATE = STANDING;
            if(!minimised) doStandardMenu();
            // initiate the transition
            if(currentTransition) {
				delete currentTransition;
				currentTransition = null;
			}
            currentTransition = new Transition(currentAnimation, selectedStand, [], 0.4, {x:0.5,y:0.0}, {x:0.5,y:1.0}); // 's' shaped Bezier response
            currentAnimation = selectedStand;
            break;
    }
}

// Main loop

// stabilising vars -  most state changes are preceded by a couple of hints that they are about to happen
// rather than momentarilly switching between states (causes flicker), we count the number of hints in a row before
// actually changing state - a system very similar to switch debouncing in electronics design
var standHints = 0;
var walkHints = 0;
var flyHints = 0;
var requiredHints = 3; // tweakable - debounce state changes - how many times do we get a state change request in a row before we actually change state?
var principleDirection = 0;
var lastDirection = DIRECTION_FORWARDS;

// keep track of recent motion - TODO: use to replace lastDirection var. Also, can use to replace hints system...
var recentMotions = [];
for(var i = 0 ; i < 6 ; i++) {
	var blank = new RecentMotion({ x:0, y:0, z:0 }, { x:0, y:0, z:0 }, DIRECTION_FORWARDS );
	recentMotions.push(blank);
}

Script.update.connect(function(deltaTime) {

	if(powerOn) {

        cumulativeTime += deltaTime;

        // firstly test for user configuration states
        switch(INTERNAL_STATE) {

            case CONFIG_WALK_STYLES:
	            currentAnimation = selectedWalk;
                animateAvatar(deltaTime, 0, principleDirection);
                return;
            case CONFIG_WALK_TWEAKS:
                currentAnimation = selectedWalk;
                animateAvatar(deltaTime, 0, DIRECTION_FORWARDS);
                return;
            case CONFIG_WALK_JOINTS:
                currentAnimation = selectedWalk;
                animateAvatar(deltaTime, 0, DIRECTION_FORWARDS);
                return;
            case CONFIG_STANDING:
                currentAnimation = selectedStand;
                animateAvatar(deltaTime, 0, DIRECTION_FORWARDS);
                return;
            case CONFIG_FLYING:
                currentAnimation = selectedFly;
                animateAvatar(deltaTime, 0, DIRECTION_FORWARDS);
                return;
            default:
                break;
        }

        // calcualte (local) change in position and velocity
        var velocityVector = MyAvatar.getVelocity();
        var velocity = Vec3.length(velocityVector);

        // determine the candidate animation to play
        var actionToTake = 0;
        if( velocity < 0.5) {
            actionToTake = STANDING;
            standHints++;
        }
        else if(velocity<FLYING_SPEED) {
            actionToTake = WALKING;
            walkHints++;
        }
        else if(velocity>=FLYING_SPEED) {
            actionToTake = FLYING;
            flyHints++;
        }

        // calculate overriding (local) direction of translation for use later when decide which animation should be played
        var localVelocity = localToGlobal(velocityVector);
        var deltaX = localVelocity.x;
        var deltaY = -localVelocity.y;
        var deltaZ = -localVelocity.z;

		// TODO: find out why there is a reported high up / down velocity as we near walking -> standing...
        var directionChangeThreshold = 0.3; // this little hack makes it a bit better, but at the cost of delayed updated chagne in direction etc :-(
        if(velocity<directionChangeThreshold)
		   		principleDirection = lastDirection;
		else {
			// who's the biggest out of the x, y and z components taken from the difference vector?
			if(Math.abs(deltaX)>Math.abs(deltaY)
			 &&Math.abs(deltaX)>Math.abs(deltaZ)) {
				if(deltaX<0) {
					principleDirection = DIRECTION_RIGHT;//print('velocity = '+velocity + ' DIRECTION_RIGHT: deltaX '+deltaX+'  deltaY '+deltaY+'  deltaZ '+deltaZ);
				} else {
					principleDirection = DIRECTION_LEFT;//print('velocity = '+velocity + ' DIRECTION_LEFT: deltaX '+deltaX+'  deltaY '+deltaY+'  deltaZ '+deltaZ);
				}
			}
			else if(Math.abs(deltaY)>Math.abs(deltaX)
				  &&Math.abs(deltaY)>Math.abs(deltaZ)) {
				if(deltaY>0) {
					principleDirection = DIRECTION_DOWN;//print('velocity = '+velocity + ' DIRECTION_DOWN: deltaX '+deltaX+'  deltaY '+deltaY+'  deltaZ '+deltaZ);
				}
				else {
					principleDirection = DIRECTION_UP;//print('velocity = '+velocity + ' DIRECTION_UP: deltaX '+deltaX+'  deltaY '+deltaY+'  deltaZ '+deltaZ);
				}
			}
			else if(Math.abs(deltaZ)>Math.abs(deltaX)
				  &&Math.abs(deltaZ)>Math.abs(deltaY)) {
				if(deltaZ>0) {
					principleDirection = DIRECTION_BACKWARDS;//print('velocity = '+velocity + ' DIRECTION_BACKWARDS: deltaX '+deltaX+'  deltaY '+deltaY+'  deltaZ '+deltaZ);
				} else {
					principleDirection = DIRECTION_FORWARDS;//print('velocity = '+velocity + ' DIRECTION_FORWARDS: deltaX '+deltaX+'  deltaY '+deltaY+'  deltaZ '+deltaZ);
				}
			}
		}
        lastDirection = principleDirection;

		// log this frame's motion variables for later use
        var accelerationX = ( localVelocity.x - recentMotions[0].velocity.x ) / deltaTime;
        var accelerationY = ( localVelocity.y - recentMotions[0].velocity.y ) / deltaTime;
        var accelerationZ = ( localVelocity.z - recentMotions[0].velocity.z ) / deltaTime;

        var thisMotion = new RecentMotion(localVelocity, { x:accelerationX, y:accelerationY, z:accelerationZ }, principleDirection );
		recentMotions.push(thisMotion);
		recentMotions.shift();

		// since we only sidestep from standing, it's a quick decision on this one
        if(INTERNAL_STATE===SIDE_STEPPING) {
			if(velocity===0) {
				actionToTake = STANDING;
				standHints = requiredHints + 1;
				//print('stopping sidestep');
			}
			else if(principleDirection===DIRECTION_LEFT ||
				    principleDirection===DIRECTION_RIGHT) {
				animateAvatar(deltaTime, velocity, principleDirection);
				return;
			}
		}

        // select appropriate animation
        switch(actionToTake) {

            case STANDING:
                if( standHints > requiredHints || INTERNAL_STATE===STANDING) { // wait for a few consecutive hints (17mS each)

                    standHints = 0;
                    walkHints = 0;
                    flyHints = 0;
					if(INTERNAL_STATE!==STANDING) setInternalState(STANDING);
					currentAnimation = selectedStand;
                    animateAvatar(1,0,principleDirection);
                }
                return;

            case WALKING:
                if( walkHints > requiredHints || INTERNAL_STATE===WALKING) { // wait for few consecutive hints (17mS each)

                    standHints = 0;
                    walkHints = 0;
                    flyHints = 0;
                    if(INTERNAL_STATE!==WALKING) {
						setInternalState(WALKING);
					}

					// change animation for flying directly up or down. TODO - check RecentMotions, if is a change then put a transition on it
					if(principleDirection===DIRECTION_UP) {
						currentAnimation = selectedFlyUp;
					}
					else if(principleDirection===DIRECTION_DOWN) {
						currentAnimation = selectedFlyDown;
					}
                    else {
						currentAnimation = selectedWalk;
					}
                    animateAvatar(deltaTime, velocity, principleDirection);
                }
                return;

            case FLYING:
                if( flyHints > requiredHints - 1  || INTERNAL_STATE===FLYING ) { // wait for a few consecutive hints (17mS each)

                    standHints = 0;
                    walkHints = 0;
                    flyHints = 0;
					if(INTERNAL_STATE!==FLYING) setInternalState(FLYING);

					// change animation for flying directly up or down. TODO - check RecentMotions, if is a change then put a transition on it
					if(principleDirection===DIRECTION_UP) {
						currentAnimation = selectedFlyUp;
					}
					else if(principleDirection===DIRECTION_DOWN) {
						currentAnimation = selectedFlyDown;
					}
                    else currentAnimation = selectedFly;
                    animateAvatar(deltaTime, velocity, principleDirection);
                }
                return;
        }
    }
});


// overlays start

//  controller dimensions
var backgroundWidth = 350;
var backgroundHeight = 700;
var backgroundX = Window.innerWidth-backgroundWidth-50;
var backgroundY = Window.innerHeight/2 - backgroundHeight/2;
var minSliderX = backgroundX + 30;
var maxSliderX = backgroundX + 295;
var sliderRangeX = 295 - 30;
var jointsControlWidth = 200;
var jointsControlHeight = 300;
var jointsControlX = backgroundX + backgroundWidth/2 - jointsControlWidth/2;
var jointsControlY = backgroundY + 242 - jointsControlHeight/2;
var buttonsY = 20;  // distance from top of panel to buttons

// arrays of overlay names
var sliderThumbOverlays = []; // thumb sliders
var backgroundOverlays = [];
var buttonOverlays = [];
var jointsControlOverlays = [];
var bigButtonOverlays = [];


// take a deep breath and...

// load UI backgrounds
var controlsBackground = Overlays.addOverlay("image", {
                    bounds: { x: backgroundX, y: backgroundY, width: backgroundWidth, height: backgroundHeight },
                    imageURL: pathToOverlays+"ddao-background.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
backgroundOverlays.push(controlsBackground);

var controlsBackgroundWalkEditStyles = Overlays.addOverlay("image", {
                    bounds: { x: backgroundX, y: backgroundY, width: backgroundWidth, height: backgroundHeight },
                    imageURL: pathToOverlays+"ddao-background-edit-styles.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
backgroundOverlays.push(controlsBackgroundWalkEditStyles);

var controlsBackgroundWalkEditTweaks = Overlays.addOverlay("image", {
                    bounds: { x: backgroundX, y: backgroundY, width: backgroundWidth, height: backgroundHeight },
                    imageURL: pathToOverlays+"ddao-background-edit-tweaks.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
backgroundOverlays.push(controlsBackgroundWalkEditTweaks);

var controlsBackgroundWalkEditJoints = Overlays.addOverlay("image", {
                    bounds: { x: backgroundX, y: backgroundY, width: backgroundWidth, height: backgroundHeight },
                    imageURL: pathToOverlays+"ddao-background-edit-joints.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
backgroundOverlays.push(controlsBackgroundWalkEditJoints);

var controlsBackgroundFlyingEdit = Overlays.addOverlay("image", {
                    bounds: { x: backgroundX, y: backgroundY, width: backgroundWidth, height: backgroundHeight },
                    imageURL: pathToOverlays+"ddao-background-flying-edit.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
backgroundOverlays.push(controlsBackgroundFlyingEdit);


// minimised tab - not put in array, as is a one off
var controlsMinimisedTab = Overlays.addOverlay("image", {
                    bounds: { x: Window.innerWidth - 35, y: Window.innerHeight/2 - 175, width: 36, height: 351 },
                    imageURL: pathToOverlays+"ddao-tab.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });

// load character joint selection control images
var hipsJointControl = Overlays.addOverlay("image", {
                    bounds: { x: jointsControlX, y: jointsControlY, width: 200, height: 300},
                    imageURL: pathToOverlays+"ddao-background-edit-hips.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
jointsControlOverlays.push(hipsJointControl);

var upperLegsJointControl = Overlays.addOverlay("image", {
                    bounds: { x: jointsControlX, y: jointsControlY, width: 200, height: 300},
                    imageURL: pathToOverlays+"ddao-background-edit-upper-legs.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
jointsControlOverlays.push(upperLegsJointControl);

var lowerLegsJointControl  = Overlays.addOverlay("image", {
                    bounds: { x: jointsControlX, y: jointsControlY, width: 200, height: 300},
                    imageURL: pathToOverlays+"ddao-background-edit-lower-legs.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
jointsControlOverlays.push(lowerLegsJointControl);

var feetJointControl = Overlays.addOverlay("image", {
                    bounds: { x: jointsControlX, y: jointsControlY, width: 200, height: 300},
                    imageURL: pathToOverlays+"ddao-background-edit-feet.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
jointsControlOverlays.push(feetJointControl);

var toesJointControl = Overlays.addOverlay("image", {
                    bounds: { x: jointsControlX, y: jointsControlY, width: 200, height: 300},
                    imageURL: pathToOverlays+"ddao-background-edit-toes.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
jointsControlOverlays.push(toesJointControl);

var spineJointControl = Overlays.addOverlay("image", {
                    bounds: { x: jointsControlX, y: jointsControlY, width: 200, height: 300},
                    imageURL: pathToOverlays+"ddao-background-edit-spine.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
jointsControlOverlays.push(spineJointControl);

var spine1JointControl = Overlays.addOverlay("image", {
                    bounds: { x: jointsControlX, y: jointsControlY, width: 200, height: 300},
                    imageURL: pathToOverlays+"ddao-background-edit-spine1.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
jointsControlOverlays.push(spine1JointControl);

var spine2JointControl = Overlays.addOverlay("image", {
                    bounds: { x: jointsControlX, y: jointsControlY, width: 200, height: 300},
                    imageURL: pathToOverlays+"ddao-background-edit-spine2.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
jointsControlOverlays.push(spine2JointControl);

var shouldersJointControl = Overlays.addOverlay("image", {
                    bounds: { x: jointsControlX, y: jointsControlY, width: 200, height: 300},
                    imageURL: pathToOverlays+"ddao-background-edit-shoulders.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
jointsControlOverlays.push(shouldersJointControl);

var upperArmsJointControl = Overlays.addOverlay("image", {
                    bounds: { x: jointsControlX, y: jointsControlY, width: 200, height: 300},
                    imageURL: pathToOverlays+"ddao-background-edit-upper-arms.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
jointsControlOverlays.push(upperArmsJointControl);

var forearmsJointControl = Overlays.addOverlay("image", {
                    bounds: { x: jointsControlX, y: jointsControlY, width: 200, height: 300},
                    imageURL: pathToOverlays+"ddao-background-edit-forearms.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
jointsControlOverlays.push(forearmsJointControl);

var handsJointControl = Overlays.addOverlay("image", {
                    bounds: { x: jointsControlX, y: jointsControlY, width: 200, height: 300},
                    imageURL: pathToOverlays+"ddao-background-edit-hands.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
jointsControlOverlays.push(handsJointControl);

var headJointControl = Overlays.addOverlay("image", {
                    bounds: { x: jointsControlX, y: jointsControlY, width: 200, height: 300},
                    imageURL: pathToOverlays+"ddao-background-edit-head.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
jointsControlOverlays.push(headJointControl);


// sider thumb overlays
var sliderOne = Overlays.addOverlay("image", {
                    bounds: { x: 0, y: 0, width: 25, height: 25 },
                    imageURL: pathToOverlays+"ddao-slider-handle.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
sliderThumbOverlays.push(sliderOne);
var sliderTwo = Overlays.addOverlay("image", {
                    bounds: { x: 0, y: 0, width: 25, height: 25 },
                    imageURL: pathToOverlays+"ddao-slider-handle.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
sliderThumbOverlays.push(sliderTwo);
var sliderThree = Overlays.addOverlay("image", {
                    bounds: { x: 0, y: 0, width: 25, height: 25 },
                    imageURL: pathToOverlays+"ddao-slider-handle.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
sliderThumbOverlays.push(sliderThree);
var sliderFour = Overlays.addOverlay("image", {
                    bounds: { x: 0, y: 0, width: 25, height: 25 },
                    imageURL: pathToOverlays+"ddao-slider-handle.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
sliderThumbOverlays.push(sliderFour);
var sliderFive = Overlays.addOverlay("image", {
                    bounds: { x: 0, y: 0, width: 25, height: 25 },
                    imageURL: pathToOverlays+"ddao-slider-handle.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
sliderThumbOverlays.push(sliderFive);
var sliderSix = Overlays.addOverlay("image", {
                    bounds: { x: 0, y: 0, width: 25, height: 25 },
                    imageURL: pathToOverlays+"ddao-slider-handle.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
sliderThumbOverlays.push(sliderSix);
var sliderSeven = Overlays.addOverlay("image", {
                    bounds: { x: 0, y: 0, width: 25, height: 25 },
                    imageURL: pathToOverlays+"ddao-slider-handle.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
sliderThumbOverlays.push(sliderSeven);
var sliderEight = Overlays.addOverlay("image", {
                    bounds: { x: 0, y: 0, width: 25, height: 25 },
                    imageURL: pathToOverlays+"ddao-slider-handle.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
sliderThumbOverlays.push(sliderEight);
var sliderNine = Overlays.addOverlay("image", {
                    bounds: { x: 0, y: 0, width: 25, height: 25 },
                    imageURL: pathToOverlays+"ddao-slider-handle.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
sliderThumbOverlays.push(sliderNine);


// button overlays
var onButton = Overlays.addOverlay("image", {
                    bounds: { x: backgroundX+20, y: backgroundY+buttonsY, width: 60, height: 47 },
                    imageURL: pathToOverlays+"ddao-on-button.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
buttonOverlays.push(onButton);
var offButton = Overlays.addOverlay("image", {
                    bounds: { x: backgroundX+20, y: backgroundY+buttonsY, width: 60, height: 47 },
                    imageURL: pathToOverlays+"ddao-off-button.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
buttonOverlays.push(offButton);
var configWalkButton = Overlays.addOverlay("image", {
                    bounds: { x: backgroundX+83, y: backgroundY+buttonsY, width: 60, height: 47 },
                    imageURL: pathToOverlays+"ddao-edit-walk-button.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
buttonOverlays.push(configWalkButton);
var configWalkButtonSelected = Overlays.addOverlay("image", {
                    bounds: { x: backgroundX+83, y: backgroundY+buttonsY, width: 60, height: 47 },
                    imageURL: pathToOverlays+"ddao-edit-walk-button-selected.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
buttonOverlays.push(configWalkButtonSelected);
var configStandButton = Overlays.addOverlay("image", {
                    bounds: { x: backgroundX+146, y: backgroundY+buttonsY, width: 60, height: 47 },
                    imageURL: pathToOverlays+"ddao-edit-stand-button.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
buttonOverlays.push(configStandButton);
var configStandButtonSelected = Overlays.addOverlay("image", {
                    bounds: { x: backgroundX+146, y: backgroundY+buttonsY, width: 60, height: 47 },
                    imageURL: pathToOverlays+"ddao-edit-stand-button-selected.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
buttonOverlays.push(configStandButtonSelected);
var configFlyingButton = Overlays.addOverlay("image", {
                    bounds: { x: backgroundX+209, y: backgroundY+buttonsY, width: 60, height: 47 },
                    imageURL: pathToOverlays+"ddao-edit-fly-button.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
buttonOverlays.push(configFlyingButton);
var configFlyingButtonSelected = Overlays.addOverlay("image", {
                    bounds: { x: backgroundX+209, y: backgroundY+buttonsY, width: 60, height: 47 },
                    imageURL: pathToOverlays+"ddao-edit-fly-button-selected.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
buttonOverlays.push(configFlyingButtonSelected);
var hideButton = Overlays.addOverlay("image", {
                    bounds: { x: backgroundX+272, y: backgroundY+buttonsY, width: 60, height: 47 },
                    imageURL: pathToOverlays+"ddao-hide-button.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
buttonOverlays.push(hideButton);
var hideButtonSelected = Overlays.addOverlay("image", {
                    bounds: { x: backgroundX+272, y: backgroundY+buttonsY, width: 60, height: 47 },
                    imageURL: pathToOverlays+"ddao-hide-button-selected.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
buttonOverlays.push(hideButtonSelected);
var configWalkStylesButton = Overlays.addOverlay("image", {
                    bounds: { x: backgroundX+83, y: backgroundY+buttonsY, width: 60, height: 47 },
                    imageURL: pathToOverlays+"ddao-walk-styles-button.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
buttonOverlays.push(configWalkStylesButton);
var configWalkStylesButtonSelected = Overlays.addOverlay("image", {
                    bounds: { x: backgroundX+83, y: backgroundY+buttonsY, width: 60, height: 47 },
                    imageURL: pathToOverlays+"ddao-walk-styles-button-selected.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
buttonOverlays.push(configWalkStylesButtonSelected);
var configWalkTweaksButton = Overlays.addOverlay("image", {
                    bounds: { x: backgroundX+146, y: backgroundY+buttonsY, width: 60, height: 47 },
                    imageURL: pathToOverlays+"ddao-walk-tweaks-button.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
buttonOverlays.push(configWalkTweaksButton);
var configWalkTweaksButtonSelected = Overlays.addOverlay("image", {
                    bounds: { x: backgroundX+146, y: backgroundY+buttonsY, width: 60, height: 47 },
                    imageURL: pathToOverlays+"ddao-walk-tweaks-button-selected.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
buttonOverlays.push(configWalkTweaksButtonSelected);
var configWalkJointsButton = Overlays.addOverlay("image", {
                    bounds: { x: backgroundX+209, y: backgroundY+buttonsY, width: 60, height: 47 },
                    imageURL: pathToOverlays+"ddao-bones-button.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
buttonOverlays.push(configWalkJointsButton);
var configWalkJointsButtonSelected = Overlays.addOverlay("image", {
                    bounds: { x: backgroundX+209, y: backgroundY+buttonsY, width: 60, height: 47 },
                    imageURL: pathToOverlays+"ddao-bones-button-selected.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
buttonOverlays.push(configWalkJointsButtonSelected);
var backButton = Overlays.addOverlay("image", {
                    bounds: { x: backgroundX+272, y: backgroundY+buttonsY, width: 60, height: 47 },
                    imageURL: pathToOverlays+"ddao-back-button.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
buttonOverlays.push(backButton);
var backButtonSelected = Overlays.addOverlay("image", {
                    bounds: { x: backgroundX+272, y: backgroundY+buttonsY, width: 60, height: 47 },
                    imageURL: pathToOverlays+"ddao-back-button-selected.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
buttonOverlays.push(backButtonSelected);

// big button overlays - front panel
var bigButtonYOffset = 408;  //  distance from top of panel to top of first button

var femaleBigButton = Overlays.addOverlay("image", {
                    bounds: { x: backgroundX + backgroundWidth/2 - 115, y: backgroundY + bigButtonYOffset, width: 230, height: 36},
                    imageURL: pathToOverlays+"ddao-female-big-button.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
bigButtonOverlays.push(femaleBigButton);

var femaleBigButtonSelected = Overlays.addOverlay("image", {
                    bounds: { x: backgroundX + backgroundWidth/2 - 115, y: backgroundY + bigButtonYOffset, width: 230, height: 36},
                    imageURL: pathToOverlays+"ddao-female-big-button-selected.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
bigButtonOverlays.push(femaleBigButtonSelected);

var maleBigButton = Overlays.addOverlay("image", {
                    bounds: { x: backgroundX + backgroundWidth/2 - 115, y: backgroundY + bigButtonYOffset + 60, width: 230, height: 36},
                    imageURL: pathToOverlays+"ddao-male-big-button.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
bigButtonOverlays.push(maleBigButton);

var maleBigButtonSelected = Overlays.addOverlay("image", {
                    bounds: { x: backgroundX + backgroundWidth/2 - 115, y: backgroundY + bigButtonYOffset + 60, width: 230, height: 36},
                    imageURL: pathToOverlays+"ddao-male-big-button-selected.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
bigButtonOverlays.push(maleBigButtonSelected);

var armsFreeBigButton = Overlays.addOverlay("image", {
                    bounds: { x: backgroundX + backgroundWidth/2 - 115, y: backgroundY + bigButtonYOffset + 120, width: 230, height: 36},
                    imageURL: pathToOverlays+"ddao-arms-free-button.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
bigButtonOverlays.push(armsFreeBigButton);

var armsFreeBigButtonSelected = Overlays.addOverlay("image", {
                    bounds: { x: backgroundX + backgroundWidth/2 - 115, y: backgroundY + bigButtonYOffset + 120, width: 230, height: 36},
                    imageURL: pathToOverlays+"ddao-arms-free-button-selected.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
bigButtonOverlays.push(armsFreeBigButtonSelected);

var footstepsBigButton = Overlays.addOverlay("image", {
                    bounds: { x: backgroundX + backgroundWidth/2 - 115, y: backgroundY + bigButtonYOffset + 180, width: 230, height: 36},
                    imageURL: pathToOverlays+"ddao-footsteps-big-button.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
bigButtonOverlays.push(footstepsBigButton);

var footstepsBigButtonSelected = Overlays.addOverlay("image", {
                    bounds: { x: backgroundX + backgroundWidth/2 - 115, y: backgroundY + bigButtonYOffset + 180, width: 230, height: 36},
                    imageURL: pathToOverlays+"ddao-footsteps-big-button-selected.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
bigButtonOverlays.push(footstepsBigButtonSelected);


// walk styles
bigButtonYOffset = 121;
var strutWalkBigButton = Overlays.addOverlay("image", {
                    bounds: { x: backgroundX + backgroundWidth/2 - 115, y: backgroundY + bigButtonYOffset, width: 230, height: 36 },
                    imageURL: pathToOverlays+"ddao-walk-select-button-strut.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
bigButtonOverlays.push(strutWalkBigButton);

var strutWalkBigButtonSelected = Overlays.addOverlay("image", {
                    bounds: { x: backgroundX + backgroundWidth/2 - 115, y: backgroundY + bigButtonYOffset, width: 230, height: 36 },
                    imageURL: pathToOverlays+"ddao-walk-select-button-strut-selected.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
bigButtonOverlays.push(strutWalkBigButtonSelected);

bigButtonYOffset += 60
var sexyWalkBigButton = Overlays.addOverlay("image", {
                    bounds: { x: backgroundX + backgroundWidth/2 - 115, y: backgroundY + bigButtonYOffset, width: 230, height: 36 },
                    imageURL: pathToOverlays+"ddao-walk-select-button-sexy.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
bigButtonOverlays.push(sexyWalkBigButton);

var sexyWalkBigButtonSelected = Overlays.addOverlay("image", {
                    bounds: { x: backgroundX + backgroundWidth/2 - 115, y: backgroundY + bigButtonYOffset, width: 230, height: 36 },
                    imageURL: pathToOverlays+"ddao-walk-select-button-sexy-selected.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
bigButtonOverlays.push(sexyWalkBigButtonSelected);

bigButtonYOffset += 60;
var powerWalkBigButton = Overlays.addOverlay("image", {
                    bounds: { x: backgroundX + backgroundWidth/2 - 115, y: backgroundY + bigButtonYOffset, width: 230, height: 36 },
                    imageURL: pathToOverlays+"ddao-walk-select-button-power-walk.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
bigButtonOverlays.push(powerWalkBigButton);

var powerWalkBigButtonSelected = Overlays.addOverlay("image", {
                    bounds: { x: backgroundX + backgroundWidth/2 - 115, y: backgroundY + bigButtonYOffset, width: 230, height: 36 },
                    imageURL: pathToOverlays+"ddao-walk-select-button-power-walk-selected.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
bigButtonOverlays.push(powerWalkBigButtonSelected);

bigButtonYOffset += 60;
var shuffleBigButton = Overlays.addOverlay("image", {
                    bounds: { x: backgroundX + backgroundWidth/2 - 115, y: backgroundY + bigButtonYOffset, width: 230, height: 36 },
                    imageURL: pathToOverlays+"ddao-walk-select-button-shuffle.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
bigButtonOverlays.push(shuffleBigButton);

var shuffleBigButtonSelected = Overlays.addOverlay("image", {
                    bounds: { x: backgroundX + backgroundWidth/2 - 115, y: backgroundY + bigButtonYOffset, width: 230, height: 36 },
                    imageURL: pathToOverlays+"ddao-walk-select-button-shuffle-selected.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
bigButtonOverlays.push(shuffleBigButtonSelected);

bigButtonYOffset += 60;
var runBigButton = Overlays.addOverlay("image", {
                    bounds: { x: backgroundX + backgroundWidth/2 - 115, y: backgroundY + bigButtonYOffset, width: 230, height: 36 },
                    imageURL: pathToOverlays+"ddao-walk-select-button-run.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
bigButtonOverlays.push(runBigButton);

var runBigButtonSelected = Overlays.addOverlay("image", {
                    bounds: { x: backgroundX + backgroundWidth/2 - 115, y: backgroundY + bigButtonYOffset, width: 230, height: 36 },
                    imageURL: pathToOverlays+"ddao-walk-select-button-run-selected.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
bigButtonOverlays.push(runBigButtonSelected);

bigButtonYOffset += 60;
var randomWalkBigButton = Overlays.addOverlay("image", {
                    bounds: { x: backgroundX + backgroundWidth/2 - 115, y: backgroundY + bigButtonYOffset, width: 230, height: 36 },
                    imageURL: pathToOverlays+"ddao-walk-select-button-random.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
bigButtonOverlays.push(randomWalkBigButton);

var randomWalkBigButtonSelected = Overlays.addOverlay("image", {
                    bounds: { x: backgroundX + backgroundWidth/2 - 115, y: backgroundY + bigButtonYOffset, width: 230, height: 36 },
                    imageURL: pathToOverlays+"ddao-walk-select-button-random-selected.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
bigButtonOverlays.push(randomWalkBigButtonSelected);

bigButtonYOffset += 60;
var toughWalkBigButton = Overlays.addOverlay("image", {
                    bounds: { x: backgroundX + backgroundWidth/2 - 115, y: backgroundY + bigButtonYOffset, width: 230, height: 36 },
                    imageURL: pathToOverlays+"ddao-walk-select-button-tough.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
bigButtonOverlays.push(toughWalkBigButton);

var toughWalkBigButtonSelected = Overlays.addOverlay("image", {
                    bounds: { x: backgroundX + backgroundWidth/2 - 115, y: backgroundY + bigButtonYOffset, width: 230, height: 36 },
                    imageURL: pathToOverlays+"ddao-walk-select-button-tough-selected.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
bigButtonOverlays.push(toughWalkBigButtonSelected);

bigButtonYOffset += 60;
var coolWalkBigButton = Overlays.addOverlay("image", {
                    bounds: { x: backgroundX + backgroundWidth/2 - 115, y: backgroundY + bigButtonYOffset, width: 230, height: 36 },
                    imageURL: pathToOverlays+"ddao-walk-select-button-cool.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
bigButtonOverlays.push(coolWalkBigButton);

var coolWalkBigButtonSelected = Overlays.addOverlay("image", {
                    bounds: { x: backgroundX + backgroundWidth/2 - 115, y: backgroundY + bigButtonYOffset, width: 230, height: 36 },
                    imageURL: pathToOverlays+"ddao-walk-select-button-cool-selected.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
bigButtonOverlays.push(coolWalkBigButtonSelected);

bigButtonYOffset += 60;
var elderlyWalkBigButton = Overlays.addOverlay("image", {
                    bounds: { x: backgroundX + backgroundWidth/2 - 115, y: backgroundY + bigButtonYOffset, width: 230, height: 36 },
                    imageURL: pathToOverlays+"ddao-walk-select-button-elderly.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
bigButtonOverlays.push(elderlyWalkBigButton);

var elderlyWalkBigButtonSelected = Overlays.addOverlay("image", {
                    bounds: { x: backgroundX + backgroundWidth/2 - 115, y: backgroundY + bigButtonYOffset, width: 230, height: 36 },
                    imageURL: pathToOverlays+"ddao-walk-select-button-elderly-selected.png",
                    color: { red: 255, green: 255, blue: 255},
                    alpha: 1,
                    visible: false
                });
bigButtonOverlays.push(elderlyWalkBigButtonSelected);

// overlays to show the walk wheel stats
var walkWheelZLine = Overlays.addOverlay("line3d", {
                    position: { x: 0, y: 0, z:hipsToFeetDistance },
                    end: { x: 0, y: 0, z: -hipsToFeetDistance },
                    color: { red: 0, green: 255, blue: 255},
                    alpha: 1,
                    lineWidth: 5,
                    visible: false,
                    anchor: "MyAvatar"
                });
var walkWheelYLine = Overlays.addOverlay("line3d", {
                    position: { x: 0, y: hipsToFeetDistance, z:0 },
                    end: { x: 0, y: -hipsToFeetDistance, z:0 },
                    color: { red: 255, green: 0, blue: 255},
                    alpha: 1,
                    lineWidth: 5,
                    visible: false,
                    anchor: "MyAvatar"
                });

var debugText = Overlays.addOverlay("text", {
                    x: Window.innerWidth/2 + 200,
                    y: Window.innerHeight/2 - 300,
                    width: 200,
                    height: 130,
                    color: { red: 255, green: 255, blue: 255},
                    textColor: { red: 255, green: 255, blue: 255},
                    topMargin: 5,
                    leftMargin: 5,
                    visible: false,
                    backgroundColor: { red: 255, green: 255, blue: 255},
                    text: "Debug area\n\n\nNothing to report yet.\n\n\nPlease exit edit mode\nand start walking\nto see the walkwheel."
                });

// various show / hide GUI element functions
function doStandardMenu() {
    hidebuttonOverlays();
    hideJointControls();
    setBackground(controlsBackground);
    if(powerOn) setButtonOverlayVisible(onButton);
    else setButtonOverlayVisible(offButton);
    setButtonOverlayVisible(configWalkButton);
    setButtonOverlayVisible(configStandButton);
    setButtonOverlayVisible(configFlyingButton);
    setButtonOverlayVisible(hideButton);
    setSliderThumbsVisible(false);
    showFrontPanelButtons(true);
    showWalkStyleButtons(false);
}
function showFrontPanelButtons(showButtons) {

	if(avatarGender===FEMALE) {
		Overlays.editOverlay(femaleBigButtonSelected, { visible: showButtons } );
		Overlays.editOverlay(femaleBigButton, { visible: false } );
		Overlays.editOverlay(maleBigButtonSelected, { visible: false } );
		Overlays.editOverlay(maleBigButton, { visible: showButtons } );
	} else {
		Overlays.editOverlay(femaleBigButtonSelected, { visible: false } );
		Overlays.editOverlay(femaleBigButton, { visible: showButtons } );
		Overlays.editOverlay(maleBigButtonSelected, { visible: showButtons } );
		Overlays.editOverlay(maleBigButton, { visible: false } );
	}
	if(armsFree) {
		Overlays.editOverlay(armsFreeBigButtonSelected, { visible: showButtons } );
		Overlays.editOverlay(armsFreeBigButton, { visible: false } );
	} else {
		Overlays.editOverlay(armsFreeBigButtonSelected, { visible: false } );
		Overlays.editOverlay(armsFreeBigButton, { visible: showButtons } );
	}
	if(playFootStepSounds) {
		Overlays.editOverlay(footstepsBigButtonSelected, { visible: showButtons } );
		Overlays.editOverlay(footstepsBigButton, { visible: false } );
	} else {
		Overlays.editOverlay(footstepsBigButtonSelected, { visible: false } );
		Overlays.editOverlay(footstepsBigButton, { visible: showButtons } );
	}
}
function minimiseDialog() {

	if(minimised) {
        setBackground();
        hidebuttonOverlays();
        setSliderThumbsVisible(false);
        hideJointControls();
        showFrontPanelButtons(false);
        Overlays.editOverlay(controlsMinimisedTab, { visible: true } );
    } else {
        setInternalState(STANDING); // show all the controls again
        Overlays.editOverlay(controlsMinimisedTab, { visible: false } );
    }
}
function setBackground(backgroundName)  {
    for(var i in backgroundOverlays) {
        if(backgroundOverlays[i] === backgroundName)
            Overlays.editOverlay(backgroundName, { visible: true } );
        else Overlays.editOverlay(backgroundOverlays[i], { visible: false } );
    }
}
function setButtonOverlayVisible(buttonOverlayName) {
    for(var i in buttonOverlays) {
        if(buttonOverlays[i] === buttonOverlayName) {
            Overlays.editOverlay(buttonOverlayName, { visible: true } );
        }
    }
}
// top row menu type buttons (smaller)
function hidebuttonOverlays()  {
    for(var i in buttonOverlays) {
        Overlays.editOverlay(buttonOverlays[i], { visible: false } );
    }
}
function hideJointControls() {
    for(var i in jointsControlOverlays) {
        Overlays.editOverlay(jointsControlOverlays[i], { visible: false } );
    }
}
function setSliderThumbsVisible(thumbsVisible) {
    for(var i = 0 ; i < sliderThumbOverlays.length ; i++) {
        Overlays.editOverlay(sliderThumbOverlays[i], { visible: thumbsVisible } );
    }
}
function initialiseJointsEditingPanel(propertyIndex) {

    selectedJointIndex = propertyIndex;

    // set the image for the selected joint on the character control
    hideJointControls();
    switch (selectedJointIndex) {
        case 0:
            Overlays.editOverlay(hipsJointControl, { visible: true });
            break;
        case 1:
            Overlays.editOverlay(upperLegsJointControl, { visible: true });
            break;
        case 2:
            Overlays.editOverlay(lowerLegsJointControl, { visible: true });
            break;
        case 3:
            Overlays.editOverlay(feetJointControl, { visible: true });
            break;
        case 4:
            Overlays.editOverlay(toesJointControl, { visible: true });
            break;
        case 5:
            Overlays.editOverlay(spineJointControl, { visible: true });
            break;
        case 6:
            Overlays.editOverlay(spine1JointControl, { visible: true });
            break;
        case 7:
            Overlays.editOverlay(spine2JointControl, { visible: true });
            break;
        case 8:
            Overlays.editOverlay(shouldersJointControl, { visible: true });
            break;
        case 9:
            Overlays.editOverlay(upperArmsJointControl, { visible: true });
            break;
        case 10:
            Overlays.editOverlay(forearmsJointControl, { visible: true });
            break;
        case 11:
            Overlays.editOverlay(handsJointControl, { visible: true });
            break;
        case 12:
            Overlays.editOverlay(headJointControl, { visible: true });
            break;
    }

    // set sliders to adjust individual joint properties
    var i = 0;
    var yLocation = backgroundY+359;

	// pitch your role
    var sliderXPos = currentAnimation.joints[selectedJointIndex].pitch
    		/ sliderRanges.joints[selectedJointIndex].pitchRange * sliderRangeX;
    Overlays.editOverlay(sliderThumbOverlays[i], { x: minSliderX + sliderXPos, y: yLocation+=30, visible: true });
    sliderXPos = currentAnimation.joints[selectedJointIndex].yaw
    		/ sliderRanges.joints[selectedJointIndex].yawRange * sliderRangeX;
    Overlays.editOverlay(sliderThumbOverlays[++i], { x: minSliderX + sliderXPos, y: yLocation+=30, visible: true });
    sliderXPos = currentAnimation.joints[selectedJointIndex].roll
    		/ sliderRanges.joints[selectedJointIndex].rollRange * sliderRangeX;
    Overlays.editOverlay(sliderThumbOverlays[++i], { x: minSliderX + sliderXPos, y: yLocation+=30, visible: true });

    // set phases (full range, -180 to 180)
    sliderXPos = (90 + currentAnimation.joints[selectedJointIndex].pitchPhase/2)/180 * sliderRangeX;
    Overlays.editOverlay(sliderThumbOverlays[++i], { x: minSliderX + sliderXPos, y: yLocation+=30, visible: true });
    sliderXPos = (90 + currentAnimation.joints[selectedJointIndex].yawPhase/2)/180 * sliderRangeX;
    Overlays.editOverlay(sliderThumbOverlays[++i], { x: minSliderX + sliderXPos, y: yLocation+=30, visible: true });
    sliderXPos = (90 + currentAnimation.joints[selectedJointIndex].rollPhase/2)/180 * sliderRangeX;
    Overlays.editOverlay(sliderThumbOverlays[++i], { x: minSliderX + sliderXPos, y: yLocation+=30, visible: true });

    // offset ranges are also -ve thr' zero to +ve, so have to offset
    sliderXPos = (((sliderRanges.joints[selectedJointIndex].pitchOffsetRange+currentAnimation.joints[selectedJointIndex].pitchOffset)/2)
    			/sliderRanges.joints[selectedJointIndex].pitchOffsetRange) * sliderRangeX;
    Overlays.editOverlay(sliderThumbOverlays[++i], { x: minSliderX + sliderXPos, y: yLocation+=30, visible: true });
    sliderXPos = (((sliderRanges.joints[selectedJointIndex].yawOffsetRange+currentAnimation.joints[selectedJointIndex].yawOffset)/2)
    			/sliderRanges.joints[selectedJointIndex].yawOffsetRange) * sliderRangeX;
    Overlays.editOverlay(sliderThumbOverlays[++i], { x: minSliderX + sliderXPos, y: yLocation+=30, visible: true });
    sliderXPos = (((sliderRanges.joints[selectedJointIndex].rollOffsetRange+currentAnimation.joints[selectedJointIndex].rollOffset)/2)
    			/sliderRanges.joints[selectedJointIndex].rollOffsetRange) * sliderRangeX;
    Overlays.editOverlay(sliderThumbOverlays[++i], { x: minSliderX + sliderXPos, y: yLocation+=30, visible: true });
}

function initialiseWalkTweaks() {

    // set sliders to adjust walk properties
    var i = 0;
    var yLocation = backgroundY+71;

    var sliderXPos = currentAnimation.settings.baseFrequency / MAX_WALK_SPEED * sliderRangeX;   // walk speed
    Overlays.editOverlay(sliderThumbOverlays[i], { x: minSliderX + sliderXPos, y: yLocation+=60, visible: true });
    sliderXPos = currentAnimation.settings.takeFlightVelocity / 300 * sliderRangeX;             // start flying speed
    Overlays.editOverlay(sliderThumbOverlays[++i], { x: minSliderX + sliderXPos, y: yLocation+=60, visible: true });
    sliderXPos = currentAnimation.joints[0].sway / sliderRanges.joints[0].swayRange * sliderRangeX;     // Hips sway
    Overlays.editOverlay(sliderThumbOverlays[++i], { x: minSliderX + sliderXPos, y: yLocation+=60, visible: true });
    sliderXPos = currentAnimation.joints[0].bob / sliderRanges.joints[0].bobRange * sliderRangeX;       // Hips bob
    Overlays.editOverlay(sliderThumbOverlays[++i], { x: minSliderX + sliderXPos, y: yLocation+=60, visible: true });
    sliderXPos = currentAnimation.joints[0].thrust / sliderRanges.joints[0].thrustRange * sliderRangeX; // Hips thrust
    Overlays.editOverlay(sliderThumbOverlays[++i], { x: minSliderX + sliderXPos, y: yLocation+=60, visible: true });
    sliderXPos = (0.5+(currentAnimation.adjusters.legsSeparation.strength/2)) * sliderRangeX;   // legs separation
    Overlays.editOverlay(sliderThumbOverlays[++i], { x: minSliderX + sliderXPos, y: yLocation+=60, visible: true });
    sliderXPos = currentAnimation.adjusters.stride.strength * sliderRangeX;                     // stride
    Overlays.editOverlay(sliderThumbOverlays[++i], { x: minSliderX + sliderXPos, y: yLocation+=60, visible: true });
    sliderXPos = currentAnimation.joints[9].yaw / sliderRanges.joints[9].yawRange * sliderRangeX; // arms swing - is just upper arms yaw
    Overlays.editOverlay(sliderThumbOverlays[++i], { x: minSliderX + sliderXPos, y: yLocation+=60, visible: true });
    sliderXPos = (((sliderRanges.joints[9].pitchOffsetRange-currentAnimation.joints[9].pitchOffset)/2)/sliderRanges.joints[9].pitchOffsetRange) * sliderRangeX; // arms out - is just upper arms pitch offset
    Overlays.editOverlay(sliderThumbOverlays[++i], { x: minSliderX + sliderXPos, y: yLocation+=60, visible: true });
}

function showWalkStyleButtons(showButtons) {

	// set all big buttons to hidden, but skip the first 8, as are for the front panel
	for(var i = 8 ; i < bigButtonOverlays.length ; i++) {
		Overlays.editOverlay(bigButtonOverlays[i], { visible: false });
	}

	if(!showButtons) return;

	// set all the non-selected ones to showing
	for(var i = 8 ; i < bigButtonOverlays.length ; i+=2) {
		Overlays.editOverlay(bigButtonOverlays[i], { visible: showButtons });
	}

	// set the currently selected one
	if(selectedWalk === femaleSexyWalk || selectedWalk === maleSexyWalk) {
		Overlays.editOverlay(sexyWalkBigButtonSelected, { visible: showButtons });
		Overlays.editOverlay(sexyWalkBigButton, {visible: false});
	}
	else if(selectedWalk === femaleStrutWalk || selectedWalk === maleStrutWalk) {
		Overlays.editOverlay(strutWalkBigButtonSelected, { visible: showButtons });
		Overlays.editOverlay(strutWalkBigButton, {visible: false});
	}
	else if(selectedWalk === femalePowerWalk || selectedWalk === malePowerWalk) {
		Overlays.editOverlay(powerWalkBigButtonSelected, { visible: showButtons });
		Overlays.editOverlay(powerWalkBigButton, {visible: false});
	}
	else if(selectedWalk === femaleShuffle || selectedWalk === maleShuffle) {
		Overlays.editOverlay(shuffleBigButtonSelected, { visible: showButtons });
		Overlays.editOverlay(shuffleBigButton, {visible: false});
	}
	else if(selectedWalk === femaleRun || selectedWalk === maleRun) {
		Overlays.editOverlay(runBigButtonSelected, { visible: showButtons });
		Overlays.editOverlay(runBigButton, {visible: false});
	}
	else if(selectedWalk === femaleRandomWalk || selectedWalk === maleRandomWalk) {
		Overlays.editOverlay(randomWalkBigButtonSelected, { visible: showButtons });
		Overlays.editOverlay(randomWalkBigButton, {visible: false});
	}
	else if(selectedWalk === femaleToughWalk || selectedWalk === maleToughWalk) {
		Overlays.editOverlay(toughWalkBigButtonSelected, { visible: showButtons });
		Overlays.editOverlay(toughWalkBigButton, {visible: false});
	}
	else if(selectedWalk === femaleCoolWalk || selectedWalk === maleCoolWalk) {
		Overlays.editOverlay(coolWalkBigButtonSelected, { visible: showButtons });
		Overlays.editOverlay(coolWalkBigButton, {visible: false});
	}
	else if(selectedWalk === femaleElderlyWalk || selectedWalk === maleElderlyWalk) {
		Overlays.editOverlay(elderlyWalkBigButtonSelected, { visible: showButtons });
		Overlays.editOverlay(elderlyWalkBigButton, {visible: false});
	}
}

// mouse event handlers
var movingSliderOne = false;
var movingSliderTwo = false;
var movingSliderThree = false;
var movingSliderFour = false;
var movingSliderFive = false;
var movingSliderSix = false;
var movingSliderSeven = false;
var movingSliderEight = false;
var movingSliderNine = false;


function mousePressEvent(event) {

    var clickedOverlay = Overlays.getOverlayAtPoint({x: event.x, y: event.y});

    // check for a character joint control click
    switch (clickedOverlay) {

        case hideButton:
            Overlays.editOverlay(hideButton, { visible: false } );
            Overlays.editOverlay(hideButtonSelected, { visible: true } );
            return;

        case backButton:
            Overlays.editOverlay(backButton, { visible: false } );
            Overlays.editOverlay(backButtonSelected, { visible: true } );
            return;

        case controlsMinimisedTab:
            // TODO: add visual user feedback for tab click
            return;

		case footstepsBigButton:
			playFootStepSounds = true;
			Overlays.editOverlay(footstepsBigButtonSelected, { visible: true } );
			Overlays.editOverlay(footstepsBigButton, { visible: false } );
			return;

		case footstepsBigButtonSelected:
			playFootStepSounds = false;
			Overlays.editOverlay(footstepsBigButton, { visible: true } );
			Overlays.editOverlay(footstepsBigButtonSelected, { visible: false } );
			return;

		case femaleBigButton:
		case maleBigButtonSelected:
			avatarGender = FEMALE;
			selectedWalk = femaleStrutWalk;
			selectedStand = femaleStandOne;
			selectedFlyUp  = femaleFlyingUp;
			selectedFly = femaleFlying;
			selectedFlyDown = femaleFlyingDown;
			Overlays.editOverlay(femaleBigButtonSelected, { visible: true } );
			Overlays.editOverlay(femaleBigButton, { visible: false } );
			Overlays.editOverlay(maleBigButton, { visible: true } );
			Overlays.editOverlay(maleBigButtonSelected, { visible: false } );
			return;

		case armsFreeBigButton:
			armsFree = true;
			Overlays.editOverlay(armsFreeBigButtonSelected, { visible: true } );
			Overlays.editOverlay(armsFreeBigButton, { visible: false } );
			//Script.runningStateChanged(); // attempt to kick in Hydra support - fail
			return;

		case armsFreeBigButtonSelected:
			armsFree = false;
			Overlays.editOverlay(armsFreeBigButtonSelected, { visible: false } );
			Overlays.editOverlay(armsFreeBigButton, { visible: true } );
			//Script.runningStateChanged(); // attempt to kick in Hydra support - fail
			return;

		case maleBigButton:
		case femaleBigButtonSelected:
			avatarGender = MALE;
			selectedWalk = maleStrutWalk;
			selectedStand = maleStandOne;
			selectedFlyUp  = maleFlyingUp;
			selectedFly = maleFlying;
			selectedFlyDown = maleFlyingDown;
			Overlays.editOverlay(femaleBigButton, { visible: true } );
			Overlays.editOverlay(femaleBigButtonSelected, { visible: false } );
			Overlays.editOverlay(maleBigButtonSelected, { visible: true } );
			Overlays.editOverlay(maleBigButton, { visible: false } );
			return;

		case sexyWalkBigButton:
			if(avatarGender===FEMALE) selectedWalk = femaleSexyWalk;
			else selectedWalk = maleSexyWalk;
			currentAnimation = selectedWalk;
			showWalkStyleButtons(true);
			break;

		case strutWalkBigButton:
			if(avatarGender===FEMALE) selectedWalk = femaleStrutWalk;
			else selectedWalk = maleStrutWalk;
			currentAnimation = selectedWalk;
			showWalkStyleButtons(true);
			break;

		case powerWalkBigButton:
			if(avatarGender===FEMALE) selectedWalk = femalePowerWalk;
			else selectedWalk = malePowerWalk;
			currentAnimation = selectedWalk;
			showWalkStyleButtons(true);
			break;

		case shuffleBigButton:
			if(avatarGender===FEMALE) selectedWalk = femaleShuffle;
			else selectedWalk = maleShuffle;
			currentAnimation = selectedWalk;
			showWalkStyleButtons(true);
			break;

		case runBigButton:
			if(avatarGender===FEMALE) selectedWalk = femaleRun;
			else selectedWalk = maleRun;
			currentAnimation = selectedWalk;
			showWalkStyleButtons(true);
			break;

		case randomWalkBigButton:
			if(avatarGender===FEMALE) selectedWalk = femaleRandomWalk;
			else selectedWalk = maleRandomWalk;
			currentAnimation = selectedWalk;
			showWalkStyleButtons(true);
			break;

		case toughWalkBigButton:
			if(avatarGender===FEMALE) selectedWalk = femaleToughWalk;
			else selectedWalk = maleToughWalk;
			currentAnimation = selectedWalk;
			showWalkStyleButtons(true);
			break;

		case coolWalkBigButton:
			if(avatarGender===FEMALE) selectedWalk = femaleCoolWalk;
			else selectedWalk = maleCoolWalk;
			currentAnimation = selectedWalk;
			showWalkStyleButtons(true);
			break;

		case elderlyWalkBigButton:
			if(avatarGender===FEMALE) selectedWalk = femaleElderlyWalk;
			else selectedWalk = maleElderlyWalk;
			currentAnimation = selectedWalk;
			showWalkStyleButtons(true);
			break;

		case sexyWalkBigButtonSelected:
		case strutWalkBigButtonSelected:
		case powerWalkBigButtonSelected:
		case shuffleBigButtonSelected:
		case runBigButtonSelected:
		case randomWalkBigButtonSelected:
		case toughWalkBigButtonSelected:
		case coolWalkBigButtonSelected:
		case elderlyWalkBigButtonSelected:
			// toggle forwards / backwards walk display
			if(principleDirection===DIRECTION_FORWARDS) {
				principleDirection=DIRECTION_BACKWARDS;
			} else principleDirection=DIRECTION_FORWARDS;
			break;

        case sliderOne:
            movingSliderOne = true;
            return;

        case sliderTwo:
            movingSliderTwo = true;
            return;

        case sliderThree:
            movingSliderThree = true;
            return;

        case sliderFour:
            movingSliderFour = true;
            return;

        case sliderFive:
            movingSliderFive = true;
            return;

        case sliderSix:
            movingSliderSix = true;
            return;

        case sliderSeven:
            movingSliderSeven = true;
            return;

        case sliderEight:
            movingSliderEight = true;
            return;

        case sliderNine:
            movingSliderNine = true;
            return;
    }

    if(INTERNAL_STATE===CONFIG_WALK_JOINTS ||
	   INTERNAL_STATE===CONFIG_STANDING ||
	   INTERNAL_STATE===CONFIG_FLYING) {

        // check for new joint selection and update display accordingly
        var clickX = event.x - backgroundX - 75;
        var clickY = event.y - backgroundY - 92;

        if(clickX>60&&clickX<120&&clickY>123&&clickY<155) {
            initialiseJointsEditingPanel(0);
            return;
        }
        else if(clickX>63&&clickX<132&&clickY>156&&clickY<202) {
            initialiseJointsEditingPanel(1);
            return;
        }
        else if(clickX>58&&clickX<137&&clickY>203&&clickY<250) {
            initialiseJointsEditingPanel(2);
            return;
        }
        else if(clickX>58&&clickX<137&&clickY>250&&clickY<265) {
            initialiseJointsEditingPanel(3);
            return;
        }
        else if(clickX>58&&clickX<137&&clickY>265&&clickY<280) {
            initialiseJointsEditingPanel(4);
            return;
        }
        else if(clickX>78&&clickX<121&&clickY>111&&clickY<128) {
            initialiseJointsEditingPanel(5);
            return;
        }
        else if(clickX>78&&clickX<128&&clickY>89&&clickY<111) {
            initialiseJointsEditingPanel(6);
            return;
        }
        else if(clickX>85&&clickX<118&&clickY>77&&clickY<94) {
            initialiseJointsEditingPanel(7);
            return;
        }
        else if(clickX>64&&clickX<125&&clickY>55&&clickY<77) {
            initialiseJointsEditingPanel(8);
            return;
        }
        else if((clickX>44&&clickX<73&&clickY>71&&clickY<94)
              ||(clickX>125&&clickX<144&&clickY>71&&clickY<94)) {
            initialiseJointsEditingPanel(9);
            return;
        }
        else if((clickX>28&&clickX<57&&clickY>94&&clickY<119)
              ||(clickX>137&&clickX<170&&clickY>97&&clickY<114)) {
            initialiseJointsEditingPanel(10);
            return;
        }
        else if((clickX>18&&clickX<37&&clickY>115&&clickY<136)
              ||(clickX>157&&clickX<182&&clickY>115&&clickY<136)) {
            initialiseJointsEditingPanel(11);
            return;
        }
        else if(clickX>81&&clickX<116&&clickY>12&&clickY<53) {
            initialiseJointsEditingPanel(12);
            return;
        }
    }
}
function mouseMoveEvent(event) {

    // only need deal with slider changes
    if(powerOn) {

        if(INTERNAL_STATE===CONFIG_WALK_JOINTS ||
           INTERNAL_STATE===CONFIG_STANDING ||
           INTERNAL_STATE===CONFIG_FLYING) {

            var thumbClickOffsetX = event.x - minSliderX;
            var thumbPositionNormalised = thumbClickOffsetX / sliderRangeX;
            if(thumbPositionNormalised<0) thumbPositionNormalised = 0;
            if(thumbPositionNormalised>1) thumbPositionNormalised = 1;
            var sliderX = thumbPositionNormalised * sliderRangeX ; // sets range

            if(movingSliderOne) { // currently selected joint pitch
                Overlays.editOverlay(sliderOne, { x: sliderX + minSliderX} );
                currentAnimation.joints[selectedJointIndex].pitch = thumbPositionNormalised * sliderRanges.joints[selectedJointIndex].pitchRange;
            }
            else if(movingSliderTwo) { // currently selected joint yaw
                Overlays.editOverlay(sliderTwo, { x: sliderX + minSliderX} );
                currentAnimation.joints[selectedJointIndex].yaw = thumbPositionNormalised * sliderRanges.joints[selectedJointIndex].yawRange;
            }
            else if(movingSliderThree) { // currently selected joint roll
                Overlays.editOverlay(sliderThree, { x: sliderX + minSliderX} );
                currentAnimation.joints[selectedJointIndex].roll = thumbPositionNormalised * sliderRanges.joints[selectedJointIndex].rollRange;
            }
            else if(movingSliderFour) { // currently selected joint pitch phase
                Overlays.editOverlay(sliderFour, { x: sliderX + minSliderX} );
                var newPhase = 360 * thumbPositionNormalised - 180;
                currentAnimation.joints[selectedJointIndex].pitchPhase = newPhase;
            }
            else if(movingSliderFive) { // currently selected joint yaw phase;
                Overlays.editOverlay(sliderFive, { x: sliderX + minSliderX} );
                var newPhase = 360 * thumbPositionNormalised - 180;
                currentAnimation.joints[selectedJointIndex].yawPhase = newPhase;
            }
            else if(movingSliderSix) { // currently selected joint roll phase
                Overlays.editOverlay(sliderSix, { x: sliderX + minSliderX} );
                var newPhase = 360 * thumbPositionNormalised - 180;
                currentAnimation.joints[selectedJointIndex].rollPhase = newPhase;
            }
            else if(movingSliderSeven) { // currently selected joint pitch offset
                Overlays.editOverlay(sliderSeven, { x: sliderX + minSliderX} ); // currently selected joint pitch offset
                var newOffset = (thumbPositionNormalised-0.5) * 2 * sliderRanges.joints[selectedJointIndex].pitchOffsetRange;
                currentAnimation.joints[selectedJointIndex].pitchOffset = newOffset;
            }
            else if(movingSliderEight) { // currently selected joint yaw offset
                Overlays.editOverlay(sliderEight, { x: sliderX + minSliderX} ); // currently selected joint yaw offset
                var newOffset = (thumbPositionNormalised-0.5) * 2 * sliderRanges.joints[selectedJointIndex].yawOffsetRange;
                currentAnimation.joints[selectedJointIndex].yawOffset = newOffset;
            }
            else if(movingSliderNine) { // currently selected joint roll offset
                Overlays.editOverlay(sliderNine, { x: sliderX + minSliderX} ); // currently selected joint roll offset
                var newOffset = (thumbPositionNormalised-0.5) * 2 * sliderRanges.joints[selectedJointIndex].rollOffsetRange;
                currentAnimation.joints[selectedJointIndex].rollOffset = newOffset;
            }
        }
        else if(INTERNAL_STATE===CONFIG_WALK_TWEAKS) {

            var thumbClickOffsetX = event.x - minSliderX;
            var thumbPositionNormalised = thumbClickOffsetX / sliderRangeX;
            if(thumbPositionNormalised<0) thumbPositionNormalised = 0;
            if(thumbPositionNormalised>1) thumbPositionNormalised = 1;
            var sliderX = thumbPositionNormalised * sliderRangeX ; // sets range

            if(movingSliderOne) { // walk speed
                paused = true; // avoid nasty jittering
                Overlays.editOverlay(sliderOne, { x: sliderX + minSliderX} );
                currentAnimation.settings.baseFrequency = thumbPositionNormalised * MAX_WALK_SPEED;
            }
            else if(movingSliderTwo) {  // take flight speed
                Overlays.editOverlay(sliderTwo, { x: sliderX + minSliderX} );
                currentAnimation.settings.takeFlightVelocity = thumbPositionNormalised * 300;
            }
            else if(movingSliderThree) { // hips sway
                Overlays.editOverlay(sliderThree, { x: sliderX + minSliderX} );
                currentAnimation.joints[0].sway = thumbPositionNormalised * sliderRanges.joints[0].swayRange;
            }
            else if(movingSliderFour) { // hips bob
                Overlays.editOverlay(sliderFour, { x: sliderX + minSliderX} );
                currentAnimation.joints[0].bob = thumbPositionNormalised * sliderRanges.joints[0].bobRange;
            }
            else if(movingSliderFive) { // hips thrust
				Overlays.editOverlay(sliderFive, { x: sliderX + minSliderX} );
                currentAnimation.joints[0].thrust = thumbPositionNormalised * sliderRanges.joints[0].thrustRange;
            }
            else if(movingSliderSix) { // legs separation
                Overlays.editOverlay(sliderSix, { x: sliderX + minSliderX} );
                currentAnimation.adjusters.legsSeparation.strength = (thumbPositionNormalised-0.5)/2;
            }
            else if(movingSliderSeven) { // stride
                Overlays.editOverlay(sliderSeven, { x: sliderX + minSliderX} );
                currentAnimation.adjusters.stride.strength = thumbPositionNormalised;
            }
            else if(movingSliderEight) { // arms swing = upper arms yaw
                Overlays.editOverlay(sliderEight, { x: sliderX + minSliderX} );
                currentAnimation.joints[9].yaw = thumbPositionNormalised * sliderRanges.joints[9].yawRange;
            }
            else if(movingSliderNine) { // arms out = upper arms pitch offset
                Overlays.editOverlay(sliderNine, { x: sliderX + minSliderX} );
                currentAnimation.joints[9].pitchOffset = (thumbPositionNormalised-0.5) * -2 * sliderRanges.joints[9].pitchOffsetRange;
            }
        }
    }
}
function mouseReleaseEvent(event) {

    var clickedOverlay = Overlays.getOverlayAtPoint({x: event.x, y: event.y});

    if(paused) paused = false;

    if(clickedOverlay === offButton) {
        powerOn = true;
        Overlays.editOverlay(offButton, { visible: false } );
        Overlays.editOverlay(onButton,  { visible: true } );
        stand();
    }
    else if(clickedOverlay === hideButton || clickedOverlay === hideButtonSelected){
        Overlays.editOverlay(hideButton, { visible: true } );
        Overlays.editOverlay(hideButtonSelected, { visible: false } );
        minimised = true;
        minimiseDialog();
    }
    else if(clickedOverlay === controlsMinimisedTab) {
        minimised = false;
        minimiseDialog();
    }
    else if(powerOn) {

        if(movingSliderOne) movingSliderOne = false;
        else if(movingSliderTwo) movingSliderTwo = false;
        else if(movingSliderThree) movingSliderThree = false;
        else if(movingSliderFour) movingSliderFour = false;
        else if(movingSliderFive) movingSliderFive = false;
        else if(movingSliderSix) movingSliderSix = false;
        else if(movingSliderSeven) movingSliderSeven = false;
        else if(movingSliderEight) movingSliderEight = false;
        else if(movingSliderNine) movingSliderNine = false;
        else {
            switch(clickedOverlay) {

                case configWalkButtonSelected:
                case configStandButtonSelected:
                case configFlyingButtonSelected:
                case configWalkStylesButtonSelected:
                case configWalkTweaksButtonSelected:
                case configWalkJointsButtonSelected:
                    setInternalState(STANDING);
                    break;

                case onButton:
                    powerOn = false;
                    setInternalState(STANDING);
                    Overlays.editOverlay(offButton, { visible: true } );
                    Overlays.editOverlay(onButton,  { visible: false } );
                    resetJoints();
                    break;

                case backButton:
                case backButtonSelected:
                    Overlays.editOverlay(backButton, { visible: false } );
                    Overlays.editOverlay(backButtonSelected, { visible: false } );
                    setInternalState(STANDING);
                    break;

                case configWalkStylesButton:
                    setInternalState(CONFIG_WALK_STYLES);
                    break;

                case configWalkTweaksButton:
                    setInternalState(CONFIG_WALK_TWEAKS);
                    break;

                case configWalkJointsButton:
                    setInternalState(CONFIG_WALK_JOINTS);
                    break;

                case configWalkButton:
                    setInternalState(CONFIG_WALK_STYLES); //  set the default walk adjustment panel here (i.e. first panel shown when Walk button clicked)
                    break;

                case configStandButton:
                    setInternalState(CONFIG_STANDING);
                    break;

                case configFlyingButton:
                    setInternalState(CONFIG_FLYING);
                    break;
            }
        }
    }
}
Controller.mouseMoveEvent.connect(mouseMoveEvent);
Controller.mousePressEvent.connect(mousePressEvent);
Controller.mouseReleaseEvent.connect(mouseReleaseEvent);

// Script ending
Script.scriptEnding.connect(function() {

    // remove the background overlays
    for(var i in backgroundOverlays) {
        Overlays.deleteOverlay(backgroundOverlays[i]);
    }
    // remove the button overlays
    for(var i in buttonOverlays) {
        Overlays.deleteOverlay(buttonOverlays[i]);
    }
    // remove the slider thumb overlays
    for(var i in sliderThumbOverlays) {
        Overlays.deleteOverlay(sliderThumbOverlays[i]);
    }
    // remove the character joint control overlays
    for(var i in bigButtonOverlays) {
        Overlays.deleteOverlay(jointsControlOverlays[i]);
    }
    // remove the big button overlays
    for(var i in bigButtonOverlays) {
        Overlays.deleteOverlay(bigButtonOverlays[i]);
    }
    // remove the mimimised tab
    Overlays.deleteOverlay(controlsMinimisedTab);

    // remove the walk wheel overlays
    Overlays.deleteOverlay(walkWheelYLine);
    Overlays.deleteOverlay(walkWheelZLine);
    Overlays.deleteOverlay(debugText);
});

var sideStep = 0.002; // i.e. 2mm increments whilst sidestepping - JS movement keys don't work well :-(
function keyPressEvent(event) {

	if (event.text == "q") {
		// export currentAnimation as json string when q key is pressed.
		// reformat result at http://www.freeformatter.com/json-formatter.html
        print('\n');
        print('walk.js dumping animation: '+currentAnimation.name+'\n');
        print('\n');
        print(JSON.stringify(currentAnimation), null, '\t');
    }
    else if (event.text == ",") {
		// here we will sidestep as long as we're not under any other motion
		if(INTERNAL_STATE===STANDING ||
		   INTERNAL_STATE===SIDE_STEPPING) {
			translateHips( { x:-sideStep, y:0, z:0 });
			currentAnimation = selectedSideStepLeft;
			principleDirection = DIRECTION_LEFT;
			if(INTERNAL_STATE!==SIDE_STEPPING)
				setInternalState(SIDE_STEPPING);
		}
    }
    else if (event.text == ".") {
		// here we will sidestep as long as we're not under any other motion
		if(INTERNAL_STATE===STANDING ||
		   INTERNAL_STATE===SIDE_STEPPING) {
			translateHips( { x:sideStep, y:0, z:0 });
			currentAnimation = selectedSideStepRight;
			principleDirection = DIRECTION_RIGHT;
			if(INTERNAL_STATE!==SIDE_STEPPING)
				setInternalState(SIDE_STEPPING);
		}
    }
    else if (event.text == "t") {
        statsOn = !statsOn;
        if(statsOn) {
			print('wheel stats on (t to turn off again)');
			Overlays.editOverlay(debugText, {visible: true});
			Overlays.editOverlay(walkWheelYLine, {visible: true});
			Overlays.editOverlay(walkWheelZLine, {visible: true});
		} else {
			print('wheel stats off (t to turn on again)');
			Overlays.editOverlay(debugText, {visible: false});
			Overlays.editOverlay(walkWheelYLine, {visible: false});
			Overlays.editOverlay(walkWheelZLine, {visible: false});
		}
    }
    // this is a dev tool for tweaking individual values. edit and use freely
    else if (event.text == "[") {
		var jointNum = 0;
		var anim = femaleSideStep;
        var sway = anim.joints[jointNum].sway;
        sway-=0.01;
        anim.joints[jointNum].sway = sway;
        print(anim.name+' sway is now '+anim.joints[jointNum].sway+' for the '+anim.joints[jointNum].name+' joint');
    }
    else if (event.text == "]") {
		var jointNum = 0;
		var anim = femaleSideStep;
        var sway = anim.joints[jointNum].sway;
        sway+=0.01;
        anim.joints[jointNum].sway = sway;
        print(anim.name+' sway is now '+anim.joints[jointNum].sway+' for the '+anim.joints[jointNum].name+' joint');
    }
}

function keyReleaseEvent(event) {

	if (event.text == "," ||
		event.text == ".") {
		// if we're sidestepping, stop
		if(INTERNAL_STATE===STANDING ||
		   INTERNAL_STATE===SIDE_STEPPING) { // cannot use - gets called constantly when key is held down :-(
			//selectedAnimation = selectedStand;
			//principleDirection = DIRECTION_FORWARDS;
			//setInternalState(STANDING);
		}
    }
}
Controller.keyPressEvent.connect(keyPressEvent);
Controller.keyPressEvent.connect(keyReleaseEvent);





// debug and other info

// TODO: implement joint mapping using reg expressions to cover a wide range of avi bone structures
var jointList = MyAvatar.getJointNames();
var jointMappings = "\n# Avatar joint list start";
for (var i = 0; i < jointList.length; i++) {
    jointMappings = jointMappings + "\njointIndex = " + jointList[i] + " = " + i;
}
print(jointMappings + "\n# walk.js avatar joint list end");

// clear the joint data so can calculate hips to feet distance
for(var i = 0 ; i < 5 ; i++) {
    //MyAvatar.setJointData(i, Quat.fromPitchYawRollDegrees(0,0,0));
    MyAvatar.clearJointData(jointList[i]);
}
// for calibration
var hipsToFeetDistance = MyAvatar.getJointPosition("Hips").y - MyAvatar.getJointPosition("RightFoot").y;
print('\nwalk.js: Hips to feet: '+hipsToFeetDistance);


////////////////////////////////////////////////////////////
// begin by setting the INTERNALE_STATE to state STANDING //
////////////////////////////////////////////////////////////

//curlFingers();
setInternalState(STANDING);