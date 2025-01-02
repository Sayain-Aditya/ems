import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5  screen'>
       <div className=' py-6 px-9 rounded-xl w-[45%] bg-red-400'>
        <h2 className='text-3xl font-semibold'>{data.taskSummary.newTask}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className=' py-6 px-9 rounded-xl w-[45%] bg-emerald-400'>
        <h2 className='text-3xl font-semibold'>{data.taskSummary.completed}</h2>
        <h3 className='text-xl font-medium'>Completed Tasks</h3>
      </div>
      <div className=' py-6 px-9 rounded-xl w-[45%] bg-orange-400'>
        <h2 className='text-3xl font-semibold text-black'>{data.taskSummary.active}</h2>
        <h3 className='text-xl font-medium text-black'>Accepted Tasks</h3>
      </div>
      <div className=' py-6 px-9 rounded-xl w-[45%] bg-yellow-400'>
        <h2 className='text-3xl font-semibold'>{data.taskSummary.failed}</h2>
        <h3 className='text-xl font-medium'>Failed Taks</h3>
      </div>
    </div>
  )
}

export default TaskListNumber