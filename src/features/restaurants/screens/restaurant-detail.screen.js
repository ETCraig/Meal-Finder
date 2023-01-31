import React from "react";

import { RestaurantInfoCard } from "../components/restaurant-info-card";

import { SafeArea } from "../../../utils/safe-area";

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
    </SafeArea>
  );
};
