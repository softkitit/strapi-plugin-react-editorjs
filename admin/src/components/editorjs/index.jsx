import React, { useState, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import ReactEditorJS from '@react-editor-js/client';
import { useFetchClient } from '@strapi/strapi/admin';
import getRequiredTools from './requiredTools';
import customTools from '../../config/customTools';

import MediaLibAdapter from '../medialib/adapter'
import MediaLibComponent from '../medialib/component';
import {changeFunc, getToggleFunc} from '../medialib/utils';

const Editor = ({ onChange, name, value }) => {

  const fetchClient = useFetchClient();
  const requiredTools = getRequiredTools(fetchClient);

  const editorInstanceRef = useRef();
  const [mediaLibBlockIndex, setMediaLibBlockIndex] = useState(-1);
  const [isMediaLibOpen, setIsMediaLibOpen] = useState(false);

  const mediaLibToggleFunc = useCallback(getToggleFunc({
    openStateSetter: setIsMediaLibOpen,
    indexStateSetter: setMediaLibBlockIndex
  }), []);

  const handleMediaLibChange = useCallback((data) => {
    changeFunc({
        indexStateSetter: setMediaLibBlockIndex,
        data,
        index: mediaLibBlockIndex,
        editor: editorInstanceRef.current
    });
    mediaLibToggleFunc();
  }, [mediaLibBlockIndex]);

  const customImageTool = {
    mediaLib: {
      class: MediaLibAdapter,
      config: {
        mediaLibToggleFunc
      }
    }
  }

  let defaultValue;
  try {
    defaultValue = value ? JSON.parse(value) : undefined;
  } catch (e) {
    defaultValue = undefined;
  }

  return (
    <>
      <div style={{ border: `1px solid rgb(227, 233, 243)`, borderRadius: `2px`, marginTop: `4px` }}>
        <ReactEditorJS
          defaultValue={defaultValue}
          onInitialize={(instance) => {
            editorInstanceRef.current = instance.dangerouslyLowLevelInstance ?? instance;
          }}
          onChange={async (api, event) => {
            const newData = await api.saver.save();
            if (!newData.blocks.length) {
              onChange(name, null);
            } else {
              onChange(name, JSON.stringify(newData));
            }
          }}
          tools={{...requiredTools, ...customTools, ...customImageTool}}
        />
      </div>
      <MediaLibComponent
        isOpen={isMediaLibOpen}
        onChange={handleMediaLibChange}
        onToggle={mediaLibToggleFunc}
      />
    </>
  );
};

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default Editor;
