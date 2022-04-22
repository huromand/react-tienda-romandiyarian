import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App(){
    return(
        <div>  
            <div>
            <NavBar/>
            </div>
            <div>
            <ItemListContainer/>
            </div>  
        </div>
        
    );
}

export default App;