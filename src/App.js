import React from 'react'
import styled from 'styled-components'

function App () {
  const [counters, setCounters] = React.useState([
    { name: 'Example', id: crypto.randomUUID() }
  ])
  const [name, setName] = React.useState('')

  return (
    <Wrapper>
      <h1>HP Tracker</h1>
      <MainBox>
        {counters.map(e => (
          <div key={e.id}>
            <Counter name={e.name} />
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
        <input
          value={name}
          onChange={e => {
            setName(e.target.value)
          }}
        />
        <button
          onClick={() => {
            setCounters(counters => [
              ...counters,
              { name, id: crypto.randomUUID() }
            ])
            setName('')
          }}
        >
          Create New
        </button>
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
      {name}
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
