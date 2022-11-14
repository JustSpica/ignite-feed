import React, { ButtonHTMLAttributes } from 'react';
import classnames from 'classnames';
import { Slot } from '@radix-ui/react-slot';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  outline?: boolean;
}

export function Button({ asChild, outline, ...props }: ButtonProps) {
  const Component = asChild ? Slot : 'button';

  return (
    <Component
      className={classnames(
        'px-6 py-4 flex items-center gap-2 border border-green-700 rounded-lg font-bold transition-colors',
        {
          'text-green-500 hover:bg-green-700 hover:text-white': outline,
          'bg-green-700 text-white hover:bg-green-500': !outline,
        },
      )}
      {...props}
    />
  );
}
