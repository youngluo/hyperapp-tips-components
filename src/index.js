import { app, h } from 'hyperapp';

app(
  null,
  null,
  () => (
    <div>
      <button>toast</button>
      <button>alert</button>
      <button>confirm</button>
    </div>
  ),
  document.getElementById('app'),
);
