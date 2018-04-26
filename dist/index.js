(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('hyperapp')) :
    typeof define === 'function' && define.amd ? define(['hyperapp'], factory) :
    (factory(global.hyperapp));
}(this, (function (hyperapp) { 'use strict';

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

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
            { 'class': 'hc-alert-button', onclick: function onclick() {
                state.onConfirm && state.onConfirm();
                actions.onClose();
              } },
            state.confirmText
          )
        )
      ) : null;
    };

    var Alert = (function (container) {
      return function (options) {
        if (!options) return;

        if (typeof options === 'string') {
          options = {
            content: options,
            confirmText: 'ok'
          };
        }

        hyperapp.app(_extends({}, state, options), actions, view, container);
      };
    });

    var state$1 = {
      visible: true
    };

    var actions$1 = {
      onClose: function onClose() {
        return function (state) {
          return { visible: false };
        };
      }
    };

    var view$1 = function view(state) {
      return state.visible ? hyperapp.h(
        'div',
        { 'class': 'hc-toast-wrapper' },
        hyperapp.h(
          'div',
          { 'class': 'hc-toast-container' },
          hyperapp.h('i', { 'class': 'hc-toast-icon hc-toast-icon-' + state.type }),
          state.content ? hyperapp.h(
            'p',
            { 'class': 'hc-toast-content' },
            state.content
          ) : null
        )
      ) : null;
    };

    var Toast = (function (container) {
      return function (options) {
        if (!options) return;

        var opts = {
          duration: 2000,
          type: 'info'
        };

        if (typeof options === 'string') {
          opts.content = options;
        }

        if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
          opts = _extends({}, opts, options);
        }

        var toast = hyperapp.app(_extends({}, state$1, opts), actions$1, view$1, container);

        if (opts.type !== 'loading') {
          setTimeout(toast.onClose, opts.duration);
        } else {
          return toast.onClose;
        }
      };
    });

    var container = document.createElement('div');
    container.setAttribute('role', 'dialog');
    document.body.appendChild(container);
    document.body.ontouchstart = function () {};

    var hc = {
      alert: Alert(container),
      toast: Toast(container),
      loading: function loading(options) {
        var opts = {
          type: 'loading',
          content: 'loading'
        };

        if (typeof options === 'string') {
          opts.content = options;
        }

        if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
          opts = _extends({}, opts, options);
        }

        return Toast(container)(opts);
      }
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
              var close = hc.loading();
              setTimeout(close, 2000);
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
