import React, {Component} from 'react';
import {connect} from 'react-redux';
import {increment, decrement} from '../actions';

class App extends Component {
  constructor (props) {
    super (props);
  }
  render () {
    const props = this.props;
    console.log (props);
    return (
      <React.Fragment>
        <div>value:{props.value}</div>
        <button onClick={props.increment}>+</button>
        <button onClick={props.decrement}>-</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  value: state.count.value,
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch (increment ()),
  decrement: () => dispatch (decrement ()),
});
export default connect (mapStateToProps, mapDispatchToProps) (App);
