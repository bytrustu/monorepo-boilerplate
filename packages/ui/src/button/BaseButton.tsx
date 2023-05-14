import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from 'react';

export type BaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const BaseButton = (props: BaseButtonProps) => {
  const { children, onClick, ...other } = props;

  return (
    <button type="button" onClick={onClick} {...other}>
      {children}
    </button>
  );
};

export default BaseButton;
