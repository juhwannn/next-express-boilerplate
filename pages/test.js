import axios from 'axios'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    ;(async () => {
      const response = await axios.get('/api/test')
      console.log('response : ' + response)
    })()
  }, [])

  return <div>TestPage</div>
}
