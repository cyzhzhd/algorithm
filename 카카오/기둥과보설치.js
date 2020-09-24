// https://programmers.co.kr/learn/courses/30/lessons/60061
const n = 5;
const build_frame = [
  [0, 0, 0, 1],
  [2, 0, 0, 1],
  [4, 0, 0, 1],
  [0, 1, 1, 1],
  [1, 1, 1, 1],
  [2, 1, 1, 1],
  [3, 1, 1, 1],
  [2, 0, 0, 0],
  [1, 1, 1, 0],
  [2, 2, 0, 1],
];

console.log(solution(n, build_frame));

function solution(n, build_frame) {
  let pillars = [];
  let beams = [];
  build_frame.forEach((step) => {
    if (step[2] === 0) {
      // 기둥
      if (step[3] === 0) {
        // 삭제
        pillars = destroyPillar(step, pillars, beams);
      } else {
        // 건설
        canBuildPillar(step, pillars, beams);
      }
    } else if (step[2] === 1) {
      // 보
      if (step[3] === 0) {
        // 삭제
        beams = destroyBeam(step, pillars, beams);
      } else {
        // 건설
        canBuildBeam(step, pillars, beams);
      }
    }
  });

  console.log(pillars);
  console.log(beams);
  const result = [];
  pillars.forEach((pillar) => {
    result.push([...pillar, 0]);
  });

  beams.forEach((beam) => {
    result.push([...beam, 1]);
  });

  result.sort((a, b) => {
    if (a[0] > b[0] || a[0] < b[0]) {
      return a[0] - b[0];
    } else if (a[0] === b[0] && (a[1] > b[1] || a[1] < b[1])) {
      return a[1] - b[1];
    } else {
      return a[2] - b[2];
    }
  });

  return result;
}

function canBuildPillar(new_pillar, pillars, beams) {
  // 조건 1. 바닥에 설치 가능
  if (new_pillar[1] === 0) {
    pillars.push(new_pillar.slice(0, 2));
    return true;
  }

  // 조건 2. 다른 기둥 위에 설치 가능
  let hasBuilt = false;
  pillars.some((pillar) => {
    if (new_pillar[0] === pillar[0] && new_pillar[1] === pillar[1] + 1) {
      pillars.push(new_pillar.slice(0, 2));
      hasBuilt = true;
      return true;
    }
    return false;
  });
  if (hasBuilt) return true;

  // 조건 3. 보 위에 설치 가능
  beams.some((beam) => {
    if (
      new_pillar[1] === beam[1] &&
      (new_pillar[0] === beam[0] || new_pillar[0] === beam[0] + 1)
    ) {
      pillars.push(new_pillar.slice(0, 2));
      hasBuilt = true;
      return true;
    }
    return false;
  });
  if (hasBuilt) return true;
  return false;
}

function canBuildBeam(new_beam, pillars, beams) {
  // 조건 1. 기둥 위에 건설 가능
  let hasBuilt = false;
  pillars.some((pillar) => {
    if (
      new_beam[1] === pillar[1] + 1 &&
      (new_beam[0] === pillar[0] || new_beam[0] === pillar[0] - 1)
    ) {
      beams.push(new_beam.slice(0, 2));
      hasBuilt = true;
      return true;
    }
    return false;
  });
  if (hasBuilt) return true;

  // 조건 2. 보 사이에 건설 가능
  let left = false;
  let right = false;
  beams.some((beam) => {
    if (new_beam[1] === beam[1] && new_beam[0] === beam[0] - 1) {
      right = true;
    }
    if (new_beam[1] === beam[1] && new_beam[0] === beam[0] + 1) {
      left = true;
    }
    if (right && left) {
      hasBuilt = true;
      beams.push(new_beam.slice(0, 2));
      return true;
    }
    return false;
  });
  if (hasBuilt) return true;

  return false;
}

function destroyPillar(target_pillar, pillars, beams) {
  const tempPillars = [...pillars];
  const tempBeams = [...beams];
  let index;
  tempPillars.some((pillar, idx) => {
    if (target_pillar[0] === pillar[0] && target_pillar[1] === pillar[1]) {
      index = idx;
      return true;
    }
    return false;
  });
  tempPillars.splice(index, 1);

  // 조건 1. 위에 있는 보가 기둥없이 건설 가능한지 체크
  let canDestroy = true;
  beams.forEach((beam) => {
    if (
      target_pillar[1] === beam[1] - 1 &&
      (target_pillar[0] === beam[0] || target_pillar[0] === beam[0] + 1)
    ) {
      if (!canBuildBeam(beam, [...tempPillars], [...tempBeams])) {
        canDestroy = false;
      }
    }
  });
  if (!canDestroy) {
    return pillars;
  }

  // 조건 2. 위에 있는 기둥이 이 기둥없이 건설 가능한지 체크
  pillars.forEach((pillar) => {
    if (target_pillar[0] === pillar[0] && target_pillar[1] === pillar[1] - 1) {
      if (!canBuildPillar(pillar, [...tempPillars], [...tempBeams])) {
        canDestroy = false;
      }
    }
  });

  if (!canDestroy) {
    return pillars;
  }

  return tempPillars;
}

function destroyBeam(target_beam, pillars, beams) {
  const tempPillars = [...pillars];
  const tempBeams = [...beams];
  let index;
  tempBeams.some((beam, idx) => {
    if (target_beam[0] === beam[0] && target_beam[1] === beam[1]) {
      index = idx;
      return true;
    }
    return false;
  });
  tempBeams.splice(index, 1);

  // 조건 1. 위에 있는 기둥이 보 없이 건설 가능한지 체크
  let canDestroy = true;
  pillars.forEach((pillar) => {
    if (
      target_beam[1] === pillar[1] &&
      (target_beam[0] === pillar[0] || target_beam[0] === pillar[0] - 1)
    ) {
      if (!canBuildPillar(pillar, [...tempPillars], [...tempBeams])) {
        canDestroy = false;
      }
    }
  });

  if (!canDestroy) {
    return beams;
  }

  // 조건 2. 옆에 있는 보가 이 보 없이 건설 가능한지 체크
  beams.forEach((beam) => {
    if (
      target_beam[1] === beam[1] &&
      (target_beam[0] === beam[0] - 1 || target_beam[0] === beam[0] + 1)
    ) {
      if (!canBuildBeam(beam, [...tempPillars], [...tempBeams])) {
        canDestroy = false;
      }
    }
  });
  if (!canDestroy) {
    return beams;
  }
  return tempBeams;
}
