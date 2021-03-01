import React from 'react'
import './Tab.css'



class Plist extends React.Component {


    render() {
        return (

            <div id='container' style={{ height: '100vh', width: '20vh', "overflowY": "auto", position: 'relative', float: 'right', backgroundColor: 'rgba(235, 233, 229, 1.0)' }}>
                <div style={{ position: 'relative', right: '0.8vh',textAlign:'center' }}>
                    <div ><h2>{this.props.covid.name} </h2></div>
                    <div ><h3>{this.props.covid.address}</h3></div>
                    <div ><h3>{this.props.covid.city}</h3></div>

                    <div></div>
                    <div className="ui relaxed divided list" >

                        {this.props.covid.datetime.map(datetime => {
                            return (
                                <div key={datetime.key} className="item">

                                    <div className="content">
                                        <h3 className="header">{datetime.date}</h3>
                                        <div className="description">{datetime.time_start + "-" + datetime.time_end}</div>
                                    </div>
                                </div>
                            );
                        })}

                    </div>
                </div>
            </div>



        );
    }
}


export default Plist;