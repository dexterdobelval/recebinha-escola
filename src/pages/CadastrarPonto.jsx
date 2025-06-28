import { useForm } from 'react-hook-form'
import { cadastrarPonto } from '../services/api'

function CadastrarPonto() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const onSubmit = async (data) => {
    try {
      await cadastrarPonto(data)
      alert('Ponto cadastrado com sucesso!')
      reset()
    } catch (error) {
      alert('Erro ao cadastrar ponto')
    }
  }

  return (
    <div className="row">
      <div className="col-md-8 mx-auto">
        <div className="text-center mb-4">
          <img src="/image.png" alt="EcoColeta" style={{maxWidth: '100px', height: 'auto'}} />
        </div>
        <h2 className="mb-4 text-center">Cadastrar Novo Ponto de Coleta</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
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

          <button type="submit" className="btn btn-success">Cadastrar Ponto</button>
        </form>
      </div>
    </div>
  )
}

export default CadastrarPonto