import React, { useState } from "react"
import { View, FlatList, Text, StatusBar, SafeAreaView } from "react-native"

import { COLORS, NFTData } from '../constants'
import { NFTCard, FocusedStatusBar, HomeHeader } from '../components'


const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary}/>
      <View style={{ flex: 1, backgroundColor: "black" }}>

      </View>
    </SafeAreaView>
  )
}

export default Home