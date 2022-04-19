import React, {useState} from 'react';

const Conference = () => {
    const [value, setValue] = useState("");
    const [historyList, setHistoryList] = useState([]);

    return (<div>
                <input onChange = {(e) => {
                    setValue(e.target.value);
                    setHistoryList([...historyList, e.target.value]);
                }}/>
                <p>{value}</p>
                <br/>
                <ul>
                    {historyList.map((item, index) => {
                        return (<li key = {index}>{item}</li>)
                    })}
                </ul>
            </div>
            )}
export default Conference;