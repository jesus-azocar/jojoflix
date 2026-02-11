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

const randomColor = (l) => {
    const r = Math.floor(l * Math.random());
  return [
  'rgba(255, 0, 255, 0.7)',   // Fucsia "Shocking Pink" (Muy Jolyne)
  'rgba(0, 255, 255, 0.7)',   // Cyan Eléctrico
  'rgba(255, 215, 0, 0.7)',   // Oro Giorno Giovanna
  'rgba(147, 51, 234, 0.7)',  // Morado Star Platinum
  'rgba(50, 255, 50, 0.7)',   // Verde Neón "Hierophant"
  'rgba(255, 100, 0, 0.7)',   // Naranja Magician's Red
  'rgba(255, 50, 150, 0.7)',  // Rosa chicle
  'rgba(100, 100, 255, 0.7)', // Azul Josuke
][r]; 
};

export {getJojoParts, randomColor}