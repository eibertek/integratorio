import React, { Component } from 'react'
import { connect } from 'react-redux';
import { loginPending } from './Redux/userActions';

export class index extends Component {
  state = {
    username: '',
    password: '',
  }
  onChange = evt => this.setState({ [evt.target.id]: evt.target.value });

  login = () => {
    const { username, password } = this.state;
    this.props.loginPending(username, password);
  }

  render() {
    return (
      <div>
        Bienvenido al choreo de pinterest:
        <section>
          <div><input id="username" onChange={this.onChange} value={this.state.username} placeholder="Usuario" /></div>
          <div><input id="password" type="password" onChange={this.onChange} value={this.state.password} placeholder="Password" /></div>
          <div><button onClick={this.login}>Loguearse</button></div>
        </section>
      </div>
    )
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  loginPending: (username, password) => loginPending(username, password, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(index);