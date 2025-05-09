import * as asyncHooks from 'async_hooks';

const contexts = {};

asyncHooks
  .createHook({
    init(asyncId, type, triggerAsyncId, resource) {
      if (contexts[triggerAsyncId] !== undefined) {
        contexts[asyncId] = contexts[triggerAsyncId];
      } else {
        contexts[asyncId] = {};
      }
    },
    destroy(asyncId) {
      delete contexts[asyncId];
    },
  })
  .enable();

function run(callback: () => void) {
  const eId = asyncHooks.executionAsyncId();
  contexts[eId] = {};
  callback();
}

function set<TValue = any>(k: string, v: TValue) {
  const eId = asyncHooks.executionAsyncId();
  const ctx = contexts[eId];
  if (ctx !== undefined) {
    ctx[k] = v;
  }
}

function get(k: string) {
  const eId = asyncHooks.executionAsyncId();
  const ctx = contexts[eId];
  return ctx !== undefined ? ctx[k] : undefined;
}

export const ClsHook = {
  get,
  set,
  run,
};
