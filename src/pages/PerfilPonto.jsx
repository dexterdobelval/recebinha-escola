import { useForm } from 'react-hook-form'

function PerfilPonto() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      codigo: 'PC001',
      nome: 'Supermercado EcoVerde',
      endereco: 'Rua das Flores, 123 - Centro',
      telefone: '(11) 8888-8888',
      horarioFuncionamento: '08:00 - 18:00',
      responsavel: 'Maria Santos',
      descricao: 'Ponto de coleta localizado no supermercado, com fácil acesso e amplo estacionamento.',
      materiais: ['Papel', 'Plástico']
    }
  })

  const onSubmit = (data) => {
    console.log('Perfil do ponto atualizado:', data)
    alert('Perfil do ponto atualizado com sucesso!')
  }

  return (
    <div className="row">
      <div className="col-md-8 mx-auto">
        <div className="text-center mb-4">
          <img src="/image.png" alt="VerDenovo" style={{maxWidth: '100px', height: 'auto'}} />
          <h2 className="mt-3">Perfil do Ponto de Coleta</h2>
        </div>

        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Código do Ponto</label>
                  <input 
                    type="text" 
                    className="form-control"
                    readOnly
                    {...register('codigo')}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Nome do Local</label>
                  <input 
                    type="text" 
                    className="form-control"
                    {...register('nome', { required: 'Nome é obrigatório' })}
                  />
                  {errors.nome && <div className="text-danger">{errors.nome.message}</div>}
                </div>
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

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Telefone</label>
                  <input 
                    type="tel" 
                    className="form-control"
                    {...register('telefone', { required: 'Telefone é obrigatório' })}
                  />
                  {errors.telefone && <div className="text-danger">{errors.telefone.message}</div>}
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Horário de Funcionamento</label>
                  <input 
                    type="text" 
                    className="form-control"
                    placeholder="Ex: 08:00 - 18:00"
                    {...register('horarioFuncionamento', { required: 'Horário é obrigatório' })}
                  />
                  {errors.horarioFuncionamento && <div className="text-danger">{errors.horarioFuncionamento.message}</div>}
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Responsável</label>
                <input 
                  type="text" 
                  className="form-control"
                  {...register('responsavel', { required: 'Responsável é obrigatório' })}
                />
                {errors.responsavel && <div className="text-danger">{errors.responsavel.message}</div>}
              </div>

              <div className="mb-3">
                <label className="form-label">Descrição</label>
                <textarea 
                  className="form-control"
                  rows="3"
                  placeholder="Descreva o ponto de coleta, facilidades de acesso, etc."
                  {...register('descricao')}
                ></textarea>
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

              <button type="submit" className="btn btn-success">Salvar Alterações</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PerfilPonto