import { useNavigate } from 'react-router-dom'
import { useEffect } from "react"

    const Dashboard = (props) => {
        const { user } = props
        const navigate = useNavigate()
    
    useEffect(() => {
        if (!user) {
          navigate('/login')
        }
      }, [])

    return (
   <div className="text-3xl font-bold underline">Welcome {user?.firstName || ''}!</div>
    )
}

export default Dashboard