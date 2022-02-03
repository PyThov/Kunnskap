import { Button } from '@material-ui/core';
import { useEffect, useState } from 'react'
import '../styling/App.css'

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
      <div className="response">
        {!isLoaded ? <div>Loading...</div> :
        <div>{items}</div>}
      </div>
      <Button color="secondary" href="/" variant="outlined">
        Back
      </Button>
    </div>
  )
}
