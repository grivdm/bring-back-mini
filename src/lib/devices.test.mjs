import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mini, comparisons, scaledSize, sizeDifference } from './devices.ts';

test('every silhouette preserves its aspect ratio and uses one shared scale', () => {
  for (const device of [mini, ...comparisons]) {
    const size = scaledSize(device);
    assert.ok(Math.abs(size.width / size.height - device.width / device.height) < 1e-12);
    assert.ok(Math.abs(size.height / device.height - scaledSize(mini).height / mini.height) < 1e-12);
    assert.ok(size.height <= 100);
  }
  assert.equal(scaledSize(comparisons[1]).height, 100);
});
test('differences are calculated against the mini for each model', () => {
  assert.deepEqual(sizeDifference(comparisons[0]), { narrower: '7.4', lighter: 30 });
  assert.deepEqual(sizeDifference(comparisons[1]), { narrower: '13.4', lighter: 87 });
  assert.deepEqual(sizeDifference(mini), { narrower: '0.0', lighter: 0 });
});
