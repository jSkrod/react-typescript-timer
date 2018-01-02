import * as React from 'react'
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

import { withStyles } from 'material-ui/styles';

const decorate = withStyles(({ palette, spacing }) => ({
    root: {
      padding: spacing.unit,
      background: palette.background,
      color: palette.primary,
    },
    fullscreen: {
      height: "100%",
    },
    inline: {
    
      display: "inline"
    },
    milis:{
      display:"inline",
      fontWeight: "bolder" as "bolder",
    }
  }));

interface DisplayProps{
    currentSeconds: number,
    currentMilis: number,
}

const Display = decorate<DisplayProps>(({currentSeconds,currentMilis,classes}) => (
    <Grid item xs={1}>
        <Typography type="display4" align="center" gutterBottom className={classes.inline}> 
            {currentSeconds}
        </Typography>
        <Typography type="display1" gutterBottom className={classes.milis}>            
            .{currentMilis}s
        </Typography>
    </Grid>
))

export default Display