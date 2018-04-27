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
    <div class="hc-dialog-mask">
      <div class="hc-dialog-container">
        {state.title ?
          <div class="hc-dialog-hd">
            <strong class="hc-dialog-title">{state.title}</strong>
          </div> : null}
        <div class="hc-dialog-content">{state.content}</div>
        <div class="hc-dialog-ft">
          {state.showCancel ?
            <a
              href="javascript:;"
              class="hc-dialog-button hc-dialog-button-default"
              onclick={() => {
                state.onCancel && state.onCancel();
                actions.onClose();
              }}
            >
              {state.cancelText}
            </a> : null}
          <a
            href="javascript:;"
            class="hc-dialog-button"
            onclick={() => {
              state.onConfirm && state.onConfirm();
              actions.onClose();
            }}
          >
            {state.confirmText}
          </a>
        </div>
      </div>
    </div>
  ) : null);

export default container => (options) => {
  if (!options) return;

  let opts = {
    confirmText: '确定',
    cancelText: '取消',
    showCancel: true,
  };

  if (typeof options === 'string') {
    opts.content = options;
  }

  if (typeof options === 'object') {
    opts = { ...opts, ...options };
  }

  app({ ...state, ...opts }, actions, view, container);
};
