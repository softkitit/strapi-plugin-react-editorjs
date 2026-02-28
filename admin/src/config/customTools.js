import PluginId from "../pluginId";

import Embed from "@editorjs/embed";
import Table from "@editorjs/table";
import List from "@editorjs/list";
import Warning from "@editorjs/warning";
import Code from "@editorjs/code";
import LinkTool from "@editorjs/link";
import Raw from "@editorjs/raw";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import Marker from "@editorjs/marker";
import CheckList from "@editorjs/checklist";
import Delimiter from "@editorjs/delimiter";
import InlineCode from "@editorjs/inline-code";
import ColorPlugin from "editorjs-text-color-plugin";
import Paragraph from "editorjs-paragraph-with-alignment";
import Underline from "@editorjs/underline";
import BreakLine from "editorjs-break-line";

import { StyleInlineTool } from "editorjs-style";
import FontSize from "@softkit/editorjs-inline-font-size-tool";
import FontFamily from "editorjs-inline-font-family-tool";

const customTools = {
  embed: Embed,
  table: {
    class: Table,
    inlineToolbar: true,
  },
  list: {
    class: List,
    inlineToolbar: true,
  },
  warning: {
    class: Warning,
    inlineToolbar: true,
    config: {
      titlePlaceholder: "Title",
      messagePlaceholder: "Message",
    },
  },
  code: Code,
  LinkTool: {
    class: LinkTool,
    config: {
      endpoint: `/api/${PluginId}/link`,
    },
  },
  raw: {
    class: Raw,
    inlineToolbar: true,
  },
  header: {
    class: Header,
    inlineToolbar: true,
  },
  quote: {
    class: Quote,
    inlineToolbar: true,
    config: {
      quotePlaceholder: "Quote",
      captionPlaceholder: "Quote`s author",
    },
  },
  marker: {
    class: Marker,
    inlineToolbar: true,
  },
  checklist: {
    class: CheckList,
    inlineToolbar: true,
  },
  delimiter: Delimiter,
  inlineCode: InlineCode,
  Color: {
    class: ColorPlugin,
    config: {
      colorCollections: ["var(--base-orange)"],
      type: "text",
      customPicker: true,
    },
  },
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
  },
  style: StyleInlineTool,
  fontFamily: {
    class: FontFamily,
    config: {
      fontFamilyList: ["Sansation", "Rounded"],
    },
  },
  fontSize: {
    class: FontSize,
    config: {
      fontSizeList: [
        { label: "8", value: "8" },
        { label: "10", value: "10" },
        { label: "11", value: "11" },
        { label: "12", value: "12" },
        { label: "14", value: "14" },
        { label: "16", value: "16" },
        { label: "18", value: "18" },
        { label: "20", value: "20" },
        { label: "22", value: "22" },
        { label: "24", value: "24" },
        { label: "26", value: "26" },
        { label: "28", value: "28" },
        { label: "30", value: "30" },
        { label: "32", value: "32" },
        { label: "34", value: "34" },
        { label: "36", value: "36" },
        { label: "38", value: "38" },
        { label: "40", value: "40" },
        { label: "44", value: "44" },
        { label: "48", value: "48" },
        { label: "50", value: "50" },
        { label: "56", value: "56" },
        { label: "64", value: "64" },
        { label: "72", value: "72" },
        { label: "75", value: "75" },
      ],
    },
  },
  underline: Underline,
  breakLine: {
    class: BreakLine,
    inlineToolbar: true,
  },
};

export default customTools;
