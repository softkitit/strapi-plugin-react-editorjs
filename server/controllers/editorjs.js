const ogs = require('open-graph-scraper');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = ({ strapi }) => ({

  link: async (ctx) => {
    try {
      const { result } = await ogs(ctx.query);

      const imageUrl = (result.ogImage && result.ogImage[0] && result.ogImage[0].url)
        ? { url: result.ogImage[0].url }
        : undefined;

      ctx.send({
        success: 1,
        meta: {
          title: result.ogTitle,
          description: result.ogDescription,
          image: imageUrl,
        },
      });
    } catch (e) {
      ctx.send({
        success: 0,
        message: e.message
      }, 500);
    }
  },

  byFile: async (ctx) => {
    try {
      const files = ctx.request.files;

      const fileEntries = files.image || files['files.image'];
      const fileArray = Array.isArray(fileEntries) ? fileEntries : [fileEntries];

      const filesToUpload = fileArray.map(file => ({
        path: file.filepath,
        name: file.originalFilename,
        type: file.mimetype,
        size: file.size,
      }));

      const [uploadedFile] = await strapi.plugin('upload').service('upload').upload({
        data: {},
        files: filesToUpload
      });

      ctx.send({
        success: 1,
        file: uploadedFile
      });
    } catch (e) {
      ctx.send({
        success: 0,
        message: e.message
      }, 500);
    }
  },

  byURL: async (ctx) => {
    try {
      const { url } = ctx.request.body;
      const {name, ext} = path.parse(url)
      const filePath = `./public/${name}${ext}`

      const response = await axios.get(url, {responseType: 'arraybuffer'})
      const buffer = Buffer.from(response.data, 'binary')

      await fs.promises.writeFile(filePath, buffer)

      const mimeType = response.headers['content-type'] || 'application/octet-stream';

      const file = {
        path: filePath,
        name: `${name}${ext}`,
        type: mimeType.split(';')[0].trim(),
        size: Buffer.byteLength(buffer),
      }

      const [uploadedFile] = await strapi.plugin('upload').service('upload').upload({
        data: {},
        files: file
      })

      await fs.promises.unlink(filePath);

      ctx.send({
          success: 1,
          file: uploadedFile
      })
    } catch (e) {
      ctx.send({
        success: 0,
        message: e.message
      }, 500)
    }
  }
});
