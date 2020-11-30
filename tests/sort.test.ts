import { sortByDate } from '../src/index';

test('it works', () => {
  const unsorted: Array<any> = [
    { date: '2012-01-31T16:00:00.000Z' },
    { date: '2013-01-31T16:00:00.000Z' },
    { date: '2011-01-31T16:00:00.000Z' },
  ];
  expect(sortByDate(unsorted, 'date')).toStrictEqual([
    { date: '2013-01-31T16:00:00.000Z' },
    { date: '2012-01-31T16:00:00.000Z' },
    { date: '2011-01-31T16:00:00.000Z' },
  ]);
});
