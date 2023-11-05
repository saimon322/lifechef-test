import React from 'react';

import { StarIcon } from './StarIcon'

export enum EIcons {
  star = 'star',
}

interface IIconProps {
  name: EIcons,
  active?: boolean,
}

const iconComponents: { [key in EIcons]: React.ComponentType<any> } = {
  star: StarIcon,
};

export function Icon({ name, active }: IIconProps) {
  const IconComponent = iconComponents[name];

  if (!IconComponent) {
    return null;
  }

  return (
    <div>
      <IconComponent active={active} />
    </div>
  )
}