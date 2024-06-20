"use client";

import { useState } from "react";

import { Calendar } from "@/components/ui/calendar";

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [multipleDates, setMultipleDates] = useState<Date[] | undefined>([new Date()]);
  
  const shortDate = date?.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    weekday: "short",
  });

  return (
    <div className="flex flex-wrap justify-center gap-3">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow"
        disabled={(date) => date.getDay() === 0 || date.getDay() === 6}
      />
      
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow"
        disabled={(date) => date > new Date()}
      />
      
      <Calendar
        mode="multiple"
        selected={multipleDates}
        onSelect={setMultipleDates}
        className="rounded-md border shadow"
      />
    </div>
  );
}
