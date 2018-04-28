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

  var Dialog = (function (container) {
    return function (options) {
      if (!options) return;

      var opts = {
        confirmText: '确定',
        cancelText: '取消',
        showCancel: true
      };

      if (typeof options === 'string') {
        opts.content = options;
      }

      if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
        opts = _extends({}, opts, options);
      }

      hyperapp.app(_extends({}, state, opts), actions, view, container);
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
    alert: function alert(options) {
      if (!options) return;

      if (typeof options === 'string') {
        options = {
          content: options
        };
      }

      Dialog(container)(_extends({}, options, { showCancel: false }));
    },

    confirm: Dialog(container),
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
      { 'class': 'hc-container' },
      hyperapp.h(
        'h1',
        null,
        'hc-tips'
      ),
      hyperapp.h(
        'p',
        null,
        '\u57FA\u4E8Ehyperapp.js\u548CWeUI\u7684Tips\u7EC4\u4EF6'
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
