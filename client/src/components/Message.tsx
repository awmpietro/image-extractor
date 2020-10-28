import React from 'react';
import { connect } from 'react-redux';
import { Alert } from 'reactstrap';

import { dismissAlert } from '../store/actions';

interface Props {
    error: boolean;
    content: string;
    dismissAlert(): any;
}

const Message: React.FC<Props> = ({ dismissAlert, error = false, content }: Props) => {
    return (
        <Alert color={'danger'} isOpen={error} toggle={() => dismissAlert()}>
            {content}
        </Alert>
    );
};

export default connect(null, { dismissAlert })(Message);
