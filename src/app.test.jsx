import React from 'react';
import { shallow } from 'enzyme';
import App from './app';
import ClickCounter from './components/ClickCounter';

describe('<App />', () => {
  it('renders <ClickCounter /> components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(ClickCounter)).toHaveLength(1);
  });
});
