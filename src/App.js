import { useState } from 'react'
import styled from 'styled-components'

function App () {
  const [counters, setCounters] = useState([{ id: crypto.randomUUID() }])
  return (
    <Wrapper>
      <h1>HP Tracker</h1>
      <MainBox>
        {counters.map(e => (
          <div key={e.id}>
            <Counter />
            <button
              onClick={() => {
                setCounters(counters => counters.filter(obj => obj.id !== e.id))
              }}
            >
              Delete
            </button>
          </div>
        ))}
        <br />
        <button
          onClick={() => {
            setCounters(counters => [...counters, { id: crypto.randomUUID() }])
          }}
        >
          Create New
        </button>
      </MainBox>
    </Wrapper>
  )
}

function Counter () {
  const [counter, setCounter] = useState(0)
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
      <button onClick={increase}>+</button>
      <NameHolder>{counter}</NameHolder>
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
`

const NameHolder = styled.span`
  padding-left: 10px;
  padding-right: 10px;
`
