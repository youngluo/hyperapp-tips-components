import Dialog from './dialog';
import Toast from './toast';

const container = document.createElement('div');
container.setAttribute('role', 'dialog');
document.body.appendChild(container);
document.body.ontouchstart = () => { };

export default {
  ...Dialog(container),
  ...Toast(container),
};
