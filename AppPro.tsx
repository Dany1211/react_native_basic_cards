import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Flatcards from './components/Flatcards'
import ElevatedCards from './components/ElevatedCards'
import FancyCards from './components/FancyCards'
import ActionCards from './components/ActionCards'

const AppPro = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Flatcards />
        <ElevatedCards />
        <FancyCards />
        <ActionCards/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default AppPro
