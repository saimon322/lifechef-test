"use client";
import Image from 'next/image';
import { useRef, useState, useImperativeHandle } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { EIcons, Icon } from '../Icon';
import { MealsList } from './MealsList/MealsList';

type Inputs = {
  firstName: string
  lastName: string
}

export function Review() {
  const methods = useForm();
  const { register, handleSubmit, formState: {errors} } = methods;
  const [showModal, setShowModal] = useState(false);
  const nicknameRef = useRef<HTMLInputElement>(null);
  const { ref, ...rest } = register("nickname");

  const onSubmit = (data: Inputs) => {
    console.log(data);
  }
  
  const onEdit = () => {
    nicknameRef.current?.focus()
  };

  useImperativeHandle(ref, () => nicknameRef.current);

  return (
    <div className="flex justify-center w-full max-w-screen-md bg-white dark:bg-base rounded-lg p-4 shadow-modal">
      <FormProvider {...methods}>
        <form
          className="w-full max-w-screen-sm"
          onSubmit={handleSubmit((data) => {
            console.log(data);
            setShowModal(true);
          })}
        >
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

                {/* meal summary review */}
                <div className="relative grow">
                  <textarea
                    className="w-full !h-full p-4 border-1.5 bg-white dark:bg-base border-neutrals-400 rounded-lg outline-none focus:border-base dark:focus:border-white aria-[invalid=true]:border-red-500 aria-[invalid=true]:focus:border-red-500"
                    placeholder="Meal Summary Review"
                    {...register("summaryReview", { 
                      required: 'This field is required',
                      minLength: {
                        value: 3,
                        message: "Min length is 3"
                      }
                    })}
                    aria-invalid={errors.summaryReview ? "true" : "false"}
                  >
                  </textarea>

                  {/* error message */}
                  {errors.summaryReview && (
                    <p 
                      role="alert"
                      className="absolute -bottom-2 left-4 px-1 text-red-500 bg-white dark:bg-base text-xs font-medium"
                    >
                      {`${errors.summaryReview.message}`}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* nickname */}
            <div className="relative">
              <label
                htmlFor="nickname"
                className="absolute -top-2 left-4 px-1 bg-white dark:bg-base text-xs font-medium"
              >
                Your Nickname (other users will see this)
              </label>

              <input
                type="text"
                className="w-full h-14 p-4 border-1.5 bg-white dark:bg-base border-neutrals-400 rounded-lg outline-none focus:border-base dark:focus:border-white aria-[invalid=true]:border-red-500 aria-[invalid=true]:focus:border-red-500"
                {...register("nickname", { 
                  required: 'This field is required',
                  minLength: {
                    value: 3,
                    message: "Min length is 3"
                  }
                })} {...rest} ref={nicknameRef}
                id="nickname"
                aria-invalid={errors.nickname ? "true" : "false"}
              >
              </input>

              <button 
                className="absolute top-4 right-4 cursor-pointer"
                type="button"
                onClick={onEdit}>
                <Icon name={EIcons.edit} size={24} />
              </button>

              {/* error message */}
              {errors.nickname && (
                <p 
                  role="alert"
                  className="absolute -bottom-2 left-4 px-1 text-red-500 bg-white dark:bg-base text-xs font-medium"
                >
                  {`${errors.nickname.message}`}
                </p>
              )}
            </div>

            {/* acceptance */}
            <label className="relative flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="peer sr-only"
                {...register("acceptance", { 
                  required: 'This field is required', 
                })}
              />

              <span 
                className="w-5 h-5 border-neutrals-100 border-1.5 rounded-[4px] bg-contain peer-checked:border-primary peer-checked:bg-primary peer-checked:bg-[url('/img/checkbox.svg')] aria-[invalid=true]:border-red-500"
                aria-invalid={errors.acceptance ? "true" : "false"}
              ></span>

              <p className="text-xs text-neutrals-500">
                I confirm that I have read and accepted <a href="#" className="text-primary underline hover:no-underline">Terms and Conditions</a> and <a href="#" className="text-primary underline hover:no-underline">Privacy Policy</a>
              </p>
            </label>
          </div>

          <button
            type="submit"
            className="w-full leading-5 mt-10 p-4 rounded-lg text-white bg-green hover:bg-primary ease-linear transition-all duration-150"
          >
            Submit Review
          </button>

          {showModal ? (
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-auto my-6 mx-auto max-w-2xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-base outline-none focus:outline-none">
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <p className="text-lg leading-relaxed">
                        Are you sure you want to submit this form?
                      </p>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent px-6 py-2 text-sm outline-none focus:outline-none mr-2 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Cancel
                      </button>
                      <button
                        className="p-4 text-white bg-green hover:bg-primary text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Ok
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </form>
      </FormProvider>
    </div>
  );
}
