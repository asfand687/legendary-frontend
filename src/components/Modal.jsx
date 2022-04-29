import axios from "axios";
import React from "react";

/* Shams Mistry
03008250001  */

export default function Modal({ getEmployees }) {
  const [showModal, setShowModal] = React.useState(false);
  const [firstName, setFirstname] = React.useState("");
  const [lastName, setLastname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [ssn, setSsn] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [isMarried, setIsMarried] = React.useState(false)
  const [under17, setUnder17] = React.useState(0)
  const [over17, setOver17] = React.useState(0)
  const [step, setStep] = React.useState("first")
  const [hasDependents, setHasDependents] = React.useState("no")



  // http://54.183.246.192:9000/api/employee"

  const handleSubmit = async (e) => {
    const maritalStatus = isMarried ? 'married' : 'single'
    e.preventDefault()
    try {
      const { data } = await axios.post("http://54.183.246.192:9000/api/employee", {
        firstName, lastName, email, ssn, phone, address, maritalStatus,
        dependents: { under17: parseInt(under17), over17: parseInt(over17) }
      })
      if (data) {
        getEmployees()
      }
      closeModal()
    } catch (error) {
      console.log(error.message)
    }
  }

  const closeModal = () => {
    setFirstname("")
    setLastname("")
    setEmail("")
    setSsn("")
    setPhone("")
    setAddress("")
    setIsMarried("no")
    setUnder17(0)
    setOver17(0)
    setStep("first")
    setIsMarried(false)
    setShowModal(false)
    setHasDependents("no")
  }

  const handleMarriage = (status) => {
    status === "married" ? setIsMarried(true) : setIsMarried(false)
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
                    onClick={closeModal}
                  >
                    <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <form onSubmit={handleSubmit}>
                  <article>
                    <div className="flex justify-around mt-4">
                      <article className="w-10 h-10 rounded-full border-2 bg-emerald-400 text-white border-emerald-400 font-bold flex justify-center items-center">1</article>
                      <article className={`w-10 h-10 rounded-full border-2  border-emerald-400 font-bold flex justify-center items-center transition-all ease-in
                      ${step === "second" && "bg-emerald-400 text-white"}
                    `}>2
                      </article>
                    </div>

                    <div className="relative p-6 flex-auto space-y-6">
                      {step === "first" && (
                        <>
                          <article className="flex space-x-4 justify-between">
                            <div className="flex-1">
                              <input value={firstName} onChange={({ target }) => setFirstname(target.value)} autoComplete="off" type="text" placeholder="First Name" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" required />
                            </div>
                            <div className="flex-1">
                              <input
                                value={lastName}
                                onChange={({ target }) => setLastname(target.value)}
                                type="text" placeholder="Last Name" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" required />
                            </div>
                          </article>

                          <article className="flex space-x-4 justify-between">
                            <div className="flex-1">
                              <input
                                value={email}
                                onChange={({ target }) => setEmail(target.value)}
                                type="email" placeholder="Email" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" required />
                            </div>
                            <div className="flex-1">
                              <input
                                value={phone}
                                onChange={({ target }) => setPhone(target.value)}
                                type="tel" placeholder="Phone" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" required />
                            </div>
                          </article>
                        </>
                      )}

                      {step === "second" && (
                        <>
                          <article className="flex space-x-4 justify-between">
                            <div className="flex-1">
                              <input
                                value={ssn}
                                onChange={({ target }) => setSsn(target.value)}
                                type="text" placeholder="SSN" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                                title="579-50-9686"
                                pattern="^(?!(000|666|9))(\d{3}-?(?!(00))\d{2}-?(?!(0000))\d{4})$"
                                required />
                            </div>
                            <div className="flex-1">
                              <input
                                value={address}
                                onChange={({ target }) => setAddress(target.value)}
                                type="text" placeholder="Address" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" required />
                            </div>
                          </article>

                          <article>
                            <p>Marital Status</p>
                            <div className="flex space-x-6">
                              <div className="space-x-2">
                                <input id="married" type="radio" value={"married"} checked={isMarried} onChange={({ target }) => handleMarriage(target.value)} />
                                <label htmlFor="married">Married</label>
                              </div>

                              <div className="space-x-2">

                                <input id="single" type="radio" value={"single"} checked={!isMarried} onChange={({ target }) => handleMarriage(target.value)} />
                                <label htmlFor="single">Single</label>
                              </div>
                            </div>

                          </article>

                          <div className={`space-y-6 ${isMarried ? "block" : "hidden"}`}>
                            <article>
                              <p>Do You Have Dependents?</p>
                              <select onChange={(e) => setHasDependents(e.target.value)} value={hasDependents}>
                                <option value={"yes"}>Yes</option>
                                <option value={"no"}>No</option>
                              </select>
                            </article>

                            <div className={`${hasDependents === "yes" ? "block" : "hidden"}`}>
                              <article className={`flex justify-between w-56`}>
                                <p className="pr-4">Dependents under 17</p>
                                <input
                                  value={under17}
                                  onChange={(e) => setUnder17(e.target.value)}
                                  className="w-10 pl-2 border border-gray-400 rounded outline-none focus:border-gray-500" type="number" />
                              </article>

                              <article className={`flex justify-between w-56`}>
                                <p className="pr-4">Dependents over 17</p>
                                <input
                                  value={over17}
                                  onChange={(e) => setOver17(e.target.value)}
                                  className="w-10 pl-2 border border-gray-400 rounded outline-none focus:border-gray-500" type="number"
                                />
                              </article>
                            </div>
                          </div>
                        </>
                      )}
                    </div>

                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        disabled={step === "first"}
                        onClick={() => setStep("first")}
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      >
                        Prev
                      </button>
                      {
                        step === "first" && (
                          <button
                            onClick={() => setStep("second")}
                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                          >
                            Next
                          </button>
                        )
                      }

                      {
                        step === "second" && (
                          <button
                            className="bg-emerald-700 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="submit">Submit</button>
                        )
                      }
                    </div>
                  </article>
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