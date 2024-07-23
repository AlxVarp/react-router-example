import './App.css'
import {Button} from "./components/Button.jsx";
import {Outlet, useNavigate} from "react-router-dom";

function App() {
    const navigate = useNavigate()
    const onHandleClickButton = (path) => {
        navigate(path)
    }
    const id = 235645

    return (
        <div>
            <h1>App</h1>
            <Outlet/>
            <div className="btn-container">
                <Button title="Home" onHandleClick={onHandleClickButton} pathToGo="/" />
                <Button title="Example page one" onHandleClick={onHandleClickButton} pathToGo={`/one/${id}`}/>
                <Button title="Example page two" onHandleClick={onHandleClickButton} pathToGo="/two"/>
                <Button title="Example page three" onHandleClick={onHandleClickButton} pathToGo="/three"/>
            </div>
        </div>

    )
}

export default App
