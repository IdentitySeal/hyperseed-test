import { useState } from "react";
import { computeService } from "../../utils/compute";
// import { Button } from "../Button/button";
import { Button } from "../Button/Button";
import EditableInput from "../EditableInput/EditableInput";
import { Header } from "../Header/Header";
import OrderRow from "../OrderRow/OrderRow";
import RowContainer from "../RowContainer/RowContainer";
import "./rowAdder.css";

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
    setCategoriesList(prev=>({...prev,categoriesList:list}));
  };

  const handleAddClick = () => {
    setCategoriesList([...categoriesList, { valueX: 0, valueY: 0 }]);
  };

  console.log(categoriesList);

  return (
    <div className="App">
      <div className="">
        <Header />
        <OrderRow
                data={categoriesList}
                row={<></>}
                handleRemoveClick={handleRemoveClick}
                handleInputChange={handleInputChange} 
                handleAddClick={handleAddClick}

                // row={<RowContainer item={item} handleRemoveClick={handleRemoveClick} handleInputChange={handleInputChange} index={i} categoriesList={categoriesList}/>}
              />

        {/* {categoriesList.map((item, i) => {
          return (
            
            <div className="">
              <OrderRow
                i={i}
                data={categoriesList}
                row={<RowContainer item={item} handleRemoveClick={handleRemoveClick} handleInputChange={handleInputChange} index={i} categoriesList={categoriesList}/>}
              /> */}

              {/* <OrderRow/> */}

              {/* <RowContainer item={item} handleRemoveClick={handleRemoveClick} handleInputChange={handleInputChange} index={i} categoriesList={categoriesList}/> */}

              {/* {categoriesList.length - 1 === i && (
                <Button onClick={handleAddClick} title={"Add Row"} />
              )} */}
            {/* </div> */} 
          {/* );
        })} */}
      </div>
    </div>
  );
}
