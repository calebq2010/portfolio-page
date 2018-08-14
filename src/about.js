import React, { Component } from "react";
import ImageOfMe from './Me.JPG';

class About extends Component {
    render(){
        return(
            <div className="jumboSize">
                <div className="jumbotron">
                    <img src={ImageOfMe} className="mx-auto d-block img-responsive aboutImg" alt="Avatar" />
                    <h1 className="h1 text-center">Caleb D. Quinn</h1>
                    <h2 className="h2 text-center"><u>About Me!</u></h2>
                </div>
            </div>
                            
        );
    }
}

export default About;