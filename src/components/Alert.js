import React, { Component } from 'react'
import { Confirm } from 'semantic-ui-react'

class Alert extends Component {
  state = { open: true }

  show = () => this.setState({ open: true })
  handleConfirm = () => this.setState({ open: false })
  handleCancel = () => this.setState({ open: false })

  render() {
    return (
      <div>
      
        <Confirm
          //open={this.state.open}
          open={this.props.open}
          header="Change your location?"
          content=""
          cancelButton='No'
          confirmButton="Let's do it"
          onCancel={this.props.onCancel}
          onConfirm={this.props.onConfirm}
        />
      </div>
    )
  }
}

export default Alert
