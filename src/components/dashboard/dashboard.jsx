
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import { createMuiTheme } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Typography from '@material-ui/core/Typography'
import Popper from '@material-ui/core/Popper'
import { Paper } from '@material-ui/core';
import { Button } from '@material-ui/core';
import data from "../../assets/bookDetails.json";
// import image from '../assets/book.png'
import './dashboard.less'
import AddShoppingCartSharpIcon from '@material-ui/icons/AddShoppingCartSharp';
import { AppBar, InputBase } from '@material-ui/core'
import Pagination from '../pagination'
import BookCard from '../bookCard'

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
                marginTop: "-8px"
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
            book_Details:data.book_Details,
            currentPage: 1,
            postsPerPage: 3,
        }
        this.paginate = this.paginate.bind(this)
    }
    paginate(pageNumber) {
        console.log("pagenumber",pageNumber)
        this.setState({
            currentPage:pageNumber
        })
        console.log("currentpage",this.state.currentPage)
    }

    render() {
        const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
        const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
        const currentPosts = this.state.book_Details.slice(indexOfFirstPost, indexOfLastPost);

        return (
            <div id="dashboard-appbar">
                <MuiThemeProvider theme={theme}>
                    <AppBar position="sticky" title="My App" className="appbar-class"
                        style={{
                            backgroundColor: "Brown",
                            marginTop: "-7px", height: "48px",width:"103%",
                            marginLeft: "-30px"}}>
                        <Toolbar className="toolbar" >
                            <div className="bookstore">
                                {/* <img src={image} style={{height:"51px",backgroundColor:"Brown"}}></img> */}
                                <MenuBookIcon id="bookicon1" />
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
                                <SearchSharpIcon className="icon" />
                            </div>
                            <div className="carttext">
                                <div><h5 style={{ cursor: "pointer" }}>Cart</h5></div>
                                <div><AddShoppingCartSharpIcon id="shopingcart" /> </div>
                            </div>
                        </Toolbar>
                    </AppBar>
                </MuiThemeProvider>
                <div className="textbutton">
                    <div className="booktext1">Books(15items)</div>
                    <Button id="btn" >
                        <div className="sorttext">sort by relevence</div>
                    </Button>
                </div>
                <BookCard 
                book_Details={this.state.filterArray ? this.state.filterArray:currentPosts}></BookCard>
                <Pagination
                 postsPerPage={this.state.postsPerPage}
                 totalPosts={this.state.book_Details.length}
                 pagination={this.paginate}
                ></Pagination>
                <div>
                    <AppBar position="sticky" title="My App" id="bottomappbar" 
                    style={{ backgroundColor: "black", height: "48px" ,marginTop: "102px",
                    width: "103%", marginLeft: "-29px"}}>
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