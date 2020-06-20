import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import data from '../../assets/bookDetails.json';
import AddToCard from '../addToCart';
import { AppBar1 } from '../appBar'
import './CartDetails.less'
import { Card, TextField, Radio, FormLabel, FormControl, FormControlLabel, RadioGroup, AppBar,MuiThemeProvider,createMuiTheme, Divider, Button} from '@material-ui/core';
const theme = createMuiTheme({
    overrides: {
        MuiButton: {
            root: {
                minWidth: "40px"
            }
        },
        MuiButton: {
            text: {
                padding: " 6px 8px",
                minWidth: "40px"
            }
        }
    },
})
class CartDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            book_Details: [],
            clicks: 0,
            show: true,
            open1: false,
            open2: false
        }
    }
    IncrementItem() {
        this.setState({ clicks: this.state.clicks + 1 });
    }
    DecreaseItem() {
        this.setState({ clicks: this.state.clicks - 1 });
    }
    ToggleClick() {
        this.setState({ show: !this.state.show });
    }
    handleCard() {
        this.setState({
            open1: true
        })
    }
    handleContinueBtn() {
        this.setState({
            open2: true
        })
    }
    checkoutBtn() {
        this.props.history.push('/bookDetails')
    }
    handleChange(event) {
        setValue(event.target.value);
    };

    render() {
        const token = localStorage.compareimage
        return (
            <div>
                <AppBar1></AppBar1>
                <Card className="Cart-card">
                    <div>
                        <h4 className="carttext1">My Cart(2)</h4>
                        {token.split(",").map(key1 => {
                            return (
                                <div className="get-card">
                                    {
                                        data.book_Details.map((books, id) => {
                                            if (key1 == books.logo) {
                                                return (
                                                    <div>
                                                        <div key={id} className="card1">
                                                            <MuiThemeProvider theme={theme}>
                                                                <div className="bookdetails">
                                                                    <div>
                                                                        <a href={books.url}>
                                                                            <img src={books.logo} className="cardimage" />
                                                                        </a>
                                                                    </div>
                                                                    <div style={{ backgroundColor: "white" }} className="carddown">
                                                                        {books.roles.map(function (role, id) {
                                                                            return <div key={id} id="cardtext2">
                                                                                <h5>{role.title}</h5>
                                                                                <div className="authorname">
                                                                                    <span>{role.authorname}</span>
                                                                                </div>
                                                                                <div className="price">
                                                                                    <p>{role.price}</p>
                                                                                </div>
                                                                            </div>
                                                                        })}
                                                                    </div>
                                                                </div>
                                                                <AddToCard logo={books.logo} addtocarthandling={this.addcart}></AddToCard>
                                                            </MuiThemeProvider>
                                                        </div>
                                                    </div>)
                                            }
                                        })}
                                </div>)
                        })}
                        <div className="inc-dec-btn">
                            <div className="increment">
                                <Button onClick={() => this.IncrementItem()}>
                                    <span id="plus">+</span>
                                </Button>
                            </div>
                            <div className="count">{this.state.show ? <h2 id="number">{this.state.clicks}</h2> : ''}</div>
                            <div className="decrement"> <Button onClick={() => this.DecreaseItem()} >
                                <span id="minus">-</span>
                            </Button></div>
                            <div className="toggle-btn"><Button onClick={() => this.ToggleClick()} >
                                {this.state.show ? 'Remove' : 'Remove'}
                            </Button>
                            </div>
                        </div>
                        <div className="placeorder-btn">
                            <Button onClick={() => this.handleCard()}>
                                <span id="order-text">
                                    PlaceOrder
                            </span>
                            </Button>
                        </div>
                    </div>
                </Card>
                {!this.state.open1 ? (
                    <div >
                        <Card className="card-div2">
                            <h4 id="customer-text">Customer Details</h4>
                        </Card>
                    </div>)
                    : (
                        <div>
                            <Card className="card-dive3">
                                <h4 id="customer-text">Customer Details</h4>
                                <div>
                                    <div id="textfeild">
                                        <TextField className="namefeild" id="outlined-Name-input" label="Name" type="Name" autoComplete="current-Name" variant="outlined" />
                                        <TextField id="outlined-Phone Number-input" label="Phone Number" type="Phone Number" autoComplete="current-Phone Number" variant="outlined" />
                                    </div>
                                    <div id="textfeild">
                                        <TextField id="outlined-Pincode-input" label="Pincode" type="Pincode" autoComplete="current-Pincode" variant="outlined" />
                                        <TextField id="outlined-Locality-input" label="Locality" type="Locality" autoComplete="current-Locality" variant="outlined" />
                                    </div>
                                    <div id="textfeild">
                                        <TextField
                                            className="addressname"
                                            id="outlined-Address-input"
                                            label="Address"
                                            type="Address"
                                            autoComplete="current-Address"
                                            variant="outlined"
                                        />
                                    </div>
                                    <div id="textfeild">
                                        <TextField
                                            id="outlined-City/Town-input"
                                            label="City/Town"
                                            type="City/Town"
                                            autoComplete="current-City/Town"
                                            variant="outlined"
                                        />
                                        <TextField
                                            id="outlined-Landmark-input"
                                            label="Landmark"
                                            type="Landmark"
                                            autoComplete="current-Landmark"
                                            variant="outlined"
                                        />
                                    </div>
                                    <div>
                                        <FormControl component="fieldset">
                                            <div className="formlabel"><FormLabel component="legend">Type</FormLabel></div>
                                            <RadioGroup aria-label="gender" name="gender1" onClick={() => handleChange()}>
                                                <div className="radio-btns">
                                                    <div><FormControlLabel value="Home" control={<Radio />} label="Home" /></div>
                                                    <div><FormControlLabel value="Work" control={<Radio />} label="Work" /></div>
                                                    <div><FormControlLabel value="other" control={<Radio />} label="Other" /></div>
                                                </div>
                                            </RadioGroup>
                                        </FormControl>
                                    </div>
                                    <div className="continue-btn">
                                        <Button onClick={() => this.handleContinueBtn()}>
                                            <h4 className="continue-text">
                                                Continue
                                           </h4>
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    )}
                {!this.state.open2 ? (
                    <div >
                        <Card className="card-div2">
                            <h4 id="customer-text">Order Summery</h4>
                        </Card >
                    </div >)
                    : (<div>
                        <Card className="card-div5">
                            <h4 id="customer-text">Order Summery</h4>
                            {token.split(",").map(key1 => {
                                return (
                                    <div className="get-card">
                                        {
                                            data.book_Details.map((books, id) => {
                                                if (key1 == books.logo) {
                                                    return (
                                                        <div>
                                                            <div key={id} className="card1">
                                                                <MuiThemeProvider theme={theme}>
                                                                    <div className="bookdetails">
                                                                        <div>
                                                                            <a href={books.url}>
                                                                                <img src={books.logo} className="cardimage" />
                                                                            </a>
                                                                        </div>
                                                                        <div style={{ backgroundColor: "white" }} className="carddown">
                                                                            {books.roles.map(function (role, id) {
                                                                                return <div key={id} id="cardtext2">
                                                                                    <h5>{role.title}</h5>
                                                                                    <div className="authorname">
                                                                                        <span>{role.authorname}</span>
                                                                                    </div>
                                                                                    <div className="price">
                                                                                        <p>{role.price}</p>
                                                                                    </div>
                                                                                </div>
                                                                            })}
                                                                        </div>
                                                                    </div>
                                                                    <AddToCard logo={books.logo} addtocarthandling={this.addcart}></AddToCard>
                                                                </MuiThemeProvider>
                                                            </div>
                                                        </div>)
                                                }
                                            })}
                                    </div>)
                            })}
                            <div className="checkout-btn">
                                <Button onClick={() => this.checkoutBtn()}>
                                    <h4 className="checkout-text">
                                        Checkout
                               </h4>
                                </Button>
                            </div>
                        </Card>
                    </div>)}
                <div>
                    <AppBar position="sticky" id="bottomappbar2">
                        <div className="appbar2">Copyright@2020,Bookstore Private Limited.All Rights Reserved</div>
                    </AppBar>
                </div>
            </div>
        );
    }
}

export default withRouter(CartDetails);