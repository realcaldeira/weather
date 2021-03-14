import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    position: absolute;
    zIndex:9px;
    width: 70px;
    height: 70px;
    background-color: #FFF;
    align-items: center;
    justify-content: center;
    left: 10px;
    top:40px;
    border-top-right-radius:30px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius:30px;
    elevation:2px
    shadowColor: #000;
    shadow-opacity: 0.2px;
    shadow-offset:{
        width:1px;
        height: 3px;
`;