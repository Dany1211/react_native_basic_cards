import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Flatcards from './components/Flatcards'
import ElevatedCards from './components/ElevatedCards'
import FancyCards from './components/FancyCards'

const AppPro = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Flatcards />
        <ElevatedCards />
        <FancyCards />
      </ScrollView>
    </SafeAreaView>
  )
}

export default AppPro
