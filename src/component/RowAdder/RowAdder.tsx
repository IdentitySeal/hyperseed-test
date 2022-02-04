import { useState } from "react";
import { computeService } from "../../utils/compute";
// import { Button } from "../Button/button";
import { Button } from "../Button/Button";
import EditableInput from "../EditableInput/EditableInput";
import { Header } from "../Header/Header";
import './rowAdder.css'

interface ObjectMapper {
  [key: string]: number;
}

export default function RowAdder() {
  const [categoriesList, setCategoriesList] = useState<Array<ObjectMapper>>([
    { valueX: 0, valueY: 0 },
  ]);

  const handleInputChange = (e: any, name: any, index: number) => {
    const { innerText } = e.target;
    const list: any = [...categoriesList];
    if (isNaN(innerText)) {
      list[index][name] = 0;
      setCategoriesList(list);
    } else {
      list[index][name] = parseInt(innerText);
      console.log(list);
      setCategoriesList(list);
    }
  };

  const handleRemoveClick = (index: number) => {
    const list = [...categoriesList];
    list.splice(index, 1);
    setCategoriesList(list);
  };

  const handleAddClick = () => {
    setCategoriesList([...categoriesList, { valueX: 0, valueY: 0 }]);
  };

  console.log(categoriesList);

  return (
    <div className="App">
      <div className="">
       <Header/>
        {categoriesList.map((item, i) => {
          return (
            <div className="">
              <div className="container">
                <EditableInput
                  editable={true}
                  name="valueX"
                  onChange={(e, name) => handleInputChange(e, name, i)}
                  value={item.valueX}
                />
                <EditableInput
                  editable={true}
                  name="valueY"
                  onChange={(e, name) => handleInputChange(e, name, i)}
                  value={item.valueY}
                />
                <EditableInput
                  name="addXandY"
                  onChange={(e) => handleInputChange}
                  value={computeService.addXandY({
                    x: categoriesList[i].valueX,
                    y: categoriesList[i].valueY,
                  })}
                />
                <EditableInput
                  name="multiplyXandY"
                  onChange={(e) => handleInputChange}
                  value={computeService.multiplyXandY({
                    x: categoriesList[i].valueX,
                    y: categoriesList[i].valueY,
                  })}
                />
                <EditableInput
                  name="powerXtoY"
                  onChange={(e) => handleInputChange}
                  value={computeService.powerXtoY({
                    x: categoriesList[i].valueX,
                    y: categoriesList[i].valueY,
                  })}
                />
              </div>
              <div style={{display:"flex",flexDirection:'row',alignItems:'flex-end',justifyContent:'right'}}>
                {categoriesList.length !== 1 && (
                <Button onClick={() => handleRemoveClick(i)} title={'X'}/>
                )}
              </div>
              {categoriesList.length - 1 === i && (
                <Button onClick={handleAddClick} title={'Add Row'}/>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
