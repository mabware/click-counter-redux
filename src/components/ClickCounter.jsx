import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'antd';
import allActions from '../store/actions';

const ClickCounter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <div id="count" style={{ padding: '16px' }}>
        Clicks:
        {' '}
        {counter}
      </div>
      <Button type="primary" onClick={() => dispatch(allActions.counterActions.increment())}>
        +1
      </Button>
    </>
  );
};

export default ClickCounter;
