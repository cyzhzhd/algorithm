const cards = [1, 4, 10, 6, 9, 1, 8, 13];

console.log(solution(cards));

function solution(cards) {
  for (let i = 0; i < cards.length; ++i) {
    if (cards[i] > 10) {
      cards[i] = 10;
    }
  }

  let money = 0;
  while (cards.length) {
    while (true) {
      const player = [];
      const dealer = [];
      player.push(cards.shift());
      dealer.push(cards.shift());
      player.push(cards.shift());
      const openCard = cards.shift();
      dealer.push(openCard);

      let playerSum = player.reduce((arr, val) => arr + val);
      let dealerSum = dealer.reduce((arr, val) => arr + val);

      let playerBlackJack = false;
      let dealerBlackJack = false;
      if (openCard === 1 || openCard >= 7) {
        while (playerSum < 17) {
          // ace check
          const aceIdx = player.findIndex((card) => card === 1);
          if (aceIdx >= 0) {
            if (17 <= playerSum + 10 && playerSum + 10 <= 21) {
              playerSum += 10;
              break;
            }
          }
          if (cards.length === 0) break;
          player.push(cards.shift());
          playerSum = player.reduce((arr, val) => arr + val);
        }
      } else if (2 <= openCard && openCard <= 3) {
        while (playerSum < 12) {
          // ace check
          const aceIdx = player.findIndex((card) => card === 1);
          if (aceIdx >= 0) {
            if (12 <= playerSum + 10 && playerSum + 10 <= 21) {
              playerSum += 10;
              break;
            }
          }

          if (cards.length === 0) break;
          player.push(cards.shift());
          playerSum = player.reduce((arr, val) => arr + val);
        }
      }

      // ace check
      const aceIdx = player.findIndex((card) => card === 1);
      if (aceIdx >= 0) {
        if (playerSum + 10 === 21) {
          playerSum += 10;
          playerBlackJack = true;
        }
      }
      if (playerSum === 21) playerBlackJack = true;
      else if (playerSum > 21) {
        money -= 2;
        break;
      }

      while (dealerSum < 17) {
        // ace check
        const aceIdx = dealer.findIndex((card) => card === 1);
        if (aceIdx >= 0) {
          if (17 <= dealerSum + 10 && dealerSum + 10 <= 21) {
            dealerSum += 10;
            break;
          }
        }

        if (cards.length === 0) break;
        dealer.push(cards.shift());
        dealerSum = dealer.reduce((arr, val) => arr + val);
      }

      let aceIdx2 = dealer.findIndex((card) => card === 1);
      if (aceIdx2 >= 0) {
        if (dealerSum + 10 === 21) {
          dealerSum += 10;
        }
      }
      if (dealerSum === 21) dealerBlackJack = true;
      else if (dealerSum > 21) {
        money += 2;
        break;
      }

      if (playerSum > dealerSum) {
        if (playerBlackJack) money += 3;
        else money += 2;
        break;
      } else if (playerSum < dealerSum) {
        if (dealerBlackJack) money -= 3;
        else money -= 2;
        break;
      } else {
        break;
      }
    }
  }

  return money;
}
