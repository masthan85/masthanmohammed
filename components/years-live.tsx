"use client";

import { useEffect, useState } from "react";
import { yearsOfExperience } from "@/lib/experience";

// `initial` is the value computed at build time, so server HTML and first
// client render match. After mount we switch to the visitor's current date.
export function YearsLive({ initial }: { initial: number }) {
  const [years, setYears] = useState(initial);
  useEffect(() => setYears(yearsOfExperience()), []);
  return <>{years}</>;
}
