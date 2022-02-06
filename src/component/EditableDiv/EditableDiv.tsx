import React, { useEffect, } from 'react';
import './editableDiv.css'


interface IEditableInput {
  onChange : (e:React.FormEvent<HTMLDivElement> , name:string )=> void
  value?:any
  name:string
  editable?:boolean

}

const EditableDiv = (props:IEditableInput) => {
  let refNode:HTMLDivElement | null = null;
    useEffect(()=>{
      if (refNode) {
        refNode.innerText = props.value;
      }
    })

  return (
    <>
    <div
        className='editable__box'
        contentEditable={props.editable ?? false}
        ref={node => refNode = node}
        onInput={(e:React.FormEvent<HTMLDivElement>) => props.onChange(e,props.name)}
        />
    </>

  );
};

export default EditableDiv;
