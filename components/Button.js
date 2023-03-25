import React from 'react'
import { Text,TouchableOpacity,View } from 'react-native'

function Button({title="save",...props}) {
    return (
        <TouchableOpacity opacity={0.5} style={{borderWidth:1,borderRadius:10,width:'100%',height:40,padding:10}}>
            <Text style={{textAlign:'center'}}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles={

}
