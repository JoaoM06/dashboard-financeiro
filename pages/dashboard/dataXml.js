
import { parse } from 'node-html-parser'

const xmlString = `

`;
//Parse do xml
const xmlDocument = parse(xmlString)

//Arrays para armazenar os valores
const datas = []
const numeros = []
const valores = []
const clientes = []
const valorTotal = []


//Metodo para percorrer o arquivo e armazenar os dados nos arrays
const nfs = xmlDocument.querySelectorAll("nf-e")
const tomador = xmlDocument.querySelector("tomador")
for(const nf of nfs){
    //Datas
    const data = nf.getElementsByTagName("prestacao")[0].text
    datas.push(data)

    //Numeros
    const numero = nf.getElementsByTagName("numero")[2].text
        numeros.push(numero)

    //Valores
    const valor = nf.getElementsByTagName("valorTotal")[0].text
    valores.push(valor)

    //Clientes
    const cliente = nf.getElementsByTagName("nome")[1].text
    clientes.push(cliente)
}

//Formata as datas
const dataFormatada = []
function formataData(datasParam){
    for(let i=0; i<datas.length; i++){
        let dataI = datasParam[i]
        let formatData = dataI.split("-")
        dataFormatada.push(formatData[2] + "/" + formatData[1] + "/" + formatData[0])
    }
}
formataData(datas)

//Soma de todos os valores
function somarTotal(){
    let somaTotal = 0
    for(let i=0; i<valores.length; i++){
        somaTotal += parseInt(valores[i])
    }
    return somaTotal
}
somarTotal()
const soma = somarTotal()
const joao = soma*0.03


export { dataFormatada, numeros, valores, clientes, soma, joao }