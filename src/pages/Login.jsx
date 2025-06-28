import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [tipoLogin, setTipoLogin] = useState('empresa')
  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate()

  const onSubmit = (data) => {
    console.log(`Login ${tipoLogin}:`, data)
    alert(`Login ${tipoLogin === 'empresa' ? 'empresarial' : 'do ponto de coleta'} realizado com sucesso!`)
    
    // Redirecionar para o perfil correspondente
    if (tipoLogin === 'empresa') {
      navigate('/perfil-empresa')
    } else {
      navigate('/perfil-ponto')
    }
  }

  return (
    <div className="row">
      <div className="col-md-6 mx-auto">
        <div className="card">
          <div className="card-body">
            <div className="text-center mb-4">
              <img src="/image.png" alt="VerDenovo" style={{maxWidth: '80px', height: 'auto'}} />
              <h3 className="mt-3">Login</h3>
            </div>
            
            <div className="btn-group w-100 mb-4" role="group">
              <button 
                type="button" 
                className={`btn ${tipoLogin === 'empresa' ? 'btn-success' : 'btn-outline-success'}`}
                onClick={() => setTipoLogin('empresa')}
              >
                Empresa
              </button>
              <button 
                type="button" 
                className={`btn ${tipoLogin === 'ponto' ? 'btn-success' : 'btn-outline-success'}`}
                onClick={() => setTipoLogin('ponto')}
              >
                Ponto de Coleta
              </button>
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)}>
              {tipoLogin === 'empresa' ? (
                <div className="mb-3">
                  <label className="form-label">CNPJ</label>
                  <input 
                    type="text" 
                    className="form-control"
                    placeholder="00.000.000/0001-00"
                    {...register('cnpj', { required: 'CNPJ é obrigatório' })}
                  />
                  {errors.cnpj && <div className="text-danger">{errors.cnpj.message}</div>}
                </div>
              ) : (
                <div className="mb-3">
                  <label className="form-label">Código do Ponto</label>
                  <input 
                    type="text" 
                    className="form-control"
                    placeholder="Ex: PC001"
                    {...register('codigo', { required: 'Código é obrigatório' })}
                  />
                  {errors.codigo && <div className="text-danger">{errors.codigo.message}</div>}
                </div>
              )}

              <div className="mb-3">
                <label className="form-label">Senha</label>
                <input 
                  type="password" 
                  className="form-control"
                  {...register('senha', { required: 'Senha é obrigatória' })}
                />
                {errors.senha && <div className="text-danger">{errors.senha.message}</div>}
              </div>

              <button type="submit" className="btn btn-success w-100">
                Entrar como {tipoLogin === 'empresa' ? 'Empresa' : 'Ponto de Coleta'}
              </button>
            </form>

            <div className="mt-4 text-center">
              <small className="text-muted">
                {tipoLogin === 'empresa' ? (
                  <>Empresa parceira do programa de sustentabilidade<br/><strong className="text-success">VerDenovo</strong></>
                ) : (
                  <>Acesso para gerenciamento de<br/><strong className="text-success">Pontos de Coleta</strong></>
                )}
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login