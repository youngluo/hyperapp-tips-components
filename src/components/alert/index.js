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

export default (content, buttonText) => {
  app(
    state,
    actions,
    (state, actions) => (
      state.visible ?
        <div class="alert-mask">
          <div class="alert-container">
            <div class="alert-content">{content}</div>
            <div class="alert-button" onclick={actions.onClose}>{buttonText}</div>
          </div>
        </div> : ''
    ),
    document.getElementById('global-component'),
  );
};
