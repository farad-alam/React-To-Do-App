import React from 'react'

export const ToDosItems = (props) => {


  return (
    <>
    <ul className='list-unstyled'>

        {props.taskItems.map((task,i) => {
        return <div className='row mt-2' key={i}>
             <li className='shadow p-2 col-sm-9 mx-2' >{task}</li> <button onClick={() =>{props.deleteTaskItems(i)}} type="button" className='btn btn-danger col-sm-2 mx-2'>X</button>
             </div>
        })}
    
    </ul>
    </>
  )
}
