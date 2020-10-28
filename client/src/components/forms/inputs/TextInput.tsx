import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

interface TextInputProps {
    input: Record<string, unknown>;
    label: string;
    id: string;
    meta: any;
}

export const TextInput: React.FC<TextInputProps> = ({ label, id, input, meta }: TextInputProps) => {
    return (
        <FormGroup>
            <Label for={id}>{label}</Label>
            <Input
                {...input}
                placeholder="URL"
                type="url"
                error={meta.touched ? meta.error : null}
                id={id}
                className={meta.touched && meta.error ? 'error' : ''}
            />
        </FormGroup>
    );
};
