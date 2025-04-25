import BotCard from './BotCard';

function YourBotArmy({ bots, releaseBot, dischargeBot }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Your Bot Army</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {bots.length === 0 ? (
          <p className="text-gray-500">No bots enlisted yet.</p>
        ) : (
          bots.map((bot) => (
            <BotCard
              key={bot.id}
              bot={bot}
              onClick={releaseBot}
              showDischargeButton={true}
              onDischarge={dischargeBot}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default YourBotArmy;