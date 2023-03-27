import React from 'react'
import Modal from 'react-native-modal';
import { View ,TouchableOpacity } from 'react-native';
import Svg, { Path ,G} from "react-native-svg"

function Modal_({...props}) {
    return (
        <Modal isVisible={true}>
            <View style={{borderWidth:1,padding:10,backgroundColor:'white'}}>
                <TouchableOpacity style={{justifyContent:'flex-end',padding:10}}>
                        <Svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                        >
                            <Path
                            d="M19 5 5 19M5 5l14 14"
                            stroke="#000"
                            strokeWidth={1.5}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        </Svg>
                </TouchableOpacity>
            {props.children}
            </View>
        </Modal>
    )
}

export default Modal_
