import {useState,useEffect} from 'react' 
import axios from 'axios'
import {Link} from 'react-router-dom'
import {getJojoParts} from './utilities/model.js'

const PartsList = function(props){
    const [parts,setParts] = useState([]);

    useEffect(() =>{
        getJojoParts(setParts); 
    },[]);

    return (<div> 
        <h3 className="text-3xl font-weight-700 mb-4">Parts</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4">
        {parts.map( (part,v) => {
            return (
    <Link key={v} className="flex flex-col items-center justify-between bg-gray-800 p-4 rounded-sm radius-4" to={'/parts/'+part.id}  > 
        <img className="block w-full" src={part.thumbnail} height={180} alt={part.title} />
      <strong className="text-2xl text-center py-2 text-white"
        component="strong"  
      >
        {part.title}
      </strong> 
    </Link>
            );
        } )}
    </div></div>);
};

export default PartsList;