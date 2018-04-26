import Alert from './alert';
import Toast from './toast';

const container = document.createElement('div');
container.setAttribute('role', 'dialog');
document.body.appendChild(container);
document.body.ontouchstart = () => {};

export default {
  alert: Alert(container),
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
