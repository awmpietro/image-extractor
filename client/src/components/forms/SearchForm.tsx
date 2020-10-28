import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Button, FormGroup } from 'reactstrap';

import { TextInput } from './inputs/TextInput';

interface Props {
    handleSubmit(onSubmit: any): any;
    onSubmit(): any;
    submitting: boolean;
    pristine: boolean;
}

let SearchForm: React.FC<Props> = ({ handleSubmit, onSubmit, pristine = false, submitting = false }: Props) => {
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Field name="url" component={TextInput} />
            <FormGroup>
                <Button color="primary" type="submit" disabled={pristine || submitting}>
                    Search
                </Button>
            </FormGroup>
        </form>
    );
};

SearchForm = reduxForm({
    form: 'search-form',
})(SearchForm);

export default connect(null, {})(SearchForm);
