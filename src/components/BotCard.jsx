function BotCard({ bot, onClick, showDischargeButton, onDischarge }) {
    return (
      <div
        className="bg-white shadow-md rounded-lg p-4 cursor-pointer hover:scale-105 transition-transform"
        onClick={() => onClick && onClick(bot)}
      >
        <img src={bot.avatar_url} alt={bot.name} className="w-full h-32 object-cover rounded" />
        <h3 className="text-lg font-semibold">{bot.name}</h3>
        <p>Class: {bot.bot_class}</p>
        <p>Health: {bot.health}</p>
        <p>Damage: {bot.damage}</p>
        <p>Armor: {bot.armor}</p>
        {showDischargeButton && (
          <button
            className="bg-red-500 text-white px-2 py-1 rounded mt-2 hover:bg-red-700"
            onClick={(e) => {
              e.stopPropagation();
              onDischarge(bot);
            }}
          >
            x
          </button>
        )}
      </div>
    );
  }
  
  export default BotCard;