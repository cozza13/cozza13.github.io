//
//  ddao.js
//
//
//  Created by Davedub, August 2014
//  Copyright 2014 David Wooldridge.
//
//	Procedural animation controllerhipSwaySlider
//
//  Distributed under the Apache License, Version 2.0.
//  See the accompanying file LICENSE or http://www.apache.org/licenses/LICENSE-2.0.html
//


/*********************/
/*   Configurables   */
/*********************/

/* primary limb swing frequency (Hz) */
var baseFrequency = 5.0;

/* walking upper leg params */
var upperLegPitch = 17.0;
var UPPER_LEG_YAW = 0.0;
var upperLegRoll = 0.0;
var upperLegPitchOffset = 10;
var UPPER_LEG_PITCH_RANGE = 60; // range of adjustment on slider

/* walking leg, feet and toes params */
var lowerLegPitch = 19.0;
var FEET_PITCH = 30.0;
var FEET_PITCH_OFFSET = 5;
var TOE_PITCH = 90.0; //  not working?
var lowerLegPitchOffset = 20; // don't want to bend the knee too far forward
var LOWER_LEG_PITCH_RANGE = 90;  // range of adjustment on slider

/* walking hips params */
var HIPS_PITCH = 1.5;
var hipRollAmount  = 3;
var HIPS_YAW   = 1.5;
var hipSwayAmount = 0.0025; // local hip x translation multiplier
var HIP_SWAY_RANGE = 0.02;  // range of adjustment on slider
var hipBobAmount = 0.01;

/* walking spine params */
var SPINE_PITCH = 0; //  not working?
var SPINE_ROLL = 0;  //  not working?
var SPINE_YAW = 0;  //  not working?
var SPINE1_PITCH = 4;
var spineOneRoll = 5;
var SPINE1_YAW = 0;
var SPINE2_PITCH = 4;
var spineTwoRoll = 10;
var SPINE2_YAW = 0;

/* walking arms params */
var SHOULDERS_PITCH = 2;
var SHOULDERS_ROLL = 0;
var SHOULDERS_YAW = 5;
var SHOULDERS_PITCH_OFFSET = 10;
var SHOULDERS_YAW_OFFSET = 10;  // pulls shoulders back
var ARMS_FLAP = 3;
var ARMS_TWIST = 0;
var ARMS_SWING = 40;
var ARMS_DOWN = 65; // angle from t-pose to arms by sides for walking
var ARMS_SWING_OFFSET = 30;
var ELBOWS_ANGLE = 25;

/* flying, leaning and banking */
var FLYING_HIPS_PITCH = 20;
var TAKE_FLIGHT_VELOCITY = 150;
var TERMINAL_VELOCITY = 300; //// 229; // 703;
var BANKING_MAX_ANGLE = 40;



/**************/
/* debug info */
/**************/

// TODO: implement joint mapping using reg expressions to cover a wide range of avi bone structures
var jointList = MyAvatar.getJointNames();
var jointMappings = "\n# Avatar joint list start";
for (var i = 0; i < jointList.length; i++) {
    jointMappings = jointMappings + "\njointIndex = " + jointList[i] + " = " + i;
}
print(jointMappings + "\n# Avatar joint list end");
stand();


/******************************/
/* overlays related variables */
/******************************/

//  status - TODO: implement as status byte
var POWER_ON = true;
var STANDING = 2;
var WALKING = 4;
var FLYING = 8;
var CONFIG_WALK = 16;
var CONFIG_STAND = 32;
var CONFIG_FLYING = 64;
var STATUS = STANDING;


//  controller background dimensions
var backgroundWidth = 350;
var backgroundHeight = 700;
var backgroundX = Window.innerWidth-backgroundWidth+1;
var backgroundY = Window.innerHeight/2 - backgroundHeight/2;
var minSliderX = backgroundX + 31;
var maxSliderX = backgroundX + 294;
var sliderRangeX = 294 - 34;


//  overlay handles
var controlsBackground;
var walkSpeedSlider;
var hipSwaySlider;
var hipBobSlider;
var hipRollSlider;
var upperLegPitchSlider;
var lowerLegPitchSlider;
var upperLegPitchOffsetSlider;
var lowerLegPitchOffsetSlider;


//  slider overlay positions (in x)
var walkSliderX;
var walkSpeedIncX = (306-43)/10; // integer range 0 to 10 for walk oscillation frequency
var hipSwaySliderX;
var hipBobSliderX;
var hipRollSliderX;
var upperLegPitchSliderX;
var lowerLegPitchSliderX;
var upperLegPitchOffsetSliderX;
var lowerLegPitchOffsetSliderX;


/*********************************************/
/* initialise ui, starting with the overlays */
/*********************************************/

controlsBackground = Overlays.addOverlay("image", {
					bounds: { x: backgroundX, y: backgroundY, width: backgroundWidth, height: backgroundHeight},
					imageURL: "http://cozza13.github.io/overlays/ddao-background.png",
					color: { red: 255, green: 255, blue: 255},
					alpha: 1
				});
controlsBackgroundWalkEdit = Overlays.addOverlay("image", {
					bounds: { x: backgroundX, y: backgroundY, width: 0, height: 0},
					imageURL: "http://cozza13.github.io/overlays/ddao-background-walk-edit.png",
					color: { red: 255, green: 255, blue: 255},
					alpha: 1
				});
controlsBackgroundStandEdit = Overlays.addOverlay("image", {
					bounds: { x: backgroundX, y: backgroundY, width: 0, height: 0},
					imageURL: "http://cozza13.github.io/overlays/ddao-background-stand-edit.png",
					color: { red: 255, green: 255, blue: 255},
					alpha: 1
				});
controlsBackgroundFlyingEdit = Overlays.addOverlay("image", {
					bounds: { x: backgroundX, y: backgroundY, width: 0, height: 0},
					imageURL: "http://cozza13.github.io/overlays/ddao-background-flying-edit.png",
					color: { red: 255, green: 255, blue: 255},
					alpha: 1
				});
controlsMinimisedTab = Overlays.addOverlay("image", {
					bounds: { x: Window.innerWidth - 35, y: Window.innerHeight/2 - 175, width: 0, height: 0},
					imageURL: "http://cozza13.github.io/overlays/ddao-tab.png",
					color: { red: 255, green: 255, blue: 255},
					alpha: 1
				});
walkSliderX = minSliderX + (walkSpeedIncX * baseFrequency);
walkSpeedSlider = Overlays.addOverlay("image", {
					bounds: { x: walkSliderX, y: backgroundY + 169, width: 25, height: 25},
					imageURL: "http://cozza13.github.io/overlays/ddao-slider-handle.png",
					color: { red: 255, green: 255, blue: 255},
					alpha: 1
				});
hipSwaySliderX = minSliderX + ((hipSwayAmount/HIP_SWAY_RANGE) * sliderRangeX ); // sets range
hipSwaySlider = Overlays.addOverlay("image", {
					bounds: { x: hipSwaySliderX, y: backgroundY + 234, width: 25, height: 25},
					imageURL: "http://cozza13.github.io/overlays/ddao-slider-handle.png",
					color: { red: 255, green: 255, blue: 255},
					alpha: 1
				});
hipBobSliderX = minSliderX + ((hipBobAmount/0.05) * sliderRangeX ); // 0.05 sets range
hipBobSlider = Overlays.addOverlay("image", {
					bounds: { x: hipBobSliderX, y: backgroundY + 298, width: 25, height: 25},
					imageURL: "http://cozza13.github.io/overlays/ddao-slider-handle.png",
					color: { red: 255, green: 255, blue: 255},
					alpha: 1
				});
hipRollSliderX = minSliderX + ((hipRollAmount/15) * sliderRangeX ); // 15 sets range
hipRollSlider = Overlays.addOverlay("image", {
					bounds: { x: hipRollSliderX, y: backgroundY + 363, width: 25, height: 25},
					imageURL: "http://cozza13.github.io/overlays/ddao-slider-handle.png",
					color: { red: 255, green: 255, blue: 255},
					alpha: 1
				});
upperLegPitchSliderX = minSliderX + ((upperLegPitch/UPPER_LEG_PITCH_RANGE) * sliderRangeX );
upperLegPitchSlider = Overlays.addOverlay("image", {
					bounds: { x: upperLegPitchSliderX, y: backgroundY + 428, width: 25, height: 25},
					imageURL: "http://cozza13.github.io/overlays/ddao-slider-handle.png",
					color: { red: 255, green: 255, blue: 255},
					alpha: 1
				});
lowerLegPitchSliderX = minSliderX + ((lowerLegPitch/LOWER_LEG_PITCH_RANGE) * sliderRangeX );
lowerLegPitchSlider = Overlays.addOverlay("image", {
					bounds: { x: lowerLegPitchSliderX, y: backgroundY + 493, width: 25, height: 25},
					imageURL: "http://cozza13.github.io/overlays/ddao-slider-handle.png",
					color: { red: 255, green: 255, blue: 255},
					alpha: 1
				});
upperLegPitchOffsetSliderX = minSliderX + ((upperLegPitchOffset/20) * sliderRangeX ); // 20 sets range
upperLegPitchOffsetSlider = Overlays.addOverlay("image", {
					bounds: { x: upperLegPitchOffsetSliderX, y: backgroundY + 558, width: 25, height: 25},
					imageURL: "http://cozza13.github.io/overlays/ddao-slider-handle.png",
					color: { red: 255, green: 255, blue: 255},
					alpha: 1
				});
lowerLegPitchOffsetSliderX = minSliderX + ((lowerLegPitchOffset/60) * sliderRangeX ); // 60 sets range
lowerLegPitchOffsetSlider = Overlays.addOverlay("image", {
					bounds: { x: lowerLegPitchOffsetSliderX, y: backgroundY + 623, width: 25, height: 25},
					imageURL: "http://cozza13.github.io/overlays/ddao-slider-handle.png",
					color: { red: 255, green: 255, blue: 255},
					alpha: 1
				});
onButton = Overlays.addOverlay("image", {
					bounds: { x: backgroundX+20, y: backgroundY+51, width: 60, height: 47},
					imageURL: "http://cozza13.github.io/overlays/ddao-on-button.png",
					color: { red: 255, green: 255, blue: 255},
					alpha: 1
				});
offButton = Overlays.addOverlay("image", {
					bounds: { x: backgroundX+20, y: backgroundY+51, width: 0, height: 0},
					imageURL: "http://cozza13.github.io/overlays/ddao-off-button.png",
					color: { red: 255, green: 255, blue: 255},
					alpha: 1
				});
configWalkButton = Overlays.addOverlay("image", {
					bounds: { x: backgroundX+83, y: backgroundY+51, width: 60, height: 47},
					imageURL: "http://cozza13.github.io/overlays/ddao-edit-walk-button.png",
					color: { red: 255, green: 255, blue: 255},
					alpha: 1
				});
configWalkButtonSelected = Overlays.addOverlay("image", {
					bounds: { x: backgroundX+83, y: backgroundY+51, width: 0, height: 0},
					imageURL: "http://cozza13.github.io/overlays/ddao-edit-walk-button-selected.png",
					color: { red: 255, green: 255, blue: 255},
					alpha: 1
				});
configStandButton = Overlays.addOverlay("image", {
					bounds: { x: backgroundX+146, y: backgroundY+51, width: 60, height: 47},
					imageURL: "http://cozza13.github.io/overlays/ddao-edit-stand-button.png",
					color: { red: 255, green: 255, blue: 255},
					alpha: 1
				});
configStandButtonSelected = Overlays.addOverlay("image", {
					bounds: { x: backgroundX+146, y: backgroundY+51, width: 0, height: 0},
					imageURL: "http://cozza13.github.io/overlays/ddao-edit-stand-button-selected.png",
					color: { red: 255, green: 255, blue: 255},
					alpha: 1
				});
configFlyingButton = Overlays.addOverlay("image", {
					bounds: { x: backgroundX+209, y: backgroundY+51, width: 60, height: 47},
					imageURL: "http://cozza13.github.io/overlays/ddao-edit-fly-button.png",
					color: { red: 255, green: 255, blue: 255},
					alpha: 1
				});
configFlyingButtonSelected = Overlays.addOverlay("image", {
					bounds: { x: backgroundX+209, y: backgroundY+51, width: 0, height: 0},
					imageURL: "http://cozza13.github.io/overlays/ddao-edit-fly-button-selected.png",
					color: { red: 255, green: 255, blue: 255},
					alpha: 1
				});
hideButton = Overlays.addOverlay("image", {
					bounds: { x: backgroundX+272, y: backgroundY+51, width: 60, height: 47},
					imageURL: "http://cozza13.github.io/overlays/ddao-hide-button.png",
					color: { red: 255, green: 255, blue: 255},
					alpha: 1
				});
hideButtonSelected = Overlays.addOverlay("image", {
					bounds: { x: backgroundX+272, y: backgroundY+51, width: 0, height: 0},
					imageURL: "http://cozza13.github.io/overlays/ddao-hide-button-selected.png",
					color: { red: 255, green: 255, blue: 255},
					alpha: 1
				});

/* show or hide the main dialog. also controls minimised tab visibility */
function hideControllerDialog(hideController) {

	/* slider knobs */
	setWalkControlsVisible(false);

	/* backgrounds */
	var overlayWidth = backgroundWidth;
	var overlayHeight = backgroundHeight;
	if(hideController) {
		overlayWidth = 0;
		overlayHeight = 0;
	}
	Overlays.editOverlay(controlsBackground, { width: overlayWidth, height: overlayHeight } );
	Overlays.editOverlay(controlsBackgroundWalkEdit, { width: 0, height: 0 } );
	Overlays.editOverlay(controlsBackgroundStandEdit, { width: 0, height: 0 } );
	Overlays.editOverlay(controlsBackgroundFlyingEdit, { width: 0, height: 0 } );

	/* buttons */
	overlayWidth = 60;
	overlayHeight = 47;
	if(hideController) {
		overlayWidth = 0;
		overlayHeight = 0;
	}
	if(POWER_ON) {
		Overlays.editOverlay(onButton, { width: overlayWidth, height: overlayHeight } );
	    Overlays.editOverlay(offButton, { width: 0, height: 0 } );
	} else {
		Overlays.editOverlay(onButton, { width: 0, height: 0 } );
	    Overlays.editOverlay(offButton, { width: overlayWidth, height: overlayHeight } );
	}
	Overlays.editOverlay(configWalkButton, { width: overlayWidth, height: overlayHeight } );
	Overlays.editOverlay(configWalkButtonSelected, { width: 0, height: 0 } );
	Overlays.editOverlay(configStandButton, { width: overlayWidth, height: overlayHeight } );
	Overlays.editOverlay(configStandButtonSelected, { width: 0, height: 0 } );
	Overlays.editOverlay(configFlyingButton, { width: overlayWidth, height: overlayHeight } );
	Overlays.editOverlay(configFlyingButtonSelected, { width: 0, height: 0 } );
	Overlays.editOverlay(hideButton, { width: overlayWidth, height: overlayHeight } );
	Overlays.editOverlay(hideButtonSelected, { width: 0, height: 0 } );

	/* minimised bar */
	if(hideController) Overlays.editOverlay(controlsMinimisedTab, { width: 36, height: 351 } );
	else Overlays.editOverlay(controlsMinimisedTab, { width: 0, height: 0 } );
}


/* show or hide the walk slider knobs */
function setWalkControlsVisible(visible) {
	var sliderKnobWidth = 0;
	var sliderKnobHeight = 0;
	if(visible) {
		sliderKnobWidth = 25;
		sliderKnobHeight = 25;
	}
	Overlays.editOverlay(walkSpeedSlider, { bounds: { x: walkSliderX, y: backgroundY + 169, width: sliderKnobWidth, height: sliderKnobHeight }} );
	Overlays.editOverlay(hipSwaySlider, { bounds: { x: hipSwaySliderX, y: backgroundY + 234, width: sliderKnobWidth, height: sliderKnobHeight }} );
	Overlays.editOverlay(hipBobSlider, { bounds: { x: hipBobSliderX, y: backgroundY + 298, width: sliderKnobWidth, height: sliderKnobHeight }} );
	Overlays.editOverlay(hipRollSlider, { bounds: { x: hipRollSliderX, y: backgroundY + 363, width: sliderKnobWidth, height: sliderKnobHeight }} );
	Overlays.editOverlay(upperLegPitchSlider, { bounds: { x: upperLegPitchSliderX, y: backgroundY + 428, width: sliderKnobWidth, height: sliderKnobHeight }} );
	Overlays.editOverlay(lowerLegPitchSlider, { bounds: { x: lowerLegPitchSliderX, y: backgroundY + 493, width: sliderKnobWidth, height: sliderKnobHeight }} );
	Overlays.editOverlay(upperLegPitchOffsetSlider, { bounds: { x: upperLegPitchOffsetSliderX, y: backgroundY + 558, width: sliderKnobWidth, height: sliderKnobHeight }} );
	Overlays.editOverlay(lowerLegPitchOffsetSlider, { bounds: { x: lowerLegPitchOffsetSliderX, y: backgroundY + 623, width: sliderKnobWidth, height: sliderKnobHeight }} );
}
function setBackgroundNeutral() {
	setWalkControlsVisible(false);
	Overlays.editOverlay(controlsBackground, {width: backgroundWidth, height: backgroundHeight } );
	Overlays.editOverlay(controlsBackgroundWalkEdit, { width: 0, height: 0} );
	Overlays.editOverlay(controlsBackgroundStandEdit, {  width: 0, height: 0 } );
	Overlays.editOverlay(controlsBackgroundFlyingEdit, { width: 0, height: 0  } );
}
setWalkControlsVisible(false);



/**************************************/
/* start of animation control section */
/**************************************/

var cumulativeTime = 0.0;
var lastPosition;
var lastOrientation;
var dampToWalkTimer = null;

/* walk */
function walk(deltaTime,velocity) {

		// TODO: increase animation frequency as velocity increases - this would need to set phase value for new wave
		//     - i.e. match to last set of values and continue from there to avoid glitches on frequency changes
		//var velocityAdjuster = 1;

		if(dampToWalkTimer){
			Script.clearTimeout(dampToWalkTimer);
			dampToWalkTimer = null;
		}

		/* generate the sine waves  */
		var primaryOscillation = Math.sin(cumulativeTime * baseFrequency);
		var secondaryOscillation = Math.sin(cumulativeTime * baseFrequency * 2);
		//var halfOscillation = Math.sin(cumulativeTime * baseFrequency * 0.5);

		/* apply hips translation */
		var HipsOffset = {x:primaryOscillation*hipSwayAmount,
						  y:0,
						  z:secondaryOscillation*hipBobAmount};
		var aviOrientation = MyAvatar.orientation;//MyAvatar.headOrientation;//MyAvatar.getJointCombinedRotation("Hips");
		var front = Quat.getFront(aviOrientation);
		var right = Quat.getRight(aviOrientation);
		var up    = Quat.getUp   (aviOrientation);
		var aviFront = Vec3.multiply(front,HipsOffset.y);
		var aviRight = Vec3.multiply(right,HipsOffset.x);
		var aviUp    = Vec3.multiply(up   ,HipsOffset.z);
		var AviTranslationOffset = {x:0,y:0,z:0}; // final value
		AviTranslationOffset = Vec3.sum(AviTranslationOffset, aviFront);
		AviTranslationOffset = Vec3.sum(AviTranslationOffset, aviRight);
		AviTranslationOffset = Vec3.sum(AviTranslationOffset, aviUp);
		MyAvatar.position = {x: MyAvatar.position.x + AviTranslationOffset.x,
							 y: MyAvatar.position.y + AviTranslationOffset.y, // - ((velocity/TAKE_FLIGHT_VELOCITY)*2), // adjust for flying speed
							 z: MyAvatar.position.z + AviTranslationOffset.z };

		// trouble is, the camera moves according to the avi position, so need to negate that
		// but that's hard as we have no control in the default camera mode...
		//Camera.setMode
		//Camera.setPosition({x: Camera.getPosition().x - AviTranslationOffset.x,
		//                     y: Camera.getPosition().y - AviTranslationOffset.y,
		//                     z: Camera.getPosition().z - AviTranslationOffset.z});


		/* apply joint rotations */
		MyAvatar.setJointData("RightUpLeg",  	Quat.fromPitchYawRollDegrees( upperLegPitch * primaryOscillation + upperLegPitchOffset,
																			  UPPER_LEG_YAW * primaryOscillation,
																			 -upperLegRoll  * primaryOscillation));
		MyAvatar.setJointData("LeftUpLeg",   	Quat.fromPitchYawRollDegrees(-upperLegPitch * primaryOscillation + upperLegPitchOffset,
																			  UPPER_LEG_YAW * primaryOscillation,
																			 -upperLegRoll  * primaryOscillation));
		MyAvatar.setJointData("RightLeg",    	Quat.fromPitchYawRollDegrees( lowerLegPitch * (primaryOscillation + 0)- lowerLegPitchOffset, 0.0, 0.0)); // TODO: needs a kick just before fwd peak
		MyAvatar.setJointData("LeftLeg",     	Quat.fromPitchYawRollDegrees(-lowerLegPitch * (primaryOscillation + 0) - lowerLegPitchOffset, 0.0, 0.0));
		MyAvatar.setJointData("RightFoot",   	Quat.fromPitchYawRollDegrees( FEET_PITCH * primaryOscillation - FEET_PITCH_OFFSET, 0.0, 0.0));
		MyAvatar.setJointData("LeftFoot",    	Quat.fromPitchYawRollDegrees(-FEET_PITCH * primaryOscillation - FEET_PITCH_OFFSET, 0.0, 0.0));
		MyAvatar.setJointData("RightToeBase",   Quat.fromPitchYawRollDegrees(-TOE_PITCH * primaryOscillation, 0.0, 0.0));
		MyAvatar.setJointData("LeftToeBase",    Quat.fromPitchYawRollDegrees( TOE_PITCH * primaryOscillation, 0.0, 0.0));
		MyAvatar.setJointData("Hips",        	Quat.fromPitchYawRollDegrees(-HIPS_PITCH * secondaryOscillation + getLeanPitch(velocity),
																			  HIPS_YAW   * primaryOscillation,  //  Yup, that's correct ;-)
																			  hipRollAmount  * primaryOscillation + getLeanRoll(deltaTime,velocity) ));// getLeanRoll is banking (cornering) adjustment
		MyAvatar.setJointData("Spine",       	Quat.fromPitchYawRollDegrees( SPINE_PITCH * secondaryOscillation,
																			  SPINE_YAW   * primaryOscillation,
																			  SPINE_ROLL  * primaryOscillation));
		MyAvatar.setJointData("Spine1",       	Quat.fromPitchYawRollDegrees( SPINE1_PITCH * secondaryOscillation,
																			 -SPINE1_YAW   * primaryOscillation,
																			  spineOneRoll  * primaryOscillation));
		MyAvatar.setJointData("Spine2",       	Quat.fromPitchYawRollDegrees(-SPINE2_PITCH * secondaryOscillation,
																			  SPINE2_YAW   * primaryOscillation,
																			 -spineTwoRoll  * primaryOscillation));
		MyAvatar.setJointData("RightShoulder",	Quat.fromPitchYawRollDegrees(-SHOULDERS_PITCH * secondaryOscillation + SHOULDERS_PITCH_OFFSET,
																			  SHOULDERS_ROLL   * primaryOscillation,
																			 -SHOULDERS_YAW  * primaryOscillation + SHOULDERS_YAW_OFFSET));
		MyAvatar.setJointData("LeftShoulder",	Quat.fromPitchYawRollDegrees(-SHOULDERS_PITCH * secondaryOscillation + SHOULDERS_PITCH_OFFSET,
																			  SHOULDERS_ROLL  * primaryOscillation,
																			 -SHOULDERS_YAW   * primaryOscillation - SHOULDERS_YAW_OFFSET));
		MyAvatar.setJointData("RightArm",	    Quat.fromPitchYawRollDegrees(-ARMS_FLAP  * primaryOscillation + ARMS_DOWN,
																		      ARMS_TWIST * primaryOscillation,
																		      ARMS_SWING * primaryOscillation - ARMS_SWING_OFFSET));
		MyAvatar.setJointData("LeftArm",	    Quat.fromPitchYawRollDegrees(-ARMS_FLAP  * primaryOscillation + ARMS_DOWN,
																		      ARMS_TWIST * primaryOscillation,
																		      ARMS_SWING * primaryOscillation + ARMS_SWING_OFFSET));
		MyAvatar.setJointData("RightForeArm",	Quat.fromPitchYawRollDegrees( 0,0,-ELBOWS_ANGLE));
		MyAvatar.setJointData("LeftForeArm",	Quat.fromPitchYawRollDegrees( 0,0,ELBOWS_ANGLE));
}
/* stand */
function stand() {
    var jointList = MyAvatar.getJointNames();
    for (var i = 0; i < jointList.length; i++) {
		if(jointList[i]==="RightArm") MyAvatar.setJointData("RightArm", Quat.fromPitchYawRollDegrees(ARMS_DOWN+15,5,0));
		else if(jointList[i]==="LeftArm") MyAvatar.setJointData("LeftArm",  Quat.fromPitchYawRollDegrees(ARMS_DOWN+15,-5,0));
		else if(jointList[i]==="RightForeArm") MyAvatar.setJointData("RightForeArm",	Quat.fromPitchYawRollDegrees(0,0,-ELBOWS_ANGLE));
		else if(jointList[i]==="LeftForeArm") MyAvatar.setJointData("LeftForeArm",	Quat.fromPitchYawRollDegrees(0,0,ELBOWS_ANGLE));
		else if(jointList[i]==="RightShoulder") MyAvatar.setJointData("RightShoulder",	Quat.fromPitchYawRollDegrees(SHOULDERS_PITCH,0,0));
		else if(jointList[i]==="LeftShoulder") MyAvatar.setJointData("LeftShoulder",	Quat.fromPitchYawRollDegrees(SHOULDERS_PITCH,0,0));
		else MyAvatar.clearJointData(jointList[i]);
	}
}
/* fly */
function fly(deltaTime,velocity) {
    var jointList = MyAvatar.getJointNames();
    for (var i = 0; i < jointList.length; i++) {
		if(jointList[i]==="Hips") MyAvatar.setJointData("Hips", Quat.fromPitchYawRollDegrees(FLYING_HIPS_PITCH,0,getLeanRoll(deltaTime,velocity)));
		else MyAvatar.clearJointData(jointList[i]);
	}
}

/* the faster we go, the further we lean forward this calcualtes the angle */
function getLeanPitch(velocity) {
	if(velocity>TAKE_FLIGHT_VELOCITY) velocity=TAKE_FLIGHT_VELOCITY;
	var leanAngle = 20 * (velocity/TAKE_FLIGHT_VELOCITY); // 20 represents max hips pitch angle in degrees
	return leanAngle;
}

/* calcualte the angle with which to bank into corners when turning */
var angularVelocities = [0,0,0,0,0,0,0,0,0,0]; // smooth out by taking averages
function getLeanRoll(deltaTime,velocity) {
	// get current orientations as vec3 objects
	var currentOrientationVec3 = Quat.safeEulerAngles(MyAvatar.orientation);
	var lastOrientationVec3 = Quat.safeEulerAngles(lastOrientation);
	var deltaYaw = lastOrientationVec3.y-currentOrientationVec3.y;
	var angularVelocity = deltaYaw / deltaTime;
	if(angularVelocity>70) angularVelocity = 70;
	if(angularVelocity<-70) angularVelocity = -70;
	angularVelocities.push(angularVelocity);
	angularVelocities.shift(); // FIFO
	var totalAngularVelocities = 0;
	for(ea in angularVelocities) totalAngularVelocities += angularVelocities[ea];
	var averageAngularVelocity = totalAngularVelocities / angularVelocities.length;
	var velocityAdjuster = Math.sqrt(velocity/TERMINAL_VELOCITY); // put a curve on our linear velocity modifier
	if(velocityAdjuster>1) velocityAdjuster = 1;
	if(velocityAdjuster<0) velocityAdjuster = 0;
	var leanRoll = velocityAdjuster * (averageAngularVelocity/70) * BANKING_MAX_ANGLE;
	//print('delta time is '+deltaTime.toFixed(4)+' and delta yaw is '+deltaYaw+' angular velocity is '+angularVelocity+' and average angular velocity is '+averageAngularVelocity+' and velocityAdjuster is '+velocityAdjuster+' and final value is '+leanRoll);
	//print('array: '+angularVelocities.toString());
	lastOrientation = MyAvatar.orientation;
	return leanRoll;
}

/* reset all the joint rotations to zero */
function resetJoints() {

    var jointList = MyAvatar.getJointNames();
    for (var i = 0; i < jointList.length; i++) {
		MyAvatar.clearJointData(jointList[i]);
	}
}





/********/
/* Core */
/********/

Script.update.connect(function(deltaTime) {
	if(POWER_ON) {
		cumulativeTime += deltaTime;

		/* TODO: keep level on the Z plane */
		var aviPosition = MyAvatar.position;
		if(!lastPosition) lastPosition = aviPosition; // first run through
		aviPosition.y = lastPosition.y;
		var deltaPos = Vec3.distance(aviPosition,lastPosition);
		var velocity = deltaPos / deltaTime;

		/* first test for config states */
		if(STATUS===CONFIG_WALK) walk(deltaTime,velocity);
		else if(STATUS===CONFIG_STAND) stand();
		/* else chose animation based on velocity */
		else if(velocity<0.1) { // switching from walk to stand needs a cooling off period, as velocity is sometimes reported incorrectly as zero.
			//print('low velocity reported - velocity is '+velocity+' and deltaTime is '+deltaTime+' and deltaPos '+deltaPos);
			if(!dampToWalkTimer&&STATUS===WALKING) {
				STATUS=STANDING;
				dampToWalkTimer = Script.setTimeout(stand,100);
			}
		}
		else if(velocity<TAKE_FLIGHT_VELOCITY) {
			STATUS=WALKING;
			walk(deltaTime,velocity);
		}
		/* TODO: */
		else {
			STATUS=FLYING;
			fly(deltaTime,velocity);
		}
	}
	// save so can work out avi velocity for next frame
	lastPosition = MyAvatar.position;
});




/**************************/
/* mouse / slider control */
/**************************/
var movingWalkSpeedSlider = false;
var movingHipSwaySlider = false;
var movingHipBobSlider = false;
var movingHipRollSlider = false;
var movingUpperLegPitchSlider = false;
var movingLowerLegPitchSlider = false;
var movingUpperLegPitchOffsetSlider = false;
var movingLowerLegPitchOffsetSlider = false;

function mouseMoveEvent(event) {
	if(POWER_ON) {
		if(movingWalkSpeedSlider) {
			var walkingThumbClickOffsetX = event.x - minSliderX;
			baseFrequency = parseInt(walkingThumbClickOffsetX / walkSpeedIncX);
			walkSliderX = minSliderX + (walkSpeedIncX * baseFrequency);
			if (walkSliderX < minSliderX) walkSliderX = minSliderX;
			if (walkSliderX > maxSliderX) walkSliderX = maxSliderX;
			Overlays.editOverlay(walkSpeedSlider, { x: walkSliderX } );
		}
		else if(movingHipSwaySlider) {
			var hipSwayThumbClickOffsetX = event.x - minSliderX;
			hipSwayAmount = (hipSwayThumbClickOffsetX/sliderRangeX) * HIP_SWAY_RANGE; // sets range
			if(hipSwayAmount<0) hipSwayAmount = 0;
			hipSwaySliderX = minSliderX + hipSwayThumbClickOffsetX;
			if (hipSwaySliderX < minSliderX) hipSwaySliderX = minSliderX;
			if (hipSwaySliderX > maxSliderX) hipSwaySliderX = maxSliderX;
			Overlays.editOverlay(hipSwaySlider, { x: hipSwaySliderX } );
		}
		else if(movingHipBobSlider) {
			var hipBobThumbClickOffsetX = event.x - minSliderX;
			hipBobAmount = (hipBobThumbClickOffsetX/sliderRangeX) * 0.05; // sets range
			if(hipBobAmount<0) hipBobAmount = 0;
			hipBobSliderX = minSliderX + hipBobThumbClickOffsetX;
			if (hipBobSliderX < minSliderX) hipBobSliderX = minSliderX;
			if (hipBobSliderX > maxSliderX) hipBobSliderX = maxSliderX;
			Overlays.editOverlay(hipBobSlider, { x: hipBobSliderX } );
		}
		else if(movingHipRollSlider) {
			var hipRollThumbClickOffsetX = event.x - minSliderX;
			hipRollAmount = (hipRollThumbClickOffsetX/sliderRangeX) * 15; // sets range
			spineOneRoll = (hipRollThumbClickOffsetX/sliderRangeX) * 8;
			spineTwoRoll = (hipRollThumbClickOffsetX/sliderRangeX) * 20;
			upperLegRoll = (hipRollThumbClickOffsetX/sliderRangeX) * 25;
			hipRollSliderX = minSliderX + hipRollThumbClickOffsetX;
			if(hipRollAmount<0) hipRollAmount = 0;
			if(hipRollSliderX < minSliderX) hipRollSliderX = minSliderX;
			if(hipRollSliderX > maxSliderX) hipRollSliderX = maxSliderX;
			Overlays.editOverlay(hipRollSlider, { x: hipRollSliderX } );
		}
		else if(movingUpperLegPitchSlider) {
			var upperLegPitchThumbClickOffsetX = event.x - minSliderX;
			upperLegPitch = (upperLegPitchThumbClickOffsetX/sliderRangeX) * UPPER_LEG_PITCH_RANGE; // sets range
			if(upperLegPitch<0) upperLegPitch = 0;
			upperLegPitchSliderX = minSliderX + upperLegPitchThumbClickOffsetX;
			if (upperLegPitchSliderX < minSliderX) upperLegPitchSliderX = minSliderX;
			if (upperLegPitchSliderX > maxSliderX) upperLegPitchSliderX = maxSliderX;
			Overlays.editOverlay(upperLegPitchSlider, { x: upperLegPitchSliderX } );
		}
		else if(movingLowerLegPitchSlider) {
			var lowerLegPitchThumbClickOffsetX = event.x - minSliderX;
			lowerLegPitch = (lowerLegPitchThumbClickOffsetX/sliderRangeX) * LOWER_LEG_PITCH_RANGE; // sets range
			if(lowerLegPitch<0) lowerLegPitch = 0;
			lowerLegPitchSliderX = minSliderX + lowerLegPitchThumbClickOffsetX;
			if (lowerLegPitchSliderX < minSliderX) lowerLegPitchSliderX = minSliderX;
			if (lowerLegPitchSliderX > maxSliderX) lowerLegPitchSliderX = maxSliderX;
			Overlays.editOverlay(lowerLegPitchSlider, { x: lowerLegPitchSliderX } );
		}
		else if(movingUpperLegPitchOffsetSlider) {
			var upperLegPitchOffsetThumbClickOffsetX = event.x - minSliderX;
			upperLegPitchOffset = (upperLegPitchOffsetThumbClickOffsetX/sliderRangeX) * 20; // sets range
			if(upperLegPitchOffset<0) upperLegPitchOffset = 0;
			upperLegPitchOffsetSliderX = minSliderX + upperLegPitchOffsetThumbClickOffsetX;
			if (upperLegPitchOffsetSliderX < minSliderX) upperLegPitchOffsetSliderX = minSliderX;
			if (upperLegPitchOffsetSliderX > maxSliderX) upperLegPitchOffsetSliderX = maxSliderX;
			Overlays.editOverlay(upperLegPitchOffsetSlider, { x: upperLegPitchOffsetSliderX } );
		}
		else if(movingLowerLegPitchOffsetSlider) {
			var lowerLegPitchOffsetThumbClickOffsetX = event.x - minSliderX;
			lowerLegPitchOffset = (lowerLegPitchOffsetThumbClickOffsetX/sliderRangeX) * 60; // sets range
			if(lowerLegPitchOffset<0) lowerLegPitchOffset = 0;
			lowerLegPitchOffsetSliderX = minSliderX + lowerLegPitchOffsetThumbClickOffsetX;
			if (lowerLegPitchOffsetSliderX < minSliderX) lowerLegPitchOffsetSliderX = minSliderX;
			if (lowerLegPitchOffsetSliderX > maxSliderX) lowerLegPitchOffsetSliderX = maxSliderX;
			Overlays.editOverlay(lowerLegPitchOffsetSlider, { x: lowerLegPitchOffsetSliderX } );
		}
	}
}
function mousePressEvent(event) {

	if(clickedOverlay === hideButton){
		Overlays.editOverlay(hideButton, { width: 0, height: 0 } );
		Overlays.editOverlay(hideButtonSelected, { width: 60, height: 47 } );
	}
	else if(clickedOverlay === controlsMinimisedTab) {
		// TODO: user feedback for tab click
	}
	else if(POWER_ON) {
		var clickedOverlay = Overlays.getOverlayAtPoint({x: event.x, y: event.y});
		if(clickedOverlay === walkSpeedSlider) movingWalkSpeedSlider = true;
		else if(clickedOverlay === hipSwaySlider) movingHipSwaySlider = true;
		else if(clickedOverlay === hipBobSlider) movingHipBobSlider = true;
		else if(clickedOverlay === hipRollSlider) movingHipRollSlider = true;
		else if(clickedOverlay === upperLegPitchSlider) movingUpperLegPitchSlider = true;
		else if(clickedOverlay === lowerLegPitchSlider) movingLowerLegPitchSlider = true;
		else if(clickedOverlay === upperLegPitchOffsetSlider) movingUpperLegPitchOffsetSlider = true;
		else if(clickedOverlay === lowerLegPitchOffsetSlider) movingLowerLegPitchOffsetSlider = true;
	}
}
function mouseReleaseEvent(event) {

	var clickedOverlay = Overlays.getOverlayAtPoint({x: event.x, y: event.y});

	if(clickedOverlay === offButton) {
		POWER_ON = true;
		setBackgroundNeutral();
		Overlays.editOverlay(offButton, {width: 0, height: 0} );
		Overlays.editOverlay(onButton, {width: 60, height: 47 } );
		stand();
	}
	else if(clickedOverlay === hideButton){
		hideControllerDialog(true);
	}
	else if(clickedOverlay === controlsMinimisedTab) {
		hideControllerDialog(false);
	}
	else if(POWER_ON) {

		if(clickedOverlay === onButton) {
			POWER_ON = false;
			setBackgroundNeutral();
			Overlays.editOverlay(offButton, {width: 60, height: 47 } );
			Overlays.editOverlay(onButton, {width: 0, height: 0} );
			resetJoints();
		}
		else if(clickedOverlay === configWalkButton) {
			if(STATUS===CONFIG_STAND) {
				Overlays.editOverlay(configStandButton, { width: 60, height: 47 } );
				Overlays.editOverlay(configStandButtonSelected, { width: 0, height: 0  } );
			}
			if(STATUS===CONFIG_FLYING) {
				Overlays.editOverlay(configFlyingButton, { width: 60, height: 47 } );
				Overlays.editOverlay(configFlyingButtonSelected, { width: 0, height: 0  } );
			}
			STATUS = CONFIG_WALK;

			/* set backgrounds */
			Overlays.editOverlay(controlsBackground, {  width: 0, height: 0 } );
			Overlays.editOverlay(controlsBackgroundWalkEdit, { width: backgroundWidth, height: backgroundHeight } );
			Overlays.editOverlay(controlsBackgroundStandEdit, {  width: 0, height: 0  } );
			Overlays.editOverlay(controlsBackgroundFlyingEdit, { width: 0, height: 0  } );

			Overlays.editOverlay(configWalkButton, {  width: 0, height: 0 });
			Overlays.editOverlay(configWalkButtonSelected, { width: 60, height: 47  } );
			setWalkControlsVisible(true);
			walk(1,0);
		}
		else if(clickedOverlay === configWalkButtonSelected) {
			STATUS = STANDING;
			setBackgroundNeutral();
			Overlays.editOverlay(configWalkButton, {  width: 60, height: 47  } );
			Overlays.editOverlay(configWalkButtonSelected, {  width: 0, height: 0 } );
			stand();
		}
		else if(clickedOverlay === configStandButton) {
			if(STATUS===CONFIG_WALK) {
				Overlays.editOverlay(configWalkButton, { width: 60, height: 47 } );
				Overlays.editOverlay(configWalkButtonSelected, { width: 0, height: 0 }  );
			}
			if(STATUS===CONFIG_FLYING) {
				Overlays.editOverlay(configFlyingButton, { width: 60, height: 47 } );
				Overlays.editOverlay(configFlyingButtonSelected, { width: 0, height: 0  } );
			}
			STATUS = CONFIG_STAND;

			/* set backgrounds */
			Overlays.editOverlay(controlsBackground, { width: 0, height: 0  } );
			Overlays.editOverlay(controlsBackgroundWalkEdit, { width: 0, height: 0} );
			Overlays.editOverlay(controlsBackgroundStandEdit, {  width: backgroundWidth, height: backgroundHeight  } );
			Overlays.editOverlay(controlsBackgroundFlyingEdit, { width: 0, height: 0  } );

			Overlays.editOverlay(configStandButton, { width: 0, height: 0 } );
			Overlays.editOverlay(configStandButtonSelected, { width: 60, height: 47  } );
			setWalkControlsVisible(false);
			stand();
		}
		else if(clickedOverlay === configStandButtonSelected) {
			STATUS = STANDING;
			setBackgroundNeutral();
			Overlays.editOverlay(configStandButton, { width: 60, height: 47 });
			Overlays.editOverlay(configStandButtonSelected, { width: 0, height: 0 } );
			stand();
		}
		else if(clickedOverlay === configFlyingButton) {
			if(STATUS===CONFIG_WALK) {
				Overlays.editOverlay(configWalkButton, { width: 60, height: 47 } );
				Overlays.editOverlay(configWalkButtonSelected, { width: 0, height: 0 }  );
			}
			if(STATUS===CONFIG_STAND) {
				Overlays.editOverlay(configStandButton, { width: 60, height: 47 } );
				Overlays.editOverlay(configStandButtonSelected, { width: 0, height: 0  } );
			}
			STATUS = CONFIG_FLYING;

			/* set backgrounds */
			Overlays.editOverlay(controlsBackground, { width: 0, height: 0  } );
			Overlays.editOverlay(controlsBackgroundWalkEdit, { width: 0, height: 0} );
			Overlays.editOverlay(controlsBackgroundStandEdit, {  width: 0, height: 0  } );
			Overlays.editOverlay(controlsBackgroundFlyingEdit, { width: backgroundWidth, height: backgroundHeight } );

			Overlays.editOverlay(configFlyingButton, { width: 0, height: 0 } );
			Overlays.editOverlay(configFlyingButtonSelected, { width: 60, height: 47 } );
			setWalkControlsVisible(false);
			fly(1,0);
		}
		else if(clickedOverlay === configFlyingButtonSelected) {
			STATUS = STANDING;
			setBackgroundNeutral();
			Overlays.editOverlay(configFlyingButton, { width: 60, height: 47 } );
			Overlays.editOverlay(configFlyingButtonSelected, { width: 0, height: 0 } );
			stand();
		}
		else if(movingWalkSpeedSlider) movingWalkSpeedSlider = false;
		else if(movingHipSwaySlider) movingHipSwaySlider = false;
		else if(movingHipBobSlider) movingHipBobSlider = false;
		else if(movingHipRollSlider) movingHipRollSlider = false;
		else if(movingUpperLegPitchSlider) movingUpperLegPitchSlider = false;
		else if(movingLowerLegPitchSlider) movingLowerLegPitchSlider = false;
		else if(movingUpperLegPitchOffsetSlider) movingUpperLegPitchOffsetSlider = false;
		else if(movingLowerLegPitchOffsetSlider) movingLowerLegPitchOffsetSlider = false;
	}
}
Controller.mouseMoveEvent.connect(mouseMoveEvent);
Controller.mousePressEvent.connect(mousePressEvent);
Controller.mouseReleaseEvent.connect(mouseReleaseEvent);


/* Script ending */
Script.scriptEnding.connect(function() {

	/* remove the overlays */
	Overlays.deleteOverlay(controlsBackground);
	Overlays.deleteOverlay(controlsBackgroundWalkEdit);
	Overlays.deleteOverlay(controlsBackgroundStandEdit);
	Overlays.deleteOverlay(controlsBackgroundFlyingEdit);
	Overlays.deleteOverlay(controlsMinimisedTab);
	Overlays.deleteOverlay(walkSpeedSlider);
	Overlays.deleteOverlay(hipSwaySlider);
	Overlays.deleteOverlay(hipBobSlider);
	Overlays.deleteOverlay(hipRollSlider);
	Overlays.deleteOverlay(upperLegPitchSlider);
	Overlays.deleteOverlay(lowerLegPitchSlider);
	Overlays.deleteOverlay(upperLegPitchOffsetSlider);
	Overlays.deleteOverlay(lowerLegPitchOffsetSlider);
	Overlays.deleteOverlay(onButton);
	Overlays.deleteOverlay(offButton);
	Overlays.deleteOverlay(configWalkButton);
	Overlays.deleteOverlay(configWalkButtonSelected);
	Overlays.deleteOverlay(configStandButton);
	Overlays.deleteOverlay(configStandButtonSelected);
	Overlays.deleteOverlay(configFlyingButton);
	Overlays.deleteOverlay(configFlyingButtonSelected);
	Overlays.deleteOverlay(hideButton);
	Overlays.deleteOverlay(hideButtonSelected);

	resetJoints();
});