import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends Component {

  static propTypes = {
    createStream: PropTypes.func,
    handleSubmit: PropTypes.func,
  };

  renderInput = ({ input, label, meta }) => {
    const { error, touched } = meta;
    const className = `field ${error && touched ? 'error' : ''}`;

    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input}/>
        <div className="ui error message">
          {touched && error && <div className="header">{error}</div>}
        </div>
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <form className="ui form error" onSubmit={handleSubmit(this.onSubmit)}>
        <Field name="title" component={this.renderInput} label="Enter Title"/>
        <Field name="description" component={this.renderInput} label="Enter Description"/>
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

StreamForm.propTypes = {
  handleSubmit: PropTypes.func,
};

const validate = ({ title, description }) => {
  const errors = {};

  if(!title) errors.title = 'You must enter a title';
  if(!description) errors.description = 'You must enter a description';

  return errors;
};

export default reduxForm({
  form: 'streamForm',
  validate
})(StreamForm);
