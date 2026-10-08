import { yearsOfExperience } from "@/lib/experience";
import { YearsLive } from "./years-live";

/** Renders the current years of experience, e.g. "18". Stays correct without rebuilds. */
export function Years() {
  return <YearsLive initial={yearsOfExperience()} />;
}
