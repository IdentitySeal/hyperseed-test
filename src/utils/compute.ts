
interface IcomputeArgs {
    x:number
    y:number
}

export class computeService {

      static addXandY = (props:IcomputeArgs) => {
        return (props.x + props.y)
      }
      static multiplyXandY = (props:IcomputeArgs)=> {
        return (props.x * props.y)

      }
      static powerXtoY = (props:IcomputeArgs)=> {
        return (props.x ^ props.y)
      }
}
