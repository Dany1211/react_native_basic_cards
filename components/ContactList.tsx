import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    
    const contacts = [
        {
          id: 1,
          name: "John Doe",
          image: "https://randomuser.me/api/portraits/men/1.jpg",
          status: "Chilling at the beach 🌴",
        },
        {
          id: 2,
          name: "Jane Smith",
          image: "https://randomuser.me/api/portraits/women/2.jpg",
          status: "Binge-watching my favorite series 🎥",
        },
        {
          id: 3,
          name: "Samuel Green",
          image: "https://randomuser.me/api/portraits/men/3.jpg",
          status: "Stuck in traffic 🚗😑",
        },
        {
          id: 4,
          name: "Emily White",
          image: "https://randomuser.me/api/portraits/women/4.jpg",
          status: "Trying a new recipe 🍳",
        },
        {
          id: 5,
          name: "Michael Brown",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
          status: "Gaming mode on 🎮🔥",
        },
        {
          id: 6,
          name: "Sophia Wilson",
          image: "https://randomuser.me/api/portraits/women/6.jpg",
          status: "Lost in a book 📖✨",
        },
        {
          id: 7,
          name: "David Johnson",
          image: "https://randomuser.me/api/portraits/men/7.jpg",
          status: "Hitting the gym 💪",
        },
        {
          id: 8,
          name: "Olivia Davis",
          image: "https://randomuser.me/api/portraits/women/8.jpg",
          status: "Planning my next adventure ✈️🌍",
        },
        {
          id: 9,
          name: "Chris Taylor",
          image: "https://randomuser.me/api/portraits/men/9.jpg",
          status: "Listening to my favorite playlist 🎧",
        },
        {
          id: 10,
          name: "Emma Thomas",
          image: "https://randomuser.me/api/portraits/women/10.jpg",
          status: "Enjoying a coffee break ☕",
        },
      ];
      
      
  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView
    //    horizontal={true}
      style={styles.container}
       >
         {contacts.map(({id,name,status,image})=>(
            <View key={id} style={styles.userCard}>
               <Image source={{
                uri: image
               }} 
               style={styles.userImage}
               />
              <View>
              <Text style={styles.userName} >{name}</Text>
               <Text style={styles.userStatus}>{status}</Text>
              
              </View>
             

            </View>
         ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
     headingText : {
        fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom : 10 ,
     },
     container: {
        paddingHorizontal : 16 ,

     },
     userCard : {
        flex : 1 ,
        flexDirection : "row",
        alignItems : "center" ,
        backgroundColor : "#F5F5F5" ,
        padding : 8 ,
        margin : 5 ,
        elevation : 5 ,
        borderRadius : 8 ,

         },
     userImage : { 
        width : 70,
        height : 70 ,  
        borderRadius : 70/2,
        objectFit :"cover",
        marginRight : 12 ,
     },
     userName:{
        fontSize : 18 ,
        fontWeight : 600 ,
     },
     userStatus :{
        fontSize : 14 ,
        fontWeight : 400 ,
     },

})