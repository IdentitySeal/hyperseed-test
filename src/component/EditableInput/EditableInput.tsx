import React, { useEffect, } from 'react';


interface IEditableInput {
  onChange : (e:React.FormEvent<HTMLDivElement> , name:string )=> void
  value?:any
  name:string
  editable?:boolean

}

const EditableInput = (props:IEditableInput) => {
  let refNode:HTMLDivElement | null = null;
    useEffect(()=>{
      if (refNode) {
        refNode.innerText = props.value;
      }
    })
  
  return (
    <>
    <div
        contentEditable={props.editable ?? false}
        ref={node => refNode = node}
        onInput={(e:React.FormEvent<HTMLDivElement>) => props.onChange(e,props.name)}
        />
    </>

  );
};

export default EditableInput;
