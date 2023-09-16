import { useNavigate } from 'react-router-dom'

const EnrollAccount = ({ user }) => {
    const navigate= useNavigate()
  return (
    <div>
      <h2>Enroll Account</h2>
      <div>
        <label>
          Select account type:
          <select>
            <option value="">Select</option>
            <option value="savings">Savings Account</option>
            <option value="checking">Checking Account</option>
          </select>
        </label>
      </div>
        <button>
          Enroll Account
        </button>
    <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        onClick={() => navigate('/home')}
      >
        Back
      </button>
    </div>
  )
}

export default EnrollAccount
