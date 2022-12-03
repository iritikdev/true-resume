import * as React from 'react';
import { Text, View, StyleSheet, Animated, Image } from 'react-native';
import colors from '../config/colors';
import Heading from './Heading';
import AppText from './AppText';
import Icon from './Icon';
import fonts from '../config/fonts';

const Header_Max_Height = 145;
const Header_Min_Height = 70;

const DynamicHeader = ({animHeaderValue}) => {
    const animateHeaderBackgroundColor = animHeaderValue.interpolate({
        inputRange: [0, Header_Max_Height - Header_Min_Height],
        outputRange: [colors.coaldark, colors.coaldark],
        extrapolate: 'clamp'
      })
    
      const animateHeaderHeight =  animHeaderValue.interpolate({
        inputRange: [0, Header_Max_Height - Header_Min_Height],
        outputRange: [Header_Max_Height , Header_Min_Height],
        extrapolate: 'clamp'
      })
      return (
        <Animated.View 
            style={[
              styles.header,
              {
                height: animateHeaderHeight,
                backgroundColor: animateHeaderBackgroundColor
              }
            
            ]}
          >
            <View style = {{flex:1, borderBottomEndRadius:20}}>

            <View style = {styles.header}>
              <View style = {styles.profile}>
                <View style={styles.active}></View>
                <Image source={require("../assets/user.png")} resizeMode="contain" style = {styles.profileImage} />
              </View>
              <View style = {styles.logo}>
              <View style = {{flexDirection:"row"}}>
                <Heading style = {{fontFamily:fonts.glight, color:colors.light, fontSize:15}}>TRUE</Heading>
                <Heading style = {styles.logoTitle}>Resume</Heading>
              </View>
              </View>
              <View style = {styles.resume}>
                <Icon name={"bio"} backgroundColor={colors.coaldark}/>
              </View>

            </View>
            <View
              style={{
                paddingHorizontal: 20,
                paddingBottom: 30,
                paddingTop: 10,
                backgroundColor: colors.coaldark,
                justifyContent:"center",
                alignItems:"center"
              }}
            >
              <Heading
                style={{
                  color:colors.medium,
                  fontFamily:fonts.glight
                }}
              >
                Namaste!
              </Heading>
              <AppText style={{
                  color:colors["white-7"],
                }}>Let's build your resume...</AppText>
            </View>
            </View>
            
        </Animated.View>
      );
};
const styles = StyleSheet.create({
  logoTitle:{
    color:colors.white,
    fontFamily:fonts.gbold
  },
  active:{
    backgroundColor:colors.primary,
    width:14,
    height:14,
    borderRadius:7,
    position:"absolute",
    bottom:10,
    right:20,
    zIndex:10

  },
    header: {
      height:60,
      width:"100%" ,
      flexDirection:"row"
    },
    profile:{
      flex:2,
      justifyContent:"center",
      alignItems:"center",

    },
    profileImage:{
      width:36,
      height:36,
      borderRadius:18,
      
    },
    logo:{
      flex:6,
      alignItems:"center",
      justifyContent:"center",
      colors:colors.primary,
    },
    resume : {
      flex:2,
      alignItems:"center",
      justifyContent:"center"

    }
})

export default DynamicHeader;