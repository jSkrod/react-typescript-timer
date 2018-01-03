import Timer from "../components/Timer";
import * as actions from "../actions/timer";


import {connect, Dispatch} from "react-redux";

  
  export function mapDispatchToProps(dispatch: Dispatch<actions.TimerActions>) {
    let updater : number ;
    let seconds : number = 0;
    let milis : number = 0;

    let isCounting: boolean = false;
    return {
    
        beginCounting: () =>{
          if(!isCounting){
            isCounting = true;
            updater = window.setInterval(()=>{
              milis+=1;
              if(milis > 99){
                seconds += 1;
                milis = 0;
              }
              dispatch(actions.updateTimer(seconds,milis))
            },10)
          }
        },
        stopCounting: () => {
          clearInterval(updater)
          isCounting = false;
        },

        resetTimer: () => {
          clearInterval(updater);
          isCounting = false;
          dispatch(actions.resetTimer())
        }
    }
  }
  
  export default connect(() =>{}, mapDispatchToProps)(Timer);