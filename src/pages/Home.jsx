import { Link } from 'react-router-dom'
import { useEffect } from 'react'

function Home() {
  useEffect(() => {
    // Verificar se o Bootstrap JS já foi carregado
    if (!window.bootstrap) {
      const script = document.createElement('script')
      script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js'
      script.onload = () => {
        console.log('Bootstrap JS carregado')
      }
      document.head.appendChild(script)
    }
  }, [])

  return (
    <>
      {/* Carrossel no topo ocupando 100% */}
      <div className="w-100 mb-4">
        <div id="carouselPromocoes" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="card bg-success text-white rounded-0" style={{minHeight: '200px'}}>
                <div className="card-body d-flex align-items-center justify-content-center text-center p-4">
                  <div>
                    <h5 className="card-title h4">🤝 Parceria EcoTech Solutions</h5>
                    <p className="card-text">Empresa líder em sustentabilidade se junta ao VerDenovo para ampliar a rede de coleta seletiva.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card rounded-0" style={{backgroundColor: '#198754', minHeight: '200px'}}>
                <div className="card-body d-flex align-items-center justify-content-center text-center text-white p-4">
                  <div>
                    <h5 className="card-title h4">🌍 Semana do Meio Ambiente</h5>
                    <p className="card-text">De 5 a 12 de junho - Eventos especiais de reciclagem em todos os pontos de coleta parceiros.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card rounded-0" style={{backgroundColor: '#198754', minHeight: '200px'}}>
                <div className="card-body d-flex align-items-center justify-content-center text-center text-white p-4">
                  <div>
                    <h5 className="card-title h4">♻️ Campanha Recicle+</h5>
                    <p className="card-text">Troque seus recicláveis por descontos em lojas parceiras. Participe e ganhe prêmios!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselPromocoes" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselPromocoes" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>

      {/* Conteúdo em caixas */}
      <div className="container">
        <div className="row g-4">
          <div className="col-12">
            <div className="card" style={{backgroundColor: 'rgba(232, 245, 232, 0.8)', border: 'none'}}>
              <div className="card-body text-center p-4">
                <img src="/image.png" alt="VerDenovo" style={{maxWidth: '80px', height: 'auto'}} className="mb-3" />
                <h5 className="card-title text-success mb-3">Sobre o VerDenovo</h5>
                <p className="card-text lead">Encontre pontos de coleta de reciclagem próximos a você e contribua para um mundo mais sustentável. Nossa plataforma conecta pessoas conscientes com locais de descarte adequado, promovendo a economia circular e a preservação do meio ambiente.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home