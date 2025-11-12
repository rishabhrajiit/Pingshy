import React, { useState } from "react";
import "./Explore.css";

const tabs = ["All", "Internet Culture", "Games", "Q&As & Stories"];

const recommended = [
  {
    id: "funny",
    name: "r/funny",
    description: "The best place for humor!",
    members: "64M",
    icon: "/funny.svg",
    category: "Internet Culture",
  },
  {
    id: "AskReddit",
    name: "r/AskReddit",
    description: "Ask anything, answer everything",
    members: "49M",
    icon: "/question.svg",
    category: "Q&As & Stories",
  },
  {
    id: "gaming",
    name: "r/gaming",
    description: "Join the world's largest gamer community",
    members: "44M",
    icon: "/game.svg",
    category: "Games",
  },
  {
    id: "worldnews",
    name: "r/worldnews",
    description: "Stay updated on global happenings",
    members: "41M",
    icon: "/news.svg",
    category: "Internet Culture",
  },
  {
    id: "aww",
    name: "r/aww",
    description: "Daily dose of cuteness",
    members: "37M",
    icon: "/cute.svg",
    category: "Internet Culture",
  },
];

const moreLikeUPSC = [
  {
    id: "news",
    name: "r/news",
    description: "Current events and news stories",
    members: "27M",
    icon: "/news.svg",
    category: "Internet Culture",
  },
  {
    id: "science",
    name: "r/science",
    description: "News from the world of science",
    members: "29M",
    icon: "/science.svg",
    category: "Q&As & Stories",
  },
  {
    id: "relationship_advice",
    name: "r/relationship_advice",
    description: "Ask for advice here",
    members: "15M",
    icon: "/relationship.svg",
    category: "Q&As & Stories",
  },
];

const Explore = () => {
  const [joinedIds, setJoinedIds] = useState([]);
  const [activeTab, setActiveTab] = useState("All");

  const toggleJoin = (id) => {
    setJoinedIds((prev) =>
      prev.includes(id) ? prev.filter((jid) => jid !== id) : [...prev, id]
    );
  };

  // Function to filter communities based on active tab category
  const filterByTab = (communities) =>
    activeTab === "All"
      ? communities
      : communities.filter((c) => c.category === activeTab);

  return (
    <div className="explore-main-container">
      <div className="explore-header">
        <h1>Explore Communities</h1>
        <div className="explore-tabs">
          {tabs.map((tab) => (
            <span
              key={tab}
              className={"explore-tab" + (activeTab === tab ? " active" : "")}
              onClick={() => setActiveTab(tab)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setActiveTab(tab);
              }}
            >
              {tab}
            </span>
          ))}
        </div>
      </div>

      <div className="section-block">
        <h2 className="section-title">Recommended for you</h2>
        <div className="row-cards">
          {filterByTab(recommended).map((c) => {
            const isJoined = joinedIds.includes(c.id);
            return (
              <div key={c.id} className="row-card">
                <img src={c.icon} alt={c.name} className="row-icon" />
                <div className="row-details">
                  <div className="row-title">{c.name}</div>
                  <div className="row-desc">{c.description}</div>
                  <div className="row-members">{c.members} members</div>
                </div>
                <button
                  className={`join-btn ${isJoined ? "joined" : ""}`}
                  onClick={() => toggleJoin(c.id)}
                >
                  {isJoined ? "Joined" : "Join"}
                </button>
              </div>
            );
          })}
          {filterByTab(recommended).length === 0 && (
            <p className="empty-message">No communities found in this category.</p>
          )}
        </div>
      </div>

      <div className="section-block">
        <h2 className="section-title">More like UPSC</h2>
        <div className="row-cards">
          {filterByTab(moreLikeUPSC).map((c) => {
            const isJoined = joinedIds.includes(c.id);
            return (
              <div key={c.id} className="row-card">
                <img src={c.icon} alt={c.name} className="row-icon" />
                <div className="row-details">
                  <div className="row-title">{c.name}</div>
                  <div className="row-desc">{c.description}</div>
                  <div className="row-members">{c.members} members</div>
                </div>
                <button
                  className={`join-btn ${isJoined ? "joined" : ""}`}
                  onClick={() => toggleJoin(c.id)}
                >
                  {isJoined ? "Joined" : "Join"}
                </button>
              </div>
            );
          })}
          {filterByTab(moreLikeUPSC).length === 0 && (
            <p className="empty-message">No communities found in this category.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Explore;
