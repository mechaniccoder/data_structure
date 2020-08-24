function solution(participant, completion) {
  participant.sort();
  completion.sort();
  const plength = participant.length;
  for (let i = 0; i < plength; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}

/* 만약 너가 for문을 사용한다면 원하는 결과를 얻었을 시에 바로 for문을 종료하는 방식으로 코드를 짜도록 하자.
** 알고리즘을 풀 때 시간복잡도 즉, 효율성도 높은 점수를 차지하고 있기 때문이다.
*/