import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { Button } from 'antd';
import store from '../src/store';
import App from '../src/app';

describe('<App />', () => {
  it('Clicking increase button increases the count', () => {
    const wrapper = mount(<Provider store={store}><App /></Provider>);
    expect(wrapper.find('#count').text()).toEqual('Clicks: 0');
    wrapper.find(Button).simulate('click');
    expect(wrapper.find('#count').text()).toEqual('Clicks: 1');
  });
});
