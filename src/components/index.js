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
    if (typeof options === 'string') {
      options = {
        content: options,
        type: 'loading',
      };
    }

    options.type = 'loading';

    Toast(container)(options);
  },
};
