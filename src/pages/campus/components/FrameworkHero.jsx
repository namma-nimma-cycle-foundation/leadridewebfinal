
import React from 'react';   
export function FrameworkHeroSection() {
  return (
    <div>
      <section className="my-20 space-y-10 flex flex-col items-center">
        <h2 className="font-bold text-3xl lg:text-4xl mb-12">key components</h2>
        <div className="flex flex-col lg:flex-row justify-between space-y-5 lg:space-y-0 lg:space-x-8">
          <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
            <img
              src="https://source.unsplash.com/random/300x300/?1"
              alt=""
              className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
            <div className="mt-6 mb-2">
              <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">
                Build
              </span>
              <h2 className="text-xl font-semibold tracking-wide">Wellness</h2>
            </div>
            <p className="dark:text-gray-100">
              Mauris et lorem at elit tristique dignissim et ullamcorper elit.
              In sed feugiat mi. Etiam ut lacinia dui.
            </p>
          </div>
          <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
            <img
              src="https://source.unsplash.com/random/300x300/?1"
              alt=""
              className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
            <div className="mt-6 mb-2">
              <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">
                Enabling
              </span>
              <h2 className="text-xl font-semibold tracking-wide">
                Environment
              </h2>
            </div>
            <p className="dark:text-gray-100">
              Mauris et lorem at elit tristique dignissim et ullamcorper elit.
              In sed feugiat mi. Etiam ut lacinia dui.
            </p>
          </div>

          <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
            <img
              src="https://source.unsplash.com/random/300x300/?1"
              alt=""
              className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
            <div className="mt-6 mb-2">
              <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">
                Plan
              </span>
              <h2 className="text-xl font-semibold tracking-wide">Growth</h2>
            </div>
            <p className="dark:text-gray-100">
              Mauris et lorem at elit tristique dignissim et ullamcorper elit.
              In sed feugiat mi. Etiam ut lacinia dui.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
export function FrameworkHeroSection2() {
  return (
    <div>
      <section className="my-20 space-y-10 flex flex-col items-center">
       
        <div className="flex flex-col lg:flex-row justify-between space-y-5 lg:space-y-0 lg:space-x-8">
          <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
            <img
              src="https://source.unsplash.com/random/300x300/?1"
              alt=""
              className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
            <div className="mt-6 mb-2">
              <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">
                Build
              </span>
              <h2 className="text-xl font-semibold tracking-wide">Community & Connection</h2>
            </div>
            <p className="dark:text-gray-100">
              Mauris et lorem at elit tristique dignissim et ullamcorper elit.
              In sed feugiat mi. Etiam ut lacinia dui.
            </p>
          </div>
          <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
            <img
              src="https://source.unsplash.com/random/300x300/?1"
              alt=""
              className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
            <div className="mt-6 mb-2">
              <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">
                Enabling
              </span>
              <h2 className="text-xl font-semibold tracking-wide">
              Campus Harmony
              </h2>
            </div>
            <p className="dark:text-gray-100">
              Mauris et lorem at elit tristique dignissim et ullamcorper elit.
              In sed feugiat mi. Etiam ut lacinia dui.
            </p>
          </div>

          <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
            <img
              src="https://source.unsplash.com/random/300x300/?1"
              alt=""
              className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
            <div className="mt-6 mb-2">
              <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">
                Plan
              </span>
              <h2 className="text-xl font-semibold tracking-wide">Campus Sustainability</h2>
            </div>
            <p className="dark:text-gray-100">
              Mauris et lorem at elit tristique dignissim et ullamcorper elit.
              In sed feugiat mi. Etiam ut lacinia dui.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function FrameworkHero() {
  return (
    <div>
      <section className="container my-10 mx-auto">
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center">
          <div className="lg:w-2/5 space-y-8 text-center lg:text-left">
            <h1 className="font-bold text-4xl lg:text-5xl">
              Wellbeing for students
            </h1>
            <p className="text-gray-900 lg:w-8/12">
              Create teaching and learning environments that enable students to
              be healthy, happy, engaged and successful.
            </p>
            <p className="text-gray-900 lg:w-8/12">
              Lead Ride Wellbeing Framework is driven by the themes of Connect
              with cycles , Succeed by riding and Thrive with your network.
            </p>
          </div>
          <img
            src="./images/illustration-intro.svg"
            alt="bg-illustration"
          ></img>
        </div>
      </section>
      <section className="container my-20 mx-auto flex flex-col lg:flex-row justify-between relative">
        <div className="space-y-8 lg:w-1/3 text-center lg:text-left mb-8 lg:mb-0">
          <h2 className="font-bold text-4xl">
            What’s different about Lead Ride ?
          </h2>
          <p className="text-gray-800 lg:max-w-[360px]">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
        <div className="lg:w-5/12 space-y-10">
          <div className="space-y-5">
            <h4 className="font-bold mt-1 py-2 rounded-l-full bg-[#ffefeb] lg:bg-transparent -mr-4 lg:mr-0">
              <span className="bg-primary px-5 text-center py-2 rounded-full text-white mr-3">
                01
              </span>
              Track company-wide progress
            </h4>
            <p className="text-gray-400 ml-0 lg:ml-[4.8rem]">
              See how your day-to-day tasks fit into the wider vision. Go from
              tracking progress at the milestone level all the way done to the
              smallest of details. Never lose sight of the bigger picture again.
            </p>
          </div>
          <div className="space-y-5">
            <h4 className="font-bold mt-1 py-2 rounded-l-full bg-[#ffefeb] lg:bg-transparent -mr-4 lg:mr-0">
              <span className="bg-primary px-5 text-center py-2 rounded-full text-white mr-3">
                02
              </span>
              Advanced built-in reports
            </h4>
            <p className="text-gray-400 ml-0 lg:ml-[4.8rem]">
              Set internal delivery estimates and track progress toward company
              goals. Our customisable dashboard helps you build out the reports
              you need to keep key stakeholders informed.
            </p>
          </div>
          <div className="flex space-x-5 items-start">
            <div className="space-y-5">
              <h4 className="font-bold mt-1 py-2 rounded-l-full bg-[#ffefeb] lg:bg-transparent -mr-4 lg:mr-0">
                <span className="bg-primary px-5 text-center py-2 rounded-full text-white mr-3">
                  03
                </span>
                Everything you need in one place
              </h4>
              <p className="text-gray-400 ml-0 lg:ml-[4.8rem]">
                Stop jumping from one service to another to communicate, store
                files, track tasks and share documents. Manage offers an
                all-in-one team productivity solution.
              </p>
            </div>
          </div>
        </div>
        <img
          src="./images/bg-tablet-pattern.svg"
          alt="bg-tablet"
          className="hidden lg:block absolute -bottom-[38rem] -left-[30rem] -z-20"
        ></img>
      </section>
      <FrameworkHeroSection></FrameworkHeroSection>
      <FrameworkHeroSection2></FrameworkHeroSection2>
    </div>
  );
}

  