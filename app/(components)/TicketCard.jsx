import DeleteBlock from "./DeleteBlock";
import Priority from "./Priority";
import ProgressBar from "./ProgressBar";
import StatusDisplay from "./StatusDisplay";
import Link from "next/link";

const TicketCard = ({ ticket }) => {
  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    return `${day}/${month}/${year} ${hours}hours`;
  };

  return (
    <div className="text-red-500 bg-cyan-50 flex flex-col hover:bg-cyan-100 p-3 shadow-lg">
      <div className="flex justify-between items-center mb-2">
        <div className="mb-3">
          <Priority priority={ticket.priority} />
        </div>
        <div className="relative">
          <DeleteBlock
            id={ticket._id}
            className="absolute top-0 right-0 mr-1"
          />
        </div>
      </div>
      <Link href={`/TicketPage/${ticket._id}`} style={{ display: "contents" }}>
        <div className="w-fit mb-3 mx-auto bg-white shadow-md rounded-md overflow-hidden">
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">
              {ticket.title}
            </h2>
            <p className="text-gray-600 mt-2">{ticket.description}</p>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-xs my-1 font-bold text-blue-800 py-1 px-2 rounded-md shadow-sm">
            {formatTime(ticket.createdAt)}
          </p>
          <ProgressBar progress={ticket.progress} />
        </div>
        <div className="ml-auto flex items-end ">
          <StatusDisplay status={ticket.status} />
        </div>
      </Link>
    </div>
  );
};

export default TicketCard;
