function BotSpecs({ bot, enlistBot, goBack }) {
    return (
      <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">{bot.name}</h2>
        <img src={bot.avatar_url} alt={bot.name} className="w-full h-64 object-cover rounded mb-4" />
        <p><strong>Class:</strong> {bot.bot_class}</p>
        <p><strong>Health:</strong> {bot.health}</p>
        <p><strong>Damage:</strong> {bot.damage}</p>
        <p><strong>Armor:</strong> {bot.armor}</p>
        <p><strong>Catchphrase:</strong> {bot.catchphrase}</p>
        <div className="flex justify-between mt-6">
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
            onClick={goBack}
          >
            Back
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
            onClick={() => enlistBot(bot)}
          >
            Enlist
          </button>
        </div>
      </div>
    );
  }
  
  export default BotSpecs;