import React from 'react';

function Link({ href, children, className = '', ...props }) {
  return (
    <a
      href={href}
      className={`text-gray-700 hover:text-orange-600 transition-colors ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}

export default Link;
