import Wysiwyg from './components/Wysiwyg';
import pluginId from './pluginId';

export default {
  register(app) {
    console.log('[EditorJS] register called, Wysiwyg:', Wysiwyg);
    console.log('[EditorJS] app.addFields:', typeof app.addFields);
    app.registerPlugin({
      id: pluginId,
      name: pluginId,
    });
    app.addFields({ type: 'richtext', Component: Wysiwyg });
    console.log('[EditorJS] fields registered');
  },
  bootstrap() {},
};
