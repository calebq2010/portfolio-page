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
                    <div className="section-one">
                        <div className="aboutMeDiv">
                            <p className="font-weight-bold">Currently I have been working in web development for 2 years. I most recently was a customer care analyst for CPR+ part of Mediware Information Systems as well as learning web development on the side of that. Typically my day to day then was to assist any technician on the floor with any issues but also assist 20 customers assigned directly to me if they need anything! I have been doing that since 2011 to recently leaving to begin my journey in the web site world! I have been self teaching myself full stack web development for almost 2 years now. I have just recently completed my first web site for an up and coming mobile electronics repair company.</p>
                                
                            <p className="font-weight-bold">I thrive most in a team environment but I am more then capable of working by myself. I think just working so many years in a team type job I have learning that this is what makes me do my best work. I have multiple years in IT because of this as well from assisting with application support, network related issues (terminal services, citrix, VMware) to advanced Microsoft SQL experience.</p>

                            <p className="font-weight-bold">I currently have my high school diploma with no college education besides one year at Columbus State Community college in criminal justice. I have also taken SQL certification courses through New Horizons Learning Center for basic and advanced SQL querying. I completed a tech school my Junior and Senior year as well for Interactive Media Design.</p>

                            <p className="font-weight-bold">Currently I am doing free lance work and exploring my options. If you would like to get into contact with me the best option is going to be via email: Calebq2010@gmail.com.</p>
                        </div>
                    </div>
                </div>
            </div>
                            
        );
    }
}

export default About;