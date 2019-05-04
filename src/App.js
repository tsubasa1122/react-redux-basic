import React, {Component} from 'react';
import {userInfo} from 'os';

const App = () => {
  const profiles = [{name: 'taro', age: 10}, {name: 'hanako', age: 7}];
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

export default App;
