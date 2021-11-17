import checkValidity from '../functions/checkValidity';

test('Valid number from spase', () => {
  const received = checkValidity('51.50851, -0.12572');
  expect(received).toEqual(['51.50851, -0.12572']);
});

test('Valid number from no spase', () => {
  const received = checkValidity('51.50851,-0.12572');
  expect(received).toEqual(['51.50851,-0.12572']);
});

test('Invalid', () => {
  const received = checkValidity('asdsddf, lkjdhsd');
  expect(received).toBe(null);
});
