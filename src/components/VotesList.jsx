import { MessageCircleX } from "lucide-react";

const VotesList = function({votes}){

    return  (<div>
    <h3 className="text-xl mb-4 col-span-5 ">What the viewers say</h3>
    {votes && votes.length ? 
    (<div>
        {votes.map( (vote) => {
            const rawDate = new Date(vote.created_at);

            const date = new Intl.DateTimeFormat('en-US', {
            dateStyle: 'short', 
            timeStyle: 'short'
            }).format(rawDate);

            return (<div>
                <div className="stars pl-4">
                {[1,2,3,4,5].map( (v) => {
                    return (<span 
        className={`text-2xl ${vote.stars >= v ? 
            'text-yellow-400' 
            : 'text-gray-600'}`}>
        ★
      </span>);
                } )}
                </div>
                <p className="text-sm px-4 pb-2 color-white">{vote.the_content}</p>
                <p className="text-sm px-4 pb-4 color-gray-200">Comment posted on {date}</p></div>)
        } )}
    </div>) : 
    (<div className="flex flex-col"><MessageCircleX size="64" className="mx-auto my-4" /><p className="text-base text-white text-center">No one has commented this part yet.</p>
    <p className="text-xl text-center">Be the first!</p></div>)
    }
    </div>
    );
}

export default VotesList