import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

export interface AvatarProps extends HTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
  size?: 'sm' | 'md';
  src: string;
}

export function Avatar({
  className,
  hasBorder,
  src,
  size = 'md',
  ...props
}: AvatarProps) {
  return (
    <img
      className={classNames('rounded-lg', {
        'border-2 border-gray-800 outline outline-2 outline-green-500':
          hasBorder,
        'w-16 h-16': size === 'md',
        'w-12 h-12': size === 'sm',
        [`${className}`]: className,
      })}
      src={src}
      alt="This is a avatar image"
      {...props}
    />
  );
}
