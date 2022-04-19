import React from "react";

export default function Modal({ addEmployee }) {
  const [showModal, setShowModal] = React.useState(false);
  const [firstname, setFirstname] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [ssn, setSsn] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [address, setAddress] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault()
    addEmployee(prev => {
      return [
        ...prev,
        { id: Math.floor(Math.random() * 90 + 10), firstname, lastname, email, ssn, phone, address }
      ]
    })
    setShowModal(false)
  }
  return (
    <>
      <button
        className="rounded bg-red-600 mb-4 text-white px-4 py-2"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add Employee
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-full my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Add Employee
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
                {/*body*/}
                <form>
                  <div className="relative p-6 flex-auto space-y-6">
                    <article className="flex space-x-4 justify-between">
                      <div className="flex-1">
                        <input value={firstname} onChange={({ target }) => setFirstname(target.value)} autoComplete="off" type="text" placeholder="First Name" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" />
                      </div>
                      <div className="flex-1">
                        <input
                          value={lastname}
                          onChange={({ target }) => setLastname(target.value)}
                          type="text" placeholder="Last Name" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" />
                      </div>
                    </article>

                    <article className="flex space-x-4 justify-between">
                      <div className="flex-1">
                        <input
                          value={email}
                          onChange={({ target }) => setEmail(target.value)}
                          type="email" placeholder="Email" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" />
                      </div>
                      <div className="flex-1">
                        <input
                          value={phone}
                          onChange={({ target }) => setPhone(target.value)}
                          type="tel" placeholder="Phone" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" />
                      </div>
                    </article>

                    <article className="flex space-x-4 justify-between">
                      <div className="flex-1">
                        <input
                          value={ssn}
                          onChange={({ target }) => setSsn(target.value)}
                          type="text" placeholder="SSN" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" />
                      </div>
                      <div className="flex-1">
                        <input
                          value={address}
                          onChange={({ target }) => setAddress(target.value)}
                          type="text" placeholder="Address" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" />
                      </div>
                    </article>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="submit"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}