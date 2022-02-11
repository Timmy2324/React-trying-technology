import React, {useState} from 'react';
import s from './Select.module.css';

type ItemType = {
    title: string,
    value: any,
}

type SelectPropsType = {
    value?: any,
    onChange: (value: any) => void,
    items: ItemType[],
}

export const Select = (props: SelectPropsType) => {

    const [isActive, setIsActive] = useState<boolean>(false);
    const [hoverItem, setHoverItem] = useState<string | null>(props.value);

    const selectedItem = props.items.find(item => item.value === props.value);
    const hoveredItem = props.items.find(item => item.value === hoverItem);


    return (
        <>
            <div onClick={() => {
                setIsActive(!isActive)
                setHoverItem(props.value)
            }} className={s.select}>
                <h3 className={s.selectHeader}>{selectedItem && selectedItem.title}</h3>
                {isActive &&
                    <div className={s.items}>
                        {props.items.map(item => <div
                            onClick={() => {
                                props.onChange(item.value);
                                setIsActive(false)
                                }
                            }
                            onMouseEnter={() => setHoverItem(item.value)}
                            onMouseLeave={() => setHoverItem(null)}
                            className={s.item + ' ' + (hoveredItem === item ? s.selected : '')}
                        >{item.title}</div>)}
                    </div>
                }
            </div>
        </>

    );
};