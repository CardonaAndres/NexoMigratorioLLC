import Logo from '../../assets/imgs/LogoNexoMigratorio.webp';

export const LogoCommponent = () => {
  return (
    <div className="flex items-center">
        <div className="flex-shrink-0 flex items-center">
        <img className="h-full w-full" src={Logo} alt="Logo" loading='lazy'/>
        <div className="ml-3">
            <h1 className="text-xl font-bold text-gray-800 hidden">
                Nexo Migratorio LCC
            </h1>
        </div>
        </div>
    </div>
  )
}
