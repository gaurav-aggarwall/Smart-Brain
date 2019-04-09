import React, { Component } from 'react';
import axios from 'axios';

import './Signin.css';

class SignIn extends Component{
    state = {
        email: '',
        password: ''
    };


    onEmailChange = event => {
        this.setState({email: event.target.value });
    }


    onPasswordChange = event => {
        this.setState({password: event.target.value });
    }

    // Data Fetch
    onSumitSignIn = () => { 
        const dataObj = JSON.parse(JSON.stringify({...this.state}));

        axios.post('/auth/login', dataObj)
        .then(res => res.data)
        .then(res => {
            if(res === 'Invalid Credentials'){
                this.props.routeChanger('login');
            } else {
                this.props.loadUser(res);
                this.props.routeChanger('home');
            }
        })
        .catch(console.log);
    }

    render(){
        return (
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l shadow-5 mw6 center signin">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f2 fw6 ph0 mh0">Sign In</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input onChange={this.onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input onChange={this.onPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                            </div>
                        </fieldset>
                        <div className="">
                            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" onClick={this.onSumitSignIn} value="Sign in" />
                        </div>
                        <div className="lh-copy mt3">
                            <p href="#0" className="f6 link dim black db pointer" onClick={() => this.props.routeChanger('register')}>Register</p>
                        </div>
                    </div>
                </main> 
            </article>     
        );
    };
}    

export default SignIn;
