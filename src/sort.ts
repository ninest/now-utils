export function sortByDate(list: Array<any>, key: string = 'date'): Array<any> {
  return list.sort(function (a, b): any {
    return <any>new Date(b[key]) - <any>new Date(a[key]);
  });
}

const sorted = sortByDate([
  { date: '2012-01-31T16:00:00.000Z' },
  { date: '2013-01-31T16:00:00.000Z' },
  { date: '2011-01-31T16:00:00.000Z' },
]);

// console.log([
//   { date: '2012-01-31T16:00:00.000Z' },
//   { date: '2013-01-31T16:00:00.000Z' },
//   { date: '2011-01-31T16:00:00.000Z' },
// ]);
console.log(sorted);
