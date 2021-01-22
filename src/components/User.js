import React, { Component } from 'react'
import UsersDB from "../api/UsersDB.json"
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export default class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
        }
    }

    componentDidMount() {
        this.handleUsers()
    }

    handleUsers() {
        const users = UsersDB.Data;
        this.setState({ users })
    }
    render() {
        const { users } = this.state;

        return (
            <>
                <Typography align="center" variant="h4">Usuários</Typography>
                <Grid container spacing={4}>

                    {users.map((user, i) => (
                        <Grid key={i} item xs={4}>
                            <Card>
                                <CardContent>
                                    <Typography color="textSecondary" gutterBottom>
                                        <span style={{ color: "black" }}>Nome:</span>
                                        {user.name}
                                    </Typography>
                                    <Typography color="textSecondary" gutterBottom>
                                        <span style={{ color: "black" }}>Idade:</span>
                                        {user.age}
                                    </Typography>
                                    <Typography  style={{ color: "black" }}>Descrição:</Typography>
                                    <Typography color="textSecondary" gutterBottom>
                                        {user.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button variant="outlined" color="primary" size="small">ver</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

            </>
        )
    }
}
