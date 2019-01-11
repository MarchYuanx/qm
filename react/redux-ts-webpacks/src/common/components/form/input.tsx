import * as React from 'react';

interface Props {
  name: string;
  label: string;
  placeholder?: string;
  value: string;
  onChange: (fieldName: string, value: string) => void;
  error?: string;
}

export const Input: React.StatelessComponent<Props> = (props) => {
  return (
    <div>
      <label htmlFor={props.name}>{props.label}</label>
      <div className="field">
        <input type="text" className="form-control" name={props.name} value={props.value} onChange={onChangeInput(props)}/>
      </div>
    </div>
  )
}

const onChangeInput = (props: Props) => (e: React.ChangeEvent<HTMLInputElement>) => {
  props.onChange(e.target.name, e.target.value);
}