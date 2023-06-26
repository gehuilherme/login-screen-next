export default function Login() {
  return (
    <main className='w-screen h-screen white flex justify-center items-center'>
    {/* Tela de Login */}
    <div className="min-[0px]:hidden sm:hidden md:hidden lg:flex xl:flex 2xl:flex w-screen h-screen bg-gradient-to-tl to-blue-500 from-blue-700 items-center justify-center basis-11/12">

    </div>
    
    <div className="basis-4/12 lg:bg-zinc-50 xl:bg-zinc-50 2xl:bg-zinc-50 w-screen h-screen flex flex-row justify-center items-center">
        <div className="flex flex-col justify-center">
          <form className="flex flex-col items-center" action="">
            <h1 className="text-center text-3xl text-zinc-950">Login</h1>
            <label className="flex flex-col text-sm mt-3 text-zinc-950" htmlFor="email">
              E-mail
              <input id="email" className="p-3 mt-1 border-2 rounded-lg min-[0px]:w-60 sm:w-56 lg:w-64 xl:w-80 2xl:w-96" placeholder="Digite seu email"/>
            </label>
            <label className="flex flex-col text-sm mt-3 text-zinc-950" htmlFor="password">
              Senha
              <input id="password" className="p-3 mt-1 border-2 rounded-lg min-[0px]:w-60 sm:w-56 lg:w-64 xl:w-80 2xl:w-96" placeholder="Digite sua Senha" />
            </label>
            <button className="p-3 mt-5 rounded-lg bg-blue-500 hover:bg-blue-400 font-sans text-lg text-zinc-100 min-[0px]:w-60 sm:w-56 lg:w-64 xl:w-80 2xl:w-96" type="submit">Entrar</button>
          </form>
          <a href="#" className="mt-5 text-center text-sm text-zinc-950 hover:text-zinc-500">Esqueci minha senha</a>
        </div>
      </div>
  </main>
  )
}