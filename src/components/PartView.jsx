import {useState,useEffect} from 'react' 
import axios from 'axios'
import { useParams, Link } from 'react-router-dom';
import VotesList  from './VotesList.jsx';
import VoteForm  from './VoteForm.jsx';

const PartView = function(){
    const {id}= useParams();
    const [part,setPart] = useState(null);

    const submitVote = async function(vote){
        const url = "https://jesusazocar.com/wp-json/jojoflix/v1/parts";
        vote.part_id = id;
        try{
            const r = await axios.post(url,vote);
            getPart();
        }catch(e){
            console.log('Error',e);
        }
    };

    const getPart = async function(){
        const url = "https://jesusazocar.com/wp-json/jojoflix/v1/parts/"+id;
        try{
        const response = await axios.get(url);
        console.log(response.data);
        setPart(response.data);
        }
        catch(e){
            console.log(e);
        }
    };

    useEffect(function(){
        getPart();
    },[]);

    if(!part) return ( <div className='p-10 text-white'>Loading...</div>   );

    return (<div> 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
                <img className="block h-110 w-full" src={part.thumbnail} height={180} alt={part.title} />
            </div>
            <div className="md:col-span-2">
                <Link to="/parts/" className="text-sm">Back to parts</Link>
                <h3 className="text-2xl py-5 font-w-700"
        component="strong"  
      >
        {part.title}
      </h3>
      <p fz="sm" lineClamp={4} opacity={0.9}>
        {part.content}
      </p>
      <VoteForm onSubmit={submitVote}/>
      <VotesList votes={part.votes}/>
            </div>
        </div>
    </div>);
}

export default PartView;