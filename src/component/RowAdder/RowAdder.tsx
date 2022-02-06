import { useState } from "react";
import { computeService } from "../../utils/compute";
import { Button } from "../Button/Button";
import { Header } from "../Header/Header";
import EditableDiv from '../EditableDiv/EditableDiv'
import './rowAdder.css'

interface ObjectMapper {
  [key: string]: number;
}

export default function RowAdder() {
  const [categoriesList, setCategoriesList] = useState<Array<ObjectMapper>>([
    { valueX: 0, valueY: 0 },
  ]);

  const handleInputChange = (e: any, name: string, index: number) => {
    const { innerText } = e.target;
    const list: any = [...categoriesList];
    if (isNaN(innerText)) {
      list[index][name] = 0;
      setCategoriesList(list);
    } else {
      list[index][name] = parseInt(innerText);
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

  return (
    <div className="App">
      <div className="">
       <Header/>
        {categoriesList.map((item, i) => {
          return (
            <div key={i+1} className="">
              <div className="container">
                <EditableDiv
                  editable={true}
                  name="valueX"
                  onChange={(e: any, name: string) => handleInputChange(e, name, i)}
                  value={item.valueX}
                />
                <EditableDiv
                  editable={true}
                  name="valueY"
                  onChange={(e: any, name: string) => handleInputChange(e, name, i)}
                  value={item.valueY}
                />
                <EditableDiv
                  name="addXandY"
                  onChange={() => handleInputChange}
                  value={computeService.addXandY({
                    x: categoriesList[i].valueX,
                    y: categoriesList[i].valueY,
                  })}
                />
                <EditableDiv
                  name="multiplyXandY"
                  onChange={() => handleInputChange}
                  value={computeService.multiplyXandY({
                    x: categoriesList[i].valueX,
                    y: categoriesList[i].valueY,
                  })}
                />
                <EditableDiv
                  name="powerXtoY"
                  onChange={() => handleInputChange}
                  value={computeService.powerXtoY({
                    x: categoriesList[i].valueX,
                    y: categoriesList[i].valueY,
                  })}
                />
              </div>
              <div className="button__container">
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
