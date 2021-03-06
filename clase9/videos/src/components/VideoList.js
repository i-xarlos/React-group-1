import React from "react"
import VideoListItem from "./VideoListItem"
import styled from 'styled-components'

const VideoList = ({ videos, changeCurrentVideo }) => {
  const videoItems = videos.map(video => {
    return (
      <VideoListItem
        changeCurrentVideo={changeCurrentVideo}
        key={video.etag}
        video={video}
      />
    )
  })

  return (
    <Wrapper>
      {videoItems}
    </Wrapper>
  )
}

const Wrapper = styled.ul`
  flex: 1;
`

export default VideoList