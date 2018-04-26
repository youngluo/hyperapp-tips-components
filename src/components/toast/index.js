import { app, h } from 'hyperapp';
import './index.less';

const state = {
  visible: true,
};

const actions = {
  onClose() {
    return state => ({ visible: false });
  },
};

const render = (content, type = 'error') => {
  const toast = app(
    state,
    actions,
    (state, actions) => (
      state.visible ?
        <div class="toast-wrapper">
          <div class="toast-container">
            <i class={`toast-icon toast-icon-${type}`}></i>
            {content ? <p class="toast-content">{content}</p> : ''}
          </div>
        </div> : ''
    ),
    document.getElementById('global-component'),
  );

  if (type !== 'loading') {
    setTimeout(toast.onClose, 2000);
  }

  return toast;
};

export const loading = (text = '') => render(text, 'loading').onClose;

export default render;

