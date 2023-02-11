import type { DeepPartial } from './types';

export const deepMerge = <T extends object>(current: T, updates: DeepPartial<T>): T => {
  for (const key of Object.keys(updates)) {
    if (!Object.prototype.hasOwnProperty.call(current, key) || typeof updates[key] !== 'object')
      current[key] = updates[key];
    else deepMerge(current[key], updates[key]);
  }
  return current;
};
