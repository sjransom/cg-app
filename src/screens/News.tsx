import React, { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import Config from 'react-native-config'
import { fetchData } from '../api/fetchData'
import NewsItem from '../components/NewsItem'

const News = () => {
  const [data, setData] = useState<any>(null)

  const getData = async () => {
    try {
      const fetchedData = await fetchData(`${Config.API_URL}/newsfeed`)
      setData(fetchedData)
    } catch (e) {
      console.log(e, 'unable to fetch data')
    }
  }

  useEffect(() => {
    getData()
  }, [])

  console.log(data)

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <NewsItem />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default News
