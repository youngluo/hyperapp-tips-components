(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('hyperapp')) :
  typeof define === 'function' && define.amd ? define(['hyperapp'], factory) :
  (factory(global.hyperapp));
}(this, (function (hyperapp) { 'use strict';

  hyperapp.app(null, null, function () {
    return hyperapp.h(
      'div',
      null,
      hyperapp.h(
        'button',
        null,
        'toast'
      ),
      hyperapp.h(
        'button',
        null,
        'alert'
      ),
      hyperapp.h(
        'button',
        null,
        'confirm'
      )
    );
  }, document.getElementById('app'));

})));
