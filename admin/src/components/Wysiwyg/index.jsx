import React from "react";
import { useField } from '@strapi/strapi/admin';
import Editor from "../editorjs";
import cn from 'classnames';
import Wrapper from './wrapper';
import { Box, Typography } from '@strapi/design-system';

const Wysiwyg = ({
  name,
  className,
  hint,
  label,
  required,
  style,
  disabled,
}) => {
  const field = useField(name);

  return (
    <Wrapper size={1} className={`${cn(className || '')}`} style={style}>
      <Box>
        <Typography variant="pi" fontWeight="bold">
          {label}
        </Typography>
        {required && (
          <Typography variant="pi" fontWeight="bold" textColor="danger600">
            *
          </Typography>
        )}
      </Box>
      <Editor onChange={field.onChange} value={field.value} name={name} disabled={disabled} />
      {field.error && (
        <Typography variant="pi" textColor="danger600">
          {field.error}
        </Typography>
      )}
      {hint && (
        <Typography variant="pi">{hint}</Typography>
      )}
    </Wrapper>
  )
};

export default Wysiwyg;
