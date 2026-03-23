import { supabase } from "../lib/supabase"

type Vaga = {
  id: number
  titulo: string
  empresa: string
  cidade: string
  link: string
}

export default async function Home() {

  const { data: jobs } = await supabase
    .from('jobs')
    .select('*')

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">
        Vagas em Campinas Hoje
      </h1>

      <div className="space-y-4">
        {jobs?.map((vaga: Vaga) => (
          <div key={vaga.id} className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold">
              {vaga.titulo}
            </h2>
            <p>{vaga.empresa} - {vaga.cidade}</p>

            <a
              href={vaga.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded"
            >
              Candidatar-se
            </a>
          </div>
        ))}
      </div>
    </main>
  )
}