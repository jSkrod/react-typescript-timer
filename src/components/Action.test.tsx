import * as React from 'react';
import * as enzyme from 'enzyme';
import Action from './Action';

describe('Action buttons', () => {
    let action: any;
    const mockOnClickAction = jest.fn();
    beforeEach(()=>{
        action = enzyme.mount( <Action onClickAction={mockOnClickAction} actionType="Play" />);
    });
    
    it('Should call passed function when clicked', () => {
      action.find('IconButton').simulate(
          'click',
          {preventDefault() {}}
      )
      action.find('IconButton').simulate(
        'click',
        {preventDefault() {}}
    )
      expect(mockOnClickAction.mock.calls.length).toBe(2)
    });
})


