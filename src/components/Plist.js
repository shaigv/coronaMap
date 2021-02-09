import React from 'react'
import './Tab.css'



class Plist extends React.Component {


    render() {                                        
        return (

            <div id='container' style={{ height: '700px', width: '230px',"overflowY": "auto",position:'relative',float:'right' }}>

            <div className="r-text  "><h2>{this.props.covid.name} </h2></div>

                <div className="ui relaxed divided list">
                    
                    {this.props.covid.datetime.map(datetime => {
                        return (
                            <div key={datetime.key} className="item r-text">

                                <div className="content">
                                    <h3 className="header">{datetime.date}</h3>
                                    <div className="description">{datetime.time_start +"-"+datetime.time_end}</div>
                                </div>
                            </div>
                        );
                    })}
                    
                </div>
            </div>

           

        );
    }
}


export default Plist;