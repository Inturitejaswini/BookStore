
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import { createMuiTheme } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Typography from '@material-ui/core/Typography'
import './dashboard.less'
import AddShoppingCartSharpIcon from '@material-ui/icons/AddShoppingCartSharp';
import { AppBar, InputBase, Button } from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination';
import BookCard1 from './bookCard';
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
export class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialState: "Search...",
            currentText: " ",
            open: false,
        }
    }

    
    render() {
        return (
            <div id="dashboard-appbar">
                <MuiThemeProvider theme={theme}>
                    <AppBar position="sticky" title="My App" className="appbar-class" style={{ backgroundColor: "Brown", marginTop: "-7px" }}>
                        <Toolbar className="toolbar" >
                            <div className="bookstore">
                                <MenuBookIcon />
                                <Typography variant="title"
                                    color="textPrimary"
                                    title="bookstore">
                                    <div className="bookstoretext"><h5 style={{ cursor: "pointer" }}>BookStore</h5></div>
                                </Typography>
                            </div>
                            <div className="search_box">
                                <InputBase className="input-text"
                                    type="searchIcon"
                                    placeholder="search.." />
                                <SearchSharpIcon className="icon"/>
                            </div>
                            <div className="carttext">
                                <div><h5 style={{ cursor: "pointer" }}>Cart</h5></div>
                                <div><AddShoppingCartSharpIcon /> </div>
                            </div>
                        </Toolbar>
                    </AppBar>
                </MuiThemeProvider>
                <div className="textbutton">
                    <div className="booktext1">Books(15items)</div>
                    <Button id="btn">
                        <div className="sorttext">sort by relevence</div>
                    </Button>
                </div>
                <BookCard1></BookCard1>
                <div className="pagination">
                    <Pagination count={10} color="primary" className="paginationnumber" />
                </div>
                <div>
                    <AppBar position="sticky" title="My App" className="appbar-class" style={{ backgroundColor: "black", height: "36px" }}>
                        <Toolbar className="toolbar" >
                            <div className="appbar2">Copyright@2020,Bookstore Private Limited.All Rights Reserved</div>
                        </Toolbar>
                    </AppBar>
                </div>
            </div >
        )
    }
}
export default withRouter(Dashboard)