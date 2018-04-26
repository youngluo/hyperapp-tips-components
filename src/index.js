import { app, h } from 'hyperapp';
import hc from './components';

app(
  null,
  null,
  () => (
    <div>
      <button onclick={() => hc.toast('666')}>toast</button>
      <button onclick={() => hc.toast('666')}>loading</button>
      <button onclick={() => hc.alert('666')}>alert</button>
    </div>
  ),
  document.getElementById('app'),
);
