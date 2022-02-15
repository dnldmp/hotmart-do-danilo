import { Button, Flex, Input, Select } from "@chakra-ui/react"
import { useState, useRef, useEffect, FormEvent } from "react"

function usePlayerState($videoPlayer) {
  const [playerState, setPlayerState] = useState({
    playing: false,
    percentage: 0
  })

  useEffect(() => {
    playerState.playing ? $videoPlayer.current.play() : $videoPlayer.current.pause()
  }, [$videoPlayer, playerState.playing])

  function toggleVideoPlay() { 
    setPlayerState({
      ...playerState,
      playing: !playerState.playing
    })
  }

  function handleTimeUpdate() {
    const currentPercentage = (
      $videoPlayer.current.currentTime / $videoPlayer.current.duration
    ) * 100
    
    setPlayerState({
      ...playerState,
      percentage: currentPercentage
    })
  }

  function handleChangeVideoPercentage(event) {
    const currentPercentegeValue = event.target.value

    $videoPlayer.current.currentTime = $videoPlayer.current.duration / 100 * currentPercentegeValue 

    setPlayerState({
      ...playerState,
      percentage: currentPercentegeValue
    })
  }

  function handleChangePlaybackRate(speed: number) {
    $videoPlayer.current.playbackRate = speed
  }

  return {
    playerState, 
    toggleVideoPlay,
    handleTimeUpdate,
    handleChangeVideoPercentage,
    handleChangePlaybackRate
  }
}

export function Player() {
  const $videoPlayer = useRef(null)
  const { 
    toggleVideoPlay, 
    playerState, 
    handleTimeUpdate,
    handleChangeVideoPercentage,
    handleChangePlaybackRate
  } = usePlayerState($videoPlayer)

  return (
    <Flex flexDir='column'w={540}>
      
      <video 
        style={{ 
          cursor: "pointer", 
          borderTopRightRadius: '8px', 
          borderTopLeftRadius: '8px' 
        }}
        onClick={toggleVideoPlay}
        ref={$videoPlayer}
        onTimeUpdate={handleTimeUpdate}
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" 
      />
      <Flex flexDirection='row' justifyContent='space-between'>
        <Button onClick={toggleVideoPlay}>{ playerState.playing ? 'pause' : 'play' }</Button>
        <Input 
          value={playerState.percentage} 
          onChange={handleChangeVideoPercentage}
          type='range'
          min='0'
          max='100'
        />
        <Select w={150}>
          {[0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2].map(speed => (
            <option
              onChange={() => handleChangePlaybackRate(speed)}
              key={`speedChange_${speed}`}
            >
              {speed} x
            </option>
          ))}
        </Select>
      </Flex>
    </Flex>
  )
}