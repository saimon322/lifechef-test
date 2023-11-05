import { Meal } from './Meal';

type TCounts = 1 | 2 | 3 | 4 | 5;

interface IMealProps {
  name: string,
  img: string,
  rating: TCounts
}

export function MealsList() {

  const meals: IMealProps[] = [
    {
      name: "Morrocan Chicken",
      img: "/meal-morrocan-chicken.png",
      rating: 3
    },
    {
      name: "Couscous Pilaf",
      img: "/meal-couscous-pilaf.png",
      rating: 3
    },
    {
      name: "Turkey Meatloaf",
      img: "/meal-turkey-meatloaf.png",
      rating: 3
    },
  ]

  return (
    <div className="flex flex-col gap-4">
      {meals.map((meal: IMealProps, index) =>
        <div className="flex items-center gap-x-8">
          <Meal
            img={meal.img}
            name={meal.name}
            rating={meal.rating}
          />
          <input
            type="text"
            className="w-full h-14 p-4 border-1.5 border-neutrals-400 text-neutral-500 rounded-lg outline-none focus:border-base"
            placeholder="Your thoughts about the component">
          </input>
        </div>
      )}
    </div>
  );
}
