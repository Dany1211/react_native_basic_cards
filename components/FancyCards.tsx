import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <ScrollView horizontal={true}>
      <View style={[styles.card,styles.cardElevated]}>
         <Image
         source={require('../assets/burj.jpg')}
         style={styles.cardImage}
         ></Image>
         <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Burj-Khalifa</Text>
            <Text style={styles.cardLable}>Dubai,UAE</Text>
            <Text style={styles.cardDescription}>The Burj Khalifa in Dubai, the world’s tallest building at 828 meters, is a global icon with luxurious residences, offices, and observation decks offering stunning city views.</Text>
            <Text style={styles.cardFooter}>7.3 kms away</Text>
         </View>
      </View>
      <View style={[styles.card,styles.cardElevated]}>
         <Image
         source={require('../assets/pyramids.jpg')}
         style={styles.cardImage}
         ></Image>
         <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Pyramids of Giza</Text>
            <Text style={styles.cardLable}>Giza,Egypt</Text>
            <Text style={styles.cardDescription}>The Pyramids of Giza in Egypt, including the Great Pyramid of Khufu, are iconic ancient structures and one of the Seven Wonders of the Ancient World, showcasing remarkable architectural achievements.</Text>
            <Text style={styles.cardFooter}>5.5 kms away</Text>
         </View>
      </View>
      </ScrollView>
      
    </View>
  )
}

const styles = StyleSheet.create({
  headingText : {
     fontSize : 24 ,
     fontWeight : "bold",
     textAlign : "center"
    },
  card :{
     width : 350,
     height : "auto" ,
     marginHorizontal:20 ,
     marginTop : 10 ,
     borderRadius : 20 ,
     marginBottom : 25 ,
    //  padding: 15,
  },
  cardElevated : {
     backgroundColor : "#CAD5E2" ,
     elevation : 5,
    //  shadowOffset : {
    //     height : 1 ,
    //     width : 1,
    //  },
    //  shadowRadius : 20 ,

  },
  cardImage : {
     height : 270 ,
    width : "auto",
    objectFit :"fill",
    marginTop : 2 ,
    borderTopRightRadius : 20,
    borderTopLeftRadius : 20,
    marginBottom : 10 ,
  },
  cardBody : {
   flex : 1 ,
   paddingHorizontal : 10
  },
  cardTitle : {
    fontSize : 22 ,
    fontWeight : 800,
    marginBottom : 2 ,
  },
  cardLable : {
    fontSize : 16 ,
    marginBottom : 5,
    fontWeight : "bold",
  },
  cardDescription : {
    fontSize : 14 ,
     marginBottom : 5 ,
  },
  cardFooter : {
    fontSize : 16 ,
    fontWeight : "bold",
    marginBottom : 10,
  },
})