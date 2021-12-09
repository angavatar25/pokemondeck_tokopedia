import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Container, MainContent, MyPokemonCard, myPokemonStyle, PokemonNickname, PokemonTypes } from '../../styles/MyPokemon'
import { FlexBetween } from '../../styles/MyPokemon'

export default function MyPokemon() {
    const style = myPokemonStyle()
    const MyPokemonList = localStorage.getItem("mypokemon")
    let parsedPokemon = JSON.parse(MyPokemonList)
    const [pokemonList, setpokemonList] = useState(parsedPokemon)
    const handleRemove = (name) => {
        setpokemonList(pokemonList => pokemonList.filter(index => index.nickname !== name))
        pokemonList.splice(pokemonList.indexOf(name), 1)
        localStorage.setItem("mypokemon", JSON.stringify(pokemonList))
    }
    return (
        <Container>
            <FlexBetween>
                <NavLink to="/" className={style.textWhite}>
                  <i className="fas fa-chevron-left"></i>
                  <span className={style.ml_3}>Back</span>
                </NavLink>
            </FlexBetween>
            <MainContent>
                {
                    pokemonList.length > 0 ? pokemonList && pokemonList.map((index, i) => {
                        return (
                            <MyPokemonCard key={i}>
                                <div style={{margin: 'auto 0'}}>
                                    <p style={{textTransform: 'capitalize', marginBottom: '5px'}}>{index.name}</p>
                                    <PokemonNickname style={{textTransform: 'capitalize'}}>{index.nickname}</PokemonNickname>
                                    {index.types.map((index) => {
                                        return(
                                            <PokemonTypes>
                                                {index.type.name}
                                            </PokemonTypes>
                                        )
                                    })}
                                </div>
                                <img src={index.image} alt="" />
                                <div>
                                    <button onClick={() => handleRemove(index.nickname)}>
                                        <i class="far fa-trash-alt"></i>
                                    </button>
                                </div>
                            </MyPokemonCard>
                        )
                    }) : 
                    <div className={style.emptyContent}>
                        <i className="far fa-folder-open" style={{fontSize: '50px', opacity: '0.5'}}></i>
                        <p style={{marginTop: '10px'}}>No pokemon saved</p>
                    </div>
                }
            </MainContent>
        </Container>
    )
}
