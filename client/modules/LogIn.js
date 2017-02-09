import React from 'react'
import { connect } from 'react-redux'
import NavLink from './NavLink'
import FormComponent from './formComponent'
import SubmitButton from './SubmitButton'
import { setAuthInput, submitLoginUser } from '../actions/userActions'
import { handleItemChange } from '../helpers/changeHandlers'

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.handleItemChange = handleItemChange.bind(null, setAuthInput);
  }

  handleSubmit(event) {
    event.preventDefault();
    //post here
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-horizontal">
        <div className="space"></div>
        <div className="space"></div> 
        <h1 className="text-center">
          Welcome back! Log in to your account:
        </h1>
        <div className="space">
        </div>         
        <div className="form-group">
          <FormComponent name='username' value={this.props.authFormInput.username} onChange={this.handleItemChange} />
          <FormComponent name='password' value={this.props.authFormInput.password} onChange={this.handleItemChange} />
        </div>
        <SubmitButton />
      </form>
    );
  }
}

export default connect(({ authFormInput }) => { return { authFormInput }; })(LogIn);
