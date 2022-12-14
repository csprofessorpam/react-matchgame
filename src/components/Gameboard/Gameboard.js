import React from 'react'
import back from '../../assets/back.png'
import leia from '../../assets/leia.png'
import r2d2 from '../../assets/r2d2.png'
import Square from '../Square/Square'

import './Gameboard.css'

function Gameboard() {

    const pics = [leia, r2d2, r2d2, leia];
    //console.log(pics);
    const nums = [0,1,2,3];
    let boxdata = [];

    for (let i = 0; i < pics.length; i++){
        let obj = {back: back,
                   front: pics[i],
                   index: i,
                   show: false
                  };
        //console.log(obj);
        boxdata.push(obj);


    }
    console.log(boxdata);
    //this goes in state
    const [boxes, setBoxes] = React.useState(boxdata);
    const [firstpic, setFirstpic] = React.useState('')
    const [secondpic, setSecondpic] = React.useState('')
    const [firstClick, setFirstClick] = React.useState(-1)
    const [secondClick, setSecondClick] = React.useState(-1)

    function boxPicked(pos){
        console.log(pos);
        //need to change show to true in this position of boxes
        const temp = [...boxes];
        
        if (firstClick === -1){
            
            setFirstClick(pos);
            console.log("firstclick", firstClick);
            //show it
            temp[pos].show = true;
            setBoxes(temp);

        }
        else if (secondClick === -1){
            
            setSecondClick(pos);
            console.log("secondclick", secondClick);
            //show it
            temp[pos].show = true;
            setBoxes(temp);
            //now check for match
            if (pics[firstClick] === pics[secondClick]){
                alert("match!")
                //they stay turned over

                //how to make sure they can't be clicked again?
                //setFirstClick(-1);
                //setSecondClick(-1);
            }
            else{
                console.log("no match", firstClick, secondClick);
                //delay then turn show to false
                setTimeout(turnOver, 3000);

            }


        }
    }

    function turnOver(){
        console.log('turnover', firstClick, secondClick);
        const temp = [...boxes];
        console.log(temp);
       // temp[firstClick].show = false;
       // temp[secondClick].show = false;
       // setBoxes(temp);
        //setFirstClick(-1);
        //setSecondClick(-1);
    }

    
  return (
    <div className="gameboard-container">
        {
            boxes.map(box=> <Square 
                key={box.index}
                   back={box.back}
                   front={box.front}
                   position={box.index}
                   show={box.show}
                   boxPicked={boxPicked} />)
        }
        {/* {
            nums.map(n => <Square back={back} front={pics[n]} position={n} boxPicked={boxPicked} /> )
        } */}
        {/* <Square back={back} front={leia} />
        <Square back={back} front={r2d2} />
        <Square back={back} front={r2d2} />
        <Square back={back} front={leia} /> */}
    </div>
  )
}

export default Gameboard