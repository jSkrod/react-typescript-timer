import Display from "../components/Display";


import {TimerState} from "../reducers/timer";
import {connect} from "react-redux";

export function mapStateToProps({currentSeconds, currentMilis }: TimerState) {
    return {
      currentSeconds,
      currentMilis
    }
  }
  export default connect(mapStateToProps)(Display);