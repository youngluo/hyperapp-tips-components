import { app, h } from 'hyperapp';
import hc from './components';

app(
  null,
  null,
  () => (
    <div class="button-container">
      <button onclick={() => hc.toast('消息提示')}>toast</button>
      <button onclick={() => {
        const close = hc.loading();
        setTimeout(close, 2000);
      }}>loading</button>
      <button onclick={() => hc.alert('消息提示')}>alert</button>
    </div>
  ),
  document.getElementById('app'),
);
