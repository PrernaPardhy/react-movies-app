import React, { Component } from 'react';
 import ReactDOM from 'react-dom';
 import Header from '../../common/header/Header';
 import Typography from '@material-ui/core/Typography';
 import Home from '../../screens/home/Home';
 import './BookShow.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import location from '../../common/location';
import language from '../../common/Language';
import showDate from '../../common/showDate';
import showTime from '../../common/showTime';
import  MenuItem  from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';


 class BookShow extends Component {
     constructor(){
         super();
         this.state={
             location : "",
             language : "",
             showDate:"",
             showTime:"",
             tickets : 0,
             unitPrice:500,
             availableTickets :20
         }
     }

    backToHomeHandler = () => {
        ReactDOM.render(<Home />,document.getElementById('root'));
    }

    locationChangeHandler = event => {
        this.setState ({location : event.target.value})
    }

    languageChangeHandler = event => {
        this.setState ({language : event.target.value})
    }

    showdateHandler = event => {
        this.setState({showDate:event.target.value});
    }

    showtimeeHandler = event => {
        
        this.setState ({showTime : event.target.value});
    }

    ticketchnageHandler = event => {
        this.setState({tickets : event.target.value});
    }

     render(){
         return(
             <div>
                 <Header />
                 <div className="back">
                <Typography  className="bookShow" onClick={this.backToHomeHandler} >
                    &#60; Back To Home
                </Typography>
                <Card className="cardStyle">
                        <CardContent>
                            <Typography variant="headline" component="h2">
                                BOOK SHOW
                            </Typography><br />

                            <FormControl required className="formControl">
                                <InputLabel htmlFor="location">Choose Location:</InputLabel>
                                <Select
                                    value={this.state.location}
                                    onChange={this.locationChangeHandler}
                                >
                                    {location.map(loc => (
                                        <MenuItem key={"loc" + loc.id} value={loc.location}>
                                            {loc.location}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                                        <br />
                            <FormControl required className="formControl">
                                <InputLabel>Choose Language :</InputLabel>
                                <Select 
                                value= {this.state.language} onChange = {this.languageChangeHandler}>
                                {language.map (lan =>(
                                    <MenuItem key={"lan" + lan.id} value={lan.language}>
                                        {lan.language}
                                    </MenuItem>
                                ))}
                                </Select>
                            </FormControl> <br/>

                            <FormControl required className = "formControl">
                                    <InputLabel>Choose Show Date : </InputLabel>
                                    <Select value = {this.state.showDate} onChange ={this.showdateHandler}>
                                        {showDate.map (showdt =>(
                                            <MenuItem key = {"showdt"+showdt.id} value={showdt.showDate}>
                                                {showdt.showDate}
                                            </MenuItem>

                                        ))}
                                    </Select>
                            </FormControl><br/>

                            <FormControl required className = "formControl">
                                    <InputLabel>Choose Show Time : </InputLabel>
                                    <Select value = {this.state.showTime} onChange ={this.showtimeeHandler}>
                                        {showTime.map (showtime =>(
                                            <MenuItem key = {"showdt"+showtime.id} value={showtime.showTime}>
                                                {showtime.showTime}
                                            </MenuItem>

                                        ))}
                                    </Select>
                            </FormControl>

                            <FormControl required className="formControl">
                                <InputLabel htmlFor="tickets">Tickets : ({this.state.availableTickets} available )</InputLabel>
                                <Input id="tickets" value={this.state.tickets !== 0 ? this.state.tickets : ""} onChange={this.ticketchnageHandler}>
                                </Input>
                            </FormControl><br/><br/>
                            <Typography>Unit Price : {this.state.unitPrice}</Typography><br/>
                            <Typography>
                                Total Price: Rs.{this.state.unitPrice * this.state.tickets}
                            </Typography><br/>
                            <Button variant="contained" onClick={this.bookshowButtonHandler} color="primary">
                            Book Show </Button>
                                    

                        </CardContent>
                    </Card>
             </div>
             </div>

             

         )
     }
 }

 export default BookShow;