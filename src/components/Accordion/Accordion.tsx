import React from 'react';

type ItemType = {
    title: string,
    value: any,
}

type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean,
    onChange: () => void,
    items: Array<ItemType>,
    onClick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue} onChange={props.onChange} collapsed={props.collapsed}/>
            { props.collapsed && <AccordionBody onClick={props.onClick} items={props.items}/> }
        </div>
    );

}

type AccordionTitlePropsType = {
    title: string,
    onChange: () => void,
    collapsed: boolean,
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={() => props.onChange()}>{props.title}</h3>
    );
}

type AccordionBodyPropsType = {
    items: Array<ItemType>
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {
                props.items.map((item, index) => {
                    return <li onClick={() => props.onClick(item.value)} key={index}>{item.title}</li>
                })
            }
        </ul>
    );
}