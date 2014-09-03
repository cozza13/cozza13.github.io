//
//  female running js
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
FemaleRun = function() {
    this.animation =
{
   "name":"FemaleRun",
   "settings":{
      "baseFrequency":442,
      "flyingHipsPitch":60,
      "takeFlightVelocity":40,
      "maxBankingAngle":40
   },
   "adjusters":{
      "legsSeparation":{
         "strength":-0.0481132075471698,
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
         "roll":5.754716981132075,
         "pitchPhase":2.0377358490566166,
         "yawPhase":41.43396226415092,
         "rollPhase":180,
         "pitchOffset":-6.320754716981133,
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
         "pitch":31.92452830188679,
         "yaw":0,
         "roll":6.471698113207546,
         "pitchPhase":-90,
         "yawPhase":90,
         "rollPhase":-180,
         "pitchOffset":15.169811320754715,
         "yawOffset":-1.7358490566037732,
         "rollOffset":-0.07547169811320753
      },
      {
         "name":"lowerLegs",
         "pitch":52.30188679245283,
         "yaw":0,
         "roll":0,
         "pitchPhase":50.943396226415075,
         "yawPhase":180,
         "rollPhase":90,
         "pitchOffset":-41.77358490566038,
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
         "pitchOffset":-7.0188679245283,
         "yawOffset":6.41509433962264,
         "rollOffset":-1.5849056603773581
      },
      {
         "name":"toes",
         "pitch":18.339622641509436,
         "yaw":0,
         "roll":0,
         "pitchPhase":-75.39622641509435,
         "yawPhase":0,
         "rollPhase":0,
         "pitchOffset":26.830189,
         "yawOffset":0,
         "rollOffset":0
      },
      {
         "name":"spine",
         "pitch":1.6603774,
         "yaw":8.150943396226415,
         "roll":7.094339622641509,
         "pitchPhase":-180,
         "yawPhase":38.71698113207546,
         "rollPhase":15.622641509433947,
         "pitchOffset":-0.3396226415094339,
         "yawOffset":0,
         "rollOffset":0
      },
      {
         "name":"spine1",
         "pitch":0.9056604,
         "yaw":7.094339622641509,
         "roll":0,
         "pitchPhase":0,
         "yawPhase":38.71698113207546,
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
         "pitchOffset":2.4905660377358485,
         "yawOffset":-4.301886792452829,
         "rollOffset":-16.528301886792455
      },
      {
         "name":"upperArms",
         "pitch":0,
         "yaw":29.886792452830186,
         "roll":0,
         "pitchPhase":2.0377358490566166,
         "yawPhase":52.30188679245282,
         "rollPhase":-90,
         "pitchOffset":62.83018867924529,
         "yawOffset":24.113207547169807,
         "rollOffset":28.188679245283012
      },
      {
         "name":"lowerArms",
         "pitch":0,
         "yaw":0,
         "roll":21.735849056603772,
         "pitchPhase":-90,
         "yawPhase":90,
         "rollPhase":-83.54716981132076,
         "pitchOffset":9.849056603773583,
         "yawOffset":13.245283018867921,
         "rollOffset":-86.60377358490567
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
         "pitch":3.0188679245283017,
         "yaw":8,
         "roll":0,
         "pitchPhase":-121.58490566037736,
         "yawPhase":-147.39622641509433,
         "rollPhase":106.64151,
         "pitchOffset":-8.490566037735848,
         "yawOffset":0,
         "rollOffset":0
      }
   ]
}
;
    this.loadAnimation = function(){return this.animation;};
};