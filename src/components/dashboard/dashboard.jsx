
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { createMuiTheme ,MuiThemeProvider,Button,AppBar, InputBase,Badge} from '@material-ui/core';
import {SearchSharpIcon,MenuBookIcon,ShoppingCart} from '@material-ui/icons';
import data from "../../assets/bookDetails.json";
import './dashboard.less'
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
export class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialState: "Search...",
            currentText: " ",
            open: false,
            anchorEl: null,
            open: false,
            book_Details: data.book_Details,
            currentPage: 1,
            postsPerPage: 8,
            cart: "",
            imagecomparing: ""
        }
        this.paginate = this.paginate.bind(this)
        this.cartchangee = this.cartchangee.bind(this)
    }
    paginate(pageNumber) {
        this.setState({
            currentPage: pageNumber
        })
    }
    cartchangee(value1, value2) {
        this.setState({
            cart: value1,
            imagecomparing: value2
        })
    }
    handleClickAway() {
        this.setState({
            anchorEl: null
        })
    }
    shopingCart() {
        this.props.history.push('/cartDetails')
    }
    render() {
        const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
        const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
        const currentPosts = this.state.book_Details.slice(indexOfFirstPost, indexOfLastPost);
        return (
            <div id="dashboard-appbar">
                <MuiThemeProvider theme={theme}>
                    <AppBar position="sticky" id="appbar-class">
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
                                <h5 >Cart</h5>
                                {this.state.cart ? (
                                    <div style={{ color: "white" }} onClick={()=>this.shopingCart()}>
                                        <Badge badgeContent={1} color="secondary" >
                                            <ShoppingCart style={{ cursor: "pointer" }}/>
                                        </Badge>
                                    </div>
                                ) : (
                                        <div >
                                            <ShoppingCart />
                                        </div>
                                    )}
                            </div>
                        </div>
                    </AppBar>
                </MuiThemeProvider>
                <div className="textbutton">
                    <div className="booktext">
                        <span className="class">Books</span>
                        <span className="Items">(15 items)</span>
                    </div>
                    <Button id="btn" onClick={() => this.handlecolormenu}>
                        <div className="sorttext">sort by relevence</div>
                    </Button>
                </div>
                <BookCard
                    cartchange={this.cartchangee}
                    book_Details={this.state.filterArray ? this.state.filterArray : currentPosts}></BookCard>
                <Pagination
                    postsPerPage={this.state.postsPerPage}
                    totalPosts={this.state.book_Details.length}
                    pagination={this.paginate}
                ></Pagination>
                <div>
                    <AppBar position="sticky" id="bottomappbar">
                        <div className="appbar2">Copyright@2020,Bookstore Private Limited.All Rights Reserved</div>
                    </AppBar>
                </div>
            </div >
        )
    }
}
export default withRouter(Dashboard)