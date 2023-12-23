


import { UserCircleIcon } from "@heroicons/react/solid";

function Priority({ show }) {
    const tickets = show?.tickets || [];

    const priorityone = tickets.filter((item) => item.priority === 4);
    const prioritytwo = tickets.filter(
        item => item.priority === 1 && ['In progress', 'Todo', 'Backlog'].includes(item.status)
    );
    const prioritythree = tickets.filter((item) => item.priority === 2);
    const priorityfour = tickets.filter(
        (item) => item.priority === 3 && item.status === "In progress"
    );
    const priorityfive = tickets.filter((item) => item.priority === 0);
    return (

        <div className="grid grid-cols-5 bg-gray-200 gap-4 p-2">
            <div className="flex flex-col items-center mt-2">
                <h2>No priority{priorityone.length}</h2>
                {priorityone.map((item, index) => (
                    <div key={index} className="p-4 border bg-white rounded-lg my-2 shadow-lg">
                        <p> {item.id}</p>
                        <div className="ml-2">
                            <UserCircleIcon className="w-4 h-4 text-gray-900 dark:text-black" />
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
                <h2>Low{prioritytwo.length}</h2>
                {prioritytwo.map((item, index) => (
                    <div key={index} className="p-4 border bg-white rounded-lg my-2 shadow-lg">
                        {/* Render backlog items */}
                        <div className="flex items-center">
                            <p>{item.id}</p>
                            <div className="ml-2">
                                <UserCircleIcon className="w-4 h-4 text-gray-900 dark:text-black" />
                            </div>
                        </div>
                        <p> {item.title}</p>
                        <p> {item.todo}</p>
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
                <h2>Medium{prioritythree.length}</h2>
                {prioritythree.map((item, index) => (
                    <div key={index} className="p-4 border bg-white rounded-lg my-2 shadow-lg">
                        {/* Render backlog items */}
                        <div className="flex items-center">
                            <p>{item.id}</p>
                            <div className="ml-2">
                                <UserCircleIcon className="w-4 h-4 text-gray-900 dark:text-black" />
                            </div>
                        </div>
                        <p> {item.todo}</p>
                        <p> {item.title}</p>
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
                <h2>High{priorityfour.length}</h2>
                {priorityfour.map((item, index) => (
                    <div key={index} className="p-4 border bg-white rounded-lg my-2 shadow-lg">
                        {/* Render backlog items */}
                        <div className="flex items-center">
                            <p>{item.id}</p>
                            <div className="ml-2">
                                <UserCircleIcon className="w-4 h-4 text-gray-900 dark:text-black" />
                            </div>
                        </div>
                        <p> {item.todo}</p>
                        <p>{item.title}</p>
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
                <h2>Urgent{priorityfive.length}</h2>
                {priorityfive.map((item, index) => (
                    <div key={index} className="p-4 border bg-white rounded-lg my-2 shadow-lg">
                        <div className="flex items-center">
                            <p>{item.id}</p>
                            <div className="ml-2">
                                <UserCircleIcon className="w-4 h-4 text-gray-900 dark:text-black" />
                            </div>
                        </div>
                        <p> {item.todo}</p>
                        <p> {item.title}</p>
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

export default Priority;

