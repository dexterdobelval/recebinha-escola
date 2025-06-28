import { useState, useEffect } from 'react'
import { getPontosColeta } from '../services/api'

function PontosColeta() {
  const [pontos, setPontos] = useState([])

  useEffect(() => {
    const carregarPontos = async () => {
      try {
        const dados = await getPontosColeta()
        setPontos(dados)
      } catch (error) {
        console.error('Erro ao carregar pontos:', error)
      }
    }
    carregarPontos()
  }, [])

  return (
    <div>
      <div className="text-center mb-4">
        <img src="/image.png" alt="EcoColeta" style={{maxWidth: '100px', height: 'auto'}} />
      </div>
      <h2 className="mb-4 text-center">Pontos de Coleta</h2>
      <div className="row">
        {pontos.map(ponto => (
          <div key={ponto.id} className="col-md-6 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{ponto.nome}</h5>
                <p className="card-text">{ponto.endereco}</p>
                <p className="card-text">
                  <small className="text-muted">Materiais: {ponto.materiais.join(', ')}</small>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PontosColeta