// Date you started working. Years of experience are derived from this,
// so nothing needs editing each year.
export const CAREER_START = new Date(2008, 2, 31); // 31 March 2008

/** Completed years of experience as of `now`. */
export function yearsOfExperience(now: Date = new Date()): number {
  let years = now.getFullYear() - CAREER_START.getFullYear();
  const hadAnniversary =
    now.getMonth() > CAREER_START.getMonth() ||
    (now.getMonth() === CAREER_START.getMonth() &&
      now.getDate() >= CAREER_START.getDate());
  if (!hadAnniversary) years -= 1;
  return years;
}
