import {TimerActions} from "../actions/timer";
import {UPDATE_TIMER, RESET_TIMER} from  "../actions/timer";

export interface TimerState{
    currentMilis: number;
    currentSeconds: number;
}

export function timerReducer(state: TimerState, action: TimerActions): TimerState {
    switch (action.type) {
      case UPDATE_TIMER:
        return { ...state,currentSeconds: action.payload.currentSeconds, currentMilis: action.payload.currentMilis };
      case RESET_TIMER:
        return {...state, currentSeconds: 0,currentMilis: 0};
    }
    return state;
  }