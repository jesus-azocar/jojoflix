const StatCard = function({icon,name,value}){
    return (<div className="statCard flex items-center justify-start p-4 w-full bg-gray-800 rounded-sm">
        {icon}
        <div className="flex flex-col items-start justify-start ml-4">
        <div className="statName text-sm text-gray-100">{name}</div>
        <div className="statValue text-3xl  text-white">{value}</div>
        </div>
    </div>);
}

export default StatCard;