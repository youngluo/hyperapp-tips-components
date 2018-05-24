import { app, h } from 'hyperapp';
import HC from '../src/components';

beforeEach(() => {
  document.body.innerHTML = '';
});

test('alert rendered correctly', done => {
  HC.alert('alert');
})
