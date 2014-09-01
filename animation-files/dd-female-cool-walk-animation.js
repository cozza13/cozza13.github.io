//
//  female cool walk js
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
FemaleCoolWalk = function() {
    this.animation =
{
   "name":"FemaleCoolWalk",
   "settings":{
      "baseFrequency":270,
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
         "roll":13.20754716981132,
         "pitchPhase":180,
         "yawPhase":41.43396226415092,
         "rollPhase":180,
         "pitchOffset":5.377358490566037,
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
         "roll":13.075471698113207,
         "pitchPhase":-90,
         "yawPhase":90,
         "rollPhase":-180,
         "pitchOffset":11.094339622641506,
         "yawOffset":-3.245283018867924,
         "rollOffset":0
      },
      {
         "name":"lowerLegs",
         "pitch":32.94339622641509,
         "yaw":0,
         "roll":0,
         "pitchPhase":50.943396226415075,
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
         "pitchOffset":3.849056603773584,
         "yawOffset":6.41509433962264,
         "rollOffset":-1.5849056603773581
      },
      {
         "name":"toes",
         "pitch":22.415094,
         "yaw":0,
         "roll":0,
         "pitchPhase":-78.11320754716981,
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
         "roll":12.679245283018867,
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
         "yaw":2.7169812,
         "roll":8.679245283018869,
         "pitchPhase":0,
         "yawPhase":38.71698113207546,
         "rollPhase":64.52830188679243,
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
         "pitchOffset":62.83018867924529,
         "yawOffset":15.962264150943392,
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
         "pitchOffset":0,
         "yawOffset":0,
         "rollOffset":-3.056603773584905
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
         "rollOffset":6.56603773584905
      },
      {
         "name":"head",
         "pitch":0.9811320754716981,
         "yaw":5.962264,
         "roll":11.320754716981131,
         "pitchPhase":-180,
         "yawPhase":-147.39622641509433,
         "rollPhase":106.64151,
         "pitchOffset":-3.056603773584905,
         "yawOffset":0,
         "rollOffset":0
      }
   ]
}
;
    this.loadAnimation = function(){return this.animation;};
};