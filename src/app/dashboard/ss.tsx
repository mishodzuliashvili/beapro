"use client";

import { Select, SelectItem } from "@nextui-org/react";

type SSProps = {};

export default function SS({}: SSProps) {
  return (
    <Select
      label="Your Personality"
      placeholder="Select an animal"
      selectionMode="multiple"
      className="w-full"
      size="lg"
    >
      {[
        { label: "Curious", value: "dog" },
        { label: "Ambitious", value: "cat" },
        { label: "Struggling", value: "elephant" },
        { label: "Rabbit", value: "rabbit" },
      ].map((animal) => (
        <SelectItem key={animal.value} value={animal.value}>
          {animal.label}
        </SelectItem>
      ))}
    </Select>
  );
}
