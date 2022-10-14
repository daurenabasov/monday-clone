import React from "react";
import TicketCard from "../components/TicketCard";

const Dashboard = () => {
  const tickets = [
    {
      category: "Q1 2022",
      color: "red",
      title: "NFT Safety 101 Video",
      owner: "Ania Kubow",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd4o1tYpMhsE_grbq1KEfE4rg0Pshi6Cx54g&usqp=CAU",
      status: "done",
      priority: 5,
      progress: 40,
      description:
        "Make a video showcasing how to word with NFTs safely, including how to know if one is not genuine.",
      timestamp: "2022-02-11T07:36:17+0000",
    },
    {
      category: "Q1 2022",
      color: "red",
      title: "Build and Sell AI Model",
      owner: "Ania Kubow",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd4o1tYpMhsE_grbq1KEfE4rg0Pshi6Cx54g&usqp=CAU",
      status: "done",
      priority: 2,
      progress: 70,
      description: "Make a video about AI.",
      timestamp: "2022-02-13T07:36:17+0000",
    },
    {
      category: "Q2 2022",
      color: "blue",
      title: "Build a bot",
      owner: "Ania Kubow",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd4o1tYpMhsE_grbq1KEfE4rg0Pshi6Cx54g&usqp=CAU",
      status: "done",
      priority: 3,
      progress: 70,
      description: "Make a video about making a bot.",
      timestamp: "2022-02-13T07:36:17+0000",
    },
  ];

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];
  console.log(uniqueCategories);
  return (
    <div className="dashboard">
      <h1>My Projects</h1>
      <div className="ticket-container">
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex}>
              <h3>{uniqueCategory}</h3>
              {tickets
                .filter((ticket) => ticket.category === uniqueCategory)
                .map((filteredTicket, _index) => (
                  <TicketCard
                    id={_index}
                    key={_index}
                    color={filteredTicket.color}
                    ticket={filteredTicket}
                  />
                ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
