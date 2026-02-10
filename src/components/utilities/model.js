import axios from 'axios'

async function getJojoParts(cb){
            const partsURL = "https://jesusazocar.com/wp-json/jojoflix/v1/parts";
            let p;
            try{ 
                p = await axios.get(partsURL);
                cb(p.data);
            }catch(e){
                console.log("There was an error fetching the parts",e);
                return [];
            }
        }

export {getJojoParts}