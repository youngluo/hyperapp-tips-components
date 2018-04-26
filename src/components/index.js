import Alert from './alert';

const container = document.createElement('div');
container.setAttribute('role', 'dialog');
document.body.appendChild(container);

export default {
  alert: Alert(container),
};
