import {createUseStyles} from 'react-jss';
import styled from '@emotion/styled'

const PrimaryGreen = '#48D0B0'

export const homeStyle = createUseStyles({
    noMargin: {
        margin: 0
    },
    contentContainer: {
        backgroundColor: PrimaryGreen
    },
    textCenter: {
        textAlign: 'center',
        color: 'black',
        textDecoration: 'none'
    },
    pokemonName: {
        color: 'white',
        backgroundColor: PrimaryGreen,
        padding: '3px',
        borderRadius: '10px',
        textTransform: 'capitalize'
    },
    backgroundBlack: {
        backgroundColor: 'black'
    },
    title: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        margin: 0,
        padding: '20px 30px',
    },
    titleWhite: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        margin: 'auto 0',
        color: 'white'
    },
    pokemonList: {
        backgroundColor: 'white',
        padding: '20px 30px',
        borderTopLeftRadius: '15px',
        borderTopRightRadius: '15px',
        overflowY: 'scroll'
    },
    flexBetween: {
        display: 'flex',
        padding: '20px 30px',
        justifyContent: 'space-between'
    },
    myPokemon: {
        backgroundColor: 'white',
        color: PrimaryGreen,
        border: 'none',
        borderRadius: '9999px',
        padding: '10px 10px',
        textDecoration: 'none'
    },
    myPokemonText: {
        marginRight: '6px'
    }
})

export const FlexBetween = styled.div`
    display: flex;
    justify-content: space-between;
`
export const ButtonPaginate = styled.button`
    background-color: transparent;
    color: ${PrimaryGreen};
    border: none;
`
export const ButtonDisabled = styled.button`
    background-color: transparent;
    color: gray;
    border: none;
`
export const ErrorMessage = styled.p`
    color: red;
    font-size: 12px;
`