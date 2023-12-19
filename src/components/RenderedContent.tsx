import React from 'react';
import DOMPurify from 'dompurify';
import PropTypes from 'prop-types';
import { PanelProps } from '@grafana/data';

interface RenderedContentProps extends PanelProps {
  html: string;
  css: string;
}

const RenderedContent: React.FC<RenderedContentProps> = ({ html, css }) => {
  // Sanitize and validate the HTML using DOMPurify
  const sanitizedHtml = DOMPurify.sanitize(html);
  
  // Styles should be sanitized and applied carefully to avoid security issues
  const styles = { __html: css };
  const content = { __html: sanitizedHtml };

  return (
    <div>
      <style dangerouslySetInnerHTML={styles} />
      <div dangerouslySetInnerHTML={content} />
    </div>
  );
};

RenderedContent.propTypes = {
  html: PropTypes.string.isRequired,
  css: PropTypes.string.isRequired,
};

export default RenderedContent;
