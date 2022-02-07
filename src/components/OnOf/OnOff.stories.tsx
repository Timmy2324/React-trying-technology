import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'OnOff',
    component: OnOff,
} as ComponentMeta<typeof OnOff>;

const Template: ComponentStory<typeof OnOff> = (args) => <OnOff {...args}/>

export const OnMode = Template.bind({});
OnMode.args = {
    on: true,
    onChange: action('clicked'),
}

export const OffMode = Template.bind({});
OffMode.args = {
    on: false,
    onChange: action('clicked'),
}

export const ModeChanged: ComponentStory<typeof OnOff> = (args) => {
    const [onOffValue, setOnOffValue] = useState<boolean>(false);

    return <OnOff {...args} on={onOffValue} onChange={setOnOffValue}/>
}