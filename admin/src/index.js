import Wysiwyg from './components/Wysiwyg';
import pluginId from './pluginId';

export default {
  register(app) {
    app.registerPlugin({
      id: pluginId,
      name: pluginId,
    });
    app.addFields({ type: 'richtext', Component: Wysiwyg });
  },
  bootstrap() {},
};
