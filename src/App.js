import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PokemonIndex from './views/PokemonIndex';
import {createUseStyles} from 'react-jss';
import PokemonDetail from './views/PokemonDetail';
import MyPokemon from './views/MyPokemon';

const useStyles = createUseStyles({
    mainView: {
      maxWidth: '500px',
      margin: '0 auto',
      position: 'relative',
    }
})

function App() {
    const style = useStyles()
    return (
      <BrowserRouter>
            <div className={style.mainView}>
              <Switch>
                  <Route exact path = "/" render={(props) => <PokemonIndex{...props}/>}></Route>
                  <Route path = "/pokemon-detail/:pokemon_name" component={PokemonDetail}></Route>
                  <Route path = "/my-pokemon" component={MyPokemon}></Route>                  
              </Switch>
            </div>
      </BrowserRouter>
    )
}

export default App;