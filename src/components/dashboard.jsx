
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import { createMuiTheme } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Typography from '@material-ui/core/Typography'
import Popper from '@material-ui/core/Popper'
import { Paper} from '@material-ui/core';
import { Button } from '@material-ui/core';
import image from '../assets/book.png'
import './dashboard.less'
import AddShoppingCartSharpIcon from '@material-ui/icons/AddShoppingCartSharp';
import { AppBar, InputBase } from '@material-ui/core'
import Pagination1 from '../components/pagination'
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
        MuiToolbar: {
            root: {
                marginTop:"-8px"
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
            anchorEl: null,
            open: false,
            currentPage:1
        }
    }
    handleChage(event){
    this.setState({
        anchorEl: (this.state.anchorEl ? null : event.currentTarget)
    })
}

    render() {
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        const id = open ? 'simple-popper' : undefined;  
        return (
            <div id="dashboard-appbar">
                <MuiThemeProvider theme={theme}>
                    <AppBar position="sticky" title="My App" className="appbar-class" 
                    style={{ backgroundColor: "Brown",
                     marginTop: "-7px" ,height:"48px"}}>
                        <Toolbar className="toolbar" >
                            <div className="bookstore">
                                {/* <img src={image} style={{height:"51px",backgroundColor:"Brown"}}></img> */}
                                <MenuBookIcon id="bookicon1"/>
                                <Typography variant="title"
                                    color="textPrimary"
                                    title="bookstore">
                                    <div className="bookstoretext"><h5 style={{ cursor: "pointer" }}>BookStore</h5></div>
                                </Typography>
                            </div>
                            <div className="search_box">
                                <InputBase className="input-text"
                                    type="searchIcon"
                                    placeholder="Search.." />
                                <SearchSharpIcon className="icon"/>
                            </div>
                            <div className="carttext">
                                <div><h5 style={{ cursor: "pointer" }}>Cart</h5></div>
                                <div><AddShoppingCartSharpIcon id="shopingcart"/> </div>
                            </div>
                        </Toolbar>
                    </AppBar>
                </MuiThemeProvider>
                <div className="textbutton">
                    <div className="booktext1">Books(15items)</div>
                    <Button id="btn" aria-describedby={id} onClick="handleChage(); return false;" >
                        <div className="sorttext">sort by relevence</div>
                    </Button>
                    <Popper id={id} open={open} anchorEl={anchorEl} style={{zIndex:"9999"}}>
                    <Paper className="sort-paper">
                        <Button>
                            hai
                        </Button>
                    </Paper>
                </Popper>
                </div>

                <BookCard1></BookCard1>
                <Pagination1></Pagination1>
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