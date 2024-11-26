import React from "react";
import { useForm } from "react-hook-form";

const maxstep = 3;
const Fourm = () => {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });
  const [formStep, setFormStep] = React.useState(0);

  const completeFormStep = () => {
    setFormStep((cur) => cur + 1);
  };

  const goToPreviousStep = () => {
    setFormStep((cur) => cur - 1);
  };

  const renderButton = () => {
    if (formStep > 2) {
      return undefined;
    } else if (formStep === 2) {
      return (
        <button disabled={!isValid} type="submit" className="btn">
          Create Account
        </button>
      );
    } else {
      return (
        <button
          disabled={!isValid}
          type="button"
          className="btn"
          onClick={completeFormStep}
        >
          Next Step
        </button>
      );
    }
  };

  const onSubmit = (value) => {
    window.alert(JSON.stringify(value, null, 2));
    completeFormStep();
  };
  return (
    <div className="min-h-screen bg-green-900 flex flex-col items-start text-gray-900 antialiased relative">
      <div
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 80%, 0% 100%)",
          height: "34rem",
        }}
        className="absolute bg-green-800 inset-x-0 top-0"
      ></div>
      <div className="mx-auto z-10 mt-48 text-center">
        <h1 className="text-white text-5xl font-semibold">
          Welcome to <span className="text-yellow-500">the Club</span>
        </h1>
        <p className="text-green-200 mt-2">
          Become a new member in 3 easy steps
        </p>
      </div>
      <div className="max-w-xl w-full mt-24 mb-24 rounded-lg shadow-2xl bg-white mx-auto overflow-hidden z-10">
        <div className="px-16 py-10">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              {formStep < maxstep && (
                <div className="flex items-center gap-2 mb-2">
                  {formStep > 0 && (
                    <button onClick={goToPreviousStep} type="button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 19.5 8.25 12l7.5-7.5"
                        />
                      </svg>
                    </button>
                  )}

                  <p className="text-base text-gray-700">
                    STEP {formStep + 1} OF {maxstep}
                  </p>
                </div>
              )}
            </div>
            {formStep >= 0 && (
              <section className={formStep === 0 ? "block" : "hidden"}>
                <h2 className="heading">Personal Information</h2>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="text-input"
                  {...register("username", {
                    required: {
                      value: true,
                      message: "Please type a username",
                    },
                  })}
                />
                {errors.username && (
                  <p className="text-red-600 text-sm mt-2">
                    {errors.username.message}
                  </p>
                )}
              </section>
            )}
            {formStep >= 1 && (
              <section className={formStep === 1 ? "block" : "hidden"}>
                <h2 className="heading">Billing Information</h2>
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="text-input"
                  {...register("address", {
                    required: {
                      value: true,
                      message: "Please type a address",
                    },
                  })}
                />
                {errors.address && (
                  <p className="text-red-600 text-sm mt-2">
                    {errors.address.message}
                  </p>
                )}
              </section>
            )}
            {formStep >= 2 && (
              <section className={formStep === 2 ? "block" : "hidden"}>
                <h2 className="heading">Legal Information</h2>
                <div className="block mt-6">
                  <input
                    name="toc"
                    className="input-checkbox"
                    type="checkbox"
                    {...register("toc", {
                      required: true,
                    })}
                  />
                  <span>
                    I accept the{" "}
                    <a className="text-blue-400 underline" href="/">
                      Terms and Conditions
                    </a>
                  </span>
                </div>
                <div className="block mt-6">
                  <input
                    name="pp"
                    className="input-checkbox"
                    type="checkbox"
                    {...register("pp", {
                      required: true,
                    })}
                  />
                  <span>
                    I accept the{" "}
                    <a className="text-blue-400 underline" href="/">
                      Privacy Policy
                    </a>
                  </span>
                </div>
              </section>
            )}
            {formStep === 3 && (
              <section>
                <h2 className="heading">Congratulation</h2>
              </section>
            )}

            {renderButton()}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Fourm;
