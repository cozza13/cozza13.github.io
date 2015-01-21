//
//  ambiance.js
//  examples
//
//  Created by ClÃ©ment Brisset on 11/18/14.
//  Copyright 2014 High Fidelity, Inc.
//
//  Distributed under the Apache License, Version 2.0.
//  See the accompanying file LICENSE or http://www.apache.org/licenses/LICENSE-2.0.html
//

var soundURL = "https://s3.amazonaws.com/hifi-public/cozza13/cafesounds.wav";
var position = { x: 10392.8, y: 186.221, z: 2137.83};

var audioOptions = {
    position: position,
    volume: 0.05,
    loop: true
};

var sound = SoundCache.getSound(soundURL);
var injector = null;
var count = 100;

Script.update.connect(function() {
  if (count > 0) {
    count--;
    return;
  }
  
  if (sound.downloaded && injector === null) {
    print("Sound downloaded.");
    injector = Audio.playSound(sound, audioOptions);
    print("Playing: " + injector);
  }
});

Script.scriptEnding.connect(function() {
    if (injector !== null) {
        injector.stop();
    }
});