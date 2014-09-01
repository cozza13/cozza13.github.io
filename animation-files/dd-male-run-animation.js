//
//  male run js
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
MaleRun = function() {
    this.animation =
{
   "name":"MaleRun",
   "settings":{
      "baseFrequency":498.0566037735849,
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
         "pitch":3.3962264150943398,
         "yaw":4.811320754716982,
         "roll":3.30188679245283,
         "pitchPhase":101.20754716981133,
         "yawPhase":41.43396226415092,
         "rollPhase":180,
         "pitchOffset":-8.207547169811322,
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
         "pitch":38.0377358490566,
         "yaw":0,
         "roll":0,
         "pitchPhase":-90,
         "yawPhase":90,
         "rollPhase":-180,
         "pitchOffset":25.13207547169811,
         "yawOffset":-3.245283018867924,
         "rollOffset":0.5283018867924527
      },
      {
         "name":"lowerLegs",
         "pitch":54,
         "yaw":0,
         "roll":0,
         "pitchPhase":50.943396226415075,
         "yawPhase":180,
         "rollPhase":90,
         "pitchOffset":-56.71698113207548,
         "yawOffset":0,
         "rollOffset":1.283018867924528
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
         "pitchPhase":-67.24528301886792,
         "yawPhase":0,
         "rollPhase":0,
         "pitchOffset":26.830189,
         "yawOffset":0,
         "rollOffset":0
      },
      {
         "name":"spine",
         "pitch":6.641509433962264,
         "yaw":0,
         "roll":0.45283018867924524,
         "pitchPhase":-57.73584905660378,
         "yawPhase":38.71698113207546,
         "rollPhase":15.622641509433947,
         "pitchOffset":-11.207547169811319,
         "yawOffset":0,
         "rollOffset":0
      },
      {
         "name":"spine1",
         "pitch":5.886792452830188,
         "yaw":0,
         "roll":0,
         "pitchPhase":-34.641509433962256,
         "yawPhase":38.71698113207546,
         "rollPhase":0,
         "pitchOffset":1.6981132075471694,
         "yawOffset":0,
         "rollOffset":0
      },
      {
         "name":"spine2",
         "pitch":0,
         "yaw":4.226415094339623,
         "roll":0,
         "pitchPhase":0,
         "yawPhase":-180,
         "rollPhase":0,
         "pitchOffset":-1.6981132075471694,
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
         "pitchOffset":11.547169811320753,
         "yawOffset":-47.320754716981135,
         "rollOffset":-22.867924528301888
      },
      {
         "name":"upperArms",
         "pitch":0,
         "yaw":30.566037735849054,
         "roll":0,
         "pitchPhase":-90,
         "yawPhase":52.30188679245282,
         "rollPhase":-90,
         "pitchOffset":80.49056603773585,
         "yawOffset":-24.113207547169814,
         "rollOffset":43.1320754716981
      },
      {
         "name":"lowerArms",
         "pitch":0,
         "yaw":0,
         "roll":32.60377358490566,
         "pitchPhase":-90,
         "yawPhase":90,
         "rollPhase":-83.54716981132076,
         "pitchOffset":15.283018867924525,
         "yawOffset":-7.811320754716979,
         "rollOffset":-62.150943396226424
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
         "pitchPhase":-88.98113207547169,
         "yawPhase":-147.39622641509433,
         "rollPhase":106.64151,
         "pitchOffset":-9.169811320754715,
         "yawOffset":0,
         "rollOffset":0
      }
   ]
}
;
       this.loadAnimation = function(){return this.animation;};
};