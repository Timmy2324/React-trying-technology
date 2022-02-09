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
    collapsed: false,
    items: [],
    onChange: action('clicked'),
    onClick: action('clicked1'),
}

export const UnCollapsedAccordion = Template.bind({});
UnCollapsedAccordion.args = {
    titleValue: 'Menu',
    collapsed: true,
    items: [{title: 'kek', value: '1'}, {title: 'lol', value: '2'}],
    onChange: action('clicked'),
    onClick: action('clicked1'),
}

export const ModeChanged: ComponentStory<typeof Accordion> = (args) => {
    const [value, setValue] = useState<boolean>(false);

    return <Accordion {...args} items={[{title: 'kek', value: '1'}, {title: 'lol', value: '2'}]} onClick={() => action('click1')} titleValue={'Menu'} collapsed={value} onChange={() => setValue(!value)}/>
}