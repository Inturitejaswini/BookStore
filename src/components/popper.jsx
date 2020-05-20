import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { Paper,Popper,Button,IconButton} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
export class MoreComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            anchorEl: null,
            open: false,
        }
    }
    handlemoremenu(event) {
        this.setState({
            anchorEl: (this.state.anchorEl ? null : event.currentTarget)
        })
    }
    
    render() {
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        const id = open ? 'simple-popper' : undefined;
        return (
            <div>
                <IconButton className="morevert"
                    aria-describedby={id} type="button" onChange={this.handlemoremenu}>
                    <div className="moreverticon" title="more"><MoreVertIcon /></div>
                </IconButton>
                <Popper id={id} open={open} anchorEl={anchorEl}>
                    <Paper className="more-paper">
                        <Button id="lablebutton1">
                            <div className="delete">
                                Delete note</div>
                        </Button>
                    </Paper>
                </Popper>
            </div>
        )
    }
}

export default withRouter(MoreComponent)