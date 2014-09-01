//
//  sexy-walk js
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
MalePowerWalk = function() {
    this.animation =
{
   "name":"MalePowerWalk",
   "settings":{
      "baseFrequency":336.7811320754717,
      "flyingHipsPitch":60,
      "takeFlightVelocity":40,
      "maxBankingAngle":40
   },
   "adjusters":{
      "legsSeparation":{
         "strength":0.01792452830188679,
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
         "yaw":4.811320754716982,
         "roll":1.0377358490566038,
         "pitchPhase":101.20754716981133,
         "yawPhase":41.43396226415092,
         "rollPhase":180,
         "pitchOffset":-3.113207547169811,
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
         "pitch":20.37735849056604,
         "yaw":0,
         "roll":0,
         "pitchPhase":-90,
         "yawPhase":90,
         "rollPhase":-180,
         "pitchOffset":15.169811320754715,
         "yawOffset":0.2264150943396226,
         "rollOffset":-1.7358490566037732
      },
      {
         "name":"lowerLegs",
         "pitch":42.45283018867924,
         "yaw":0,
         "roll":0,
         "pitchPhase":50.943396226415075,
         "yawPhase":180,
         "rollPhase":90,
         "pitchOffset":-33.62264150943396,
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
         "pitchOffset":3.849056603773584,
         "yawOffset":6.41509433962264,
         "rollOffset":-1.5849056603773581
      },
      {
         "name":"toes",
         "pitch":22.415094,
         "yaw":0,
         "roll":0,
         "pitchPhase":-95.77358490566037,
         "yawPhase":0,
         "rollPhase":0,
         "pitchOffset":26.830189,
         "yawOffset":0,
         "rollOffset":0
      },
      {
         "name":"spine",
         "pitch":0,
         "yaw":0,
         "roll":0.45283018867924524,
         "pitchPhase":-78.11320754716981,
         "yawPhase":38.71698113207546,
         "rollPhase":15.622641509433947,
         "pitchOffset":1.0188679245283017,
         "yawOffset":0,
         "rollOffset":0
      },
      {
         "name":"spine1",
         "pitch":0,
         "yaw":0,
         "roll":0,
         "pitchPhase":102.56603773584908,
         "yawPhase":38.71698113207546,
         "rollPhase":0,
         "pitchOffset":8.490566037735848,
         "yawOffset":0,
         "rollOffset":0
      },
      {
         "name":"spine2",
         "pitch":0.5283018867924528,
         "yaw":4.226415094339623,
         "roll":0,
         "pitchPhase":30.56603773584905,
         "yawPhase":-180,
         "rollPhase":0,
         "pitchOffset":15.283018867924525,
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
         "pitchOffset":9.735849056603772,
         "yawOffset":3.849056603773584,
         "rollOffset":-27.849056603773587
      },
      {
         "name":"upperArms",
         "pitch":0,
         "yaw":11.547169811320755,
         "roll":0,
         "pitchPhase":-90,
         "yawPhase":52.30188679245282,
         "rollPhase":-90,
         "pitchOffset":56.03773584905661,
         "yawOffset":24.792452830188672,
         "rollOffset":26.83018867924528
      },
      {
         "name":"lowerArms",
         "pitch":0,
         "yaw":0,
         "roll":16.30188679245283,
         "pitchPhase":-90,
         "yawPhase":90,
         "rollPhase":-83.54716981132076,
         "pitchOffset":15.283018867924525,
         "yawOffset":-7.811320754716979,
         "rollOffset":-8.490566037735848
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
         "rollOffset":-2.7924528301886786
      },
      {
         "name":"head",
         "pitch":2.5660377358490565,
         "yaw":0,
         "roll":1.0566037735849056,
         "pitchPhase":94.41509433962267,
         "yawPhase":-147.39622641509433,
         "rollPhase":121.58490566037739,
         "pitchOffset":3.7358490566037728,
         "yawOffset":0,
         "rollOffset":0
      }
   ]
}
;
       this.loadAnimation = function(){return this.animation;};
};