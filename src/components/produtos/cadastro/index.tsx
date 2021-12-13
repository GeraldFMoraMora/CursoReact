import { useState } from 'react'
import { Layout, Input } from 'components';

export const CadastroProdutos: React.FC = () => {

    const [sku , setSku] = useState<string>('');
    const [preco, setPreco] = useState<number>(0);
    const [nome, setNome] = useState<string>("");
    const [descrip, setDescrip] = useState<string>("");

    const submit = () => {
        const produto = {
            sku, 
            preco, 
            nome, 
            descrip
        }
        console.log(produto)
    }

    return (
        <Layout titulo='Produtos'>
            <div className='columns'>
                <Input label ="SKU: *"
                        columnClasses="is-half"
                        onChange={setSku}
                        value={sku}
                />

                <div className='field is-half column'>
                    <label className='label' htmlFor='inputSku'>SKU: *</label>
                    <div className='control'>
                        <input className='input' id='inputSku' value={sku} onChange={event => setSku(event.target.value)} placeholder='Digite el codigo de producto'/>
                    </div>
                </div>
                <div className='field is-hald column'>
                    <label className='label' htmlFor='inputPreco'>Precio: *</label>
                    <div className='control'>
                        <input className='input' id='inputPreco' value={preco} placeholder='Digite el precio de producto'/>
                    </div>
                </div>
            </div>
            <div className='columns'>
            <div className='field is-full column'>
                <label className='label' htmlFor='inputNome'>Nombre: *</label>
                <div className='control'>
                    <input className='input' id='inputNome' value={nome} onChange={event => setNome(event.target.value)} placeholder='Digite el nombre de producto'/>
                </div>
            </div>
            </div>
            <div className='columns'>
            <div className='field is-full column'>
                <label className='label' htmlFor='inputDesc'>Descripcion: *</label>
                <div className='control'>
                    <input className='textarea' id='inputDesc' value= {descrip} onChange={event => setDescrip(event.target.value)} placeholder='Digite la descripcion de producto'/>
                </div>
            </div>
            </div>
            <div className='field is-grouped'>
                <div className='control'>
                    <button className='button is-link' onClick={submit}>Guardar</button>
                </div>
                <div className='control'>
                    <button onClick={submit} className='button'>Volver</button>
                </div>
            </div>
        </Layout>
    )
}