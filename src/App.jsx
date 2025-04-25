
import { useState, useEffect } from 'react';
import axios from 'axios';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import SortBar from './components/SortBar';
import './App.css';

function App() {
  const [bots, setBots] = useState([]);
  const [yourBotArmy, setYourBotArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [sortBy, setSortBy] = useState('');
  const [filterClasses, setFilterClasses] = useState([]);

  // Fetch bots on mount
  useEffect(() => {
    axios
      .get('http://localhost:8001/bots')
      .then((response) => setBots(response.data))
      .catch((error) => console.error('Error fetching bots:', error));
  }, []);

  // Enlist a bot (one per class, remove from BotCollection)
  const enlistBot = (bot) => {
    if (
      !yourBotArmy.find((b) => b.id === bot.id) &&
      !yourBotArmy.find((b) => b.bot_class === bot.bot_class)
    ) {
      setYourBotArmy([...yourBotArmy, bot]);
      setBots(bots.filter((b) => b.id !== bot.id));
      setSelectedBot(null); // Return to BotCollection
    }
  };

  // Release a bot (add back to BotCollection)
  const releaseBot = (bot) => {
    setYourBotArmy(yourBotArmy.filter((b) => b.id !== bot.id));
    setBots([...bots, bot].sort((a, b) => a.id - b.id)); // Re-add and maintain order
  };

  // Discharge a bot (delete from backend)
  const dischargeBot = (bot) => {
    axios
      .delete(`http://localhost:8001/bots/${bot.id}`)
      .then(() => {
        setYourBotArmy(yourBotArmy.filter((b) => b.id !== bot.id));
        setBots(bots.filter((b) => b.id !== bot.id));
        setSelectedBot(null);
      })
      .catch((error) => console.error('Error discharging bot:', error));
  };

  // Sort and filter bots
  const getFilteredSortedBots = () => {
    let filteredBots = filterClasses.length
      ? bots.filter((bot) => filterClasses.includes(bot.bot_class))
      : [...bots];

    if (sortBy) {
      filteredBots.sort((a, b) => b[sortBy] - a[sortBy]);
    }

    return filteredBots;
  };

  // Handle class filter toggle
  const toggleFilterClass = (botClass) => {
    setFilterClasses(
      filterClasses.includes(botClass)
        ? filterClasses.filter((c) => c !== botClass)
        : [...filterClasses, botClass]
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Bot Battlr</h1>
      <SortBar
        sortBy={sortBy}
        setSortBy={setSortBy}
        filterClasses={filterClasses}
        toggleFilterClass={toggleFilterClass}
      />
      <YourBotArmy bots={yourBotArmy} releaseBot={releaseBot} dischargeBot={dischargeBot} />
      <BotCollection
        bots={getFilteredSortedBots()}
        enlistBot={enlistBot}
        selectedBot={selectedBot}
        setSelectedBot={setSelectedBot}
      />
    </div>
  );
}

export default App;