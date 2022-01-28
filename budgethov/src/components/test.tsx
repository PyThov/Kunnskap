import { useEffect, useState } from 'react'
import '../App.css'

export default function Test() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState<string>("");
  
  useEffect(() => {
    fetch('http://localhost:4000/backend')
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result?.Message);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
  
  return (
    <div className="App-header">
      {!isLoaded ? <div>Loading...</div> :
      <div>{items}</div>}
    </div>
  )
}
