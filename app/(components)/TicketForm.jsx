"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
const TicketForm = ({ ticket }) => {
  const EDITMODE = ticket._id === "new" ? false : true;

  const router = useRouter();

  const startingTicketData = {
    title: "",
    description: "",
    status: "not started",
    priority: 1,
    progress: 0,
    category: "frontend",
  };

  if (EDITMODE) {
    startingTicketData["title"] = ticket.title;
    startingTicketData["description"] = ticket.description;
    startingTicketData["status"] = ticket.status;
    startingTicketData["priority"] = ticket.priority;
    startingTicketData["progress"] = ticket.progress;
    startingTicketData["category"] = ticket.category;
  }

  const [formData, setFormData] = useState(startingTicketData);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (EDITMODE) {
      const response = await fetch(`/api/Tickets/${ticket._id}`, {
        method: "PUT",
        body: JSON.stringify({ formData }),
        "content-type": "application/json",
      });
      if (response.ok) {
        router.push("/");
        router.refresh();
      } else {
        throw new Error(response.statusText);
      }
      return;
    }

    const response = await fetch("/api/Tickets", {
      method: "POST",
      body: JSON.stringify({ formData }),
      "content-type": "application/json",
    });
    if (response.ok) {
      router.push("/");
      router.refresh();
    } else {
      throw new Error(response.statusText);
    }
  };

  return (
    <div className="flex justify-center ">
      <form
        className="max-w-md mx-auto p-6 bg-gray-100 rounded-md shadow-md"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3 className="text-center text-lg font-semibold mb-4">
          {EDITMODE ? "Edit Ticket" : "Create Ticket"}
        </h3>
        <div className="mb-4">
          <label htmlFor="title" className="block font-semibold mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required={true}
            className="w-full px-3 py-2 rounded border-gray-300 focus:border-indigo-500 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block font-semibold mb-1">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded border-gray-300 focus:border-indigo-500 focus:outline-none resize-none"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block font-semibold mb-1">
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded border-gray-300 focus:border-indigo-500 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="status" className="block font-semibold mb-1">
            Status
          </label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded border-gray-300 focus:border-indigo-500 focus:outline-none"
          >
            <option value="not started">Not Started</option>
            <option value="in progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="priority" className="block font-semibold mb-1">
            Priority
          </label>
          <input
            type="number"
            id="priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded border-gray-300 focus:border-indigo-500 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="progress" className="block font-semibold mb-1">
            Progress
          </label>
          <input
            type="range"
            id="progress"
            name="progress"
            min="0"
            max="100"
            value={formData.progress}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded border-gray-300 focus:border-indigo-500 focus:outline-none"
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded"
            >
              {EDITMODE ? "Update Ticket" : "Create Ticket"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TicketForm;
