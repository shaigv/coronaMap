import React, { Component } from 'react'
import { Confirm } from 'semantic-ui-react'
import './Tab.css';


class Alert extends Component {
  state = { open: true }

  show = () => this.setState({ open: true })
  handleConfirm = () => this.setState({ open: false })
  handleCancel = () => this.setState({ open: false })

  render() {
    return (
      <div>
      
        <Confirm
          
          style={{textAlign:'right',float:'left'}}
          open={this.props.open}
          header="?האם לשנות את המיקום"
          content=""
          cancelButton='לא'
          confirmButton="כן "
          onCancel={this.props.onCancel}
          onConfirm={this.props.onConfirm}
          size='tiny'
        >
          </Confirm>
      </div>
    )
  }
}

export default Alert
