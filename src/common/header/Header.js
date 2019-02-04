import React, { Component } from 'react';
import './Header.css';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';
import FormHelperText from '@material-ui/core/FormHelperText';
import BookShow from '../../screens/bookshow/BookShow';


const customStyles = {
    content:{
        top:'50%',
        left:'50%',
        right:'auto',
        bottom:'auto',
        marginRight: '-50%',
        transform:'translate(-50%,-50%)'
    }
}

const TabContainer = function(props){
    return(
        <Typography component="div" style={{padding:0, textAlign:'center'}}>
        {props.children}
        </Typography>
    )
}
TabContainer.prototype={
    children: PropTypes.node.isRequired
}

class Header extends Component{
    constructor()
    {
        super();
        this.state={
            modalIsOpen:false,
            value : 0,
            username : "",
            password:"",
            usernameRequired :"dispNone",
            passwordRequired :"dispNone",

            firstnameRequired :'dispNone',
            lastnameRequired :'dispNone',
            passwrdRequired :'dispNone',
            contactNumRequired :'dispNone',

            lastname:"",
            firstname:"",
            passwrd:"",
            contactnum:""

        };
    }

    openModalHandler = () =>{
        this.setState({value: 0});
        this.setState({username : ""});
        this.setState({password: ""});
        this.setState({usernameRequired : 'dispNone'});
        this.setState({passwordRequired:'dispNone'});


        this.setState({firstname : ""});
        this.setState({lastname: ""});
        this.setState({firstnameRequired : 'dispNone'});
        this.setState({lastnameRequired:'dispNone'});
        this.setState({modalIsOpen: true})
    }

    closeModalHandler = ()=>{
        this.setState ({modalIsOpen:false})
    }
    tabChangeHandler = (event,value)=>{
        this.setState({value});
    }
    loginClickHandler =()=>{
        
        this.state.username === "" ? this.setState({usernameRequired : 'dispBlock'}) : this.setState({usernameRequired : 'dispNone'}); 
     
        this.state.password === "" ? this.setState({passwordRequired : 'dispBlock'}) : this.setState({passwordRequired : 'dispNone'}); 
      
    }

    inputChangeHandler = (e) => {
        this.setState({username:e.target.value});
        this.setState({password:e.target.value});
    }

    registerClickHandler = () => {
       
       
        this.state.firstname === "" ? this.setState({firstnameRequired:'dispBlock'}) : this.setState({firstnameRequired:'dispNone'})
        this.state.lastname === "" ? this.setState({lastnameRequired:'dispBlock'}) : this.setState({lastnameRequired:'dispNone'})
        this.state.passwrd === "" ? this.setState({passwrdRequired:'dispBlock'}) : this.setState({passwrdRequired:'dispNone'})
        this.state.contactnum === "" ? this.setState({contactNumRequired:'dispBlock'}) : this.setState({contactNumRequired:'dispNone'})
        
    }

    registerChangeHandler = (e) =>{
        this.setState({firstname:e.target.value});
        this.setState({lastname:e.target.value});
        this.setState({passwrd:e.target.value});
        this.setState({contactnum:e.target.value});

    }

    bookshowHandler = () => {
        ReactDOM.render(<BookShow /> , document.getElementById('root'));

    }






    render(){
        return(
            <div>
                <header className ="app-header">
                     <img src= {logo} className = "app-logo" alt="logo"></img>
                     <div className="login-btn">
                          <Button variant = "contained" color="default" onClick={this.openModalHandler}>Login</Button>
                     </div>
                     {this.props.showBookShowButton === "true" ?
                     <div className="bookshow-button">
                     <Button variant="contained" color="primary" onClick={this.bookshowHandler}>Book Show</Button> 

                     </div>:""}
                     
                 </header>
                 
                <Modal ariaHideApp={false} isOpen = {this.state.modalIsOpen} contentLabel="Login"
                onRequestClose={this.closeModalHandler} style={customStyles}>
                <Tabs className = "tabs" value = {this.state.value} onChange={this.tabChangeHandler}>
                <Tab label="Login"></Tab>
                <Tab label="Register"></Tab>
                </Tabs>
                {this.state.value === 0 &&
                <TabContainer>
                    <FormControl required>
                        <InputLabel htmlFor="userName">UserName</InputLabel>
                        <Input name="userName" type="text" username={this.state.username} onChange={this.inputChangeHandler}></Input>
                        <FormHelperText className={this.state.usernameRequired}><span className="red">required</span></FormHelperText>
                    </FormControl>
                    <br /><br />
                    <FormControl>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input name="password" type="password" password={this.state.password} onChange={this.inputChangeHandler}></Input>
                        <FormHelperText className={this.state.passwordRequired}><span className="red">required</span></FormHelperText>
                    </FormControl><br/><br/>
                    <Button variant="contained" color="primary" onClick={this.loginClickHandler}>Login</Button>
                    </TabContainer>}

                    {this.state.value === 1 &&
                    <TabContainer>
                        <FormControl required>
                            <InputLabel htmlFor="firstName">First Name</InputLabel>
                            <Input name="firstName" type="text" firstname={this.state.firstname} onChange={this.registerChangeHandler}></Input>
                            <FormHelperText className={this.state.firstnameRequired}><span className="red">required</span></FormHelperText>
                        </FormControl><br/><br/>
                        <FormControl>
                        <InputLabel htmlFor="lastName">Last Name</InputLabel>
                            <Input name="lastName" type="text" lastname={this.state.lastname} onChange={this.registerChangeHandler}></Input>
                            <FormHelperText className={this.state.lastnameRequired}><span className="red">required</span></FormHelperText>
                        </FormControl>
                        <br/><br/>
                        <FormControl>
                        <InputLabel htmlFor="passwordReg">Password</InputLabel>
                            <Input name="passwordReg" type="password" onChange={this.registerChangeHandler}></Input>
                            <FormHelperText className={this.state.passwrdRequired}><span className="red">required</span></FormHelperText>
                        </FormControl>
                        <br/><br/>

                        <FormControl>
                        <InputLabel htmlFor="contactNo">Contact Number</InputLabel>
                            <Input name="contactNo" type="text" onChange={this.registerChangeHandler}></Input>
                            <FormHelperText className={this.state.contactNumRequired}><span className="red">required</span></FormHelperText>
                        </FormControl>
                        <br/><br/>
                        <Button variant="contained" color="primary" onClick={this.registerClickHandler}>Register</Button>
                    </TabContainer>
                    }


                </Modal>
            </div>
        )
    }
}

export default Header;

