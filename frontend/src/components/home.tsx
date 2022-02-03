
import logo from '../logo.svg'
import '../styling/App.css'
import { Button } from "@material-ui/core"

export default function Home(){
    return(    
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Hello Vite + React!</p>
                <Button color="primary" href="/test" variant="contained" >
                    Test Backend
                </Button>
            </header>
        </div>
    )
}
