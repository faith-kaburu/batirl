import React from "react";
import "./style.css"; // Import the custom styles

const BotCard = ({ bot, onEnlistBot }) => {
  const handleClick = () => {
    onEnlistBot(bot);
  };

  return (
    <div
      className="mt-8 bot-card"
      onClick={handleClick}
    >
      <img
        className="bot-image"
        src={bot.avatar_url}
        alt={bot.name}
      />
      <div className="p-4">
        <h1 className="bot-name">{bot.name}</h1>
        <p className="bot-class">{bot.bot_class}</p>
        <p className="bot-catchphrase">{bot.catchphrase}</p>
        <div className="mt-4 bot-stats">
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
        </div>
      </div>
    </div>
  );
};

export default BotCard;
