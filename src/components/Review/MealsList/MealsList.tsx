import { useFormContext } from 'react-hook-form';
import { Meal } from './Meal';

type TCounts = 1 | 2 | 3 | 4 | 5;

interface IMealProps {
  name: string,
  img: string,
  rating: TCounts
}

export function MealsList() {
  const { register } = useFormContext();

  const meals: IMealProps[] = [
    {
      name: "Morrocan Chicken",
      img: "/img/meal-morrocan-chicken.png",
      rating: 3
    },
    {
      name: "Couscous Pilaf",
      img: "/img/meal-couscous-pilaf.png",
      rating: 3
    },
    {
      name: "Turkey Meatloaf",
      img: "/img/meal-turkey-meatloaf.png",
      rating: 3
    },
  ]

  return (
    <div className="flex flex-col gap-4">
      {meals.map((meal: IMealProps, index) =>
        <div key={index} className="flex items-center gap-x-8">
          <Meal
            img={meal.img}
            name={meal.name}
            rating={meal.rating}
          />
          <input
            type="text"
            className="grow h-14 p-4 border-1.5 bg-white dark:bg-base border-neutrals-400 rounded-lg outline-none focus:border-base dark:focus:border-white"
            placeholder="Your thoughts about the component"
            {...register(`component${index}Review`)
          }
          >
          </input>
        </div>
      )}
    </div>
  );
}
