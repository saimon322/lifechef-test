import { MealsList } from './MealsList/MealsList';

export function Review() {

  return (
    <div className="flex justify-center w-full max-w-screen-md bg-white rounded-lg p-4 shadow-modal">
      <div className="w-full max-w-screen-sm">
        <div className="flex flex-col gap-4 pb-8 border-b-1 border-neutrals-300">
          <h1 className="text-2xl font-medium text-center mt-4">
            Meal Review
          </h1>
          <h2 className="font-semibold">
            Meal Components
          </h2>
          <MealsList/>
        </div>

        <div className="flex flex-col gap-4 pt-8">
          <h2 className="font-semibold">
            Meal Review
          </h2>
        </div>
      </div>
    </div>
  );
}
