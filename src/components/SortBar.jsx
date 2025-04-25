function SortBar({ sortBy, setSortBy, filterClasses, toggleFilterClass }) {
    const botClasses = ["Support", "Medic", "Assault", "Defender", "Captain", "Witch"];
  
    return (
      <div className="mb-8 p-4 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Sort & Filter</h3>
        <div className="mb-4">
          <span className="font-medium">Sort by:</span>
          <button
            className={`ml-2 px-3 py-1 rounded ${sortBy === 'health' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
            onClick={() => setSortBy('health')}
          >
            Health
          </button>
          <button
            className={`ml-2 px-3 py-1 rounded ${sortBy === 'damage' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
            onClick={() => setSortBy('damage')}
          >
            Damage
          </button>
          <button
            className={`ml-2 px-3 py-1 rounded ${sortBy === 'armor' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
            onClick={() => setSortBy('armor')}
          >
            Armor
          </button>
          {!!sortBy && (
            <button
              className="ml-2 px-3 py-1 rounded bg-red-500 text-white"
              onClick={() => setSortBy('')}
            >
              Clear Sort
            </button>
          )}
        </div>
        <div>
          <span className="font-medium">Filter by Class:</span>
          <div className="flex flex-wrap gap-2 mt-2">
            {botClasses.map((botClass) => (
              <label key={botClass} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filterClasses.includes(botClass)}
                  onChange={() => toggleFilterClass(botClass)}
                  className="mr-1"
                />
                {botClass}
              </label>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default SortBar;