import actions from './counterActions';

describe('Counter actions', () => {
  it('return INCREMMENT type', () => {
    const { increment } = actions;
    const action = increment();
    expect(action).toEqual({
      type: 'INCREMENT',
    });
  });
});
