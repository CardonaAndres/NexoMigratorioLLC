
export const ServiceCard = ({ title, description, icon, index }) => {
    const isBlue = index % 2 === 0;

    return (
      <div className={`
          p-6 rounded-xl transition-all duration-300
          ${isBlue ? 'bg-blue-900 hover:bg-blue-800' : 'bg-red-400 hover:bg-red-500'}
          transform hover:-translate-y-1 hover:shadow-xl
        `}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center mb-4">
            <div className={`p-2 rounded-lg ${isBlue ? 'bg-blue-800/50' : 'bg-red-300/50'}`}>
              {icon}
            </div>
            <h3 className={`text-xl font-bold ml-3 ${isBlue ? 'text-white' : 'text-red-900'}`}>
              {title}
            </h3>
          </div>
          
          <p className={`flex-grow mb-6 ${isBlue ? 'text-blue-100' : 'text-red-900'} text-base`}>
            {description}
          </p>
          
        </div>
      </div>
    );
}
