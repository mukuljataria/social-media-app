// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import {fetchPosts} from '../actions/posts'

// class App extends React.Component {

//   componentDidMount() {
//     this.props.dispatch(fetchPosts());
//   }

//   render() {
//     console.log('PROPS', this.props);
//     return <div>App</div>;
//   }
// }

// function mapStateToProps(state) {
//   return {
//     posts: state.posts,
//   };
// }
// export default connect(mapStateToProps)(App);

import React, { useState, useEffect } from 'react';

function App(props) {
  const [userId, setUserId] = useEffect('1');
  const [data, setData] = useEffect([]);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts?userId=${1}`;
    fetch(url)
      .then((response) => response.json)
      .then((data) => {
        console.log('DATA', data);
      });
  });
  // const emailState = useState('');
  // const email = emailState[0];
  // const setEmail = emailState[1];

  // const nameState = useState('');
  // const name = nameState[0];
  // const setName = nameState[1];

  // function handleChange(e) {
  //   setEmail(e.target.value);
  // }
  // function handleChangeName(e) {
  //   setName(e.target.value);
  // }
  return (
    // <div className="App" style={{ padding: 10 }}>
    //   <input value={email} onChange={handleChange} />
    //   <input value={name} onChange={handleChangeName} />
    //   <p>Email: {email}</p>
    //   <p>Name: {name}</p>
    // </div>
    <div className="App" style={{ paddingLeft: 20 }}>
      <h1>App</h1>
      <button onClick={() => setUserId('2')}>Change uder id to 2</button>
      {data.map((user) => (
        <div>
          <p>{user.title}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
