import Dialog from './dialog';
import Toast from './toast';

const container = document.createElement('div');
container.setAttribute('role', 'dialog');
document.body.appendChild(container);
document.body.ontouchstart = () => { };

export default {
  alert(options) {
    if (!options) return;

    if (typeof options === 'string') {
      options = {
        content: options,
      };
    }

    Dialog(container)({ ...options, showCancel: false });
  },
  confirm: Dialog(container),
  toast: Toast(container),
  loading(options) {
    let opts = {
      type: 'loading',
      content: 'loading',
    };

    if (typeof options === 'string') {
      opts.content = options;
    }

    if (typeof options === 'object') {
      opts = { ...opts, ...options };
    }

    return Toast(container)(opts);
  },
};
