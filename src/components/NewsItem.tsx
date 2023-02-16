import React from 'react'
import { Text, View } from 'react-native'
import { Post } from '../types'

interface NewsItemProps {
  post: Post
}

const NewsItem: React.FC<NewsItemProps> = ({ post }) => {
  return (
    <View>
      <Text>{post.heading}</Text>
      <Text>{post.body}</Text>
    </View>
  )
}

export default NewsItem
