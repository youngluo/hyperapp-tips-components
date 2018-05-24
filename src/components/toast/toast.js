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
    <div class="hc-toast-mask">
      <div class="hc-toast-container">
        <i class={`hc-toast-icon hc-toast-icon-${state.type}`} />
        {state.content ? <p class="hc-toast-content">{state.content}</p> : null}
      </div>
    </div>
  ) : null);


export default (options, container) => {
  if (!container) return;

  const defaultOptions = {
    duration: 2000,
    type: 'info',
  };

  options = { ...defaultOptions, ...options };

  const toast = app({ ...state, ...options }, actions, view, container);

  if (options.type === 'loading') {
    return toast.onClose;
  }

  setTimeout(toast.onClose, options.duration);
};
