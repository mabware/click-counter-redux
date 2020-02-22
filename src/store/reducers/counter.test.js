import reducer from './counter';
import actions from '../actions';

describe('Counter reduces', () => {
  it('defaults count to 0', () => {
    const state = reducer(undefined, {});
    expect(state).toEqual(0);
  });

  it('returns current state if no action sent', () => {
    const state = reducer(0, {});
    expect(state).toEqual(0);
  });

  it('INCREMENT increses state by 1', () => {
    const state = reducer(1, actions.counterActions.increment());
    expect(state).toEqual(2);
  });
});
