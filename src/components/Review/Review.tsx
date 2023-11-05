"use client";
import Image from 'next/image'
import { useState, FormEvent, useRef, useEffect } from 'react';
import { MealsList } from './MealsList/MealsList';
import { EIcons, Icon } from '../Icon';

export function Review() {
  const ref = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(value);
  }

  const handleClick = () => {
    ref.current?.focus();
  };

  return (
    <div className="flex justify-center w-full max-w-screen-md bg-white rounded-lg p-4 shadow-modal">
      <form onSubmit={handleSubmit} className="w-full max-w-screen-sm">
        <div className="flex flex-col gap-4 pb-8 border-b-1 border-neutrals-300">
          <h1 className="text-2xl font-medium text-center mt-4">
            Meal Review
          </h1>
          <h2 className="font-semibold">
            Meal Components
          </h2>
          <MealsList />
        </div>

        <div className="flex flex-col gap-8 pt-8">
          <div>
            <h2 className="font-semibold mb-2">
              Meal Review
            </h2>

            <div className="flex gap-4">
              <div className="flex flex-col gap-4 w-[234px] border-1 border-neutrals-300 rounded-lg p-4">
                <Image
                  className="relative block rounded"
                  src="/img/review-img.jpg"
                  alt="Meal Morrocan Chicken"
                  width={202}
                  height={151}
                  priority
                />

                <p className="text-sm font-semibold">
                  Morroccan Chicken With Couscous
                </p>

                <div className="flex items-center gap-x-1">
                  <div className="flex gap-x-1">
                    <Icon name={EIcons.star} size={24} active />
                    <Icon name={EIcons.star} size={24} active />
                    <Icon name={EIcons.star} size={24} active />
                    <Icon name={EIcons.star} size={24} />
                    <Icon name={EIcons.star} size={24} />
                  </div>

                  <span className="text-xs text-brown">
                    3/5
                  </span>
                </div>
              </div>

              <div className="grow">
                <textarea
                  className="w-full !h-full p-4 border-1.5 border-neutrals-400 rounded-lg outline-none focus:border-base"
                  placeholder="Meal Summary Review">
                </textarea>
              </div>
            </div>
          </div>

          <div className="relative">
            <label
              htmlFor="nickname"
              className="absolute -top-2 left-4 px-1 bg-white text-xs font-medium"
            >
              Your Nickname (other users will see this)
            </label>

            <input
              type="text"
              ref={ref}
              name="nickname"
              id="nickname"
              className="w-full h-14 p-4 border-1.5 border-neutrals-400 rounded-lg outline-none focus:border-base">
            </input>

            <div className="absolute top-4 right-4 cursor-pointer"
              onClick={handleClick}>
              <Icon name={EIcons.edit} size={24} />
            </div>
          </div>

          <label className="flex items-center gap-3 cursor-pointer">          
            <input
              type="checkbox"
              name="acceptance"
              id="acceptance"
              className="peer sr-only"
            />

            <span className="w-5 h-5 border-neutrals-100 border-1.5 rounded-[4px] bg-contain peer-checked:border-primary peer-checked:bg-primary peer-checked:bg-[url('/img/checkbox.svg')]"></span>

            <p className="text-xs text-neutrals-500">
              I confirm that I have read and accepted <a href="#" className="text-primary underline">Terms and Conditions</a> and <a href="#" className="text-primary underline">Privacy Policy</a>
            </p>
          </label>
        </div>

        <button
          type="submit"
          className="flex justify-center items-center w-full h-[52px] mt-10 p-4 rounded-lg text-white bg-green hover:bg-primary"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
}
