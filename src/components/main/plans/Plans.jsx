// Plans.jsx

import React from 'react';
import PlansCard from './plans-cards/PlansCard';
import './Plans.css';

import tariffs_icon_lamp from "../../../assets/pics/tariffs_icon_lamp.svg"
import tariffs_icon_laptop from "../../../assets/pics/tariffs_icon_laptop.svg"
import tariffs_icon_target from "../../../assets/pics/tariffs_icon_target.svg"

const Plans = ({ isLoggedIn, userTariff }) => {
  return (
    <div className="tariffs-block">
      <h2>Our Tariffs</h2>
      <div className="tariffs-cards">
      <PlansCard
          name="Beginner"
          description="For small research"
          icon={tariffs_icon_lamp}
          colorClass="tariff-beginner-yellow"
          activeColorClass="tariff-beginner-yellow-active"
          isActive={userTariff === 'beginner'}
          isLoggedIn={isLoggedIn}
          textColorClass="black"
          price="$100"
          oldPrice="$200"
          installmentText="or $15/month in installment for 24 months."
          features={["Unlimited request history", "Safe transaction", "24/7 support"]}
      />
      <PlansCard
          name="Pro"
          description="For HR and freelancers"
          icon={tariffs_icon_target}
          colorClass="tariff-pro-light-blue"
          activeColorClass="tariff-pro-light-blue-active"
          isActive={userTariff === 'pro'}
          isLoggedIn={isLoggedIn}
          textColorClass="black"
          price="$200"
          oldPrice="$400"
          installmentText="or $30/month in installment for 24 months."
          features={["All Beginner tariff items", "History export", "Priority recommendations"]}
      />
      <PlansCard
          name="Business"
          description="For corporate clients"
          icon={tariffs_icon_laptop}
          colorClass="tariff-business-black"
          activeColorClass="tariff-business-black-active"
          isActive={userTariff === 'business'}
          isLoggedIn={isLoggedIn}
          textColorClass="white"
          price="$400"
          oldPrice="$800"
          installmentText="or $60/month in installment for 24 months."
          features={["All Pro tariff items", "Unlimited number of requests", "Priority support"]}
      />
      </div>
    </div>
  )
}

export default Plans;
