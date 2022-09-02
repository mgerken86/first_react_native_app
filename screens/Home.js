import React, { useState } from "react"
import { View, SafeAreaView, FlatList, Text } from "react-native"

import { COLORS, NFTData } from '../constants'
import { NFTCard, FocusedStatusBar, HomeHeader } from '../components'

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>Hello</Text>
      <FocusedStatusBar background={COLORS.primary}/>
    </SafeAreaView>
  )
}

export default Home