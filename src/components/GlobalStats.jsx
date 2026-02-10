import StatCard from "./StatCard";
import {Inbox,Flame, Heart, Star} from 'lucide-react'

const GlobalStats = function({data}){
    console.log("Data",data);
    return (<div className="w-full">
        <h3 className="text-3xl text-bold text-white py-7">JJBA All Parts Stats</h3>
        <div className="grid grid-cols-12 gap-2 w-full">
            <div className="col-span-3">
                <StatCard icon={<Star size="48" color="#f8fc35"/>} name="Stars Avg." value={data.avgvotes??'0'}/>
            </div>
            <div className="col-span-3">
                <StatCard icon={<Inbox size="48" color="#357bfc"/>} name="Total Votes" value={data.totalvotes??'0'}/>
            </div>
            <div className="col-span-3">
                <StatCard icon={<Flame size="48" color="#fc9f35"/>} name="Hype this Week" value={data.hype_percentage??'N/A'}/>
            </div>
            <div className="col-span-3">
                <StatCard icon={<Heart size="48" color="#fc35d1"/>} name="Satisfaction" value={data.sentiment_data??0}/>
            </div>
        </div>
        
        <div className="grid grid-cols-12 gap-4 w-full">
            <div className="col-span-4">
                <h4 className="text-2xl text-bold text-white py-7">Favorite Parts</h4>
                {data && data.best_parts && data.best_parts.map( (part,index) => {
                    return (<div 
                    className="flex justify-start align-center 
                    w-full bg-gray-900 px-2 py-4 text-lg rounded-sm mb-2" key={part.part_id}>
                        <span 
                        className="rounded-full flex items-center justify-center 
                        bg-white text-gray-900 w-8 text-base text-center h-8 block">{index+1}
                        </span><span className="pl-3">{part.post_title}</span>
                    </div>);
                } )}
            </div>
            <div className="col-span-4">
                <h4 className="text-2xl text-bold text-white py-7">Most Voted</h4>
                {data && data.most_commented && data.most_commented.map( (part,index) => {
                    return (<div key={part.part_id} className="flex justify-start align-center 
                    w-full bg-gray-900 px-2 py-4 text-lg rounded-sm mb-2">
                        <span className="rounded-full flex items-center justify-center 
                        bg-white text-gray-900 w-8 text-base text-center h-8 block">{index+1}</span><span >{part.post_title}</span>
                    </div>);
                } )}</div>
            <div className="col-span-4">
                <h4 className="text-2xl text-bold text-white py-7">Last Comments</h4>
                {data && data.last_comments && data.last_comments.map( (comment,index) => {
                    return (<div key={index}>
                        <i>{index+1}</i><span>{comment.the_content.substr(0,100)+'...'}</span>
                    </div>);
                } )}</div>
        </div>
    </div>);
}

export default GlobalStats