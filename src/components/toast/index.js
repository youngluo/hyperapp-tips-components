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

export default container => (options) => {
  if (!options) return;

  let opts = {
    duration: 2000,
    type: 'info',
  };

  if (typeof options === 'string') {
    opts.content = options;
  }

  if (typeof options === 'object') {
    opts = { ...opts, ...options };
  }

  const toast = app({ ...state, ...opts }, actions, view, container);

  if (opts.type !== 'loading') {
    setTimeout(toast.onClose, opts.duration);
  } else {
    return toast.onClose;
  }
};
