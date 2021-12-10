import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PokemonIndex from './views/PokemonIndex';
import {createUseStyles} from 'react-jss';
import PokemonDetail from './views/PokemonDetail';
import MyPokemon from './views/MyPokemon';
import styled from '@emotion/styled'

const useStyles = createUseStyles({
    mainView: {
      maxWidth: '500px',
      margin: '0 auto',
      position: 'relative',
    }
})

const ContainerRouter = styled.div`
    max-width: 500px;
    @media(min-width: 768px) {
      max-width: 100%;
    }
`

function App() {
    const style = useStyles()
    return (
      <BrowserRouter>
            <ContainerRouter>
              <Switch>
                  <Route exact path = "/" render={(props) => <PokemonIndex{...props}/>}></Route>
                  <Route path = "/pokemon-detail/:pokemon_name" component={PokemonDetail}></Route>
                  <Route path = "/my-pokemon" component={MyPokemon}></Route>                  
              </Switch>
            </ContainerRouter>
      </BrowserRouter>
    )
}

export default App;