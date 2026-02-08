import {useState} from 'react'
import {Send} from 'lucide-react'
import { toast } from 'sonner';

const VoteForm = function({onSubmit}){
    const submitHandler = function(e){
        e.preventDefault();
        onSubmit(vote);
        toast("Thank you! Your vote was saved succesfully.");
        setVote({stars:1,content:''});
    };

    const updateVote = (e) => {
    const name = e.target.name; 
    const v = name=='stars' ? parseInt(e.target.value): e.target.value;
    console.log("Nuevo valor ",name,v);
    setVote({
        ...vote,
        [name]: v
    });
};
    
    const [vote,setVote] = useState({stars:1,content:''});

    return (<form onSubmit={submitHandler} 
    className='grid my-15  grid-cols-5 bg-gray-950 py-5 px-7 rounded-md'>
        <h3 className="text-xl  pb-4 col-span-5">
            Tell us your opinion about this Jojo part
        </h3>
        <label className='col-span-5 md:col-span-2 mb-2'>
            Stars
        </label>
        <div className="col-span-5 md:col-span-3 mb-2">
           {[1, 2, 3, 4, 5].map((num) => (
    <label key={num} className="cursor-pointer">
      <input
        type="radio"
        name="stars" 
        value={num}
        checked={vote.stars === num}
        onChange={updateVote}  
        className="hidden"  
      />
      <span 
        className={`text-2xl ${vote.stars >= num ? 
            'text-yellow-400' 
            : 'text-gray-600'}`}>
        ★
      </span>
    </label>
  ))}
        </div>
        <label className='col-span-5 md:col-span-2 mb-2'>
            Comment
        </label>
        <div className='col-span-5 md:col-span-3 mb-2'>
            <textarea required 
            onChange={updateVote} 
            name="content"
            className="border-1 rounded-sm w-full" 
            value={vote.content}>

            </textarea>
        </div>
        <button 
        className="!flex !items-center justify-around w-35 !bg-red-600 !text-white !p-1">
            <Send size="18" />Submit Vote</button>
    </form>);
};

export default VoteForm