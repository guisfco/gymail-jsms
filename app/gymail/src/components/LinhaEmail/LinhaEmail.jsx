import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography from '@material-ui/core/Typography';

import './LinhaEmail.css'

export default class LinhaEmail extends Component {
    render() {
        return (
            <div onClick={() => this.props.viewer(this.props.position)} className="linha-email-onclick">
                <ListItem alignItems="flex-start" className={!this.props.isRead && "linha-email-nao-lido"} >
                    {console.log(this.props.isRead)}
                    <ListItemAvatar>
                        <Avatar className="linha-email-avatar">{this.props.initials}</Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={this.props.subject || "(Sem assunto)"}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    className="linha-email-typography"
                                    component="span"
                                    variant="body2"
                                    color="textPrimary"
                                >
                                    {this.props.recipient}
                                </Typography>
                                {` — ${this.props.content}`}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
            </div>
        )
    }
}
