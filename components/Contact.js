import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';



const ContactScreen = () => {
  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
   <View style={styles.container}>
     <Image source={require('../assets/logo')}
        style={styles.logo}/>
     <Text style={styles.heading}>Italiano Restaurant</Text>


     <View style ={styles.bottomcontainer}>


      <TouchableOpacity style={styles.contactItem}
      onPress={() => openLink('tel:0597220110')}>
        <View style ={styles.circle}>
          <Icon name="call-outline" size={27} color="#F5F5F5" />
        </View>
        <View style={styles.contactText}>
          <Text style={styles.contactText2}>Phone</Text>
          <Text style={styles.contactText1}>0597220110</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.contactItem} 
      onPress={() => openLink('whatsapp://send?phone=+970567938276')}>
        <View style ={styles.circle}>
          <Icon name="logo-whatsapp" size={27} color="#F5F5F5" />
        </View>
        <View style={styles.contactText}>
          <Text style={styles.contactText2}>Whatsapp</Text>
          <Text style={styles.contactText1}>+970 597220110</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.contactItem}
       onPress={() => openLink('https://www.google.com/maps/place/%D8%A7%D9%8A%D8%B7%D8%A7%D9%84%D9%8A%D8%A7%D9%86%D9%88%E2%80%AD/@31.5233377,34.4413471,17z/data=!4m15!1m8!3m7!1s0x14fd7f17120c88f1:0x9f4bbb316d2945d0!2z2KfZiti32KfZhNmK2KfZhtmI!8m2!3d31.5215058!4d34.4449819!10e4!16s%2Fg%2F11c1tlc5kk!3m5!1s0x14fd7f17120c88f1:0x9f4bbb316d2945d0!8m2!3d31.5215058!4d34.4449819!16s%2Fg%2F11c1tlc5kk?entry=ttu')}> 
        <View style ={styles.circle}>
          <Icon name="location-outline" size={27} color="#F5F5F5" />
        </View>
        <View style={styles.contactText}>
          <Text style={styles.contactText2}>Address</Text>
          <Text style={styles.contactText1}>Gaza- Ahmed Abdel Aziz Street</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.line} />
      <Text style = {styles.followus}>Follow Us</Text>
      

      <View style={styles.ionicns2}>

        <TouchableOpacity 
        style={styles.contactItem} 
        onPress={() => openLink('https://www.instagram.com/italianoGaza')}>
         <View style ={styles.circle2}>
          <Icon name="logo-instagram" size={27} color="#F5F5F5" />
         </View>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.contactItem} 
        onPress={() => openLink('https://www.facebook.com/italianoGaza')}>
         <View style ={styles.circle2}>
          <Icon name="logo-facebook" size={27} color="#F5F5F5" />
         </View>
        </TouchableOpacity>
        
      </View>

    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f8f8f8',
  },
  heading: {
    fontSize: 29,
    marginBottom: 13,
    fontWeight: 800,
    fontFamily :"alice",
    alignSelf:'center',
    color: '#1f1f1f',
    fontStyle:'italic'
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:16,
  },
  contactText1: {
    fontSize: 15,
    marginLeft: 10,
    color: '#a9a9a9',
    fontWeight:500,
    fontStyle:'italic'

  },
  contactText2: {
    fontSize: 20,
    marginLeft: 10,
    color: '#565656',
    fontWeight:500,
    fontStyle:'italic'

    },
  contactText:{
    flexDirection:'column'
  },
  logo: {
    width: 155,
    height: 155,
    borderRadius: 100,
    marginBottom:10,
    alignSelf:'center'
  },
  circle:{
   backgroundColor:'#e52321',
   borderRadius:50,
   width:40,
   height:40,
   alignItems:'center',
   justifyContent:'center',

  },
  bottomcontainer:{
    flexDirection:'column',
    alignItems:'flex-start',
    marginLeft:50
  },
   line: {
    borderBottomColor: '#565656',
    borderBottomWidth: 1,
    marginVertical: 10,
    width: 300, 
    alignSelf:'center',
    marginRight:47 
  },
  followus:{
     fontSize:20,
     fontWeight:600,
     marginBottom:10,
     color:'#565656',
     fontStyle:'italic'

  },
  ionicns2:{
    flexDirection:'row',
  },
  circle2:{
   backgroundColor:'#e52321',
   borderRadius:50,
   width:39,
   height:39,
   alignItems:'center',
   justifyContent:'center',
   marginRight:16,

  },
});

export default ContactScreen;
