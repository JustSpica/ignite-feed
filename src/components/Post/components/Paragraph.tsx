import React, { HTMLAttributes } from 'react';
import { Slot } from '@radix-ui/react-slot';
import classNames from 'classnames';

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  asAnchor?: boolean;
  asChild?: boolean;
}

export function Paragraph({ asChild, asAnchor, ...props }: ParagraphProps) {
  const Component = asChild ? Slot : 'p';

  return (
    <Component
      className={classNames('mt-4', {
        'block font-bold text-green-700 hover:text-green-500': asAnchor,
      })}
      {...props}
    />
  );
}
