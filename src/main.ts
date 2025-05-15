export class BowlingGame {
  static score(scoreCard: string): number {
    const reverseScoreCard = scoreCard.split("").reverse().join("");
    console.log(reverseScoreCard);

    const replacePipes = reverseScoreCard.replace(/(\|)/g, "");
    console.log(replacePipes);

    const sumScore = replacePipes.split("").reduce((acc: number, curr: string): number => {
      console.log(`acc: ${acc}, curr: ${curr}`);
        if (curr === "X") {
            return acc + 10;
        } else if (curr === "/") {
            return acc + 10;
        } else if (curr === "-") {
            return acc;
        } else {
            return acc + parseInt(curr);
        }
    })

    return parseInt(sumScore);
  }
}
