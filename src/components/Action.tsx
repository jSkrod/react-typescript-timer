import * as React from 'react'
import IconButton from 'material-ui/IconButton';
import ActionIcon from './ActionIcon'

export interface PlayProps {onClickAction: () => void, actionType: string}
const Action = (props: PlayProps) =>
(
    <IconButton color="accent"  aria-label="Add an alarm" onClick={props.onClickAction} style={{
        width: 100,
        height: 100,
      }}>
      <ActionIcon actionType={props.actionType}/>
   </IconButton>
) 
export default Action