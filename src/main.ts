export class BowlingGame {
  static score(scoreCard: string): number {
    const frames = scoreCard.split("|");

    let acc = 0;

    frames.forEach((val) => {
      if (val === "--") {
        acc += 0;
      }
    });

    return acc;
  }
}
