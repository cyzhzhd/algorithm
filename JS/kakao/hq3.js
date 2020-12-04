const infos = [
  'java backend junior pizza 150',
  'python frontend senior chicken 210',
  'python frontend senior chicken 150',
  'cpp backend senior pizza 260',
  'java backend junior chicken 80',
  'python backend senior chicken 50',
];

// const query = [
//   'java and backend and junior and pizza 100',
//   'python and frontend and senior and chicken 200',
//   'cpp and - and senior and pizza 250',
//   '- and backend and senior and - 150',
//   '- and - and - and chicken 100',
//   '- and - and - and - 150',
// ];
const query = ['- and - and - and - 150'];
// const query = ['- and backend and senior and - 150'];

console.log(solution(infos, query));

function solution(infos, queries) {
  const db = {
    cpp: {
      frontend: {
        junior: {
          chicken: [],
          pizza: [],
        },
        senior: {
          chicken: [],
          pizza: [],
        },
      },
      backend: {
        junior: {
          chicken: [],
          pizza: [],
        },
        senior: {
          chicken: [],
          pizza: [],
        },
      },
    },
    java: {
      frontend: {
        junior: {
          chicken: [],
          pizza: [],
        },
        senior: {
          chicken: [],
          pizza: [],
        },
      },
      backend: {
        junior: {
          chicken: [],
          pizza: [],
        },
        senior: {
          chicken: [],
          pizza: [],
        },
      },
    },
    python: {
      frontend: {
        junior: {
          chicken: [],
          pizza: [],
        },
        senior: {
          chicken: [],
          pizza: [],
        },
      },
      backend: {
        junior: {
          chicken: [],
          pizza: [],
        },
        senior: {
          chicken: [],
          pizza: [],
        },
      },
    },
  };

  // db 입력
  infos.forEach((info) => {
    info = info.split(' ');
    db[info[0]][info[1]][info[2]][info[3]].push(info[4]);
  });

  // 정렬
  db['cpp']['frontend']['junior']['chicken'].sort((a, b) => a - b);
  db['cpp']['frontend']['junior']['pizza'].sort((a, b) => a - b);
  db['cpp']['frontend']['senior']['chicken'].sort((a, b) => a - b);
  db['cpp']['frontend']['senior']['pizza'].sort((a, b) => a - b);
  db['cpp']['backend']['junior']['chicken'].sort((a, b) => a - b);
  db['cpp']['backend']['junior']['pizza'].sort((a, b) => a - b);
  db['cpp']['backend']['senior']['chicken'].sort((a, b) => a - b);
  db['cpp']['backend']['senior']['pizza'].sort((a, b) => a - b);
  db['java']['frontend']['junior']['chicken'].sort((a, b) => a - b);
  db['java']['frontend']['junior']['pizza'].sort((a, b) => a - b);
  db['java']['frontend']['senior']['chicken'].sort((a, b) => a - b);
  db['java']['frontend']['senior']['pizza'].sort((a, b) => a - b);
  db['java']['backend']['junior']['chicken'].sort((a, b) => a - b);
  db['java']['backend']['junior']['pizza'].sort((a, b) => a - b);
  db['java']['backend']['senior']['chicken'].sort((a, b) => a - b);
  db['java']['backend']['senior']['pizza'].sort((a, b) => a - b);
  db['python']['frontend']['junior']['chicken'].sort((a, b) => a - b);
  db['python']['frontend']['junior']['pizza'].sort((a, b) => a - b);
  db['python']['frontend']['senior']['chicken'].sort((a, b) => a - b);
  db['python']['frontend']['senior']['pizza'].sort((a, b) => a - b);
  db['python']['backend']['junior']['chicken'].sort((a, b) => a - b);
  db['python']['backend']['junior']['pizza'].sort((a, b) => a - b);
  db['python']['backend']['senior']['chicken'].sort((a, b) => a - b);
  db['python']['backend']['senior']['pizza'].sort((a, b) => a - b);

  // SQL
  const answer = [];
  const history = {};
  queries.forEach((query) => {
    const q = query.split(' and ');
    const last = q.pop();
    q.push(...last.split(' '));
    const qs = [q];
    const qs1 = [];
    // console.log(qs);
    if (qs[0][0] === '-') {
      qs[0].splice(0, 1);
      qs1.push(['cpp', ...qs[0]]);
      qs1.push(['java', ...qs[0]]);
      qs1.push(['python', ...qs[0]]);
    } else {
      qs1.push(...qs);
    }
    // console.log(qs1);

    const qs2 = [];
    if (qs1[0][1] === '-') {
      qs1.forEach((qq) => {
        qq.splice(1, 1);
        qs2.push([qq[0], 'frontend', qq[1], qq[2], qq[3]]);
        qs2.push([qq[0], 'backend', qq[1], qq[2], qq[3]]);
      });
    } else {
      qs2.push(...qs1);
    }

    const qs3 = [];
    if (qs2[0][2] === '-') {
      qs2.forEach((qq) => {
        qq.splice(2, 1);
        qs3.push([qq[0], qq[1], 'junior', qq[2], qq[3]]);
        qs3.push([qq[0], qq[1], 'senior', qq[2], qq[3]]);
      });
    } else {
      qs3.push(...qs2);
    }

    // console.log(qs3);

    const qs4 = [];
    if (qs3[0][3] === '-') {
      qs3.forEach((qq) => {
        qq.splice(3, 1);
        qs4.push([qq[0], qq[1], qq[2], 'chicken', qq[3]]);
        qs4.push([qq[0], qq[1], qq[2], 'pizza', qq[3]]);
      });
    } else {
      qs4.push(...qs3);
    }

    // console.log(qs4);
    // console.log(qs4);

    const tempAnswer = [];
    let count = 0;
    qs4.forEach((q) => {
      // const temp = db[q[0]][q[1]][q[2]][q[3]].filter(
      //   (condition) => Number(condition) >= q[4]
      // ).length;
      const temp = db[q[0]][q[1]][q[2]][q[3]].findIndex(
        (condition) => Number(condition) >= q[4]
      );
      count += temp + 1;
    });
    answer.push(count);
    // if (tempAnswer.length)
    //   answer.push(tempAnswer.reduce((acc, val) => acc + val));
  });
  return answer;
}
