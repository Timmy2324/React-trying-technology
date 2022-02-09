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