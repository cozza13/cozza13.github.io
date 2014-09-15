//
//  female tough walk js
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
FemaleToughWalk = function() {
    this.animation =
{
   "name":"FemaleToughWalk",
   "settings":{
      "baseFrequency":300,
      "flyingHipsPitch":60,
      "takeFlightVelocity":40,
      "maxBankingAngle":40
   },
   "calibration": {
	   "strideLengthForwards":1.9314,
	   "strideLengthBackwards":0.5022
   },
   "adjusters":{
      "legsSeparation":{
         "strength":-0.021698113207547165,
         "separationAngle":50
      },
      "stride":{
         "strength":0,
         "upperLegsPitch":30,
         "lowerLegsPitch":15,
         "upperLegsPitchOffset":0.2,
         "lowerLegsPitchOffset":1.5
      }
   },
   "joints":[
      {
         "name":"hips",
         "pitch":1.6037735849056605,
         "yaw":5.566037735849057,
         "roll":5.754716981132075,
         "pitchPhase":180,
         "yawPhase":-79.47169811320755,
         "rollPhase":180,
         "pitchOffset":2.9245283018867916,
         "yawOffset":0,
         "rollOffset":0,
         "thrust":0.005,
         "bob":0.01,
         "sway":0.002679245283018868,
         "thrustPhase":-160,
         "bobPhase":0,
         "swayPhase":-90,
         "thrustOffset":0,
         "bobOffset":0,
         "swayOffset":0
      },
      {
         "name":"upperLegs",
         "pitch":24.79245283018868,
         "yaw":0,
         "roll":6.471698113207546,
         "pitchPhase":-90,
         "yawPhase":90,
         "rollPhase":-180,
         "pitchOffset":11.094339622641506,
         "yawOffset":0.37735849056603765,
         "rollOffset":-0.07547169811320753
      },
      {
         "name":"lowerLegs",
         "pitch":32.94339622641509,
         "yaw":0,
         "roll":0,
         "pitchPhase":101.20754716981133,
         "yawPhase":180,
         "rollPhase":90,
         "pitchOffset":-32.943396226415096,
         "yawOffset":0,
         "rollOffset":0
      },
      {
         "name":"feet",
         "pitch":25.358490566037737,
         "yaw":0,
         "roll":0,
         "pitchPhase":-21.056603773584897,
         "yawPhase":90,
         "rollPhase":0,
         "pitchOffset":-4.754716981132074,
         "yawOffset":6.41509433962264,
         "rollOffset":-1.5849056603773581
      },
      {
         "name":"toes",
         "pitch":20.37735849056604,
         "yaw":0,
         "roll":0,
         "pitchPhase":-76.75471698113208,
         "yawPhase":0,
         "rollPhase":0,
         "pitchOffset":27.509433962264144,
         "yawOffset":0,
         "rollOffset":0
      },
      {
         "name":"spine",
         "pitch":1.6603774,
         "yaw":0,
         "roll":7.094339622641509,
         "pitchPhase":0,
         "yawPhase":38.71698113207546,
         "rollPhase":15.622641509433947,
         "pitchOffset":-0.3396226415094339,
         "yawOffset":0,
         "rollOffset":0
      },
      {
         "name":"spine1",
         "pitch":0.9056604,
         "yaw":0,
         "roll":0,
         "pitchPhase":0,
         "yawPhase":-33.28301886792451,
         "rollPhase":0,
         "pitchOffset":7.132075471698112,
         "yawOffset":0,
         "rollOffset":0
      },
      {
         "name":"spine2",
         "pitch":0.9056604,
         "yaw":3.7735849056603774,
         "roll":0,
         "pitchPhase":0,
         "yawPhase":29.207547169811306,
         "rollPhase":0,
         "pitchOffset":0,
         "yawOffset":0,
         "rollOffset":0
      },
      {
         "name":"shoulders",
         "pitch":0,
         "yaw":0,
         "roll":0,
         "pitchPhase":0,
         "yawPhase":180,
         "rollPhase":180,
         "pitchOffset":-2.9433962264150937,
         "yawOffset":-16.528301886792455,
         "rollOffset":-22.867924528301888
      },
      {
         "name":"upperArms",
         "pitch":0,
         "yaw":11.547169811320755,
         "roll":0,
         "pitchPhase":-90,
         "yawPhase":52.30188679245282,
         "rollPhase":-90,
         "pitchOffset":77.77358490566039,
         "yawOffset":10.52830188679245,
         "rollOffset":7.811320754716979
      },
      {
         "name":"lowerArms",
         "pitch":0,
         "yaw":0,
         "roll":27.169811320754718,
         "pitchPhase":-90,
         "yawPhase":90,
         "rollPhase":-83.54716981132076,
         "pitchOffset":0,
         "yawOffset":0,
         "rollOffset":-14.603773584905657
      },
      {
         "name":"hands",
         "pitch":0,
         "yaw":0,
         "roll":12.90566037735849,
         "pitchPhase":0,
         "yawPhase":-15.622641509433947,
         "rollPhase":-180,
         "pitchOffset":0,
         "yawOffset":0,
         "rollOffset":0.2264150943396226
      },
      {
         "name":"head",
         "pitch":0.1509433962264151,
         "yaw":7.396226415094339,
         "roll":2.2641509433962264,
         "pitchPhase":156.90566037735852,
         "yawPhase":137.8867924528302,
         "rollPhase":-68.60377358490567,
         "pitchOffset":-2.377358490566037,
         "yawOffset":0,
         "rollOffset":0
      }
   ]
}
;
    this.loadAnimation = function(){return this.animation;};
};