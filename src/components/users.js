import React from "react";
import { UserCircleIcon } from "@heroicons/react/solid";

const UserComponent = ({ show }) => {
    const tickets = show && show.tickets ? show.tickets : [];
    const users = show && show.users ? show.users : [];

    // Function to group tickets by user
    const groupTicketsByUser = () => {
        const groupedTickets = {};

        tickets.forEach((ticket) => {
            const user = users.find((user) => user.id === ticket.userId);
            if (user) {
                if (!groupedTickets[user.name]) {
                    groupedTickets[user.name] = [];
                }
                groupedTickets[user.name].push(ticket);
            }
        });

        return groupedTickets;
    };

    const groupedTickets = groupTicketsByUser();

    return (
        <div className="grid grid-cols-5 bg-gray-200 gap-4 p-2">
            {Object.keys(groupedTickets).map((userName) => (
                <div key={userName} className="flex flex-col items-center mt-2">

                    <div className="ml-1 flex  ">
                        <UserCircleIcon className="w-9 h-6 text-gray-900 dark:text-black" />
                    
                    <h2>{userName} {groupedTickets[userName].length}</h2>
                    </div>
                    {groupedTickets[userName].map((ticket, index) => (
                        <div
                            key={index}
                            className="p-4 border bg-white rounded-lg my-2 shadow-lg"
                        >
                            <h3>{ticket.id}</h3>
                            <p> {ticket.title}</p>

                            <div className="p-0.5 border border-black  inline-block my-2">
                                <p className="text-xs text-black flex items-center">
                                    {" "}
                                    <span className="rounded-full pb-1" style={{ fontSize: '36px' }}>&#8226;</span>
                                    {ticket.tag}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default UserComponent;
