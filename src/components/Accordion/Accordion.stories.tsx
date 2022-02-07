import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Accordion',
    component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args}/>

export const CollapsedAccordion = Template.bind({});
CollapsedAccordion.args = {
    titleValue: 'Menu',
    collapsed: true,
    onChange: action('clicked'),
}

export const UnCollapsedAccordion = Template.bind({});
UnCollapsedAccordion.args = {
    titleValue: 'Menu',
    collapsed: false,
    onChange: action('clicked'),
}

export const ModeChanged: ComponentStory<typeof Accordion> = (args) => {
    const [value, setValue] = useState<boolean>(false);

    return <Accordion {...args} titleValue={'Menu'} collapsed={value} onChange={() => setValue(!value)}/>
}