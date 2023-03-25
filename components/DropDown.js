import React from 'react'
import { SelectList } from 'react-native-dropdown-select-list'

function DropDown({...props}) {
    return (
        <SelectList 
        dropdownShown={props.dropdownShown}
        setSelected={(val) => props.selectOptionHandle(val)} 
        data={props.data} 
        save="value"
        />
    )
}

export default DropDown
