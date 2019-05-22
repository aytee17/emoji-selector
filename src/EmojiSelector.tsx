import React from 'react'
import styled from 'styled-components'

interface IEmojiSelectorProps {
  setEmoji: (emoji: string) => void
}

interface IEmojiContainerProps {
  emoji: string
  selectEmoji: () => void
}

const EmojiSelector: React.FC<IEmojiSelectorProps> = ({ setEmoji }) => {
  const selectEmoji = (emoji: string) => {
    setEmoji(emoji)
  }

  return (
    <StyledEmojiSelectorContainer>
      {range(0x1f600, 0x1f650).map(code => {
        const emoji = String.fromCodePoint(code)
        return <EmojiContainer emoji={emoji} selectEmoji={() => selectEmoji(emoji)} />
      })}
    </StyledEmojiSelectorContainer>
  )
}

const StyledEmojiSelectorContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 35px);
  grid-template-rows: repeat(13, 35px);
  border: 1px solid #333;
  width: 235px;
  height: 290px;
  overflow: scroll;
  padding: 10px;
  border-radius: 4px;
  background-color: white;
  font-size: 30px;
  grid-gap: 5px;
  cursor: pointer;
`

interface StyledEmojiContainerProps {
  onClick: (e: React.SyntheticEvent) => void
}

const EmojiContainer: React.FC<IEmojiContainerProps> = ({ emoji, selectEmoji }) => {
  return (
    <StyledEmojiContainer onClick={() => selectEmoji()}>
      {emoji}
    </StyledEmojiContainer>
  )
}

const StyledEmojiContainer = styled.div<StyledEmojiContainerProps>`
  padding: 2px;
`

const range = (start: number, stop: number, step: number = 1) => {
  return Array((stop - start) / step).fill(start).map((x, y) => x + y * step)
}

export {
  EmojiSelector
}
