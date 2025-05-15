export class BowlingGame {
  static score(scoreCard: string): number {
    const reverseScoreCard = scoreCard.split("").join("");
    console.log(reverseScoreCard);

    const replacePipes = reverseScoreCard.replace(/(\|)/g, "");
    console.log(replacePipes);

    const sumScore = reverseScoreCard
      .split("|")
      .reduce((acc: number, curr: string, index) => {
        // if (curr === "X") {
        //   return acc + 10;
        // } else
        if (curr === "/") {
          const val = replacePipes.split("")[index + 1];
          return acc + 10 + parseInt(val);
        } else if (curr === "-") {
          return acc;
        } else {
          return acc + parseInt(curr);
        }
      }, 0);

    return sumScore;
  }
}
