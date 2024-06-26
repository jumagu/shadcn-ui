"use client";

import { useState } from "react";

import { Slider } from "@/components/ui/slider";

export default function SliderPage() {
  const [sliderValue, setSliderValue] = useState(10);
  const [rangeValue, setRangeValue] = useState([10, 20]);

  return (
    <div className="grid gap-4">
      <div>
        <span className="block mb-2">Slider value: {sliderValue}</span>
        <Slider
          defaultValue={[sliderValue]}
          onValueChange={(value) => setSliderValue(value[0])}
          max={100}
          step={1}
        />
      </div>

      <div>
        <span className="block mb-2">Range value: {rangeValue.join(", ")}</span>
        <Slider
          defaultValue={rangeValue}
          onValueChange={setRangeValue}
          max={100}
          step={1}
        />
      </div>
    </div>
  );
}
