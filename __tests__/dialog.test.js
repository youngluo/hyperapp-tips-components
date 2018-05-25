import { app, h } from 'hyperapp';
import HC from '../dist';

beforeEach(() => {
  document.body.innerHTML = '';
});

test('alert rendered correctly', done => {
  HC.alert('alert');
})
