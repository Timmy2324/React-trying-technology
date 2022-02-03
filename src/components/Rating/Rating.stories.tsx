import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Rating, RatingValueType} from "./Rating";

export default {
    title: 'Rating',
    component: Rating,
} as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args}/>

export const DefaultRating = Template.bind({});






DefaultRating.args = {
    value: 0,
    onClick: ratingValue => ratingValue,
}

export const Rating_1 = Template.bind({});
Rating_1.args = {
    value: 1,
    onClick: ratingValue => ratingValue,
}

export const Rating_2 = Template.bind({});
Rating_2.args = {
    value: 2,
    onClick: ratingValue => ratingValue,
}

export const Rating_3 = Template.bind({});
Rating_3.args = {
    value: 3,
    onClick: ratingValue => ratingValue,
}

export const Rating_4 = Template.bind({});
Rating_4.args = {
    value: 4,
    onClick: ratingValue => ratingValue,
}

export const Rating_5 = Template.bind({});
Rating_5.args = {
    value: 5,
    onClick: ratingValue => ratingValue,
}

export const RatingChanged = Template.bind({});

RatingChanged.args = {
    {...{RatingChangedMode()}}
}

const RatingChangedMode = () => {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(5);

    return {
        value: ratingValue,
        onClick: setRatingValue,
    }
}