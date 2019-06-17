import React, { Component } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

import './EmailViewer.css'

export default class EmailViewer extends Component {
    render() {
        return (
            <div className="email-viewer-container">
                <CardHeader
                    className="email-viewer-header"
                    avatar={
                        <Avatar className="email-viewer-avatar">
                            {this.props.initials}
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="Settings">
                            <DeleteIcon onClick={() => this.props.deleteEmail(this.props.id)}/>
                        </IconButton>
                    }
                    title={this.props.subject}
                    subheader={this.props.recipient}
                />
                <span className="email-viewer-content">
                    {this.props.content}
                </span>
            </div>

        )
    }
}
