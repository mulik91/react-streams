import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {

  renderInput({ input, label, meta }) {

    return (
      <div className='field'>
        <label>{label}</label>
        <input {...input} autoComplete='off' />
        <div className={`${meta.touched && meta.error ? 'ui error message' : ''}`}>
          <div>
            {meta.touched && meta.error}
          </div>
        </div>
      </div>
    );
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }

  render() {
    return (
      <form className='ui form error' onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field name="description" component={this.renderInput} label="Enter Description" />
        <button className='ui button primary' type="submit">Submit</button>
      </form>
    );
  }
}

const validate = ({ title, description }) => {
  const errors = {};
  if (!title) {
    errors.title = 'You must enter a title';
  }
  if (!description) {
    errors.description = 'You must enter a description';
  }

  return errors;
}

export default reduxForm({
  form: 'streamForm',
  validate
})(StreamForm);