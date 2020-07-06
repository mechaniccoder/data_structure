function solution(board, moves) {
  const basket = [];
  let answer = 0;

  for (let i = 0; i < moves.length; i++) {
    const column = moves[i] - 1;
    let dollToBasket = 0;
    let index = 0;

    while (index < board.length) {
      const doll = board[index][column];
      if (doll !== 0) {
        dollToBasket = doll;
        board[index][column] = 0;
        break;
      }
      index++;
    }

    if (dollToBasket === 0) continue;

    if (basket.length === 0) {
      basket.push(dollToBasket);
      continue;
    }
    if (basket[basket.length - 1] !== dollToBasket) {
      basket.push(dollToBasket);
      continue;
    }
    if (basket[basket.length - 1] === dollToBasket) {
      basket.pop();
      answer += 2;
      continue;
    }
    console.log(basket);
  }
  return answer;
}
