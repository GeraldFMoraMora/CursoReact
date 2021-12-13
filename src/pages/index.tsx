import Head from 'next/head'
import { Layout } from 'components'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Vendas App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      Hello word!
      <Layout titulo='Cadastro de Produtos1'>
        Beggining
      </Layout>

    </div>
  )
}

export default Home;
