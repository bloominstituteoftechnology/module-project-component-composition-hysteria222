import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Card from './Card'


const url = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`


function App() {

  const [spaceInfo, setSpaceInfo] = useState()

  useEffect(() => {
    axios.get(url)
      .then(res => {
        console.log(res.data)
        setSpaceInfo(res.data)
      }).catch(err => console.log(err.message))
  }, [])

if (!spaceInfo) return 'Fetching photo of the day'

  return (
    <section>
     <Card 
     title={spaceInfo.title}
     text={spaceInfo.explanation}
     imageURL={spaceInfo.url}
     date={spaceInfo.date}


     />
    </section>
  )
}

export default App
