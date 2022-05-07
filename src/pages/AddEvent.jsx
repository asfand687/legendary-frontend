import React, { useState } from 'react'
import axios from 'axios'
import { employeeProfessions, requiredEquipmentData } from '../data/data'
import { ReactComponent as Chevron } from '../images/chevron.svg'
import { useNavigate } from 'react-router-dom'

const AddEvent = () => {
  const navigate = useNavigate()
  const [step, setStep] = useState("first")
  const [parking, setParking] = useState("")
  const [location, setLocation] = useState("")
  const [uniform, setUniform] = useState("")
  const [requiredEquipment, setRequiredEquipment] = useState(requiredEquipmentData)
  const [additionalLocationInstructions, setAdditionalLocationInstructions] = useState("")
  const [employeeProfessionRequired, setemployeeProfessionRequired] = useState("")
  const [employmentType, setEmploymentType] = useState("One Time")
  const [shiftDate, setShiftDate] = useState("")
  const [shiftStartTime, setShiftStartTime] = useState("")
  const [shiftEndTime, setShiftEndTime] = useState("")
  const [numberOfProfessionals, setNumberOfProfessionals] = useState("1")
  const [contactInfo, setContactInfo] = useState({ name: "", email: "", phone: "" })
  const [shiftName, setShiftName] = useState("")



  const handleNext = () => {
    if (step === "first") {
      setStep("second")
    } else if (step === "second") {
      setStep("third")
    } else if (step === "third") {
      setStep("fourth")
    }
  }

  const handlePrev = () => {
    if (step === "fourth") {
      setStep("third")
    } else if (step === "third") {
      setStep("second")
    } else if (step === "second") {
      setStep("first")
    }
  }

  const formatStr = (str) => {
    return str.split(" ").join("").toLowerCase()
  }


  const handleRequiredEquipment = (id) => {
    setRequiredEquipment(
      requiredEquipment.map(equipment => (
        equipment.id === id ? { ...equipment, checked: !equipment.checked } : equipment
      ))
    )
  }

  const parseRequiredEquipment = () => {
    return requiredEquipment.map(item => item.checked ? item.title : null).filter(n => n)
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post("https://back.blackpenguin.site/api/event", {
        parking, location, uniform, equipment: parseRequiredEquipment(), otherInstructions: additionalLocationInstructions, position: employeeProfessionRequired, type: employmentType, eventDate: shiftDate, startTime: shiftStartTime, endTime: shiftEndTime, onSiteContact: [{ name: contactInfo.name, email: contactInfo.email, phone: contactInfo.phone }], eventName: shiftName, professionals: numberOfProfessionals
      })
      if (data) {
        console.log(data)
        navigate("/events")
      }

    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className="p-6 w-full max-w-7xl mx-auto">
      <h2 className="font-bold text-3xl pb-4">Add Event</h2>
      <div className="bg-white border p-6 border-gray-200 rounded">
        <nav className={`flex bg-blue-50 text-blue-700 border border-blue-200 py-3 px-5 mb-4`} aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li
              className={`flex items-center`}>
              <article onClick={() => setStep("first")}
                className={`text-blue-700 ${step !== "first" && "cursor-pointer"} hover:text-blue-900 inline-flex items-center`}>
                <p className={`${step === "first" && "text-black font-bold pointer-events-none cursor-text"}`}>
                  1. Location
                </p>
              </article>
            </li>
            <li>
              <div className="flex items-center">
                <Chevron />
                <article onClick={() => setStep("second")} className={`text-blue-700 ${step !== "second" && "cursor-pointer"} hover:text-blue-900 ml-1 md:ml-2 text-sm font-medium`}>
                  <p className={`${step === "second" && "text-black font-bold pointer-events-none cursor-text"}`}>
                    2. Shifts
                  </p>
                </article>
              </div>
            </li>
            <li onClick={() => setStep("third")} className={`${step === "third" ? "cursor-text" : "cursor-pointer"}`} aria-current="page">
              <div className="flex items-center">
                <Chevron />
                <span className={`${step === "third" && "text-black font-bold pointer-events-none cursor-text"}text-blue-700 ml-1 md:ml-2 text-sm font-medium`}>3. Instructions</span>
              </div>
            </li>
            <li onClick={() => setStep("fourth")} className={`${step === "fourth" ? "cursor-text" : "cursor-pointer"}`} aria-current="page">
              <div className="flex items-center">
                <Chevron />
                <span className={`${step === "fourth" && "text-black font-bold pointer-events-none cursor-text"}text-blue-700 ml-1 md:ml-2 text-sm font-medium`}>4. Confirm</span>
              </div>
            </li>
          </ol>
        </nav>
        <form onSubmit={handleFormSubmit}>
          <section className="px-4">

            {step === "first" && (
              <>
                <h2 className="text-black font-bold text-2xl">Where do you need staff?</h2>
                <div className="pt-4">
                  <input value={location} onChange={({ target }) => setLocation(target.value)} className="input-focus w-full text-gray-700 outline-none px-3 py-1.5 border border-gray-200 focus:border-gray-300 rounded" placeholder="Location" />
                </div>
                <div className="py-4">
                  <h2 className="text-lg font-bold">Parking</h2>
                  <div className="flex space-x-8 py-4">
                    <article>
                      <label className={`cursor-pointer border ${parking === "Free" && "outline outline-gray-400"}  border-gray-300 hover:outline hover:outline-gray-400 rounded-full px-6 py-2`} htmlFor='freeParking'>Free</label>
                      <input id="freeParking" onChange={({ target }) => setParking("Free")} type="radio" className="hidden radio-input" value="Free" checked={parking === "Free"} />
                    </article>
                    <article>
                      <label className={`cursor-pointer border ${parking === "Available, Not Free" && "outline outline-gray-400"}  border-gray-300 hover:outline hover:outline-gray-400 rounded-full px-6 py-2`} htmlFor='availbaleNotFree'>Available, Not Free</label>
                      <input id="availbaleNotFree" onChange={({ target }) => setParking("Available, Not Free")} type="radio" className="hidden radio-input" value="Available, Not Free" checked={parking === "Available, Not Free"} />
                    </article>
                    <article>
                      <label className={`cursor-pointer border ${parking === "No Parking" && "outline outline-gray-400"}  border-gray-300 hover:outline hover:outline-gray-400 rounded-full px-6 py-2`} htmlFor='noParking'>No Parking</label>
                      <input id="noParking" onChange={({ target }) => setParking("No Parking")} type="radio" className="hidden radio-input" value="No Parking" checked={parking === "No Parking"} />
                    </article>
                  </div>
                </div>

                <div className="py-4">
                  <h2 className="text-lg font-bold pb-4">Other location instructions (optional)</h2>
                  <textarea
                    value={additionalLocationInstructions}
                    onChange={({ target }) => setAdditionalLocationInstructions(target.value)}
                    className="border p-4 border-gray-300 rounded w-full focus:outline-gray-400"
                    rows={7}
                    placeholder='Add details (e.g. Park on 2nd Street, Enter through the side door)'>
                  </textarea>
                </div>
              </>
            )}
            {
              step === "second" && (
                <>
                  <h2 className="text-black font-bold text-2xl">Shift Name(Optional)</h2>
                  <div className="pt-4">
                    <input value={shiftName} onChange={({ target }) => setShiftName(target.value)} className="input-focus w-full text-gray-700 outline-none px-3 py-1.5 border border-gray-200 focus:border-gray-300 rounded" placeholder="Shift Name" />
                  </div>
                  <div className="py-4">
                    <h2 className="text-lg font-bold">Position</h2>
                    <div className="py-4">
                      <select value={employeeProfessionRequired} onChange={({ target }) => setemployeeProfessionRequired(target.value)} className="form-select appearance-none input-focus block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                        <option>Open this select menu</option>
                        {employeeProfessions.map((profession, idx) => (
                          <option value={profession} key={idx}>{profession}</option>
                        ))}
                      </select>
                    </div>
                    <div className="py-4">
                      <h2 className="text-lg font-bold pb-2">Employment Type</h2>
                      <div className="flex items-center space-x-6">
                        <article className="space-x-2">
                          <input
                            type="radio"
                            value="One Time"
                            checked={employmentType === "One Time"}
                            onChange={({ target }) => setEmploymentType("One Time")}
                          />
                          <label>
                            One Time
                          </label>
                        </article>
                        <article className="space-x-2">
                          <input
                            type="radio"
                            value="Recurring"
                            checked={employmentType === "Recurring"}
                            onChange={({ target }) => setEmploymentType("Recurring")}
                          />
                          <label>
                            Recurring
                          </label>
                        </article>
                      </div>
                    </div>
                    <div className="py-4 flex space-x-6">
                      <article>
                        <p className="font-bold pb-2">Date of Shift</p>
                        <input
                          className="outline rounded p-2 outline-gray-300"
                          type="date"
                          value={shiftDate}
                          min="2022-05-07"
                          max="2022-12-31"
                          onChange={(e) => setShiftDate(e.target.value)}
                        />
                      </article>
                      <article>
                        <p className="font-bold pb-2">Start Time</p>
                        <input
                          className="outline rounded py-2 px-4 outline-gray-300"
                          type="time"
                          value={shiftStartTime}
                          onChange={({ target }) => setShiftStartTime(target.value)}
                        />
                      </article>
                      <article>
                        <p className="font-bold pb-2">End Time</p>
                        <input
                          className="outline rounded py-2 px-4 outline-gray-300"
                          type="time"
                          value={shiftEndTime}
                          onChange={({ target }) => setShiftEndTime(target.value)}
                        />
                      </article>
                      <article>
                        <p className="font-bold pb-2">No of Professionals</p>
                        <input
                          className="outline rounded p-2 pl-4 w-12 outline-gray-300"
                          type="number"
                          value={numberOfProfessionals}
                          onChange={({ target }) => setNumberOfProfessionals(target.value)}
                        />
                      </article>
                    </div>
                  </div>
                </>
              )
            }

            {
              step === "third" && (
                <>
                  <h2 className="text-black font-bold text-2xl">Add shift instructions for the Professionals</h2>
                  <div className="pt-4">
                    <h2 className="text-xl font-bold">New Shift</h2>
                    <h3 className="py-2 text-lg font-bold">Required Attire</h3>
                    <div className="flex space-x-8 py-4">
                      <article>
                        <label className={`cursor-pointer border ${uniform === "Black Bistro" && "outline outline-gray-400"}  border-gray-300 hover:outline hover:outline-gray-400 rounded-full px-6 py-2`} htmlFor='blackBistro'>Black Bistro</label>
                        <input id="blackBistro" onChange={({ target }) => setUniform("Black Bistro")} type="radio" className="hidden radio-input" value="Black Bistro" checked={uniform === "Black Bistro"} />
                      </article>
                      <article>
                        <label className={`cursor-pointer border ${uniform === "White Bistro" && "outline outline-gray-400"}  border-gray-300 hover:outline hover:outline-gray-400 rounded-full px-6 py-2`} htmlFor='whiteBistro'>White Bistro</label>
                        <input id="whiteBistro" onChange={({ target }) => setUniform("White Bistro")} type="radio" className="hidden radio-input" value="White Bistro" checked={uniform === "White Bistro"} />
                      </article>
                      <article>
                        <label className={`cursor-pointer border ${uniform === "No Preference" && "outline outline-gray-400"}  border-gray-300 hover:outline hover:outline-gray-400 rounded-full px-6 py-2`} htmlFor='noParking'>No Preference</label>
                        <input id="noParking" onChange={({ target }) => setUniform("No Preference")} type="radio" className="hidden radio-input" value="No Preference" checked={uniform === "No Preference"} />
                      </article>
                      <article>
                        <label className={`cursor-pointer border ${uniform === "Custom" && "outline outline-gray-400"}  border-gray-300 hover:outline hover:outline-gray-400 rounded-full px-6 py-2`} htmlFor='customUniform'>Custom</label>
                        <input id="customUniform" onChange={({ target }) => setUniform("Custom")} type="radio" className="hidden radio-input" value="Custom" checked={uniform === "Custom"} />
                      </article>
                    </div>
                  </div>
                  <div className="pt-4">
                    <h3 className="py-2 text-lg font-bold">Required Equipment</h3>
                    <div className="flex space-x-8 py-4">
                      {requiredEquipment.map(equipment => (
                        <article key={equipment.id}>
                          <label className={`cursor-pointer border ${equipment.checked && "outline outline-gray-400"}  border-gray-300 hover:outline hover:outline-gray-400 rounded-full px-6 py-2`} htmlFor={formatStr(equipment.title)}>{equipment.title}</label>
                          <input id={formatStr(equipment.title)} defaultChecked={equipment.checked} onChange={() => handleRequiredEquipment(equipment.id)} type="checkbox" className="hidden radio-input" value={equipment.title} checked={equipment.checked} />
                        </article>
                      ))}
                    </div>
                  </div>
                  <div className="py-2">
                    <h3 className="py-2 text-lg font-bold">On-site contact</h3>
                    <p className="py-2 text-base text-gray-400">We will text you and the on-site contacts with details related to this shift. Message and data rates may apply.</p>
                    <div className="flex justify-between">
                      <input value={contactInfo.name} onChange={({ target }) => setContactInfo({ ...contactInfo, name: target.value })} className="input-focus w-[550px] text-gray-700 outline-none px-3 py-1.5 border border-gray-200 focus:border-gray-300 rounded" placeholder="Name" />
                      <input value={contactInfo.email} onChange={({ target }) => setContactInfo({ ...contactInfo, email: target.value })} className="input-focus w-[550px] text-gray-700 outline-none px-3 py-1.5 border border-gray-200 focus:border-gray-300 rounded" type="email" placeholder="Email" />
                    </div>
                    <div className="pt-4">
                      <input value={contactInfo.phone} onChange={({ target }) => setContactInfo({ ...contactInfo, phone: target.value })} className="input-focus w-[550px] text-gray-700 outline-none px-3 py-1.5 border border-gray-200 focus:border-gray-300 rounded" type="tel" placeholder="Phone" />
                    </div>
                  </div>
                </>
              )
            }

            {
              step === "fourth" && (
                <>
                  <h2 className="text-2xl font-bold pb-4">Confirm</h2>
                  <div className="flex space-x-20">
                    <div className="space-y-4">
                      <div>
                        <strong>Parking: </strong> <span className="pl-4">{parking ? parking : "Not Selected"}</span>
                      </div>

                      <div>
                        <div>
                          <strong>Uniform: </strong> <span className="pl-4">{uniform ? uniform : "Not Selected"}</span>
                        </div>
                      </div>
                      <div>
                        <strong>Required Equipment: </strong> <span className="pl-4">
                          {parseRequiredEquipment.length ? parseRequiredEquipment().map((item, idx) => (<span className="px-4" key={idx}>{item}</span>)) : "Not Selected"}</span>
                      </div>
                      <div>
                        <strong>Employment Type: </strong> <span className="pl-4">{employmentType ? employmentType : "Not Provided"}</span>
                      </div>
                      <div>
                        <strong>Shift Date: </strong> <span className="pl-4">{shiftDate ? shiftDate : "Not Provided"}</span>
                      </div>
                      <div>
                        <strong>Shift Start Time: </strong> <span className="pl-4">{shiftStartTime ? shiftStartTime : "Not Provided"}</span>
                      </div>
                      <div>
                        <strong>Shift End Time: </strong> <span className="pl-4">{shiftEndTime ? shiftEndTime : "Not Provided"}</span>
                      </div>

                    </div>
                    <div className="space-y-4">
                      <div>
                        <strong>Location: </strong> <span className="pl-4">{location ? location : "Not Selected"}</span>
                      </div>
                      <div>
                        <strong>Additional Location Instructions: </strong> <span className="pl-4">{additionalLocationInstructions ? additionalLocationInstructions : "Not Provided"}</span>
                      </div>
                      <div>
                        <strong>Number of Employees Required: </strong> <span className="pl-4">{employeeProfessionRequired ? employeeProfessionRequired : "Not Provided"}</span>
                      </div>
                      <div>
                        <strong>No of Professionals Required: </strong> <span className="pl-4">{numberOfProfessionals ? numberOfProfessionals : "Not Provided"}</span>
                      </div>
                      <div>
                        <strong>Contact Info:</strong>
                        <div>
                          {contactInfo ? (
                            <div className="space-y-2">
                              <p><strong>Name: </strong><span>{contactInfo.name ? contactInfo.name : "Not Provided"}</span></p>
                              <p><strong>Email: </strong><span>{contactInfo.email ? contactInfo.email : "Not Provided"}</span></p>
                              <p><strong>Phone: </strong><span>{contactInfo.phone ? contactInfo.phone : "Not Provided"}</span></p>
                            </div>
                          ) : "Not Provided"}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )
            }

          </section>
          <footer className="flex justify-between py-6 px-4">
            <span onClick={handlePrev} className={`${step === "first" && "opacity-0 pointer-events-none"} cursor-pointer text-blue-400 text-lg`}>{"< Back"}</span>
            <span onClick={handleNext} className={`${step === "fourth" && "hidden"} px-8 py-2 cursor-pointer font-semibold text-lg bg-blue-500 text-white rounded`}>Next</span>
            <button className={`${step !== "fourth" && "hidden"} px-8 py-2 cursor-pointer font-semibold text-lg bg-emerald-500 text-white rounded`} type="submit">Submit</button>
          </footer>
        </form>
      </div>
    </div >
  )
}

export default AddEvent