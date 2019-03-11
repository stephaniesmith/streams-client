import React from 'react';
// import PropTypes from 'prop-types';
import Modal from '../Modal';
import history from '../../history';

const StreamDelete = () => {
  const actions = (
    <>
      <button className="ui button">Cancel</button>
      <button className="ui button negative">Delete</button>
    </>
  );

  return (
    <div>
      StreamDelete
      <Modal
        title="Delete Stream"
        content="Are you sure you want to delete this stream?"
        actions={actions}
        onDismiss={() => history.push('/')}/>
    </div>
  );
};

// StreamDelete.propTypes = {

// };

export default StreamDelete;
