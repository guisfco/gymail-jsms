import React, { Component } from 'react'
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

import '../EmailViewer/EmailViewer.css'
import { UsuarioService } from '../../services';

export default class FriendList extends Component {

    constructor() {
        super()
        this.state = {
            friends: [],
            keyword: ""
        }
    }

    componentDidMount() {
        UsuarioService.getUsuarios(UsuarioService.getToken(), this.state.keyword)
            .then((response) => {
                this.setState({
                    friends: response.data
                })
            })
    }

    renderFriends() {
        return this.state.friends.map((friend, index) => {
            return <CardHeader key={index}
                className="email-viewer-header"
                avatar={
                    <Avatar className="email-viewer-avatar">
                        {`${friend.firstName.substr(0, 1)}${friend.lastName.substr(0, 1)}`}
                    </Avatar>
                }
                title={`${friend.firstName} ${friend.lastName}`}
                subheader={friend.email}
            />
        })
    }

    render() {
        return (
            <div className="email-viewer-container">
                {this.renderFriends()}
            </div>

        )
    }
}
