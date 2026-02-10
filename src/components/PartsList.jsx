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
        <div className="grid sm:grid-cols-3 gap-4 p-4">
        {parts.map( (part,v) => {
            return (
    <Link key={v} className="bg-black-500 radius-4" to={'/parts/'+part.id}  > 
        <img className="block h-60" src={part.thumbnail} height={180} alt={part.title} />
      <strong className="text-lg py-2"
        component="strong"  
      >
        {part.title}
      </strong>
      <p fz="sm" lineClamp={4} opacity={0.9}>
        {part.content}
      </p>
    </Link>
            );
        } )}
    </div></div>);
};

export default PartsList;