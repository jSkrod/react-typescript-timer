export const UPDATE_TIMER = 'UPDATE_TIMER';
export type UPDATE_TIMER = typeof UPDATE_TIMER;
export interface UpdateTimer{
    type: UPDATE_TIMER;
    payload:{
        currentSeconds : number,
        currentMilis: number,
    }
}

export function updateTimer(currentSeconds: number,currentMilis:number): UpdateTimer{
    return{
        type: UPDATE_TIMER,
        payload: {
            currentSeconds: currentSeconds,
            currentMilis: currentMilis
        }
    }
}
export const RESET_TIMER = "RESET_TIMER";
export type RESET_TIMER = typeof RESET_TIMER;
export interface ResetTimer{
    type: RESET_TIMER
}
export function resetTimer(): ResetTimer{
    return {
        type: RESET_TIMER,
        
    }
}

export type TimerActions = ResetTimer | UpdateTimer;

