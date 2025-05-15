import { expect, test } from "vitest";
import { BowlingGame } from "../main.ts";

test("score is 0 when 0 pins are hit", () => {
  expect(BowlingGame.score("--|--|--|--|--|--|--|--|--|--||")).toBe(0);
});

test("score is 20 when 1 pin is hit in each round", () => {
  expect(BowlingGame.score("11|11|11|11|11|11|11|11|11|11||")).toBe(20);
});

test("score is 16 with a spare throw", () => {
  expect(BowlingGame.score("--|5/|3-|--|--|--|--|--|--|--||")).toBe(16);
});

test("score is 26 with a strike", () => {
  expect(BowlingGame.score("--|X|35|--|--|--|--|--|--|--||")).toBe(26);
});

test("score is 300 with all strikes", () => {
  expect(BowlingGame.score("X|X|X|X|X|X|X|X|X|X||XX")).toBe(300);
});
