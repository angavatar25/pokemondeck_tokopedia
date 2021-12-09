import styled from '@emotion/styled'
import {createUseStyles} from 'react-jss';

export const detailStyle = createUseStyles({
    container: {
        backgroundColor: 'white',
        minHeight: '100vh'
    },
    textWhite: {
        color: '#48D0B0',
        textDecoration: 'none',
    },
    ml_3: {
        marginLeft: '10px'
    },
    pokemonDetail: {
        backgroundColor: 'white',
        padding: '20px 30px',
        borderTopLeftRadius: '15px',
        borderTopRightRadius: '15px',
    },
    imageWidth: {
        width: '200px'
    },
    textCapitalize: {
        textTransform: 'capitalize',
        fontSize: '20px'
    }
})

export const CenterContainer = styled.div`
    text-align: center;
    background-color: white;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
`

export const FlexBetween = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 30px;
`

export const PokemonDetailContainer = styled.div`
    background-color: white;
    border-top: 1px solid #48D0B0;
    padding: 20px 40px;
`

export const SkillList = styled.div`
    display: flex;
    justify-content: center;
`

export const ButtonMoves = styled.button`
    background-color: transparent;
    color: black;
    border: none;
    padding-bottom: 10px;
    border-bottom: ${props => props.activeTab === 'moves' ? '1px solid #48D0B0' : ''};
`

export const ButtonTypes = styled.button`
    background-color: transparent;
    color: black;
    border: none;
    padding-bottom: 10px;
    border-bottom: ${props => props.activeTab === 'types' ? '1px solid #48D0B0' : ''};
`

export const PokemonTypes = styled.div`
    display: flex;
    justify-content: center;    
`

export const PokemonTypesText = styled.p`
    margin: 0 10px;
    margin-top: 20px;
    padding: 5px 10px;
    font-size: 16px;
    background-color: #71B7F1;
    color: white;
    border-radius: 10px;
    text-transform: capitalize;
`

export const PokemonMoves = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex: 0 1 auto;
    height: 40vh;
    overflow-y: auto;
`

export const PokemonMovesText = styled.p`
    margin: 0 10px;
    margin-top: 20px;
    padding: 5px 10px;
    font-size: 16px;
    background-color: #71B7F1;
    color: white;
    border-radius: 10px;
    text-transform: capitalize;

`

export const CatchPokemonButton = styled.button`
    width: 80px;
    height: 80px;
    border-radius: 9999px;
    background-color: #71B7F1;
    border: none;
    color: white;
`