import * as React from 'react';
import * as enzyme from 'enzyme';
import Display from './Display';

describe('Display', () => {
    const action = enzyme.mount( <Display currentMilis={9} currentSeconds={12} />);
    
    it('Should render 2 typography components', () => {
        expect(action.find('Typography')).toHaveLength(2);
    });
    it('Should render passed current seconds', () => {
        expect(action.find('Typography').first().text()).toEqual("12");
    });
})


