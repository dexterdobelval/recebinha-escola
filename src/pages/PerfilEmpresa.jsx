import { useForm } from 'react-hook-form'

function PerfilEmpresa() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      nomeEmpresa: 'EcoTech Solutions Ltda.',
      cnpj: '12.345.678/0001-90',
      email: 'contato@ecotech.com',
      telefone: '(11) 9999-9999',
      endereco: 'Rua Verde, 123 - São Paulo',
      responsavel: 'João Silva'
    }
  })

  const onSubmit = (data) => {
    console.log('Perfil atualizado:', data)
    alert('Perfil atualizado com sucesso!')
  }

  return (
    <div className="row">
      <div className="col-md-8 mx-auto">
        <div className="text-center mb-4">
          <img src="/image.png" alt="VerDenovo" style={{maxWidth: '100px', height: 'auto'}} />
          <h2 className="mt-3">Perfil da Empresa</h2>
        </div>

        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Nome da Empresa</label>
                  <input 
                    type="text" 
                    className="form-control"
                    {...register('nomeEmpresa', { required: 'Nome é obrigatório' })}
                  />
                  {errors.nomeEmpresa && <div className="text-danger">{errors.nomeEmpresa.message}</div>}
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">CNPJ</label>
                  <input 
                    type="text" 
                    className="form-control"
                    {...register('cnpj', { required: 'CNPJ é obrigatório' })}
                  />
                  {errors.cnpj && <div className="text-danger">{errors.cnpj.message}</div>}
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Email</label>
                  <input 
                    type="email" 
                    className="form-control"
                    {...register('email', { required: 'Email é obrigatório' })}
                  />
                  {errors.email && <div className="text-danger">{errors.email.message}</div>}
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Telefone</label>
                  <input 
                    type="tel" 
                    className="form-control"
                    {...register('telefone', { required: 'Telefone é obrigatório' })}
                  />
                  {errors.telefone && <div className="text-danger">{errors.telefone.message}</div>}
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

              <div className="mb-3">
                <label className="form-label">Responsável</label>
                <input 
                  type="text" 
                  className="form-control"
                  {...register('responsavel', { required: 'Responsável é obrigatório' })}
                />
                {errors.responsavel && <div className="text-danger">{errors.responsavel.message}</div>}
              </div>

              <button type="submit" className="btn btn-success">Salvar Alterações</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PerfilEmpresa