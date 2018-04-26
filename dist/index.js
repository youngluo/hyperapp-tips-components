(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('hyperapp')) :
    typeof define === 'function' && define.amd ? define(['hyperapp'], factory) :
    (factory(global.hyperapp));
}(this, (function (hyperapp) { 'use strict';

    var _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    // import { Enter, Exit } from '@hyperapp/transitions';

    var state = {
      visible: true
    };

    var actions = {
      onClose: function onClose() {
        return function (state) {
          return { visible: false };
        };
      }
    };

    var view = function view(state, actions) {
      return state.visible ? hyperapp.h(
        'div',
        { 'class': 'hc-alert-mask' },
        hyperapp.h(
          'div',
          { 'class': 'hc-alert-container' },
          hyperapp.h(
            'div',
            { 'class': 'hc-alert-content' },
            state.content
          ),
          hyperapp.h(
            'div',
            { 'class': 'hc-alert-button', onclick: actions.onClose },
            state.confirmText
          )
        )
      ) : null;
    };

    var Alert = (function (container) {
      return function (options) {
        if (typeof options === 'string') {
          options = {
            content: options,
            confirmText: 'ok'
          };
        }

        hyperapp.app(_extends({}, state, options), actions, view, container);
      };
    });

    var container = document.createElement('div');
    container.setAttribute('role', 'dialog');
    document.body.appendChild(container);

    var hc = {
      alert: Alert(container)
    };

    hyperapp.app(null, null, function () {
      return hyperapp.h(
        'div',
        null,
        hyperapp.h(
          'button',
          { onclick: function onclick() {
              return hc.toast('666');
            } },
          'toast'
        ),
        hyperapp.h(
          'button',
          { onclick: function onclick() {
              return hc.toast('666');
            } },
          'loading'
        ),
        hyperapp.h(
          'button',
          { onclick: function onclick() {
              return hc.alert('666');
            } },
          'alert'
        )
      );
    }, document.getElementById('app'));

})));
