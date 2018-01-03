import * as React from 'react';
import * as enzyme from 'enzyme';
import ActionIcon from './ActionIcon';

describe('ActionIcon', () => {
    
    it('Should render Play icon when actionType props is equal to Play', () => {
        expect(enzyme.mount( <ActionIcon actionType="Play" />).find('Play')).toBeTruthy();
    });
    it('Should render Pause icon when actionType props is equal to Pause', () => {
        expect(enzyme.mount( <ActionIcon actionType="Pause" />).find('Pause')).toBeTruthy();
    });
    it('Should render Replay icon when actionType props is equal to Replay', () => {
        expect(enzyme.mount( <ActionIcon actionType="Replay" />).find('Replay')).toBeTruthy();
    });
})


