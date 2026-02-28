import PluginId from '../../pluginId'

// Plugins for Editor.js
import Image from '@editorjs/image'

const getRequiredTools = (fetchClient) => ({
  image: {
    class: Image,
    toolbox: false,
    config: {
      field: "files.image",
      additionalRequestData: {
        data: JSON.stringify({})
      },
      endpoints: {
        byUrl: `/api/${PluginId}/image/byUrl`,
      },
      uploader: {
        async uploadByFile(file) {
          const formData = new FormData();
          formData.append("data", JSON.stringify({}));
          formData.append("files.image", file);

          const { data } = await fetchClient.post(`/api/${PluginId}/image/byFile`, formData);

          return data
        },
      }
    }
  }
});

export default getRequiredTools
