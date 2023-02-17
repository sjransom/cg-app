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
  const { loading } = useAuth()
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
      <View style={styles.container}>
        {data && !error && (
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={post => post.id}
            ListHeaderComponent={<AppHeader text="Latest News" />}
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
  container: {
    padding: SPACING.s16
  }
})

export default News
