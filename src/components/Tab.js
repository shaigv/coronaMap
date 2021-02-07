import React from 'react'
import './Tab.css';



class Tab extends React.Component {

    renderDateTime() {
        return (
            <div id='container' style={{ height: '630px', width: '100%',"overflow-y": "auto",position:'relative',float:'right' }}>
            {/* <div id='container' style={{ height: '650px', width: '277px',"overflow-y": "auto",,position:'relative' }}> */}

                <table className=" ui celled table ">
                    <thead  >
                        <tr style={{"text-align":"right",width:'100%'}} >
                            <th  >עד שעה</th>
                            <th >משעה</th>
                            <th  >תאריך</th>

                        </tr></thead>

                    <tbody >
                        {this.props.covid.datetime.map(datetime => {
                            return (
                                <tr style={{"text-align":"right"}}>

                                    <td  data-label="עד שעה">{datetime.time_end}</td>
                                    <td data-label="משעה">{datetime.time_start}</td>
                                    <td data-label="תאריך">{datetime.date}</td>
                                </tr>
                            );
                        })}

                    </tbody>
                </table>
            </div>
        );



    }
    render() {
        return (
            <div >
                <div className="r-text  "><h2>{this.props.covid.name} </h2></div>
                <div >{this.renderDateTime()}</div>
            </div>
        );
    }
}







export default Tab;