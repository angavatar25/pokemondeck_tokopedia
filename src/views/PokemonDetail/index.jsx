import React, {useEffect, useState} from 'react'
import { ButtonMoves, ButtonTypes, CatchPokemonButton, detailStyle, FlexBetween, PokemonDetailContainer, PokemonMoves, PokemonMovesText, PokemonTypes, PokemonTypesText, SkillList } from '../../styles/PokemonDetail';
import { CenterContainer } from '../../styles/PokemonDetail';
import { NavLink, useHistory } from 'react-router-dom';
import { ButtonSave, FormInputContainer, InputNickname, InputNicknameContainer, InputNicknameTitle, InputPokemonContainer, SuccessText, WarningText } from '../../styles/PokemonInput';
import { ErrorMessage } from '../../styles/PokemonIndex';

export default function PokemonDetail({props, match}) {
    const style = detailStyle()
    const history = useHistory()
    const name = match.params.pokemon_name
    const [pokemonName, setpokemonName] = useState('')
    const [pokemonTypes, setpokemonTypes] = useState([])
    const [pokemonMoves, setpokemonMoves] = useState([])
    const [imagePokemon, setimagePokemon] = useState({})
    const [pokemonDetails, setpokemonDetails] = useState({})
    const [activeDetail, setactiveDetail] = useState('moves')
    const [isCatch, setisCatch] = useState(false)
    const [successCatch, setsuccessCatch] = useState(false)
    const [catchFailed, setcatchFailed] = useState(false)
    const [isExistPokemon, setisExistPokemon] = useState(false)
    const [successSave, setsuccessSave] = useState(false)

    const startCatch = () => {
      setisCatch(true)
    }

    const cancelName = () => {
      setpokemonName('')
      setsuccessCatch(false)
    }

    const handleCatch = () => {
      let success = Math.random(0,1)
      if(success >= 0.5) {
        setsuccessCatch(true)
        setcatchFailed(false)
      } else {
        setsuccessCatch(false)
        setcatchFailed(true)
      }
    }

    const onInputNickname = (e) => {
      setpokemonName(e.target.value)
    }

    const handleSave = async () => {
      var mypokemon = JSON.parse(localStorage.getItem("mypokemon") || "[]")
      var newdata = {
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          image: pokemonDetails.sprites.front_default,
          types: pokemonDetails.types,
          nickname: pokemonName
      }
      if(mypokemon.find(name => name.nickname === pokemonName && name.name === pokemonDetails.name)) {
        setisExistPokemon(true)
        setsuccessSave(false)
      } else {
        await mypokemon.push(newdata);
        await localStorage.setItem("mypokemon", JSON.stringify(mypokemon))
        await setisExistPokemon(false)
        await setsuccessSave(true)
        setsuccessCatch(false)
        setTimeout(function() {
          history.push('/');
        }, 1500)
      }
    }

    const InputPokemon = () => {
      return (
        <InputPokemonContainer active={successCatch}>
            <InputNicknameContainer>
              <InputNicknameTitle>Pokemon Catched Successfully</InputNicknameTitle>
              <FormInputContainer>
                <p>Give it a nickname</p>
                <InputNickname 
                  onChange={onInputNickname}
                  value={pokemonName}
                  type="text" 
                  placeholder="Nickname"></InputNickname>
                <div style={{marginTop: '20px'}}>
                  <ButtonSave onClick={() => cancelName()} buttonStyle='cancel'>Cancel</ButtonSave>
                  <ButtonSave onClick={() => handleSave()} buttonStyle='save'>Save</ButtonSave>
                </div>
                <div style={{marginTop: '10px'}}>
                  {
                    isExistPokemon ? <WarningText>Pokemon with the same name is exist</WarningText>
                    : ''
                  }
                  {
                    successSave ? <SuccessText>Pokemon sucessfully saved</SuccessText>
                    : ''
                  }
                </div>                
              </FormInputContainer>
            </InputNicknameContainer>
        </InputPokemonContainer>
      )
    }

    useEffect(() => {
      const pokemonDetail = `query pokemon($name: String!) {
        pokemon(name: $name) {
          id
          name
          moves {
            move {
              name
            }
          }
          types {
            type {
              name
            }
          }
          sprites {
            front_default
          }
        }
      }`

      const PokemonDetail = async () => {
          await fetch('https://graphql-pokeapi.graphcdn.app/', {
              credentials: 'omit',
              headers: { 'Content-Type': 'application/json' ,'dataType': 'jsonp' },
              body: JSON.stringify({
                  query: pokemonDetail,
                  variables: {
                      name: name
                  }
              }),
              method: 'POST',
          })
          .then((res) => res.json())
          .then((res) => {
              setpokemonDetails(res.data.pokemon)
              setpokemonTypes(res.data.pokemon.types)
              setpokemonMoves(res.data.pokemon.moves)
              setimagePokemon(res.data.pokemon.sprites.front_default)
          })
      }

      PokemonDetail()
    },[])
    return (
        <div>
        {InputPokemon()}
          <div className={style.container}>            
              <FlexBetween>
                <NavLink to="/" className={style.textWhite}>
                  <i className="fas fa-chevron-left"></i>
                  <span className={style.ml_3}>Back</span>
                </NavLink>
              </FlexBetween>
              <div>
                <CenterContainer>
                  {
                    isCatch ? 
                    <img 
                      className={style.imageWidth} 
                      src={imagePokemon} 
                      alt="" 
                      onClick={() => handleCatch()} /> :
                    <img className={style.imageWidth} src={imagePokemon} alt="" />
                  }
                  <p className={style.textCapitalize}>{pokemonDetails.name}</p>
                  <div style={{margin: "20px 0"}}>
                    {
                      isCatch ? 
                        <p>Tap on pokemon to catch</p> : 
                        <CatchPokemonButton onClick={() => startCatch()}>
                          Catch
                        </CatchPokemonButton>
                    }
                    {
                      catchFailed ? <ErrorMessage>Catch failed</ErrorMessage> : ''
                    }
                  </div>
                  <PokemonDetailContainer>
                    <SkillList>
                      <ButtonMoves onClick={() => setactiveDetail('moves')} activeTab={activeDetail}>Moves</ButtonMoves>
                      <ButtonTypes onClick={() => setactiveDetail('types')} activeTab={activeDetail}>Types</ButtonTypes>
                    </SkillList>
                    { activeDetail === 'types' ? 
                      <PokemonTypes>
                        {pokemonTypes && pokemonTypes.map((index, i) => {
                          return (
                            <PokemonTypesText key={i}>{index.type.name}</PokemonTypesText>
                          )
                        })}
                      </PokemonTypes>
                      : <PokemonMoves>
                        {pokemonMoves && pokemonMoves.map((index, i) => {
                          return (
                            <PokemonMovesText key={i}>{index.move.name}</PokemonMovesText>
                          )
                        })}
                      </PokemonMoves>
                    }
                  </PokemonDetailContainer>
                </CenterContainer>
              </div>
          </div>
        </div>
    )
}
