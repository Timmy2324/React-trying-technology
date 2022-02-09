import React, {useRef, useState} from 'react';
import { ComponentStory } from '@storybook/react';


export default {
  title: 'input',
};

const Template: ComponentStory<any> = (args) => <input {...args} />;

export const Uncontrolled = Template.bind({});
Uncontrolled.args = {

};
export const TrackValueOfUncontrolled: ComponentStory<any> = (args) => {

  const [value, setValue] = useState<string>('');

  return <><input {...args} onChange={(e) => setValue(e.currentTarget.value)}/> - {value}</>
};

export const GetValueOfUncontrolledByButtonPress: ComponentStory<any> = (args) => {

  const inputRef = useRef<HTMLInputElement>(null);

  const [value, setValue] = useState<string>('');

  return <><input ref={inputRef} {...args}/> <button onClick={() => setValue(inputRef.current ? inputRef.current.value : '')}>save</button>- {value}</>
};

export const ControlledWithFixedValue = Template.bind({});
ControlledWithFixedValue.args = {
  value: 'kek'
};

export const ControlledInput: ComponentStory<any> = (args) => {

  const [parentValue, setParentValue] = useState<string>('');

  return <><input value={parentValue} {...args} onChange={(e) => setParentValue(e.currentTarget.value)}/></>
};

export const ControlledCheckBox: ComponentStory<any> = (args) => {

  const [parentValue, setParentValue] = useState<boolean>(false);

  return <><input type={'checkbox'} checked={parentValue} {...args} onChange={(e) => setParentValue(e.currentTarget.checked)}/></>
};

export const ControlledSelect: ComponentStory<any> = () => {

  const [parentValue, setParentValue] = useState<string | undefined>(undefined);

  return <select value={parentValue} onChange={e => setParentValue(e.currentTarget.value)}>
    <option>none</option>
    <option value={1}>Kek</option>
    <option value={2}>lol</option>
    <option value={3}>KekWait</option>
  </select>
};
