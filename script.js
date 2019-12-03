/*tabel.style.display = 'none'*/

var num = document.querySelector('input#numtxt1')
var lista = document.querySelector('select#seltab')
var res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <=100) {
    return true
  } else {
    return false
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
  return true
  } else {
    return false
  }
}

function adicionar() {
  if (isNumero(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `Valor ${num.value} adicionado!`
    lista.appendChild(item)
    res.innerHTML = ''
  } else {
    window.alert('Valor inválido ou já encontrado na lista!')
  }
  num.value = ''
  num.focus() /*foca como um clique no input que estamos tratando*/
}


function finalizar() {
  if (valores.length == 0) {
    window.alert('Adicione valores se possível!')    
  } else {
    let total = valores.length
    let maxn = valores[0]
    let minn = valores[0]
    let soma = 0
    let media = 0
    for (let pos in valores) {
      soma += valores[pos]
      if (valores[pos] > maxn)
          maxn = valores[pos]
      if (valores[pos] < minn)
          minn = valores[pos]
    }
    media = soma / total
        
    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo temos ${total} números cadastrados.</p>`
    res.innerHTML += `<p>O maior valor informado foi ${maxn}.</p>`
    res.innerHTML += `<p>O menor valor informado foi ${minn}.</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
    res.innerHTML += `<p>A média dos valores digitados, é ${media}.</p>`
  }
}