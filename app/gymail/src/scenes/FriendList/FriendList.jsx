import React, { Component } from 'react'
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';

import './FriendList.css'
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
            return <div className=""><CardHeader key={index}
                className="friend-viewer-header"
                avatar={
                    <Avatar className="friend-viewer-avatar">
                        {`${friend.firstName.substr(0, 1)}${friend.lastName.substr(0, 1)}`}
                    </Avatar>
                }
                title={`${friend.firstName} ${friend.lastName}`}
                subheader={friend.email}
            />
            <Divider variant="inset" component="li" />
            </div>
        })
    }

    render() {
        return (
            <div className="friend-viewer-container">
                {this.renderFriends()}
            </div>

        )
    }
}
