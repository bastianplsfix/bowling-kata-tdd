import { expect, test } from "vitest";
import { BowlingGame } from "../main.ts";

test("it works", () => {
  expect(BowlingGame.score("TODO")).toBe(0);
});

test("score is 20 when 1 pin is hit in each round", () => {
  expect(BowlingGame.score("11|11|11|11|11|11|11|11|11|11||")).toBe(20);
});
