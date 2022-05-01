import axios from "axios";
import React from "react";


export default function Modal({ getCompanies }) {
  const [showModal, setShowModal] = React.useState(false);
  const [step, setStep] = React.useState("first")
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [phone, setPhone] = React.useState("")
  const [address, setAddress] = React.useState("")
  const [beo, setBeo] = React.useState("")
  const [beoRequired, setBeoRequired] = React.useState("no")
  const [contactName, setContactName] = React.useState("")
  const [contactPhone, setContactPhone] = React.useState("")
  const [contactEmail, setContactEmail] = React.useState("")
  const [contactDepartment, setContactDepartment] = React.useState("")
  const [taxId, setTaxId] = React.useState("")


  // http://54.183.246.192:9000/api/company"

  const handleSubmit = async (e) => {

    e.preventDefault()
    try {
      const { data } = await axios.post("http://localhost:9000/api/company", {
        name, email, phone, taxId, address, beo,
        contact: [{ name: contactName, phone: contactPhone, email: contactEmail, department: contactDepartment }]
      })
      if (data) {
        getCompanies()
      }
      closeModal()
    } catch (error) {
      console.log(error.message)
    }
  }



  const closeModal = () => {
    setShowModal(false)
    setName("")
    setEmail("")
    setAddress("")
    setBeo("")
    setPhone("")
    setBeoRequired(false)
    setContactDepartment("")
    setContactEmail("")
    setContactName("")
    setContactPhone("")
    setTaxId("")
    setStep("first")
  }


  return (
    <>
      <button
        className="rounded bg-red-600 mb-4 text-white px-4 py-2"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add Company
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
                    Add Company
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
                              <input value={name} onChange={({ target }) => setName(target.value)} autoComplete="off" type="text" placeholder="Name" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" required />
                            </div>
                            <div className="flex-1">
                              <input
                                value={email}
                                onChange={({ target }) => setEmail(target.value)}
                                type="email" placeholder="Email" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" required />
                            </div>
                          </article>

                          <article className="flex space-x-4 justify-between">
                            <div className="flex-1">
                              <input
                                value={phone}
                                onChange={({ target }) => setPhone(target.value)}
                                type="email" placeholder="Phone" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" required />
                            </div>
                            <div className="flex-1">
                              <input
                                value={taxId}
                                onChange={({ target }) => setTaxId(target.value)}
                                type="text" placeholder="Tax Id" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" required />
                            </div>
                          </article>

                          <article className="flex space-x-4">
                            <div className="flex-1">
                              <input
                                value={address}
                                onChange={({ target }) => setAddress(target.value)}
                                type="tel" placeholder="Address" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" required />
                            </div>
                          </article>
                          <article className="w-1/2 space-y-2">
                            <p>Do You need BEO Number?</p>
                            <select className="" onChange={(e) => setBeoRequired(e.target.value)} value={beoRequired}>
                              <option>Select</option>
                              <option value={"yes"}>Yes</option>
                              <option value={"no"}>No</option>
                            </select>
                            {
                              beoRequired === "yes" && (
                                <div>
                                  <input
                                    value={beo}
                                    onChange={({ target }) => setBeo(target.value)}
                                    type="text" placeholder="BEO" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" required />
                                </div>
                              )
                            }
                          </article>

                        </>
                      )}

                      {step === "second" && (
                        <>
                          <h2 className="text-lg uppercase font-semibold">Contact Info</h2>
                          <article className="flex space-x-4 justify-between">
                            <div className="flex-1">
                              <input
                                value={contactName}
                                onChange={({ target }) => setContactName(target.value)}
                                type="text" placeholder="Name" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                                required />
                            </div>
                            <div className="flex-1">
                              <input
                                value={contactEmail}
                                onChange={({ target }) => setContactEmail(target.value)}
                                type="email" placeholder="Email" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" required />
                            </div>
                          </article>

                          <article className="flex space-x-4 justify-between">
                            <div className="flex-1">
                              <input
                                value={contactPhone}
                                onChange={({ target }) => setContactPhone(target.value)}
                                type="text" placeholder="Phone" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                                required />
                            </div>
                            <div className="flex-1">
                              <input
                                value={contactDepartment}
                                onChange={({ target }) => setContactDepartment(target.value)}
                                type="text" placeholder="Department/Organization" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" required />
                            </div>
                          </article>
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