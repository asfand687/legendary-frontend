import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Table from '../components/EventsTable'
import { Link } from 'react-router-dom'

const Events = () => {
  const [events, setEvents] = useState([])

  const getEvents = async () => {
    try {
      const { data } = await axios.get("https://back.blackpenguin.site/api/event")
      setEvents(data)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getEvents()
  }, [])

  return (
    <div className="p-6 w-full max-w-7xl mx-auto">
      <h2 className="text-gray-700 text-3xl">Events</h2>
      <div className="flex flex-row-reverse">
        <Link to="/events/add">
          <button
            className="rounded bg-red-600 mb-4 text-white px-4 py-2"
            type="button"
          >
            Add Event
          </button>
        </Link>
      </div>
      <div className="max-h-[500px] overflow-y-scroll">
        <Table events={events} />
      </div>
    </div>
  )
}

export default Events