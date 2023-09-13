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
   <div>Welcome {user?.firstName || ''}!</div>
    )
}

export default Dashboard