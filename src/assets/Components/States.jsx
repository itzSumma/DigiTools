import React from 'react';

const States = () => {
    return (
         <section className="bg-linear-to-r from-primary to-secondary text-primary-content">
      <div className="stats stats-vertical mx-auto grid w-[min(1120px,100%)] rounded-none bg-transparent shadow-none md:stats-horizontal md:grid-cols-3">
        <div className="stat border-b border-white/15 text-center md:border-r md:border-b-0">
          <div className="stat-value text-4xl">50K+</div>
          <div className="stat-desc text-primary-content/80">Active Users</div>
        </div>
        <div className="stat border-b border-white/15 text-center md:border-r md:border-b-0">
          <div className="stat-value text-4xl">200+</div>
          <div className="stat-desc text-primary-content/80">Premium Tools</div>
        </div>
        <div className="stat text-center">
          <div className="stat-value text-4xl">4.9</div>
          <div className="stat-desc text-primary-content/80">Average Rating</div>
        </div>
      </div>
    </section>
    );
};

export default States;