
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import { createMuiTheme } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import MenuBookIcon from '@material-ui/icons/MenuBook';
// import data from "../../assets/bookDetails.json";
// import './dashboard.less'
import AddShoppingCartSharpIcon from '@material-ui/icons/AddShoppingCartSharp';
import { AppBar, InputBase } from '@material-ui/core'

const theme = createMuiTheme({
    overrides: {
        MuiAppBar: {
            colorPrimary: {
                color: "white",
                backgroundColor: " white"
            }
        },
        MuiIconButton: {
            root: {
                padding: "6PX",
                fontSize: "0.5em"
            }
        },
        MuiToolbar: {
            root: {
                marginTop: "-8px",
                display: "flex",
                alignitems: "center",
                marginright: "139px",
                margin: "auto",
                marginblockstart: "-8px"
            }
        },
        MuiOutlinedInput: {
            padding: "18.5px 14px",
            width: "px",
            height: "3px"
        },
        MuiInputBase: {
            input: {
                font: "inherit",
                color: "block",
                width: "100px",
                border: 0,
                height: "1.1875em",
                margin: 0,
                display: "block",
                padding: "0px 0px",
                minwidth: 0,
                background: "none",
                boxsizing: "content-box",
                animationname: "MuiInputBase-keyframes-auto-fill-cancel",
                webkittaphighlightcolor: "transparent"
            }
        },
        MuiSvgIcon: {
            root: {
                fill: "wheat",
                fontsize: "2.5rem"
            }
        }
    },
})
export class AppBar1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialState: "Search...",
            currentText: " ",
            open: false,
            anchorEl: null,
            open: false,
        }
    }
   
    render() {
       
        return (
            <div id="dashboard-appbar">
                <MuiThemeProvider theme={theme}>
                    <AppBar position="sticky" id="appbar-class"
                        style={{
                            backgroundColor: "Brown"
                        }}>
                        <div id="App-icons">
                            <div className="bookstore">
                                <MenuBookIcon id="bookicon1" />
                                <h5 style={{ cursor: "pointer" }} className="bookstoretext">BookStore</h5>
                            </div>
                            <div className="search_box">
                                <InputBase className="input-text" type="searchIcon" placeholder="Search.." />
                                <SearchSharpIcon className="icon" />
                            </div>
                            <div className="carttext">
                                <h5 style={{ cursor: "pointer" }}>Cart</h5>
                                <AddShoppingCartSharpIcon id="shopingcart" />
                            </div>
                        </div>
                    </AppBar>
                </MuiThemeProvider>
            </div >
        )
    }
}
export default withRouter(AppBar1)