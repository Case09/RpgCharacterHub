import React from 'react';
import { connect } from 'react-redux';
import { getInvite } from '../actions/get_invite';
import Test from '../components/test';

function mapStateToProps(state) {
  return {
    invite: state.invite
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onGetInvite: () => dispatch(getInvite())
  };
}

const inviteContainer = connect(mapStateToProps, mapDispatchToProps)(Test);

export default inviteContainer;