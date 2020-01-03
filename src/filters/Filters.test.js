import React from 'react';
import { shallow } from 'enzyme';

import { Filters } from './Filters';

describe('Filters Component', () => {

    let instance, props, wrapper;

    beforeEach(() => {
        props = {
            filters: {
                name: '',
                position: '',
                age: ''
            },
            positions: []
        };

        wrapper = shallow(<Filters {...props} />);
        instance = wrapper.instance();
    })

    it('should render without crashing and set initial state', () => {
        expect(wrapper.find('.filters').length).toBe(1);
        expect(instance.state).toEqual({
            name: '',
            position: '',
            age: ''
        });
    });

    it('should render name, position, age, filter and clear inputs', () => {
        expect(wrapper.find('[name="name"]').length).toBe(1);
        expect(wrapper.find('[name="position"]').length).toBe(1);
        expect(wrapper.find('[name="age"]').length).toBe(1);
        expect(wrapper.find('[name="filterAction"]').length).toBe(1);
        expect(wrapper.find('[name="clearAction"]').length).toBe(1);
    });

    it('should update name state when Name field is changed', () => {
        wrapper
            .find('[name="name"]')
            .simulate('change', { target: { name: 'name', value: 'foo' } });

        expect(instance.state.name).toEqual('foo');
    });

    it('should update position state when Position field is changed', () => {
        wrapper
            .find('[name="position"]')
            .simulate('change', { target: { name: 'position', value: 'bar' } });

        expect(instance.state.position).toEqual('bar');
    });

    it('should update age state when Age field is changed', () => {
        wrapper
            .find('[name="age"]')
            .simulate('change', { target: { name: 'age', value: '123' } });

        expect(instance.state.age).toEqual('123');
    });

    it('should clear filters when clicking on Clear Filter button and reset state', () => {
        props.clearFilters = jest.fn();

        wrapper = shallow(<Filters {...props} />);
        instance = wrapper.instance();

        wrapper
            .find('[name="name"]')
            .simulate('change', { target: { name: 'name', value: 'foo' } });
        wrapper
            .find('[name="position"]')
            .simulate('change', { target: { name: 'position', value: 'bar' } });
        wrapper
            .find('[name="age"]')
            .simulate('change', { target: { name: 'age', value: '123' } });
        wrapper
            .find('[name="clearAction"]')
            .simulate('click');

        expect(props.clearFilters).toHaveBeenCalled();
        expect(instance.state).toEqual({
            name: '',
            position: '',
            age: ''
        });
    });

    it('should apply filters when clicking on Filter button', () => {
        props.applyFilters = jest.fn();

        wrapper = shallow(<Filters {...props} />);
        instance = wrapper.instance();

        wrapper
            .find('[name="name"]')
            .simulate('change', { target: { name: 'name', value: 'foo' } });
        wrapper
            .find('[name="position"]')
            .simulate('change', { target: { name: 'position', value: 'bar' } });
        wrapper
            .find('[name="age"]')
            .simulate('change', { target: { name: 'age', value: '123' } });
        wrapper
            .find('[name="filterAction"]')
            .simulate('click');

        expect(props.applyFilters).toHaveBeenCalled();
        expect(instance.state).toEqual({
            name: 'foo',
            position: 'bar',
            age: '123'
        });
    });
});