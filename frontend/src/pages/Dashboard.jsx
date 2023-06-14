import React from 'react'
import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import GoalForm from '../Components/GoalForm'
import Spinner from '../Components/Spinner'
import GoalItem from '../Components/GoalItem'
import { getGoals,reset } from '../features/goals/goalSlice'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user} = useSelector((state) => state.auth)
  const {goals, isLoading, isError, message} = useSelector((state) => state.goals)


  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user){
      navigate('/login')
    }

    dispatch(getGoals())

    return () => {
      dispatch(reset())
    }

  }, [user, navigate,isError,message,dispatch])

  if (isLoading) {
    return <Spinner/>
  }

  return (
    <>
    <section className='heading'>
      <h1>Welcome {user && user.name}</h1>
      <p>Goals Dashboard</p>
      <GoalForm/>

      <section className="content">
        {goals.length > 0 ? (
          <div className='goals'>
            {goals.map((goal) => (
              <GoalItem key={goal._id} goal={goal}/>
            ))}
          </div>
        ) : (<h3>You have not set any goals yet</h3>)}
      </section>
    </section>
    </>
  )
}

export default Dashboard