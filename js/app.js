const commits = [
  {
    hash: 'fe7bb64',
    message: 'Add "g" to g.txt',
    parents: ['ae33935'],
  },
  {
    hash: 'ae33935',
    message: 'Merge branch \'feat/numbers\' into main',
    parents: ['0bd5ccf', '9357424'],
  },
  {
    hash: '0bd5ccf',
    message: 'Add "f" to f.txt',
    parents: ['3acc87e'],
  },
  {
    hash: '3acc87e',
    message: 'Add "e" to e.txt',
    parents: ['8e0449d'],
  },
  {
    hash: '9357424',
    message: 'Add "2" to numbers.txt',
    parents: ['f8d03c5'],
  },
  {
    hash: 'f8d03c5',
    message: 'Add "1" to numbers.txt',
    parents: ['f61558b'],
  },
  {
    hash: 'f61558b',
    message: 'Add numbers.txt',
    parents: ['8e0449d'],
  },

  {
    hash: '8e0449d',
    message: 'Add "d" to d.txt',
    parents: ['b4f815a'],
  },
  {
    hash: 'b4f815a',
    message: 'Add "c" to c.txt',
    parents: ['a2fd477'],
  },
  {
    hash: 'a2fd477',
    message: 'Add "b" to b.txt',
    parents: ['b1d50ff'],
  },
  {
    hash: 'b1d50ff',
    message: 'Add "a" to a.txt',
    parents: ['0bc3e49'],
  },
  {
    hash: '0bc3e49',
    message: 'Add README.md',
    parents: [],
  },
];

const branches = {
  'head': 'fe7bb64',
  'main': 'fe7bb64',
  'feat/numbers': '9357424',
};

/**
 * Convert target string to array of commits
 *
 * @param {string} Target string (e.g. "8e0449d" or "head")
 * @return {string[]} Array of commit hashes.
 */
const targetStrToCommits = (targetStr) => {
  if (branches[targetStr]) {
    return [ branches[targetStr] ];
  }
  return [targetStr];
}

function update() {
}

function testTargetStrToCommits() {
  const data = [
    {
      input: 'head',
      expected: ['fe7bb64'],
    },
    {
      input: 'feat/numbers',
      expected: ['9357424'],
    },
  ];

  data.forEach(
    ({input, expected}) => {
      console.assert(
        expected.join()
        ===
        targetStrToCommits(input).join()
      );
    }
  );
}
