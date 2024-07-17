import React from 'react';

const Button = ({ children, className, ...props }: { children: React.ReactNode, className: string, props: any }) => {
  return (
    <button className={`px-4 py-2 bg-indigo-500 text-white rounded ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
