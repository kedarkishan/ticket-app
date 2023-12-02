import React from "react";
import TicketForm from "@/app/(components)/TicketForm";

const getTicketById = async (id) => {
  const response = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
    cache: "no-store",
  });

  return response.json();
};

const TicketPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;

  let updatedTicketData = {};
  if (EDITMODE) {
    updatedTicketData = await getTicketById(params.id);
    updatedTicketData = updatedTicketData.foundTicket;
  } else {
    updatedTicketData = {
      _id: "new",
    };
  }

  return <TicketForm ticket={updatedTicketData} />;
};

export default TicketPage;
