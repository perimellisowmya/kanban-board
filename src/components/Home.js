
import { UserCircleIcon } from "@heroicons/react/solid";

function Home({ show }) {
    const tickets = show?.tickets || [];
    const backlogItems = tickets.filter((item) => item.status === "Backlog");
    const todoItems = tickets.filter((item) => item.status === "Todo");
    const inProgressItems = tickets.filter(
        (item) => item.status === "In progress"
    );
    const doneItems = tickets.filter((item) => item.status === "Done");
    const cancelledItems = tickets.filter((item) => item.status === "Cancelled");

    return (
        <div className="grid grid-cols-5 bg-gray-200 gap-7 p-2">
            
            <div className="flex flex-col items-center mt-2">
                <h2>Backlog {backlogItems.length} </h2>
                {backlogItems.map((item, index) => (
                    <div key={index} className="p-4 border bg-white rounded-lg my-2 shadow-lg">
                        <div className="flex items-center">
                            <p>{item.id}</p>
                            <div className="ml-2">
                                <UserCircleIcon className="w-4 h-4 text-gray-900 dark:text-black" />
                            </div>
                        </div>
                        <p>{item.title}</p>
                        <p>{item.todo}</p>
                        <div className="p-0.5 border border-black  inline-block my-2">
                            <p className="text-xs text-black flex items-center">
                                {" "}
                                <span className="rounded-full pb-1" style={{ fontSize: '36px' }}>&#8226;</span>
                                {item.tag}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            
            <div className="flex flex-col items-center mt-2">
                <h2>Todo  {todoItems.length}</h2>
                {todoItems.map((item, index) => (
                    <div key={index} className="p-4 border bg-white rounded-lg my-2 shadow-lg">
                        <div className="flex items-center">
                            <p>{item.id}</p>
                            <div className="ml-2">
                                <UserCircleIcon className="w-4 h-4 text-gray-900 dark:text-black" />
                            </div>
                        </div>
                        <p>{item.title}</p>
                        <p>{item.todo}</p>
                        <div className="p-0.5 border border-black  inline-block my-2">
                            <p className="text-xs text-black flex items-center">
                                {" "}
                                <span className="rounded-full pb-1" style={{ fontSize: '36px' }}>&#8226;</span>
                                {item.tag}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            
            <div className="flex flex-col items-center mt-2">
                <h2>Inprogress  {inProgressItems.length}</h2>
                {inProgressItems.map((item, index) => (
                    <div key={index} className="p-4 border bg-white rounded-lg my-2 shadow-lg">
                        <div className="flex items-center">
                            <p>{item.id}</p>
                            <div className="ml-2">
                                <UserCircleIcon className="w-4 h-4 text-gray-900 dark:text-black" />
                            </div>
                        </div>
                        <p>{item.title}</p>
                        <p>{item.todo}</p>
                        <div className="p-0.5 border border-black  inline-block my-2">
                            <p className="text-xs text-black flex items-center">
                                {" "}
                                <span className="rounded-full pb-1" style={{ fontSize: '36px' }}>&#8226;</span>
                                {item.tag}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            
            <div className="flex flex-col items-center mt-2">
                <h2>Done  {doneItems.length}</h2>
                {doneItems.map((item, index) => (
                    <div key={index} className="p-4 border bg-white rounded-lg my-2 shadow-lg">
                        <div className="flex items-center">
                            <p>{item.id}</p>
                            <div className="ml-2">
                                <UserCircleIcon className="w-4 h-4 text-gray-900 dark:text-black" />
                            </div>
                        </div>
                        <p>{item.title}</p>
                        <p>{item.todo}</p>
                        <div className="p-0.5 border border-black  inline-block my-2">
                            <p className="text-xs text-black flex items-center">
                                {" "}
                                <span className="rounded-full pb-1" style={{ fontSize: '36px' }}>&#8226;</span>
                                {item.tag}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex flex-col items-center mt-2">
                <h2>Cancelled  {cancelledItems.length}</h2>
                {cancelledItems.map((item, index) => (
                    <div key={index} className="p-4 border bg-white rounded-lg my-2 shadow-lg">
                        <div className="flex items-center">
                            <p>{item.id}</p>
                            <div className="ml-2">
                                <UserCircleIcon className="w-4 h-4 text-gray-900 dark:text-black" />
                            </div>
                        </div>
                        <p>{item.title}</p>
                        <p>{item.todo}</p>
                        <div className="p-0.5 border border-black  inline-block my-2">
                            <p className="text-xs text-black flex items-center">
                                {" "}
                                <span className="rounded-full pb-1" style={{ fontSize: '36px' }}>&#8226;</span>
                                {item.tag}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;


// import { UserCircleIcon } from "@heroicons/react/solid";

// function Home({ show, groupingValue, orderingValue }) {
//   const tickets = show?.tickets || [];

//   // Filter tickets based on groupingValue
//   let filteredTickets = [];
//   switch (groupingValue) {
//     case '/':
//       filteredTickets = tickets;
//       break;
//     case '/tickets':
//       // Filter based on User or any other relevant criteria for grouping
//       break;
//     case '/priority':
//       // Filter based on Priority
//       break;
//     default:
//       filteredTickets = tickets;
//       break;
//   }

//   // Sort filteredTickets based on orderingValue
//   switch (orderingValue) {
//     case 'priority':
//       filteredTickets.sort((a, b) => b.priority - a.priority);
//       break;
//     case 'title':
//       filteredTickets.sort((a, b) => a.title.localeCompare(b.title));
//       break;
//     default:
//       break;
//   }

//   // Group tickets based on status
//   const groupedTickets = {
//     Backlog: [],
//     Todo: [],
//     'In progress': [],
//     Done: [],
//     Cancelled: [],
//   };

//   filteredTickets.forEach((ticket) => {
//     groupedTickets[ticket.status].push(ticket);
//   });

//   const renderTickets = (items) => {
//     return items.map((item, index) => (
//       <div key={index} className="p-4 border bg-white rounded-lg my-2 shadow-lg">
//         <p>{item.id}</p>
//         <div className="ml-2">
//           <UserCircleIcon className="w-4 h-4 text-gray-900 dark:text-black" />
//         </div>
//         <p>{item.title}</p>
//         <p>{item.todo}</p>
//         <div className="p-0.5 border border-black inline-block ml-4">
//           <p className="text-xs text-black m-0">{item.tag}</p>
//         </div>
//       </div>
//     ));
//   };

//   return (
//     <div className="grid grid-cols-5 bg-gray-200 gap-7 p-2">
//       <div className="flex flex-col items-center mt-2">
//         <h2>Backlog</h2>
//         {renderTickets(groupedTickets.Backlog)}
//       </div>
//       <div className="flex flex-col items-center mt-2">
//         <h2>ToDo</h2>
//         {renderTickets(groupedTickets.Todo)}
//       </div>
//       <div className="flex flex-col items-center mt-2">
//         <h2>Inprogress</h2>
//         {renderTickets(groupedTickets["In progress"])}
//       </div>
//       <div className="flex flex-col items-center mt-2">
//         <h2>Done 0</h2>
//         {renderTickets(groupedTickets.Done)}
//       </div>
//       <div className="flex flex-col items-center mt-2">
//         <h2>cancelleed 0</h2>
//         {renderTickets(groupedTickets.Cancelled)}
//       </div>
//     </div>
//   );
// }

// export default Home;

