import * as React from 'react';

import Action from "./Action";
import Display from "../containers/Display";
import Grid from 'material-ui/Grid';



interface TimerProps{
    
    beginCounting: () => void;
    stopCounting: () => void;
    resetTimer: () => void;
}

const decoratedCount = (props : TimerProps) =>(
        <Grid container 
        direction="column"
        justify='center'
        alignItems = 'center'
        spacing = {0}
        >
          <Display/>
          <Grid item >
              <Action onClickAction={props.beginCounting} actionType="Play"/>
              <Action onClickAction={props.stopCounting} actionType="Pause"/>
              <Action onClickAction={props.resetTimer} actionType="Replay"/>
          </Grid>
      </Grid>
); 
    

export default decoratedCount;