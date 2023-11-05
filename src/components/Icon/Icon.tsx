import React from 'react';
import { StarIcon } from './StarIcon';
import { EditIcon } from './EditIcon';

export enum EIcons {
  star = 'star',
  edit = 'edit'
}

interface IIconProps {
  name: EIcons,
  size?: number,
  active?: boolean,
}

const iconComponents: { [key in EIcons]: React.ComponentType<any> } = {
  star: StarIcon,
  edit: EditIcon,
};

export function Icon({ name, size, active }: IIconProps) {
  const IconComponent = iconComponents[name];

  if (!IconComponent) {
    return null;
  }

  const sizes = size ? `w-[${size}px] h-[${size}px]` : '';

  return (
    <div className={sizes}>
      <IconComponent active={active} />
    </div>
  )
}