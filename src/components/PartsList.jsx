import {useState,useEffect} from 'react'
import {Card, Image, Text} from '@mantine/core'
import axios from 'axios'

const PartsList = function(props){
    const [parts,setParts] = useState([]);

    async function getJojoParts(){
            const partsURL = "https://jesusazocar.com/wp-json/jojoflix/v1/parts";
            let p;
            try{ 
                p = await axios.get(partsURL);
                setParts(p.data);
            }catch(e){
                console.log("There was an error fetching the parts",e);
                return [];
            }
        }

    useEffect(() =>{
        getJojoParts(); 
    },[]);

    return (<div> 
        <h3 class="text-3xl font-weight-700 mb-4">Parts</h3>
        <div className="grid sm:grid-cols-3 gap-4 p-4">
        {parts.map( (part,v) => {
            return (
    <Card key={v} withBorder radius="md"  >
      <Card.Section component="div">
        <Image className="h-60" src={part.thumbnail} height={180} alt={part.title} />
      </Card.Section>

      <strong className="text-lg py-2"
        component="strong"  
      >
        {part.title}
      </strong>

      <Text fz="sm" lineClamp={4} opacity={0.9}>
        {part.content}
      </Text>
    </Card>
            );
        } )}
    </div></div>);
};

export default PartsList;