import * as React from 'react'
import Play from 'material-ui-icons/PlayArrow'
import Pause from 'material-ui-icons/Pause'
import Replay from 'material-ui-icons/Replay'
export interface ActionIconProps {actionType: string}

const iconStyle = {
    width: 100,
    height: 100,
}

const ActionIcon = (props: ActionIconProps) => {
    switch(props.actionType){
        case "Play":
            return <Play style={iconStyle}/>
        case "Pause":
            return <Pause style={iconStyle}/>
        case "Replay":
              return <Replay style={iconStyle}/>
    }
    return <div></div>

}
export default ActionIcon