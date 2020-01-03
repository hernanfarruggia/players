import React from 'react';
import { shallow } from 'enzyme';

import { App } from './App';

describe('App Component', () => {

    let instance, props, wrapper;
    
    beforeEach(() => {
        props = {
            error: false,
            isLoading: true,
            filteredPlayers: [],
            getPlayers: jest.fn()
        };

        wrapper = shallow(<App {...props} />);
        instance = wrapper.instance();
    });

    it('should render App component', () => {
        expect(wrapper.find('.app').length).toBe(1);
    });

    it('should render a Header', () => {
        expect(wrapper.find('.header').length).toBe(1);
    });

    it('should render a Content', () => {
        expect(wrapper.find('.content').length).toBe(1);
    });

    it('should render an error message if error flag is set to true', () => {
        props.error = true;

        wrapper = shallow(<App {...props} />);

        expect(wrapper.find('.error').length).toBe(1);
        expect(wrapper.find('.error').text()).toEqual('There\'s a connection issue, try reloading the page.');
    });

    it('should call props.getPlayers after render', () => {
        expect(instance.props.getPlayers).toHaveBeenCalled();
    });
});
