'use client';
import Image from "next/image";
import styles from "./page.module.css";
import React, { useState } from "react";
import boxData from "./boxData"
import Boxes from "./components/boxes"

export default function Home() {

  const [boxes, setBoxes] = useState(boxData)
  let allBoxes = boxes.map((box) => {
    return <Boxes toggle={handleToggle} key={box.id} id={box.id} on={box.on} />

  })


  type Box = {
    id: number;
    on: boolean;
  };






  // >>>>>>>> Toggle using map 

  function handleToggle(id: number) {
    setBoxes(prevBoxState => {
      return prevBoxState.map(boxState => {
        return boxState.id === id ? { ...boxState, on: !boxState.on } : boxState
      })
    })
  }



  
  // >>>>>>>>> Toggle using foreach

  // function handleToggle(id: number) {
  //   setBoxes(prevBoxState => {
  //     let newBoxSet:{id: number;on:boolean;}[] = []
  //     prevBoxState.forEach(box => {
  //       if (box.id === id) {
  //         let newBox = { ...box, on: !box.on }
  //         newBoxSet.push(newBox)
  //       } else newBoxSet.push(box)
  //     })
  //     return newBoxSet
  //   })
  // }

  // function handleToggle(id: number) {
  //   setBoxes(prevBoxes => {
  //   const newBoxes: Box[] = []
  //     prevBoxes.forEach(box => {
  //       let updatedBox: Box
  //       updatedBox = box.id === id? {...box, on: !box.on} : box
  //       newBoxes.push(updatedBox)
  //     })
  //     return newBoxes
  //   })
  // }



  // >>>>>>>>> Toggle using for i loop

  // function handleToggle(id: number) {
  //   setBoxes(prevBoxes => {
  //     let newBoxes = []
  //     // console.log(newBoxes)
  //     for (let i = 0; i < prevBoxes.length; i++) {
  //       let currentBox = prevBoxes[i]
  //     // console.log(prevBoxes)

  //       if (currentBox.id === id) {

  //         let newBox: Box = {
  //           ...currentBox, on: !currentBox.on
  //         }
  //     // console.log(newBox)

  //         newBoxes.push(newBox)
  //       } else {
  //         newBoxes.push(currentBox)
  //       }
  //     }
  //     // console.log(newBoxes)
  //     return newBoxes

  //   })
  // }


  // function handleToggle(id:number) {
  //   setBoxes(prevBoxes => {
  //     let newBoxes: Box[] = []
  //     for(let i=0; i<prevBoxes.length; i++){
  //       let currentBox = prevBoxes[i]
  //       let updatedBox = currentBox.id === id? {...currentBox, on:!currentBox.on} : currentBox
  //       newBoxes.push(updatedBox)
  //     }
  //     return newBoxes
  //   })
  // }








  return (
    <div className={styles.box_container}>
      {allBoxes}
    </div>
  );
}