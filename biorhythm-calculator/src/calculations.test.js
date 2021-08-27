import { calculateBiorhythms } from "./calculations";

it("calculates physical the biorhythm", () => {
  const { physical } = calculateBiorhythms("1995-01-01", "2020-02-18");
  expect(physical).toBeCloseTo(0.5196);
});
it("calculates emotional the biorhythm", () => {
  const { emotional } = calculateBiorhythms("1995-01-01", "2020-02-18");
  expect(emotional).toBeCloseTo(-0.901);
});
it("calculates intellectual the biorhythm", () => {
  const { intellectual } = calculateBiorhythms("1995-01-01", "2020-02-18");
  expect(intellectual).toBeCloseTo(0.8146);
});
