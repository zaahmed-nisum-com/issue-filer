import React from 'react'
import { ScrollView, View, Text, TouchableOpacity } from 'react-native'
import Svg, { Path ,G} from "react-native-svg"
import Modal from 'react-native-modal';
import { Image } from 'expo-image';

function IssueList() {

    const list = [
        {key:'1', value:'issue 1', },
        {key:'2', value:'issue 2'},
        {key:'3', value:'issue 3'},
        {key:'4', value:'issue 4', },
        {key:'5', value:'issue 5'},
        {key:'6', value:'issue 5'},
        {key:'7', value:'issue 5'},
        {key:'8', value:'issue 5'},
        {key:'52', value:'issue 5'},
        {key:'54', value:'issue 5'},
        {key:'23', value:'issue 5'},
        {key:'45', value:'issue 5'},
        {key:'55', value:'issue 5'},
        {key:'26', value:'issue 5'},
        {key:'09', value:'issue 5'},
        {key:'13', value:'issue 5'},
        {key:'86', value:'issue 5'},
    ]

    const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';


    return (
        <View style={{flex:1, borderWidth:2, width:'100%'}}>
            <ScrollView>
                {list.map((item,index)=>{
                    return(
                        <View key={index} style={{flexDirection:'row',padding:10,margin:5,borderBottomWidth:0.5}}>
                            <View style={{flex:0.25}}>
                                    <Svg
                                        style={{alignSelf:'center',alignContent:'center'}}
                                        viewBox="0 0 24 24"
                                        height={20}
                                        width={20}
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <G fill="#292D32">
                                            <Path
                                                fill="#000000"
                                                opacity={0.4}
                                                d="M12 2C9.38 2 7.25 4.13 7.25 6.75c0 2.57 2.01 4.65 4.63 4.74.08-.01.16-.01.22 0h.07a4.738 4.738 0 0 0 4.58-4.74C16.75 4.13 14.62 2 12 2Z"
                                            />
                                        <Path
                                            d="M17.08 14.15c-2.79-1.86-7.34-1.86-10.15 0-1.27.85-1.97 2-1.97 3.23s.7 2.37 1.96 3.21C8.32 21.53 10.16 22 12 22c1.84 0 3.68-.47 5.08-1.41 1.26-.85 1.96-1.99 1.96-3.23-.01-1.23-.7-2.37-1.96-3.21Z" />
                                    </G>
                                </Svg>
                            </View>
                            <View style={{flex:0.70}}>
                                <Text>{item.value}</Text>
                            </View>
                            <TouchableOpacity  style={{flex:0.25}}>
                                 <Svg
                                        style={{alignSelf:'center',alignContent:'center'}}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        height={30}
                                        width={30}
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <Path
                                            d="M3 18V6.2c0-1.12 0-1.68.218-2.108.192-.377.497-.682.874-.874C4.52 3 5.08 3 6.2 3h11.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874c.218.427.218.987.218 2.105v11.606c0 .485 0 .865-.018 1.174M3 18c0 .988.013 1.506.218 1.907.192.377.497.683.874.875.427.218.987.218 2.105.218h11.607c1.118 0 1.677 0 2.104-.218.376-.192.682-.498.874-.875.123-.242.177-.526.2-.93M3 18l4.768-5.563.001-.001c.423-.493.635-.74.886-.83a1 1 0 0 1 .681.005c.25.093.46.343.876.843l2.671 3.205c.386.464.58.696.816.79a1 1 0 0 0 .651.028c.244-.072.46-.287.889-.716l.497-.497c.437-.438.656-.656.904-.728.217-.063.45-.05.659.037.238.099.431.34.818.822l2.865 3.582m0 0L21 19M15 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                                            stroke="#000"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                    />
                                </Svg>
                            </TouchableOpacity>
                        </View>
                    )
                })}
            </ScrollView>
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
                    <Image
                        style={{
                            alignSelf:'center',
                            width:200,
                            height:200,
                            backgroundColor: '#0553',
                        }}
                        source="https://res.cloudinary.com/zainahmed/image/upload/v1679851380/assets/gv478zgoul1ut5avxnq5.jpg"
                        // placeholder={blurhash}
                        contentFit="cover"
                        transition={1000}
                    />
                </View>
            </Modal>
                
        </View>
    )
}

export default IssueList
