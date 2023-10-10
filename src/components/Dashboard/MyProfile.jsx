import { useState } from "react";
import { Input } from "@material-tailwind/react";

const MyProfile = ({ user, showAlert }) => {
  const [showModal, setShowModal] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const parsedAccount = JSON.parse(localStorage.getItem('accounts'))

const replaceCurrentPassword = () => {
  const updatedAccounts = parsedAccount.map(account => {
    if (account.password === currentPassword) {
      return { ...account, password: newPassword };
    }
    return account;
  });

  localStorage.setItem('accounts', JSON.stringify(updatedAccounts));
}


const handleSubmit = () => {
  const isCurrentPasswordCorrect = parsedAccount.some(account => account.password === currentPassword);

  if (!isCurrentPasswordCorrect) {
    showAlert("Current Password is incorrect", 'error');
    return;
  }
  if (newPassword !== confirmNewPassword) {
    showAlert("New password does not match", 'error');
    return;
  }
  replaceCurrentPassword();
  setCurrentPassword('');
  setNewPassword('');
  setConfirmNewPassword('');
  setShowModal(false);
  showAlert("Your password has been changed", 'success');
};
  


  return (
    <>
      <div className="flex justify-around bg-gray-50 shadow-md rounded-md overflow-auto pt-1 pl-2 pr-2">
      
      <div>
        <div className="px-4 sm:px-0">
          <h3 className="text-base font-semibold leading-7 text-gray-900">
            Porfile Information
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
            Personal details.
          </p>
        </div>

        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-semibold leading-6 text-gray-900">
                Full name
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <span>{user.firstName} {user.middleName} {user.lastName}</span>
                
                
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="font-semibold text-sm font-semiboldleading-6 text-gray-900">
                Username
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {user.username}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-semibold leading-6 text-gray-900">
                Email address
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                 {user.email}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="font-semibold text-sm leading-6 text-gray-900">
                Birth Date
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {user.birthDate}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="font-semibold text-sm eading-6 text-gray-900">
                Country
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {user.country}
              </dd>
            </div>
          </dl>
        </div>
        </div>

        <div>
          <p>Change Password</p>
          <span className="flex justify-center bg-blue-500
               hover:bg-blue-700 rounded-md text-white font-bold py-2 px-4 mt-2 cursor-pointer" onClick={() => setShowModal(true)}>Request</span>
          {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Change Password
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <Input
                  className="w-72"
                  size="lg"
                  type="password"
                  label="Current Password"
                  id="currentPassword"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                    
                  required
                />
                    <Input
                  className="w-72 "
                  size="lg"
                  type="password"
                  label="New Password"
                  id="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
                <Input
                  className="w-72 "
                  size="lg"
                  type="password"
                  label="Confirm New Password"
                  id="email"
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                    s
                  required
                />
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="mt-2 mr-2 bg-red-500 hover:bg-red-700 ml-1 py-2 px-4 text-white font-bold rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="flex justify-center bg-blue-500
                    hover:bg-blue-700 rounded-md text-white font-bold py-2 px-4 mt-2 cursor-pointer"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
        </div>


      </div>
    </>
  );
};

export default MyProfile;
