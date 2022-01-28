
import logo from '../logo.svg'
import '../App.css'
import { Button } from "grommet"

export default function Home(){
    return(    
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Hello Vite + React!</p>
                <Button href="/test" primary label="Test Backend" />
            </header>
        </div>
    )
}
