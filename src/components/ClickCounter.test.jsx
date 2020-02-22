import React from 'react';
import { mount } from 'enzyme';
import { Button } from 'antd';
import ClickCounter from './ClickCounter';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(() => mockDispatch),
  useSelector: jest.fn((jest.fn(() => 0))),
}));

describe('<ClickCounter />', () => {
  it('renders count and button', () => {
    const wrapper = mount(<ClickCounter />);
    expect(wrapper.find('#count')).toHaveLength(1);
    expect(wrapper.find(Button)).toHaveLength(1);
  });

  it('displays the number of counts from state', () => {
    const wrapper = mount(<ClickCounter />);
    expect(wrapper.find('#count').text()).toEqual('Clicks: 0');
  });

  it('increases counter when button is clicked', () => {
    const wrapper = mount(<ClickCounter />);
    wrapper.find(Button).simulate('click');
    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'INCREMENT',
    });
  });
});
