import React from 'react';

const Steps = ({steps}) => {
    return (
        <section className="mx-auto w-[min(1120px,calc(100%-1.5rem))] py-16 md:py-20" id="steps">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <span className="badge badge-primary badge-outline rounded-full px-4 py-3 uppercase tracking-[0.2em]">
          Simple Process
        </span>
        <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">Get Started In 3 Steps</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {steps.map((step, index) => (
          <article key={step.title} className="card border border-base-300 bg-base-100 shadow-lg">
            <div className="card-body items-start p-8">
              <span className="badge badge-primary badge-lg rounded-full">0{index + 1}</span>
              <div className="mt-2 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <img src={step.icon} alt="" aria-hidden="true" className="h-10 w-10 object-contain" />
              </div>
              <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
              <p className="text-sm leading-7 text-base-content/70">{step.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
    );
};

export default Steps;