import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import AssetImage from './AssetImage'
import { UserReversedGeoCode } from '../context/UserReversedGeoCode'

const HomeHeader = () => {
const {address, setAddress} = useContext(UserReversedGeoCode)
console.log(address, "Address");

  return (
    <View style={{flexDirection:'row', justifyContent:'space-between'}}>

        <View style={styles.outerStyle}>

<AssetImage data={require('../../assets/images/profile.jpg')}
width={55}
height={55}
mode={'cover'}
radius={99}

/>

<View style={styles.headerStyle} >
<Text> Delivering to</Text>
<Text>{`${address?.city} ${address.name}   `}</Text>

</View>

        </View>
 
    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({


outerStyle:{

    marginBottom:10,
    marginHorizontal:20,
    flexDirection:'row'


}


})