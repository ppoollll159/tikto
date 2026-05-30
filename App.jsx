import React, { useState } from 'react';
import './index.css';

export default function TikTokRechargeSimulator() {
  const [coins, setCoins] = useState(0);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const packages = [
    { id: 1, coins: 100, price: 0.99 },
    { id: 2, coins: 500, price: 4.99 },
    { id: 3, coins: 1000, price: 9.99 },
    { id: 4, coins: 5000, price: 49.99 },
  ];

  const handleRecharge = () => {
    if (selectedPackage) {
      setCoins(coins + selectedPackage.coins);
      alert(`成功充值 ${selectedPackage.coins} 金币！`);
    }
  };

  const handleReset = () => {
    setCoins(0);
    setSelectedPackage(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">TikTok 充值模拟器</h1>
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
        <div className="text-center mb-6">
          <p className="text-lg text-gray-600">当前金币</p>
          <p className="text-4xl font-bold text-blue-600">{coins}</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-6">
          {packages.map((pkg) => (
            <button
              key={pkg.id}
              onClick={() => setSelectedPackage(pkg)}
              className={`p-4 rounded-lg border-2 transition-all ${
                selectedPackage?.id === pkg.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              <p className="text-xl font-semibold text-gray-800">{pkg.coins} 金币</p>
              <p className="text-gray-600">${pkg.price}</p>
            </button>
          ))}
        </div>
        <div className="flex gap-4">
          <button
            onClick={handleRecharge}
            disabled={!selectedPackage}
            className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
          >
            立即充值
          </button>
          <button
            onClick={handleReset}
            className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
          >
            重置
          </button>
        </div>
      </div>
    </div>
  );
}
