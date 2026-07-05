import React from 'react';

/**
 * Reusable Button component that handles standard buttons,
 * local anchor links, and external links securely.
 */
export const Button = ({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  external = false,
  type = 'button',
  ...props
}) => {
  const baseClass = `btn btn-${variant} ${className}`.trim();

  if (href) {
    if (external) {
      return (
        <a href={href} className={baseClass} target="_blank" rel="noopener noreferrer" {...props}>
          {children}
        </a>
      );
    }
    return (
      <a href={href} className={baseClass} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={baseClass} onClick={onClick} {...props}>
      {children}
    </button>
  );
};
