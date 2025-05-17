//

import React from "react";
import Card from "../components/common/Card";
import Button from "../components/common/Button";

const sampleProperty = {
  title: "Cozy Apartment in City Center",
  description: "A beautiful apartment close to all main attractions.",
  imageUrl: "/assets/placeholder-property.jpg",
};

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Welcome to ALX Listing App</h1>
      <Card {...sampleProperty} />
      <div className="mt-4">
        <Button label="Book Now" onClick={() => alert("Booked!")} />
      </div>
      <h1>othmane laghlimi</h1>
    </div>
  );
}
