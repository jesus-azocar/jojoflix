import {useState,useEffect} from 'react'
import axios from 'axios';
import GlobalStats from './GlobalStats.jsx'
import {getJojoParts} from './utilities/model.js'

const Stats = function(){

    const [scope, setScope] = useState('1');
    const [partId, setPartId] = useState(null); 
    const [globalData, setGlobalData] = useState([]);
    const [parts, setParts] = useState([]);

    const fetchGlobal = async function(){
        const url = "https:/jesusazocar.com/wp-json/jojoflix/v1/stats";
        try{
            const stats = await axios.get(url);
            setGlobalData(stats.data[0]);
        }catch(e){
            console.log("There was an error while fetching the stats",e);
        }
    };

    useEffect( () => {
        fetchGlobal();
        getJojoParts(setParts);
    }, [] );
    
    return(<div class="w-full">
        <select value={scope} onChange={ (e) => setScope(e.target.value) } className="p-1 bg-gray-300 text-black rounded-3">
            <option value="1" >All Jojo Parts</option>
            <option value="2" >Single Jojo Part</option> 
        </select>
        {scope=='2' && (<select value={partId} onChange={ (e) => setScope(e.target.value) } className="p-1 bg-gray-300 text-black rounded-3">
            {parts.map( (v) => {
                return (<option value={v.id} >{v.title}</option> )
            } )  }
        </select>)}
        {scope=='1' && <GlobalStats data={globalData}/>}
    </div>)
}

export default Stats;