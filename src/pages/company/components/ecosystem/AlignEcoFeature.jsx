import React from "react";

import "./ecosystem.css"; // Tell webpack that Button.js uses these styles

export default function AlignEcoFeature() {
  return (
    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
      <div>
        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50">
          Orchestrating Vision{" "}
        </h3>
        <p className="mt-3 text-lg dark:text-gray-400"> Lead by example.</p>
        <div className="mt-12 space-y-12">
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                Aligning{" "}
              </h4>
              <p className="mt-2 dark:text-gray-400">
                steering the strategic outcome in a direction that matches the
                organization’s strategy, values and assets.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                Translating
              </h4>
              <p className="mt-2 dark:text-gray-400">
                Converting information from one language to another – verbal to
                visual, visual to verbal, tacit to explicit, explicit to tacit –
                to enable knowledge sharing across stakeholders. Designing for
                Feasibility .
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                Campaigning / Story telling{" "}
              </h4>
              <p className="mt-2 dark:text-gray-400">
                {" "}
                Aligning Lead Ride Through Success Stories .Constructing a solid
                lead ride success story, interpreting the story across sectors
                and designing for multi-speed impact..
              </p>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="mt-10 lg:mt-0">
        <img
          className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
          src={`/static/ecosystem/orchestra.png`}
          alt="Plugin SDK Usage Preview"
        ></img>
      </div>
    </div>
  );
}
