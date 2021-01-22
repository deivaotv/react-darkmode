import React, { Component } from 'react';
import { Navigation, Menu, Item } from "./styled";
import Switch from '@material-ui/core/Switch';

import { connect } from 'react-redux';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "#fff",
            textColor: "#000",
            darkMode: false,
            checked: false
        }
    }

    componentDidMount() {
        console.log(this.props)
    }

    handleChange = (e) => {
        const checked = e.target.checked
        this.setState({ ...this.state, checked })
        this.darkMode(checked);
    }

    darkMode = (darkMode) => {

        if (darkMode === true) {
            const color = "#000"
            const textColor = "#fff"
            this.setState({ color, textColor, darkMode: true })
        } else {
            const color = "#fff"
            const textColor = "#000"
            this.setState({ color, textColor, darkMode: false })
        }
    }

    render() {
        const { color, textColor, darkMode, checked } = this.state;
        return (
            <Navigation color={color}>
                <Menu textColor={textColor}>
                    <Item>Home</Item>
                    <Item>Contact</Item>
                    <Item onClick={() => this.darkMode(darkMode)}
                        float="right"
                    >
                        <Switch
                            checked={checked}
                            onChange={(e) => this.handleChange(e)}
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                        />
                    </Item>

                </Menu>
            </Navigation>
        );
    }
}

const mapStateToProps = store => ({
    checked: store.darkMode
});

export default connect(mapStateToProps)(Navbar);