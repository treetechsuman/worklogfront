import React from 'react';
import { Button as BootstrapButton } from 'react-bootstrap';

const Button = ({ variant = 'primary',  size="sm", children, ...props }) => {
  return (
    <BootstrapButton variant={variant} size={size} {...props}>
      {children}
    </BootstrapButton>
  );
};

export default Button;