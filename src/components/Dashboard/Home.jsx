import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export function AccordionCustomStyles() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
    <div className="flex flex-col  overflow-auto">
      <Accordion
        open={open === 1}
        className="mb-2 rounded-md shadow-md border border-blue-gray-200 px-4"
      >
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className={`border-b-0 transition-colors ${
            open === 1 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          My Todo List
        </AccordionHeader>

        <AccordionBody className="text-base font-normal">
          <ul className="text-black list-disc list-inside dark:text-gray-400">
            <li className="text-sm">
              Authentication
              <ol className="text-xs pl-5 mt-1 space-y-1 list-decimal list-inside">
                <li className="line-through">User has username and password</li>
                <li className="line-through">User can register an account</li>
                <li className="line-through">User can login to their account</li>
                <li className="line-through">Form validations</li>
                <li className="line-through">localStorage</li>
              </ol>

            </li>
            <li className="text-sm">
              Bank Transaction
              <ul className=" text-xs pl-5 mt-1 space-y-1 list-decimal list-inside">
                <li className="line-through">User can see their account info on a card component. An account has the user's username, password, and balance.</li>
                <li className="line-through">User can deposit</li>
                <li className="line-through">User can withdraw</li>
                <li className="line-through">User can send to another account</li>
                <li className="line-through">Use can see transactions in a table</li>
              </ul>
            </li>
            <li className="text-sm">
            Budget Tracker
              <ul class="text-xs pl-5 mt-1 space-y-1 list-decimal list-inside">
                <li className="line-through">User can add, update, delete an Expense Item</li>
                <li className="line-through">An expense item has a cost field where in upon being added/ removed, the cost is also added to or removed from the account balance</li>
              </ul>
            </li>
          </ul>
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 2}
        className="mb-2 rounded-md shadow-md border border-blue-gray-200 px-4"
      >
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className={`border-b-0 transition-colors ${
            open === 2 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          List of Features
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
        <ul className="text-black list-disc list-inside dark:text-gray-400">
            <li className="text-sm">
              Basic Features
              <ol className="text-xs pl-5 mt-1 space-y-1 list-decimal list-inside">
                <li className="">My Profile</li>
                <li className="">Transaction History</li>
                <li className="">Add Funds</li>
                <li className="">Fund Transfer/Send and Withdraw</li>
              </ol>
            </li>

            <li className="text-sm">
              New Features
              <ul className=" text-xs pl-5 mt-1 space-y-1 list-decimal list-inside">
                <li className="">Alerts DOM Based</li>
                <li className="">Current Exchange Rate PHP Based API</li>
                <li className="">Request to change password</li>
                <li className="">Virtual Card</li>
              </ul>
            </li>

            <li className="text-sm">
              Upcoming Features
              <ul className="text-xs pl-5 mt-1 space-y-1 list-decimal list-inside">
                <li>UI Design Improvement</li>
                <li>Pin Enrolment - Enter pin every transaction</li>
                <li>Bills Payment</li>
              </ul>
            </li>
          </ul>
        </AccordionBody>
        
      </Accordion>

      <Accordion
        open={open === 3}
        className="mb-2 rounded-md shadow-md border border-blue-gray-200 px-4"
      >
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className={`border-b-0 transition-colors ${
            open === 2 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          Todays Goal
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
        <ul className="text-black list-disc list-inside dark:text-gray-400">
            <li className="text-sm">
              UI Fix
              <ol className="text-xs pl-5 mt-1 space-y-1 list-decimal list-inside">
                <li className="">Dashboard UI - Banner and Logo</li>
              </ol>
            </li>

            {/* <li className="text-sm">
              New Component
              <ul className=" text-xs pl-5 mt-1 space-y-1 list-decimal list-inside">
                <li className="">Virtual Card</li>
              </ul>
            </li> */}

            <li className="text-sm">
              Code Changes/Improvment
              <ul className="text-xs pl-5 mt-1 space-y-1 list-decimal list-inside">
                <li className="">Make a function to hide balance</li>
                <li className="">My Profile - Pin Enrolment</li>
                <li className="">Bills Payment</li>

              </ul>
            </li>
          </ul>
        </AccordionBody>
        
      </Accordion>
    </div>
    </>
  );
}

const DashboardHome = () => {
  return (
    <>
      <div className="overflow-hidden bg-gray-50 h-full rounded-md shadow-md">
        <span className="flex justify-center font-bold">Bank App</span>
        <AccordionCustomStyles />
      </div>
    </>
  );
};

export default DashboardHome;
