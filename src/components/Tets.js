import React from 'react'
import './Tab.css'
import InfiniteScroll from 'react-infinite-scroll-component';



class Test extends React.Component {


    render() {
        console.log(this.props.covid.datetime.length);
                                        
        return (

            // <div id='container right' style={{ height: '720px', width: '310px',"overflow": "scroll",position:'relative'}}>
            <div id='container' style={{ height: '700px', width: '230px',"overflow-y": "auto",position:'relative',float:'right' }}>

            <div className="r-text  "><h2>{this.props.covid.name} </h2></div>

                <div className="ui relaxed divided list">
                    
                    {this.props.covid.datetime.map(datetime => {
                        return (
                            <div className="item r-text">

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


export default Test;