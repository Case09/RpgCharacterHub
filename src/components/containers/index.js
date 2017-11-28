import React from 'react';
import { connect } from 'react-redux';
import { getInvite } from '../../actions/get_invite';
import { addToInvite } from '../../actions/add_invite';
import Test from '../test';

function mapStateToProps(state) {
  return {
    invite: state.invite
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onGetInvite: () => dispatch(getInvite()),
    onAddToInvite: (name) => dispatch(addToInvite(name))
  };
}

const inviteContainer = connect(mapStateToProps, mapDispatchToProps)(Test);

export default inviteContainer;