require('./index.css').toString();

class FontSizeTool {
  static get CSS() {
    return 'fst';
  };

  static title = 'Font Size';
  buttonDefaultTitle = '16';

  static get sanitize() {
    return {
      h1: true,
      h2: true,
      h3: true,
      h4: true,
      h5: true,
      p: true,
    };
  }

  static get isInline() {
    return true;
  }

  CSS = {
    button: 'ce-inline-tool',
    buttonActive: 'ce-font-size-tool--active',
    buttonModifier: 'ce-inline-tool--font',
  }

  button = undefined;

  selectionList = undefined;

  buttonWrapperText = undefined;

  tag = 'SPAN';

  state = false;

  optionButtons = [];

  defaultFontSizeList = [
    { label: '10', value: '1', class: 'fs-1' },
    { label: '13', value: '2', class: 'fs-2' },
    { label: '16', value: '3', class: 'fs-3' },
    { label: '18', value: '4', class: 'fs-4' },
    { label: '24', value: '5', class: 'fs-5' },
    { label: '32', value: '6', class: 'fs-6' },
    { label: '48', value: '7', class: 'fs-7' },
  ];

  constructor({ api, config }) {
    this.api = api;
    this.fontSizeList = config?.fontSizeList || this.defaultFontSizeList;
  }

  /**
   * Helper for making Elements with attributes
   *
   * @param {string} tagName           - new Element tag name
   * @param {Array|string} classNames  - list or name of CSS classname(s)
   * @param {object} attributes        - any attributes
   * @returns {Element}
   */
  make(tagName, classNames = null, attributes = {}) {
    const el = document.createElement(tagName);

    if (Array.isArray(classNames)) {
      for (const string of classNames) {
        string.length > 0 && el.classList.add(string);
      }
    } else if (classNames) {
      el.classList.add(classNames);
    }

    for (const attrName in attributes) {
      if (attrName.includes('data')) {
        el.setAttribute(attrName, attributes[attrName]);
      } else {
        el[attrName] = attributes[attrName];
      }
    }

    return el;
  }

  render() {
    this.button = this.make('button', this.CSS.button);
    this.buttonWrapperText = this.make('div');

    this.button.appendChild(this.buttonWrapperText);
    this.button.appendChild(this.svg('toggler-down', 13, 13));

    return this.button;
  }

  surround(range) {
    this.selectedText = range.cloneContents();
    this.selectionList.hidden = !this.selectionList.hidden;
    this.range = !this.selectionList.hidden ? range : null;
    this.state = !this.selectionList.hidden;
  }

  /**
   * Wrap selection with term-tag
   */
  wrap(range, size) {
    /**
     * Create a wrapper for highlighting
     */
    const element = this.make(
      this.tag,
      FontSizeTool.CSS,
      {
        'data-size': size,
      },
    );

    element.appendChild(range.extractContents());
    range.insertNode(element);

    /**
     * Expand (add) selection to highlighted block
     */
    this.api.selection.expandToTag(element);
  }

  /**
   * Unwrap term-tag
   */
  unwrap(termWrapper, range) {
    /**
     * Expand selection to all term-tag
     */
    this.api.selection.expandToTag(termWrapper);

    let unwrappedContent = range.extractContents();

    /**
     * Remove empty term-tag
     */
    termWrapper.parentNode.removeChild(termWrapper);

    /**
     * Insert extracted content
     */
    range.insertNode(unwrappedContent);
  }

  /**
   * Check and change Term's state for current selection
   */
  checkState() {
    this.termWrapper = this.api.selection.findParentTag(this.tag, FontSizeTool.CSS);

    this.buttonWrapperText.innerHTML = this.termWrapper?.dataset.size || this.buttonDefaultTitle;
  }

  svg(name, width = 14, height = 14) {
    const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    icon.classList.add('icon', 'icon--' + name);
    icon.setAttribute('width', width + 'px');
    icon.setAttribute('height', height + 'px');
    icon.innerHTML = `<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#${name}"></use>`;

    return icon;
  }

  changeFont(range, size) {
    if (this.termWrapper) {
      this.unwrap(this.termWrapper, range);
      this.wrap(range, size);
    } else {
      this.wrap(range, size);
    }

    this.api.inlineToolbar.close();
  }

  renderActions() {
    this.selectionList = this.make('div', 'selectionList');
    const selectionListWrapper = this.make('div', 'selection-list-wrapper');

    this.optionButtons = this.fontSizeList.map(fontSize => this.make(
      'div',
      'selection-list-option',
      {
        value: fontSize.value,
        'data-size': fontSize.value,
        innerHTML: fontSize.label,
      })
    );

    for (const button of this.optionButtons) {
      selectionListWrapper.appendChild(button);
      this.api.listeners.on(button, 'click', () => {
        this.changeFont(this.range, button.dataset.size);
      });
    }

    this.selectionList.appendChild(selectionListWrapper);
    this.selectionList.hidden = true;

    return this.selectionList;
  };

  destroy() {
    for (const btnOption of this.optionButtons) {
      this.api.listeners.off(btnOption, 'click');
    }
  }
}
module.exports = FontSizeTool
