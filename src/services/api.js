import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3001/api'
})

// Dados mockados para demonstração
const pontosMock = [
  {
    id: 1,
    nome: 'Supermercado EcoVerde',
    endereco: 'Rua das Flores, 123 - Centro',
    materiais: ['Papel', 'Plástico', 'Metal']
  },
  {
    id: 2,
    nome: 'Escola Municipal Verde',
    endereco: 'Av. Sustentável, 456 - Jardim',
    materiais: ['Papel', 'Plástico']
  }
]

export const getPontosColeta = async () => {
  // Simula chamada à API
  return new Promise((resolve) => {
    setTimeout(() => resolve(pontosMock), 500)
  })
}

export const cadastrarPonto = async (ponto) => {
  // Simula cadastro na API
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Ponto cadastrado:', ponto)
      resolve({ success: true })
    }, 500)
  })
}

export const cadastrarEmpresa = async (empresa) => {
  // Simula cadastro de empresa na API
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Empresa cadastrada:', empresa)
      resolve({ success: true })
    }, 500)
  })
}