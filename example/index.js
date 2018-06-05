(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('hyperapp')) :
  typeof define === 'function' && define.amd ? define(['hyperapp'], factory) :
  (factory(global.hyperapp));
}(this, (function (hyperapp) { 'use strict';

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

  var paramProcessor = function paramProcessor(content, options) {
    if (!content) return;

    if ((typeof content === 'undefined' ? 'undefined' : _typeof(content)) === 'object') {
      return content;
    }

    if (typeof content === 'string') {
      return _extends({}, options, { content: content });
    }
  };

  var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
      { 'class': 'hc-dialog-mask' },
      hyperapp.h(
        'div',
        { 'class': 'hc-dialog-container' },
        state.title ? hyperapp.h(
          'div',
          { 'class': 'hc-dialog-hd' },
          hyperapp.h(
            'strong',
            { 'class': 'hc-dialog-title' },
            state.title
          )
        ) : null,
        hyperapp.h(
          'div',
          { 'class': 'hc-dialog-content' },
          state.content
        ),
        hyperapp.h(
          'div',
          { 'class': 'hc-dialog-ft' },
          state.showCancel ? hyperapp.h(
            'a',
            {
              href: 'javascript:;',
              'class': 'hc-dialog-button hc-dialog-button-default',
              onclick: function onclick() {
                state.onCancel && state.onCancel();
                actions.onClose();
              }
            },
            state.cancelText
          ) : null,
          hyperapp.h(
            'a',
            {
              href: 'javascript:;',
              'class': 'hc-dialog-button',
              onclick: function onclick() {
                state.onConfirm && state.onConfirm();
                actions.onClose();
              }
            },
            state.confirmText
          )
        )
      )
    ) : null;
  };

  var Dialog = (function (options, container) {
    if (!container) return;

    var defaultOptions = {
      cancelText: 'cancel',
      confirmText: 'ok',
      showCancel: true
    };

    hyperapp.app(_extends$1({}, state, defaultOptions, options), actions, view, container);
  });

  var Dialog$1 = (function (container) {
    return {
      alert: function alert(content, options) {
        options = paramProcessor(content, options);
        options.showCancel = false;

        Dialog(options, container);
      },
      confirm: function confirm(content, options) {
        options = paramProcessor(content, options);

        Dialog(options, container);
      }
    };
  });

  var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
      { 'class': 'hc-toast-mask' },
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

  var Toast = (function (options, container) {
    if (!container) return;

    var defaultOptions = {
      duration: 2000,
      type: 'info'
    };

    options = _extends$2({}, defaultOptions, options);

    var toast = hyperapp.app(_extends$2({}, state$1, options), actions$1, view$1, container);

    if (options.type === 'loading') {
      return toast.onClose;
    }

    setTimeout(toast.onClose, options.duration);
  });

  var _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var Toast$1 = (function (container) {
    return {
      toast: function toast(content, options) {
        options = paramProcessor(content, options);

        Toast(options, container);
      },
      loading: function loading(content, options) {
        var defaultOptions = {
          content: 'loading',
          type: 'loading'
        };

        options = paramProcessor(content, options);

        return Toast(_extends$3({}, defaultOptions, options), container);
      }
    };
  });

  var _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var container = document.createElement('div');
  container.setAttribute('role', 'dialog');
  document.body.appendChild(container);
  document.body.ontouchstart = function () {};

  var hc = _extends$4({}, Dialog$1(container), Toast$1(container));

  hyperapp.app(null, null, function () {
    return hyperapp.h(
      'div',
      { 'class': 'hc-container' },
      hyperapp.h(
        'h1',
        null,
        'hc-tips'
      ),
      hyperapp.h(
        'p',
        null,
        '\u57FA\u4E8E hyperapp.js \u548C WeUI \u7684 Tips \u7EC4\u4EF6'
      ),
      hyperapp.h(
        'button',
        { onclick: function onclick() {
            return hc.toast('消息提示');
          } },
        '\u6D88\u606F\u63D0\u793A'
      ),
      hyperapp.h(
        'button',
        { onclick: function onclick() {
            return hc.toast({ content: '错误提示', type: 'error' });
          } },
        '\u9519\u8BEF\u63D0\u793A'
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
            return hc.alert('弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内');
          } },
        'alert'
      ),
      hyperapp.h(
        'button',
        { onclick: function onclick() {
            return hc.confirm({ title: '弹窗标题', content: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内' });
          } },
        'confirm'
      )
    );
  }, document.getElementById('app'));

})));
