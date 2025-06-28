import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { cadastrarPonto, cadastrarEmpresa } from '../services/api'

function Cadastrar() {
  const [tipoCadastro, setTipoCadastro] = useState('ponto')
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const onSubmit = async (data) => {
    try {
      if (tipoCadastro === 'ponto') {
        await cadastrarPonto(data)
        alert('Ponto cadastrado com sucesso!')
      } else {
        await cadastrarEmpresa(data)
        alert('Empresa cadastrada com sucesso!')
      }
      reset()
    } catch (error) {
      alert('Erro ao cadastrar')
    }
  }

  return (
    <div className="row">
      <div className="col-md-8 mx-auto">
        <div className="text-center mb-4">
          <img src="/image.png" alt="VerDenovo" style={{maxWidth: '100px', height: 'auto'}} />
        </div>
        
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4">Cadastrar</h2>
            
            <div className="btn-group w-100 mb-4" role="group">
              <button 
                type="button" 
                className={`btn ${tipoCadastro === 'ponto' ? 'btn-success' : 'btn-outline-success'}`}
                onClick={() => setTipoCadastro('ponto')}
              >
                Ponto de Coleta
              </button>
              <button 
                type="button" 
                className={`btn ${tipoCadastro === 'empresa' ? 'btn-success' : 'btn-outline-success'}`}
                onClick={() => setTipoCadastro('empresa')}
              >
                Empresa
              </button>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              {tipoCadastro === 'ponto' ? (
                <>
                  <div className="mb-3">
                    <label className="form-label">Nome do Local</label>
                    <input 
                      type="text" 
                      className="form-control"
                      {...register('nome', { required: 'Nome é obrigatório' })}
                    />
                    {errors.nome && <div className="text-danger">{errors.nome.message}</div>}
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Endereço</label>
                    <input 
                      type="text" 
                      className="form-control"
                      {...register('endereco', { required: 'Endereço é obrigatório' })}
                    />
                    {errors.endereco && <div className="text-danger">{errors.endereco.message}</div>}
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Materiais Aceitos</label>
                    <div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="Papel" {...register('materiais')} />
                        <label className="form-check-label">Papel</label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="Plástico" {...register('materiais')} />
                        <label className="form-check-label">Plástico</label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="Metal" {...register('materiais')} />
                        <label className="form-check-label">Metal</label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="Vidro" {...register('materiais')} />
                        <label className="form-check-label">Vidro</label>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="mb-3">
                    <label className="form-label">Nome da Empresa</label>
                    <input 
                      type="text" 
                      className="form-control"
                      {...register('nomeEmpresa', { required: 'Nome da empresa é obrigatório' })}
                    />
                    {errors.nomeEmpresa && <div className="text-danger">{errors.nomeEmpresa.message}</div>}
                  </div>

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

                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input 
                      type="email" 
                      className="form-control"
                      {...register('email', { required: 'Email é obrigatório' })}
                    />
                    {errors.email && <div className="text-danger">{errors.email.message}</div>}
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Telefone</label>
                    <input 
                      type="tel" 
                      className="form-control"
                      {...register('telefone', { required: 'Telefone é obrigatório' })}
                    />
                    {errors.telefone && <div className="text-danger">{errors.telefone.message}</div>}
                  </div>
                </>
              )}

              <button type="submit" className="btn btn-success w-100">
                Cadastrar {tipoCadastro === 'ponto' ? 'Ponto' : 'Empresa'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cadastrar