import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Clock} from "./Clock";

export default {
    title: 'Clock',
    component: Clock,
} as ComponentMeta<typeof Clock>;

const Template: ComponentStory<typeof Clock> = (args) => <Clock {...args}/>

export const ClockExample = Template.bind({});
ClockExample.args = {

}