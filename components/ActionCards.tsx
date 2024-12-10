import {StyleSheet, Text, View, Linking, Image,TouchableOpacity} from 'react-native';
import React from 'react';

export default function ActionCards() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Action Card</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>AI : Blessing or Curse</Text>
        </View>
        <Image
         source={require("../assets/AI.jpg")}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text style={styles.paragraphText} numberOfLines={5}>
          There's always someone who is scared of new technology (at least in the early days). But what is the story with artificial intelligence? In 10 or 20 years' time, will we look back and laugh about why we were so worried, since it has simply become part of our lives?

What do you think? Where do you stand in the debate? What comes to mind when you think about Alexa, Tinka or self-driving cars? 
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity 
          onPress={()=> openWebsite("https://www.telekom.com/en/blog/careers/article/artificial-intelligence-is-it-a-blessing-or-a-curse--541196")}
          >
            <Text style={styles.socialLink}>
                Read more
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=> openWebsite("https://www.instagram.com/ayuxy027?igsh=MW5oNmluNnR4bGptYw==")}
          >
            <Text style={styles.socialLink}>
                Follow Me
            </Text>
          </TouchableOpacity>
         
        </View>
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    marginHorizontal:"auto",
    width: 350,
    height: "auto",
    marginVertical:15,
    borderRadius: 20,
    marginBottom: 10,
    //  padding: 15,
  },
  cardElevated: {
    backgroundColor: '#fef9e7',
    elevation: 5,
     shadowOffset : {
        height : 1 ,
        width : 1,
     },
     shadowRadius : 20 ,
  },
  cardImage : {
    height : 270 ,
   width : "auto",
   objectFit :"fill",
   marginTop : 2 ,
//    borderTopRightRadius : 20,
//    borderTopLeftRadius : 20,
   marginBottom : 10 ,
  },
  headingContainer: {
    padding : 15 ,
  },
  headerText: {
    fontSize: 20,
    fontWeight : 700,
    textAlign : "center",
    color : "#d35400",
  },
  bodyContainer: {
    paddingHorizontal : 10 ,
  },
  paragraphText : {
    fontSize : 16
  },
  footerContainer: {
    paddingHorizontal:50,
    paddingBottom : 20,
    paddingTop: 10,
    flex : 1 ,
    flexDirection : "row",
    justifyContent : "space-between",
    borderRadius : 10 ,

  },
  socialLink:{
    fontSize : 16 ,
    fontWeight :"semibold",
    backgroundColor : "#ffffff",
    color : "#000000",
    padding : 6 ,
    borderRadius : 10 ,
    elevation : 5 ,
    shadowOffset : {
        height : 1 ,
        width : 1,
     },
     shadowRadius : 20 ,
  },
});
