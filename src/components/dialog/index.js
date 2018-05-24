import { paramProcessor } from '../../utils';
import Dialog from './dialog';

export default container => ({
  alert(content, options) {
    options = paramProcessor(content, options);
    options.showCancel = false;

    Dialog(options, container);
  },
  confirm(content, options) {
    options = paramProcessor(content, options);

    Dialog(options, container);
  },
});
