import styled from '@emotion/styled'

const PrimaryGreen = '#48D0B0'

export const InputPokemonContainer = styled.div`
    background-color: rgba(0,0,0,0.3);
    width: 100%;
    min-height: 100vh;
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    display: ${props => props.active ? 'flex' : 'none'};
    z-index: 999;
`

export const InputNicknameContainer = styled.div`
    background-color: white;
    z-index: 1;
    text-align: center;
    padding: 20px;
    margin: auto;
    border-radius: 10px;
    box-shadow: 0px 0px 6px 1px rgba(0,0,0,0.4);
`

export const InputNicknameTitle = styled.p`
    color: ${PrimaryGreen};
    font-weight: bold;
    font-size: 20px;
`

export const FormInputContainer = styled.div`
    text-align: center;
`

export const InputNickname = styled.input`
    line-height: 2.5;
    width: 100%;
    padding-left: 10px;
    border-radius: 5px;
    &:focus {
        outline-color: ${PrimaryGreen};
    }
`

export const ButtonSave = styled.button`
    background-color: ${props => props.buttonStyle === 'save' ? '#48D0B0' : 'white'};
    color: ${props => props.buttonStyle === 'save' ? 'white' : 'black'};
    border: 1px solid ${PrimaryGreen};
    line-height: 2;
    border-radius: 5px;
    margin: 0 5px;
    width: 80px;
    max-width: 100px;
`

export const WarningText = styled.p`
    color: red;
`

export const SuccessText = styled.p`
    color: ${PrimaryGreen}
`