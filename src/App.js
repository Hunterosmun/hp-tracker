import React from 'react'
import styled from 'styled-components'

function App () {
  const [counters, setCounters] = React.useState([
    { name: 'Example', id: crypto.randomUUID() }
  ])
  const [name, setName] = React.useState('')

  const createNew = () => {
    if (!name) return
    setCounters(counters => [...counters, { name, id: crypto.randomUUID() }])
    setName('')
  }

  return (
    <Wrapper>
      <h1>Game Tracker</h1>
      <MainBox>
        {counters.map(e => (
          <CounterWrap key={e.id}>
            <Counter name={e.name} />
            <button
              onClick={() => {
                setCounters(counters => counters.filter(obj => obj.id !== e.id))
              }}
            >
              Delete
            </button>
          </CounterWrap>
        ))}
        <br />
        <div>
          <input
            value={name}
            onKeyDown={e => {
              if (e.key === 'Enter') createNew()
            }}
            onChange={e => {
              setName(e.target.value)
            }}
            placeholder='New Name'
          />
          <button onClick={createNew}>Create New</button>
        </div>
      </MainBox>
    </Wrapper>
  )
}

function Counter ({ name }) {
  const [counter, setCounter] = React.useState(0)
  //increase counter
  const increase = () => {
    setCounter(count => count + 1)
  }

  //decrease counter
  const decrease = () => {
    setCounter(count => count - 1)
  }

  //reset counter
  const reset = () => {
    setCounter(0)
  }

  return (
    <>
      <br />
      <NameWrap>{name}</NameWrap>
      <button onClick={increase}>+</button>
      <CountHolder>{counter}</CountHolder>
      <button onClick={decrease}> -</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default App

const Wrapper = styled.div`
  text-align: center;

  button {
    border-radius: 4px;
    border: 1px solid #777;
    padding: 4px 8px;
    margin: 0 4px;

    &:hover {
      background-color: #aaa;
    }
  }
`

const MainBox = styled.div`
  border: solid 3px black;
  min-width: 97vw;
  min-height: 599px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CountHolder = styled.span`
  padding-left: 10px;
  padding-right: 10px;
`

const NameWrap = styled.div`
  width: 150px;
  display: block;
  position: absolute;
  left: -150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const CounterWrap = styled.div`
  position: relative;
  width: 225px;
`
