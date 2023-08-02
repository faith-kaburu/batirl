import React from "react";
import "./style.css"; // Import the custom styles

const YourBotArmy = ({ enlistedBots, onReleaseBot, onDischargeBot }) => {
  const handleReleaseClick = (bot) => {
    onReleaseBot(bot.id);
  };

  const handleDischargeClick = (bot) => {
    fetch(`http://localhost:3000/bots/${bot.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          onDischargeBot(bot.id);
        }
      });
  };

  return (
    <div className="flex flex-wrap flex-row">
      {enlistedBots.map((bot) => (
        <div
          onClick={() => handleReleaseClick(bot)}
          className="mt-8 bot-card"
          key={bot.id}
        >
          <img
            className="bot-image"
            src={bot.avatar_url}
            alt={bot.name}
          />
          <div className="p-4">
            <h1 className="bot-name">{bot.name}</h1>
            <p className="bot-class">{bot.bot_class}</p>
            <p className="bot-catchphrase break-words">{bot.catchphrase}</p>
            <div className="mt-4 bot-stats">
              <p>Health: {bot.health}</p>
              <p>Damage: {bot.damage}</p>
              <p>Armor: {bot.armor}</p>
            </div>
            <button
              className="bot-discharge-btn"
              onClick={() => handleDischargeClick(bot)}
            >
              x
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default YourBotArmy;
