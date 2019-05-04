import React, {Component} from 'react';
import PropTypes from 'prop-types';

const App = () => {
  const profiles = [
    {name: 'taro', age: 10},
    {name: 'hanako', age: 7},
    {name: 'noname'},
  ];
  return (
    <React.Fragment>
      {profiles.map ((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index} />;
      })}
    </React.Fragment>
  );
};

const User = props => {
  return <div>hi my name {props.name} and {props.age}</div>;
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
};

export default App;
