import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../redux/actions/fooActions';

const Index = props => {
  const handleSubmit = e => {
    e.preventDefault();
    props.getPosts();
  };
  return (
    <div>
      <div>Prop from Redux</div>
      <div>{JSON.stringify(props)}</div>
      <button onClick={handleSubmit}>Load</button>
      <br />
      <div>Prop from getInitialProps {props.custom}</div>
    </div>
  );
};

Index.getInitialProps = async ({ store, isServer, pathname, query }) => {
  await store.dispatch(getPosts());
  return { custom: 'custom' };
};

export default connect(state => state, { getPosts })(Index);
