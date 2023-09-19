import {useRef} from 'react'
import Conteudo from './Conteudo';

function Login(){

const usuario = useRef();
const senha = useRef();
const getUsuario = sessionStorage.getItem("dadosUser");
const getSenha = sessionStorage.getItem("dadosSenha");

const handleSubmit=()=>{

    if(usuario.current.value=== 'admin' && senha.current.value === '123456')
    {
        sectionStorage.setItem('dadosUser','admin');
        sectionStorage.setItem('dadosSenha','123456');
    }

    else{
        alert("USUÁRIO E/OU SENHA INVALIDOS")
    }
}

    return(
        <div>
        {/*condição ternaria if ? e else*/}
        {getUsuario && getSenha ?(
            <Conteudo />
        ): (


        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <p>
            <label htmlFor="nome">
                Usuario
            </label>
            <input type="text" ref={usuario}/>
            </p>

            <p>
            <label htmlFor="nome">
                Senha:
            </label>
            <input type="password" ref={senha}/>
            </p>

            <button type="submit" value="Login">LOGAR</button>

        </form>
        )}
        
        </div>
    )
}

export default Login
