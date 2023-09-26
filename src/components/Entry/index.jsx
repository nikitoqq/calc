import React, { useState } from "react";
import Button from '../Button';
import './Entry.css';

function Entry({ transferToOutput, transferToHistory }) {

    let [history, setHistory] = useState('');
    let [part, setPart] = useState('');

    const equale = () => {
        if (part != '') {
            transferToOutput(eval(part));
            transferToHistory(history.replace(/Math./g, '') + '=' + eval(part))
        }
    }

    const del = () => {
        setPart(part = part.slice(0, -1));
        setHistory(history = history.slice(0, -1));
        transferToOutput(part)
    }

    const delAll = () => {
        setPart(history = '');
        setHistory(history = '');
        transferToOutput(part)
    }

    const input = (value) => {
        if (value === '=') {
            equale();
        } else {
            setPart(part += value);
            setHistory(history += value);
            transferToOutput(part.replace(/Math./g, '').replace(/Math.sqrt([0-9],[0-9])/, 'Math.pow(1/[0-9],[0-9])'.replace('[0-9]/100*', '[0-9]%')));
        }
    }

    return (
        <div className="flexRow">
            <div className="col">
                <div className="row">
                    <Button fnClick={input} value={'7'} label={'7'} />
                    <Button fnClick={input} value={'8'} label={'8'} />
                    <Button fnClick={input} value={'9'} label={'9'} />
                </div>
                <div className="row">
                    <Button fnClick={input} value={'4'} label={'4'} />
                    <Button fnClick={input} value={'5'} label={'5'} />
                    <Button fnClick={input} value={'6'} label={'6'} />
                </div>
                <div className="row">
                    <Button fnClick={input} value={'1'} label={'1'} />
                    <Button fnClick={input} value={'2'} label={'2'} />
                    <Button fnClick={input} value={'3'} label={'3'} />
                </div>
                <div className="row double">
                    <Button fnClick={input} value={'0'} label={'0'} />
                    <Button fnClick={input} value={','} label={','} />
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <Button fnClick={input} value={'*'} label={'X'} />
                    <Button fnClick={input} value={'/'} label={'/'} />
                </div>
                <div className="row">
                    <Button fnClick={input} value={'+'} label={'+'} />
                    <Button fnClick={input} value={'-'} label={'–'} />
                </div>
                <div className="row">
                    <Button fnClick={input} value={'Math.cos('} label={'cos(x)'} />
                    <Button fnClick={input} value={'Math.sin('} label={'sin(x)'} />
                </div>
                <div className="row">
                    <Button fnClick={input} value={'Math.tan('} label={'tan(x)'} />
                    <Button fnClick={input} value={'Math.pow('} label={'pow(x,y)'} />
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <Button fnClick={input} value={'/100*'} label={'%'} />
                    <Button fnClick={input} value={'Math.sqrt('} label={'sqrt(x, y)'} />
                </div>
                <div className="row">
                    <Button fnClick={input} value={'('} label={'('} />
                    <Button fnClick={input} value={')'} label={')'} />
                </div>
                <div className="row">
                    <Button fnClick={delAll} value={'AC'} label={'AC'} />
                    <Button fnClick={del} value={'C'} label={'C'} />

                </div>
                <div className="row double">
                    <Button fnClick={equale} value={'='} label={'='} />
                </div>
            </div>
        </div>
    )
}
export default Entry;

