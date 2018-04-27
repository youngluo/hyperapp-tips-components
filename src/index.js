import { app, h } from 'hyperapp';
import hc from './components';

app(
  null,
  null,
  () => (
    <div class="button-container">
      <button onclick={() => hc.toast('消息提示')}>消息提示</button>
      <button onclick={() => hc.toast({ content: '错误提示', type: 'error' })}>错误提示</button>
      <button onclick={() => {
        const close = hc.loading();
        setTimeout(close, 2000);
      }}>loading</button>
      <button onclick={() => hc.alert('弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内')}>alert</button>
      <button onclick={() => hc.confirm({ title: '弹窗标题', content: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内' })}>confirm</button>
    </div>
  ),
  document.getElementById('app'),
);
