"use client";
import { FaXmark } from "react-icons/fa6";
import { useRouter } from "next/navigation";
const DeleteBlock = ({ id }) => {
  const router = useRouter();

  const deleteTicket = async () => {
    const response = await fetch(
      `https://ticket-app-gamma.vercel.app/api/Tickets/${id}`,
      {
        method: "DELETE",
      }
    );
    if (response.ok) {
      router.refresh();
    } else {
      console.log("Ticket not deleted");
    }
  };

  return <FaXmark className="hover:cursor-pointer" onClick={deleteTicket} />;
};

export default DeleteBlock;
