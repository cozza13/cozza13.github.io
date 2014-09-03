//
//  female sexy walk js
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
FemaleSexyWalk = function() {
    this.animation =
{
   "name":"FemaleSexyWalk",
   "settings":{
      "baseFrequency":303.57735849056604,
      "flyingHipsPitch":60,
      "takeFlightVelocity":40,
      "maxBankingAngle":40
   },
   "adjusters":{
      "legsSeparation":{
         "strength":-0.06132075471698112,
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
         "yaw":4.528301886792453,
         "roll":6.69811320754717,
         "pitchPhase":180,
         "yawPhase":41.43396226415092,
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
         "pitch":19.69811320754717,
         "yaw":0,
         "roll":6.471698113207546,
         "pitchPhase":-90,
         "yawPhase":90,
         "rollPhase":-180,
         "pitchOffset":9.283018867924525,
         "yawOffset":-3.698113207547169,
         "rollOffset":-0.8301886792452828
      },
      {
         "name":"lowerLegs",
         "pitch":29.886792452830186,
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
         "pitchOffset":-2.4905660377358485,
         "yawOffset":0.9433962264150941,
         "rollOffset":-1.6981132075471694
      },
      {
         "name":"toes",
         "pitch":22.415094,
         "yaw":0,
         "roll":0,
         "pitchPhase":-78.11320754716981,
         "yawPhase":0,
         "rollPhase":0,
         "pitchOffset":22.0754716981132,
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
         "roll":4.0754716981132075,
         "pitchPhase":0,
         "yawPhase":38.71698113207546,
         "rollPhase":-71.32075471698114,
         "pitchOffset":7.132075471698112,
         "yawOffset":0,
         "rollOffset":0
      },
      {
         "name":"spine2",
         "pitch":0.9056604,
         "yaw":2.7169812,
         "roll":0,
         "pitchPhase":0,
         "yawPhase":38.71698113207546,
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
         "pitchOffset":7.924528301886791,
         "yawOffset":2.4905660377358485,
         "rollOffset":-13.811320754716977
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
         "yawOffset":9.849056603773583,
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
         "roll":13,
         "pitchPhase":0,
         "yawPhase":-15.622641509433947,
         "rollPhase":-180,
         "pitchOffset":-22.75471698113208,
         "yawOffset":0,
         "rollOffset":-0.3396226415094339
      },
      {
         "name":"head",
         "pitch":0,
         "yaw":5.962264,
         "roll":1.0566037735849056,
         "pitchPhase":-180,
         "yawPhase":-147.39622641509433,
         "rollPhase":106.64151,
         "pitchOffset":-1.6981132075471694,
         "yawOffset":0,
         "rollOffset":0
      }
   ]
}
;
    this.loadAnimation = function(){return this.animation;};
};