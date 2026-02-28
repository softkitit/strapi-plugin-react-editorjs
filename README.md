<div align="center">
    <img alt="Logo" src="https://github.com/melishev/strapi-plugin-editor-js/blob/master/.github/assets/strapi-plugin-editorjs.png" width="400px">
</div>

<h1 align="center">🎛 Strapi + ✒️ Editor.js</h1>

⚠️ **This is the Strapi v5 version of this plugin! For Strapi v4, please use [v1.x releases](https://github.com/softkitit/strapi-plugin-react-editorjs/releases/tag/v1.0.3).**


## 🙉 What it is?

#### This is a plugin for [Strapi Headless CMS](https://strapi.io) that replaces the standard wysiwyg editor with the cool [Editor.js](https://editorjs.io) and all its compatible add-ons.
<br>

<img src="https://github.com/melishev/strapi-plugin-editor-js/blob/master/.github/assets/strapi-plugin-editorjs.gif">
<br>

## 🍀 Supported official add-ons

- [x] Paragraph Tool (default)
- [x] [Embed Tool](https://github.com/editor-js/embed)
- [x] [Table tool](https://github.com/editor-js/table)
- [x] [List Tool](https://github.com/editor-js/list)
- [x] [Warning Tool](https://github.com/editor-js/warning)
- [x] [Code Tool](https://github.com/editor-js/code)
- [x] [Link Tool](https://github.com/editor-js/link)
- [x] [Image Tool](https://github.com/editor-js/image)
- [x] [Raw HTML Tool](https://github.com/editor-js/raw)
- [x] [Heading Tool](https://github.com/editor-js/header)
- [x] [Quote Tool](https://github.com/editor-js/quote)
- [x] [Marker Tool](https://github.com/editor-js/marker)
- [x] [Checklist Tool](https://github.com/editor-js/checklist)
- [x] [Delimiter Tool](https://github.com/editor-js/delimiter)
- [x] [InlineCode Tool](https://github.com/editor-js/inline-code)
- [x] [Change Font Size](https://github.com/softkitit/editorjs-inline-font-size)
- [ ] [Personality Tool](https://github.com/editor-js/personality)
- [ ] [Attaches Tool](https://github.com/editor-js/attaches)

<br>

#### All of the above add-ons (if added) work initially when the plugin is loaded. You can also customize the add-ons available in your application using the instructions below.

<br>

## 🤟🏻 Getting Started

```bash
pnpm add @softkit/strapi-plugin-react-editorjs
# or
npm install @softkit/strapi-plugin-react-editorjs
```

In order for Strapi to show the Link Tool thumbnails correctly and for EditorJS plugins to work, you will need to edit the `strapi::security` middleware in `./config/middlewares.js` (do this at your own risk):

```js
module.exports = [
  // ...
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        directives: {
          'img-src': ['*'],
          'script-src': ["'self'", "'unsafe-eval'"],
        },
      }
    },
  },
  // ...
];
```

<br>

## ⚙️ How to extend/develop this plugin (optional)

If you want to change the look of the editor or add/remove editorJS plugins, you will need to do the following:

1. If this plugin is already installed, uninstall it first:
```bash
pnpm remove @softkit/strapi-plugin-react-editorjs
# or
npm uninstall @softkit/strapi-plugin-react-editorjs
```
2. Go to the ./src/plugins folder (create it if it doesn't exist) and clone the project:

```bash
git clone https://github.com/softkitit/strapi-plugin-react-editorjs.git
```
3. Go into the plugin and install dependencies:
   - `cd strapi-plugin-react-editorjs`
   - `pnpm install`
4. In your Strapi v5 `./config/plugins.js` (or `.ts`) file, add:

```js
module.exports = ({ env }) => ({
  // ...
  'editorjs': {
    enabled: true,
    resolve: './src/plugins/strapi-plugin-react-editorjs'
  },
  // ...
})
```

5. To make changes to EditorJS plugins, edit the `./src/plugins/strapi-plugin-react-editorjs/admin/src/config/customTools.js` file.
   - Note: the Image Tool add-on has been highly customized in order to work in Strapi and cannot be edited in the `customTools.js` file. If you wish to develop it further, you may, but it will take much more advanced knowledge and testing.
6. Rebuild Strapi after installation and after any changes made in the plugin.
```bash
pnpm run build
```

### Please note that the add-ons are configured for Strapi, be careful when changing the configuration.

<br>

## 👨🏻‍🏭 Developing

1. [Personality Tool](https://github.com/editor-js/personality)
2. [Attaches Tool](https://github.com/editor-js/attaches)
3. Full screen mode

<br>

## ⭐️ Show your support

Give a star if this project helped you.
