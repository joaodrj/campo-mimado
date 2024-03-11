import { Dimensions } from "react-native";

const params = {
    blockSize: 30,
    borderSize: 5,
    fontSize: 15,
    headerRation: 0.15, //Proporção do painel superio na tela
    difficultLevel: 0.1,
    getColumnsAmount() {
        const width = Dimensions.get('window').width //largura total
        return Math.floor(width/this.blockSize)
    },
    getRowsAmount() {
        const totalHeight = Dimensions.get('window').height //altura total 
        const boarHeight = totalHeight * (1 - this.headerRation) // tamanho da ocupação da tela
        return Math.floor(boarHeight / this.blockSize) //quantidade de blocos para armazenar na vertical
    }

}

export default params
