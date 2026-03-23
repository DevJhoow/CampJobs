import { supabase } from "../../../lib/supabase"

export default async function VagaPage({ params }: { params: Promise<{ id: string }> }) {

  const { id } = await params

  console.log("ID recebido:", id)

  const { data: vaga } = await supabase
    .from('jobs')
    .select('*')
    .eq('id', Number(id))
    .single()

  if (!vaga) {
    return <div>Vaga não encontrada</div>
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{vaga.titulo}</h1>
      <p>{vaga.empresa}</p>
      <p>{vaga.cidade}</p>

      <a href={vaga.link} target="_blank">
        Candidatar-se
      </a>
    </div>
  )
}