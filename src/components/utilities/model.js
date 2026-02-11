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
  let a = [
  '#FFC312','#C4E538','#12CBC4','#FDA7DF','#ED4C67',
  '#F79F1F','#A3CB38','#1289A7','#D980FA','#B53471',
  '#EE5A24','#009432','#0652DD','#833471'
];
  shuffle(a);
  return a.slice(0,l); 
};

function shuffle(array) {
  let currentIndex = array.length;
 
  while (currentIndex != 0) {
 
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
 
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

export {getJojoParts, randomColor}