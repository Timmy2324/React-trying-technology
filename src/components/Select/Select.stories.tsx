import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Select} from "./Select";

export default {
    title: 'Select',
    component: Select,
} as ComponentMeta<typeof Select>;

export const WithOutValueSelect: ComponentStory<typeof Select> = (args) => {
    const [value, setValue] = useState(null);

    return <Select {...args} value={value} onChange={setValue} items={[{title: 'kek', value: '1'}, {title: 'lol', value: '2'}]}/>
}

export const WithValueSelect: ComponentStory<typeof Select> = (args) => {
    const [value, setValue] = useState('1');

    return <Select {...args} value={value} onChange={setValue} items={[{title: 'kek', value: '1'}, {title: 'lol', value: '2'}]}/>
}