import Image from 'next/image'
import { EIcons, Icon } from '@/components/Icon';

type TCounts = 1 | 2 | 3 | 4 | 5;

interface IMealProps {
  name: string,
  img: string,
  rating: TCounts
}

export function Meal({name, img,rating} : IMealProps) {const myButtons = ["test1", "test2", "test3"];
  const starsArr = [];

  for (let i = 0; i < 5; i++) {
    const isActive = i < rating;
    starsArr.push(<Icon name={EIcons.star}  active={isActive} />);
  }

  return (
    <div className="flex shrink-0 items-center gap-x-2">
      <div className="w-18 h-18">
        <Image
          className="relative block"
          src={img}
          alt="Meal Morrocan Chicken"
          width={72}
          height={72}
          priority
        />
      </div>
      <div>
        <p className="text-sm font-medium mb-0.5">
          {name}
        </p>
        <div className="flex gap-x-1">
          {starsArr}
        </div>
      </div>
    </div>
  );
}
