import React from 'react';

/**
 * Reusable Tag component for rendering technology labels.
 * Can be rendered as a list item (li) or a generic text node (span).
 */
export const Tag = ({ children, as: Component = 'span', className = '', ...props }) => {
  return (
    <Component className={`tag ${className}`.trim()} {...props}>
      {children}
    </Component>
  );
};
