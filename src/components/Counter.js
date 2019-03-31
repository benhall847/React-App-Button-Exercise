import React from 'react';
import Notification from './Notification'


// const Counter = (props) => (
//     <button>{props.data}</button>
// );



const Counter = ({data, updateCounter}) => (
    <div>
        {/* <Notification data = {data} /> */}
        <button onClick = {(event)=>{
            updateCounter(event)
        }}>{data}</button>
    </div>
);




export default Counter;
