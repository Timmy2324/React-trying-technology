import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOf/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRatting/UncontrolledRating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOf/UncontrolledOnOff";
import {Select} from "./components/Select/Select";

function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    const [switchOn, setSwitchOn] = useState<boolean>(false);
    const [select, setSelect] = useState('1');

    return (
        <div className={'App'}>
            <PageTitle title={'This is App component'}/>
            Article 1
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledOnOff />
            <Accordion titleValue={'Menu'} collapsed={accordionCollapsed} items={[{title: 'kek', value: 1}, {title: 'lol', value: 2}]} onClick={(kek: string) => alert(kek) } onChange={() => setAccordionCollapsed(!accordionCollapsed)}/>
            Article 2
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <OnOff on={switchOn} onChange={setSwitchOn}/>
            <UncontrolledAccordion titleValue={'buuuu'}  />
            <UncontrolledRating/>
            <Select value={select} onChange={setSelect} items={[{title: 'kek', value: '1'}, {title: 'lol', value: '2'}]}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <div>{props.title}</div>
}

export default App;
