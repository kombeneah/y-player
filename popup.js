// Copyright (c) 2015 kombeneah, giu. All rights reserved.
// Use of this source code is governed by a BSD-style license
// that can be found in the LICENSE file.

var BACKSPACE_KEYCODE = 8;
var DELETE_KEYCODE = 46;
var input;

function updateBackgroundMusic(input) {
  
  chrome.runtime.getBackgroundPage(function () {
    console.log("input = " + input);
    postUpdate(input);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  var searchBox = document.getElementById('searchBox');
  searchBox.blur();
  
  searchBox.onfocus = function() {
    if (searchBox.value == 'search') {
      searchBox.value = '';
    }
  };
  
  searchBox.onblur = function() {
    if (searchBox.value == '') {
      searchBox.value = 'search';
    }
  };
  
  searchBox.onkeyup = function(event) {
    switch(event.keyCode)
    {
      case BACKSPACE_KEYCODE:
        break;
      case DELETE_KEYCODE:
        break;
      default:
        input = document.getElementById('searchBox').value;
        updateBackgroundMusic();
    }
  };
});