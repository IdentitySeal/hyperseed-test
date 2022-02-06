import React from "react";
import { computeService } from "../../utils/compute";
import { Button } from "../Button/Button";
import EditableInput from "../EditableInput/EditableInput";
import './rowContainer.css'

interface ObjectMapper {
    [key: string]: number;
  }

  interface PropMapper {
      item:ObjectMapper
      handleInputChange: (e: any, name: any, index: number)=>void
      index:number
      categoriesList:Array<ObjectMapper>
      handleRemoveClick:( index:number ) => void
      handleAddClick: () => void

  }
  

const RowContainer = ({item ,handleAddClick, handleInputChange , index , categoriesList,handleRemoveClick}:PropMapper) => {


  return (
    <>
      <div className="container">
        <EditableInput
          editable={true}
          name="valueX"
          onChange={(e, name) => handleInputChange(e, name, index)}
          value={item.valueX}
        />
        <EditableInput
          editable={true}
          name="valueY"
          onChange={(e, name) => handleInputChange(e, name,index )}
          value={item.valueY}
        />
        <EditableInput
          name="addXandY"
          onChange={(e) => handleInputChange}
          value={computeService.addXandY({
            x: categoriesList[index].valueX,
            y: categoriesList[index].valueY,
          })}
        />
        <EditableInput
          name="multiplyXandY"
          onChange={(e) => handleInputChange}
          value={computeService.multiplyXandY({
            x: categoriesList[index].valueX,
            y: categoriesList[index].valueY,
          })}
        />
        <EditableInput
          name="powerXtoY"
          onChange={(e) => handleInputChange}
          value={computeService.powerXtoY({
            x: categoriesList[index].valueX,
            y: categoriesList[index].valueY,
          })}
        />
        
      </div>
      <div style={{display:"flex",flexDirection:'row',alignItems:'flex-end',justifyContent:'right'}}>
                {categoriesList.length !== 1 && (
                <Button onClick={() => handleRemoveClick(index)} title={'X'}/>
                )}
        </div>
        
       
    </>
  );
};

export default RowContainer;
