import React from 'react'
import { TextInput } from 'react-native'

function Input({...props}) {
    return (
        <TextInput placeholder={props.placeHolder} style={{borderWidth:1,paddingHorizontal:10,borderRadius:10,height:40}} value={''} />
    )
}

export default Input
