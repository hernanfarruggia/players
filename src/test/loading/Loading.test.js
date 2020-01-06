import React from 'react';
import { shallow } from 'enzyme';
import Loading from '../../loading';


describe('Loading Component', () => {

    it('should render the component and display loading message', () => {
        const Component = shallow(<Loading />);
        expect(Component.find('div').length).toBe(1);
        expect(Component.find('div').text()).toEqual('Loading players...');
    });

});