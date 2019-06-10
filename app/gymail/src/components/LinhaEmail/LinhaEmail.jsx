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
            <React.Fragment>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar src="https://a-static.mlcdn.com.br/618x463/painel-peppa-pig-grande-e-v-a-piffer/extrafestas/1328/510d12f496952059591be610caa0f45c.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary={this.props.assunto}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    className="linha-email-typography"
                                    component="span"
                                    variant="body2"
                                    color="textPrimary"
                                >
                                    {this.props.remetente}
                                </Typography>
                                {` — ${this.props.conteudo}`}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
            </React.Fragment>
        )
    }
}
