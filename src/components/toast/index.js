import { paramProcessor } from '../../utils';
import Toast from './toast';

export default container => ({
  toast(content, options) {
    options = paramProcessor(content, options);

    Toast(options, container);
  },
  loading(content, options) {
    const defaultOptions = {
      content: 'loading',
      type: 'loading',
    };

    options = paramProcessor(content, options);

    Toast({ ...defaultOptions, ...options }, container);
  },
});
