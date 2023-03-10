import React, { useEffect, useState } from 'react'
import {
  FlatList,
  ListRenderItem,
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native'
import Config from 'react-native-config'
import { fetchData } from '../api/fetchData'
import AppHeader from '../components/AppHeader'
import ErrorMessage from '../components/ErrorMessage'
import NewsItem from '../components/NewsItem'
import { useAuth } from '../hooks/useAuth'
import { Post, Posts } from '../types'
import { SPACING } from '../utils/spacing'

const News = () => {
  const { userData, loading } = useAuth()
  const [data, setData] = useState<Post[] | null>(null)
  const [error, setError] = useState<boolean>(false)

  const getData = async () => {
    setError(false)
    try {
      const fetchedData: Posts = await fetchData(`${Config.API_URL}/newsfeed`)
      setData(fetchedData.posts)
    } catch (e) {
      console.log(e, 'unable to fetch data')
      setError(true)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const renderItem: ListRenderItem<Post> = ({ item }) => {
    return <NewsItem post={item} />
  }

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <AppHeader text={`Welcome, ${userData ? userData.name : 'player'}!`} />
        <Text style={styles.subHeading}>Latest news</Text>
      </View>
      <View style={styles.body}>
        {data && !error && (
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={post => post.id}
            showsVerticalScrollIndicator={false}
          />
        )}
        {error && <ErrorMessage text="Newsfeed not avaible at this time" />}
      </View>
      {loading && <Text>Loading</Text>}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    marginVertical: SPACING.s12,
    marginHorizontal: SPACING.s16
  },
  subHeading: {
    marginTop: SPACING.s12,
    fontSize: 20
  },
  body: {
    padding: SPACING.s16,
    paddingTop: 0,
    paddingBottom: 170
  }
})

export default News
