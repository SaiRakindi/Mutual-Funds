import {Component} from 'react'

import './index.css'

class SignupForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    gender: '',
    dob: '',
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeEmail = event => {
    this.setState({email: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeGender = event => {
    this.setState({gender: event.target.value})
  }

  onChangeDOB = event => {
    this.setState({dob: event.target.value})
  }

  renderSignupNameField = () => {
    const {name} = this.state

    return (
      <>
        <label className="input-label" htmlFor="name">
          NAME
        </label>
        <input
          type="text"
          id="name"
          className="input-field"
          value={name}
          onChange={this.onChangeName}
          placeholder="Name"
        />
      </>
    )
  }

  renderSignupEmailField = () => {
    const {email} = this.state

    return (
      <>
        <label className="input-label" htmlFor="email">
          EMAIL
        </label>
        <input
          type="email"
          id="email"
          className="input-field"
          value={email}
          onChange={this.onChangeEmail}
          placeholder="Email"
        />
      </>
    )
  }

  renderSignupPasswordField = () => {
    const {password} = this.state

    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="input-field"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </>
    )
  }

  renderSignupGenderField = () => {
    const {gender} = this.state
    return (
      <>
        <label className="input-label" htmlFor="gender">
          GENDER
        </label>
        <select id="gender" className="input-field">
          <option value={gender}>Male</option>
          <option value={gender}>Female</option>
          <option value={gender}>Third Gender</option>
        </select>
      </>
    )
  }

  renderSignupDOBField = () => {
    const {dob} = this.state

    return (
      <>
        <label htmlFor="dob" className="input-label">
          Date of Birth
        </label>
        <input
          type="date"
          id="dob"
          value={dob}
          className="input-field"
          onChange={this.onChangeDOB}
        />
      </>
    )
  }

  onSubmitForm = event => {
    event.preventDefault()
  }

  render() {
    return (
      <div className="sign-up-container">
        <h1 className="sign-up-heading">Signup Form</h1>
        <form className="form-container" onSubmit={this.onSubmitForm}>
          <div className="input-container">{this.renderSignupNameField()}</div>
          <div className="input-container">{this.renderSignupEmailField()}</div>
          <div className="input-container">
            {this.renderSignupPasswordField()}
          </div>
          <div className="input-container">
            {this.renderSignupGenderField()}
          </div>
          <div className="input-container">{this.renderSignupDOBField()}</div>
          <button
            type="button"
            className="sign-up-button"
            onSubmit={this.onSubmitButton}
          >
            Sign Up
          </button>
        </form>
      </div>
    )
  }
}

export default SignupForm
