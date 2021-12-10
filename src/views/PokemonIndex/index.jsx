import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import {ButtonDisabled, ButtonPaginate, FlexBetween, homeStyle} from '../../styles/PokemonIndex'

export default function PokemonIndex() {
    const style = homeStyle()
    let pokemonStorage = localStorage.getItem("mypokemon") || "[]"
    const parsedPokemon = JSON.parse(pokemonStorage)
    const [pokemonList, setpokemonList] = useState([])
    const [Meta, setMeta] = useState({})
    const savedPokemon = parsedPokemon.length
    const mainUrl = 'https://graphql-pokeapi.graphcdn.app/'
    const gqlQuery = `query pokemons($limit: Int, $offset: Int) {
        pokemons(limit: $limit, offset: $offset) {
          count
          next
          previous
          status
          nextOffset
          prevOffset
          message
          results {
            url
            name
            image
          }
        }
    }`;

    const Pokemon = async () => {
        const gqlVariables = {
            limit: 60,
        };
        await fetch(mainUrl, {
            credentials: 'omit',
            headers: { 'Content-Type': 'application/json' ,'dataType': 'jsonp' },
            body: JSON.stringify({
                query: gqlQuery,
                variables: gqlVariables
            }),
            method: 'POST',
        })
            .then((res) => res.json())
            .then((res) => {
                setMeta(res.data.pokemons)
                setpokemonList(res.data.pokemons.results)
            });
    }

    const NextPokemon = async (url) => {
        const gqlVariablesNext = {
            limit: 60,
            offset: Meta.nextOffset,
        };
        await fetch(url, {
            credentials: 'omit',
            headers: { 'Content-Type': 'application/json' ,'dataType': 'jsonp' },
            body: JSON.stringify({
                query: gqlQuery,
                variables: gqlVariablesNext
            }),
            method: 'POST',
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res.data.pokemons)
                setMeta(res.data.pokemons)
                setpokemonList(res.data.pokemons.results)
            })
    }

    const PrevPokemon = async (url) => {
        const gqlVariablesPrev = {
            limit: 60,
            offset: Meta.prevOffset,
        };
        await fetch(url, {
            credentials: 'omit',
            headers: { 'Content-Type': 'application/json' ,'dataType': 'jsonp' },
            body: JSON.stringify({
                query: gqlQuery,
                variables: gqlVariablesPrev
            }),
            method: 'POST',
        })
            .then((res) => res.json())
            .then((res) => {
                setMeta(res.data.pokemons)
                setpokemonList(res.data.pokemons.results)
            })
    }

    useEffect(() => {
        Pokemon()
    },[])
    return (
        <div className={style.contentContainer}>
            <div className={style.flexBetween}>
                <p className={style.titleWhite}>Pokemon List</p>
                <NavLink to="/my-pokemon" className={style.myPokemon}>
                    <span className={style.myPokemonText}>My Pokemon</span>
                    {
                        savedPokemon > 0 ? <span>{savedPokemon}</span>
                        : <i className="fas fa-bullseye"></i>
                    }
                </NavLink>
            </div>
            <div className={style.pokemonList} style={{height: '100%'}}>
                <FlexBetween>
                    {
                        Meta.prevOffset === parseInt(0) ? <ButtonDisabled>
                        <i class="fas fa-chevron-left"></i>
                        <span style={{marginLeft: '5px'}}>Prev</span>
                    </ButtonDisabled> : <ButtonPaginate onClick={() => PrevPokemon(mainUrl)}>
                        <i class="fas fa-chevron-left"></i>
                        <span style={{marginLeft: '5px'}}>Prev</span>
                    </ButtonPaginate>
                    }
                    {
                        Meta.nextOffset === parseInt(0) ? <ButtonDisabled>
                        <span style={{marginRight: '5px'}}>Next</span>
                        <i class="fas fa-chevron-right"></i>
                    </ButtonDisabled> : <ButtonPaginate onClick={() => NextPokemon(mainUrl)}>
                        <span style={{marginRight: '5px'}}>Next</span>
                        <i class="fas fa-chevron-right"></i>
                    </ButtonPaginate>
                    }
                </FlexBetween>
                <div className="row">
                    {pokemonList.map((index, i) => {
                        return (
                            <NavLink 
                                style={{textDecoration: 'none'}} 
                                className="col-4 col-md-2" 
                                to={{
                                        pathname:`/pokemon-detail/${index.name}`,
                                        query:{pokemon_name: "pokemon_name"}
                                    }} 
                                key={i}>
                                <div className={style.textCenter}>
                                    <img src={index.image} alt="" />
                                    <p className={style.pokemonName}>{index.name}</p>
                                </div>
                            </NavLink>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
