import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import reduxAutobahn from 'redux-autobahn-js';
import { Connection } from 'autobahn';
import store from './store';
import './App.css';

const isConnected = props => props.autobahnConnection.connection.isConnected;
const isSubscribed = (props, topic) =>
  props.autobahnConnection.subscriptions.filter(s => s.topic === topic).length >
  0;

class App extends Component {
  componentDidMount() {}

  componentWillReceiveProps(newProps) {
    if (this.isNewConnection(newProps)) {
      function onevent(args) {
        console.log('Event:', args[0]);
      }
      this.props.actions.subscribe('com.example.test.subscription', onevent);
    }
    if (this.isNewSubscription(newProps, 'com.example.test.subscription')) {
      console.log('new subscription to:', 'com.example.test.subscription');
    }
  }

  isNewConnection(newProps) {
    return !isConnected(this.props) && isConnected(newProps);
  }

  isNewSubscription(newProps, topic) {
    return !isSubscribed(this.props, topic) && isSubscribed(newProps, topic);
  }

  connect = () => {
    store.setAutobahnConnection(
      new Connection({
        url: `ws://localhost:8000`,
        realm: 'com.example.test'
      })
    );
    console.log('open connection', this.props.actions);
    this.props.actions.openConnection();
  };

  publishToSubscription = () => {
    this.props.actions.publish('com.example.test.subscription', [
      'Hello, world!'
    ]);
  };

  registerMethod = () => {
    function add2(args) {
      return args[0] + args[1];
    }
    this.props.actions.register('com.example.test.testCall', add2);
  };

  rpcCall = () => {
    this.props.actions.call('com.example.test.testCall', [1, 1]);
  };

  render() {
    return (
      <div className="App">
        <h2>Redux autobahn test</h2>
        <h3>{this.props.message}</h3>
        <div>
          <button onClick={e => this.connect()}>Connect</button>
        </div>
        <div>
          <button
            disabled={!this.props.connected}
            onClick={e => this.publishToSubscription()}
          >
            Publish to Subscription
          </button>
        </div>
        <div>
          <button
            disabled={!this.props.connected}
            onClick={e => this.registerMethod()}
          >
            Register RPC method
          </button>
        </div>
        <div>
          <button
            disabled={!this.props.connected || !this.props.method}
            onClick={e => this.rpcCall()}
          >
            RPC call
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(reduxAutobahn.actions, dispatch),
  dispatch: dispatch
});

const mapStateToProps = state => ({
  autobahnConnection: state.autobahnConnection,
  message: state.originalReducer.message,
  connected: state.originalReducer.connected,
  method: state.originalReducer.method
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
