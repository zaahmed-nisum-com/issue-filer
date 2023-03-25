import React,{useState} from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import Button from '../components/Button';
import DropDown from '../components/DropDown'
import Input from '../components/Input';
import Svg, { Path ,G} from "react-native-svg"
import * as ImagePicker from 'expo-image-picker';

function CreateIssue() {

    const [selected, setSelected] = useState("");
  const data = [
    {key:'1', value:'Mobiles', },
    {key:'2', value:'Appliances'},
    {key:'3', value:'Cameras'},
    {key:'4', value:'Computers', },
    {key:'5', value:'Vegetables'},
    {key:'6', value:'Diary Products'},
    {key:'7', value:'Drinks'},
]

const pickImage = async () => {
    
    let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
    setImage(result.assets[0].uri);
    }
};

const pickImageFromCamera = async () => {
    // Ask the user for the permission to access the camera
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    // Explore the result
    console.log(result);

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      console.log(result.uri);
    }
};

    return (
        <View style={{
            // borderWidth:2,
            padding:30,
            flex:1,
            width:'100%'
        }}>
            <View style={{paddingVertical:10}}>
                <DropDown dropdownShown={true} data={data} selectOptionHandle={setSelected}/>
            </View>
            <View  style={{paddingVertical:10}}>
                <DropDown dropdownShown={false} data={data} selectOptionHandle={setSelected}/>
            </View>
            <View style={{paddingVertical:10}}>
                <Input placeHolder="type"/>
            </View>
            <View style={{flexDirection:'row', justifyContent:'center'}}>
                <View>
                    <TouchableOpacity style={{ alignSelf:'center'}} onPress={pickImage}>
                        <Svg
                            height={50}
                            width={50}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <Path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8 10a4 4 0 1 1 8 0v1h1a3.5 3.5 0 1 1 0 7h-1a1 1 0 1 0 0 2h1a5.5 5.5 0 0 0 .93-10.922 6.001 6.001 0 0 0-11.86 0A5.502 5.502 0 0 0 7 20h1a1 1 0 1 0 0-2H7a3.5 3.5 0 1 1 0-7h1v-1Zm7.707 3.293-3-3a1 1 0 0 0-1.414 0l-3 3a1 1 0 1 0 1.414 1.414L11 13.414V19a1 1 0 1 0 2 0v-5.586l1.293 1.293a1 1 0 0 0 1.414-1.414Z"
                            fill="#000"
                            />
                        </Svg>
                    </TouchableOpacity>
                    <Text style={{textAlign:'center', padding:10, fontSize: 15, fontWeight:'bold'}}>Upload</Text>
                </View>
                <View>
                    <TouchableOpacity style={{ alignSelf:'center'}} onPress={pickImageFromCamera}>
                        <Svg
                            height={50}
                            width={50}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <Path fill="#F0FAFD" d="M0 0h24v24H0z" />
                            <Path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 11a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
                            fill="#323232"
                            />
                            <Path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M22 9.504v6.562c0 .886 0 1.65-.082 2.262-.089.655-.287 1.284-.797 1.793-.51.51-1.138.709-1.794.797-.611.082-1.375.082-2.262.082H6.934c-.887 0-1.65 0-2.262-.082-.656-.088-1.284-.287-1.794-.797s-.708-1.138-.796-1.793C2 17.716 2 16.952 2 16.066V9.504c0-.461-.001-.859.084-1.21a3 3 0 0 1 2.209-2.21C4.645 6 5.043 6 5.503 6h.102c.346 0 .416-.003.473-.011a1 1 0 0 0 .592-.317c.038-.042.079-.099.271-.387l.227-.34.068-.102c.327-.493.616-.928 1.027-1.238a3 3 0 0 1 .817-.437c.485-.17 1.008-.169 1.6-.168H13.32c.592 0 1.114-.002 1.6.168a3 3 0 0 1 .817.437c.41.31.699.745 1.027 1.238l.068.102.226.34c.192.288.233.345.271.387a1 1 0 0 0 .593.317c.056.008.126.011.472.011h.102c.46 0 .858 0 1.21.084a3 3 0 0 1 2.21 2.21c.084.351.084.749.084 1.21ZM8 13a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z"
                            fill="#323232"
                            />
                        </Svg>
                    </TouchableOpacity>
                    <Text style={{textAlign:'center', padding:10, fontSize: 15, fontWeight:'bold'}}>Capture</Text>
                </View>
            </View>
            <Button />
        </View>
    )
}

export default CreateIssue

const Styles = {
    container:{

    }
}