interface InputProps {
    onChange?: (value) => void;
    label: string;
    columnClasses?: string;
}

export const Input: React.FC<InputProps> = ({onChange, label, columnClasses}: InputProps) => {
    return(
        <div className={`column flied ${columnClasses}`}>
                    <label className='label' htmlFor='inputSku'>{label}</label>
                    <div className='control'>
                        <input className='input' id='inputSku' value={""} onChange={event => {
                                                                                        if(onChange){
                                                                                            onChange(event.target.value)
                                                                                        }
                                                                                    }} placeholder='Digite el codigo de producto'/>
                    </div>
        </div>
    )
}