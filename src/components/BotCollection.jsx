import BotCard from './BotCard';
   import BotSpecs from './BotSpecs';

   function BotCollection({ bots, enlistBot, selectedBot, setSelectedBot }) {
     if (selectedBot) {
       return (
         <BotSpecs
           bot={selectedBot}
           enlistBot={enlistBot}
           goBack={() => setSelectedBot(null)}
         />
       );
     }

     return (
       <div className="mb-8">
         <h2 className="text-2xl font-bold mb-4">Bot Collection</h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
           {bots.map((bot) => (
             <BotCard
               key={bot.id}
               bot={bot}
               onClick={() => setSelectedBot(bot)}
               showDischargeButton={false}
             />
           ))}
         </div>
       </div>
     );
   }

   export default BotCollection;