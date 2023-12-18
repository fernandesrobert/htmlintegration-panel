import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from '../types';

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  const panelStyle: React.CSSProperties = {
    position: 'relative',
    overflow: 'hidden',
    width,
    height,
  };

  return (
    <div style={panelStyle}>
      <style>{options.cssCode}</style>
      <div dangerouslySetInnerHTML={{ __html: options.htmlCode }} />
    </div>
  );
};
