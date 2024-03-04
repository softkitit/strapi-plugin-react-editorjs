import styled from 'styled-components';
import { Box } from "@strapi/design-system/Box";

import '../../fonts/fonts.css';

const Wrapper = styled(Box)`
  // store global variables
  .codex-editor {
    // set variables to paint text in editorjs
    --base-orange: #FF6445;

    font-size: 16px;
    
    --size-variant-8: .5em;
    --size-variant-10: .625em;
    --size-variant-11: .688em;
    --size-variant-12: .75em;
    --size-variant-14: .875em;
    --size-variant-16: 1em;
    --size-variant-18: 1.125em;
    --size-variant-20: 1.25em;
    --size-variant-22: 1.375em;
    --size-variant-24: 1.5em;
    --size-variant-26: 1.625em;
    --size-variant-28: 1.75em;
    --size-variant-30: 1.875em;
    --size-variant-32: 2em;
    --size-variant-34: 2.125em;
    --size-variant-36: 2.25em;
    --size-variant-38: 2.375em;
    --size-variant-40: 2.5em;
    --size-variant-44: 2.75em;
    --size-variant-48: 3em;
    --size-variant-50: 3.125em;
    --size-variant-56: 3.5em;
    --size-variant-64: 4em;
    --size-variant-72: 4.5em;
    --size-variant-75: 4.688em;
  }

  span[data-size="8"] {
    font-size: var(--size-variant-8);
  }
  span[data-size="10"] {
    font-size: var(--size-variant-10);
  }
  span[data-size="11"] {
    font-size: var(--size-variant-11);
  }
  span[data-size="12"] {
    font-size: var(--size-variant-12);
  }
  span[data-size="14"] {
    font-size: var(--size-variant-14);
  }
  span[data-size="16"] {
    font-size: var(--size-variant-16);
  }
  span[data-size="18"] {
    font-size: var(--size-variant-18);
  }
  span[data-size="20"] {
    font-size: var(--size-variant-20);
  }
  span[data-size="22"] {
    font-size: var(--size-variant-22);
  }
  span[data-size="24"] {
    font-size: var(--size-variant-24);
  }
  span[data-size="26"] {
    font-size: var(--size-variant-26);
  }
  span[data-size="28"] {
    font-size: var(--size-variant-28);
  }
  span[data-size="30"] {
    font-size: var(--size-variant-30);
  }
  span[data-size="32"] {
    font-size: var(--size-variant-32);
  }
  span[data-size="34"] {
    font-size: var(--size-variant-34);
  }
  span[data-size="36"] {
    font-size: var(--size-variant-36);
  }
  span[data-size="38"] {
    font-size: var(--size-variant-38);
  }
  span[data-size="40"] {
    font-size: var(--size-variant-40);
  }
  span[data-size="44"] {
    font-size: var(--size-variant-44);
  }
  span[data-size="48"] {
    font-size: var(--size-variant-48);
  }
  span[data-size="50"] {
    font-size: var(--size-variant-50);
  }
  span[data-size="56"] {
    font-size: var(--size-variant-56);
  }
  span[data-size="64"] {
    font-size: var(--size-variant-64);
  }
  span[data-size="72"] {
    font-size: var(--size-variant-72);
  }
  span[data-size="75"] {
    font-size: var(--size-variant-75);
  }

  // set variables for correct display in picker
  --base-orange: #FF6445;
  
  @media (min-width: 651px) {
    .codex-editor--narrow .codex-editor__redactor {
      margin-right: 0;
    }
  }    
  .codex-editor {
    padding: 16px;
    font-size: 1rem;
  }
  *:focus-visible {
    outline: none;
  }
  h1 {
    font-size: 2.5rem;
    font-weight: bold;
  }
  h2 {
    font-size: 1.5em;
    font-weight: bold;
  }
  h3 {
    font-size: 1.17em;
    font-weight: bold;
  }
  h4 {
    font-size: 1em;
    font-weight: bold;
  }
  h5 {
    font-size: .83em;
    font-weight: bold;
  }
  h6 {
    font-size: .67em;
    font-weight: bold;
  }
  label {
    display: block;
    margin-bottom: 1rem;
  }
  &.bordered {
    .editorWrapper {
      border-color: red;
    }
  }
  > div + p {
    width: 100%;
    padding-top: 12px;
    font-size: 1.2rem;
    line-height: normal;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: -9px;
  }
  .cdx-input.image-tool__caption {
    font-size: .9rem;
    color: #444;
    line-height: 1.5;
  }
`;

export default Wrapper;
