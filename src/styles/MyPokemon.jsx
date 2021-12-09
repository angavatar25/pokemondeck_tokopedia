import {createUseStyles} from 'react-jss';
import styled from '@emotion/styled'

const PrimaryGreen = '#48D0B0'

export const myPokemonStyle = createUseStyles({
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
    },
    emptyContent: {
        textAlign: 'center',
    }
})

export const FlexBetween = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Container = styled.div`
    min-height: 100vh;
    padding: 20px 30px;
`

export const MainContent = styled.div`
    margin-top: 20px;
`
export const MyPokemonCard = styled.div`
    box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.2);
    background-color: white;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    position: relative;
    border-radius: 10px;
`
export const PokemonTypes = styled.span`
    color: white;
    background-color: ${PrimaryGreen};
    border-radius: 5px;
    padding: 5px 10px;
    margin-right: 5px;
    text-transform: capitalize;
`
export const PokemonNickname = styled.p`
    color: gray;
    font-size: 12px;
`