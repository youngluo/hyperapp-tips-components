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

const view = state =>
  (state.visible ? (
    <div class="hc-toast-wrapper">
      <div class="hc-toast-container">
        <i class={`hc-toast-icon hc-toast-icon-${state.type}`} />
        {state.content ? <p class="hc-toast-content">{state.content}</p> : null}
      </div>
    </div>
  ) : null);

export default container => (options) => {
  if (typeof options === 'string') {
    options = {
      content: options,
      duration: 2000,
      type: 'info',
    };
  }

  const toast = app({ ...state, ...options }, actions, view, container);

  if (options.type !== 'loading') {
    setTimeout(toast.onClose, options.duration);
  } else {
    return toast;
  }
};
