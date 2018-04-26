// import { Enter, Exit } from '@hyperapp/transitions';
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

const view = (state, actions) =>
  (state.visible ? (
    <div class="hc-alert-mask">
      <div class="hc-alert-container">
        <div class="hc-alert-content">{state.content}</div>
        <div class="hc-alert-button" onclick={() => {
          state.onConfirm && state.onConfirm();
          actions.onClose();
        }}>
          {state.confirmText}
        </div>
      </div>
    </div>
  ) : null);

export default container => (options) => {
  if (!options) return;

  if (typeof options === 'string') {
    options = {
      content: options,
      confirmText: 'ok',
    };
  }

  app({ ...state, ...options }, actions, view, container);
};
