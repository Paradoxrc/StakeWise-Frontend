import React, { useState, useEffect } from "react";
import Web3 from "web3";
import { Input } from "@/components/ui/input"; // Assuming you have shadcn components
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

// Replace with your actual contract address and ABI
const contractAddress = "0x0cDB5Ee2F84090F84EFD27C4226ccA5f0E57f298";
const contractABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "eventId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "bettor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "option",
        type: "string",
      },
    ],
    name: "BetPlaced",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "endTime",
        type: "uint256",
      },
    ],
    name: "EventCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "eventId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "winningOption",
        type: "string",
      },
    ],
    name: "WinnerDeclared",
    type: "event",
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "events",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "string",
        name: "imageURL",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endTime",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isCompleted",
        type: "bool",
      },
      {
        internalType: "string",
        name: "winningOption",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "prizePool",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "notificationMessage",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nextEventId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_description",
        type: "string",
      },
      {
        internalType: "string",
        name: "_imageURL",
        type: "string",
      },
      {
        internalType: "string[]",
        name: "_options",
        type: "string[]",
      },
      {
        internalType: "uint256",
        name: "_startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_endTime",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_notificationMessage",
        type: "string",
      },
    ],
    name: "createEvent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_eventId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_option",
        type: "string",
      },
    ],
    name: "placeBet",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_eventId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_winningOption",
        type: "string",
      },
    ],
    name: "declareWinner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_eventId",
        type: "uint256",
      },
    ],
    name: "getEvent",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "string",
        name: "imageURL",
        type: "string",
      },
      {
        internalType: "string[]",
        name: "options",
        type: "string[]",
      },
      {
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endTime",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isCompleted",
        type: "bool",
      },
      {
        internalType: "string",
        name: "winningOption",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "prizePool",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "notificationMessage",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_eventId",
        type: "uint256",
      },
    ],
    name: "getEventOptions",
    outputs: [
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const EthereumBetting: React.FC = () => {
  const [web3, setWeb3] = useState<Web3 | null>(null);
  const [contract, setContract] = useState<any>(null);
  const [betAmountA, setBetAmountA] = useState<number | string>("");
  const [betAmountB, setBetAmountB] = useState<number | string>("");
  const [winningOption, setWinningOption] = useState<number>(0);
  const [status, setStatus] = useState<string>("Connecting...");

  useEffect(() => {
    const connectWallet = async () => {
      if (window.ethereum) {
        try {
          await window.ethereum.request({ method: "eth_requestAccounts" });
          const web3Instance = new Web3(window.ethereum);
          setWeb3(web3Instance);

          const accounts = await web3Instance.eth.getAccounts();
          console.log("Connected account:", accounts[0]);

          const contractInstance = new web3Instance.eth.Contract(
            contractABI,
            contractAddress
          );
          setContract(contractInstance);
          setStatus("Connected to wallet and contract.");
        } catch (error: any) {
          console.error("Error connecting to wallet:", error);
          setStatus("Error connecting to wallet: " + error.message);
        }
      } else {
        setStatus("MetaMask not detected.");
      }
    };

    connectWallet();
  }, []);

  const placeBet = async (option: number) => {
    let betAmountInput = option === 0 ? betAmountA : betAmountB;
    const betAmount = parseFloat(String(betAmountInput)); // Ensure it's a string before parsing

    if (isNaN(betAmount) || betAmount <= 0) {
      alert("Please enter a valid bet amount.");
      return;
    }

    if (!web3 || !contract) {
      alert("Please connect to MetaMask first.");
      return;
    }

    const betAmountWei = web3.utils.toWei(betAmount.toString(), "ether");

    try {
      setStatus("Placing bet...");
      const accounts = await web3.eth.getAccounts();
      await contract.methods
        .placeBet(option)
        .send({ from: accounts[0], value: betAmountWei });
      setStatus("Bet placed successfully!");
      if (option === 0) {
        setBetAmountA("");
      } else {
        setBetAmountB("");
      }
    } catch (error: any) {
      console.error("Error placing bet:", error);
      setStatus("Error placing bet: " + error.message);
    }
  };

  const setWinningOptionHandler = async () => {
    if (!web3 || !contract) {
      alert("Please connect to MetaMask first.");
      return;
    }

    try {
      setStatus("Setting winner...");
      const accounts = await web3.eth.getAccounts();
      await contract.methods
        .setWinningOption(winningOption)
        .send({ from: accounts[0] });
      setStatus("Winner set successfully!");
    } catch (error: any) {
      console.error("Error setting winner:", error);
      setStatus("Error setting winner: " + error.message);
    }
  };

  return (
    <div className="container mx-auto p-4 text-DFprimary dark:text-LFprimary">
      <h1 className="text-3xl font-bold mb-4 font-saira-stencil">
        Ethereum Betting
      </h1>

      <div className="flex flex-wrap gap-4 mb-6">
        <div className="w-full md:w-1/2">
          <Label
            htmlFor="betAmountA"
            className="block text-sm font-medium mb-1"
          >
            Bet on Option A (ETH):
          </Label>
          <Input
            type="number"
            id="betAmountA"
            placeholder="Enter ETH amount"
            value={betAmountA}
            onChange={(e) => setBetAmountA(e.target.value)}
            className="shadow-sm focus:ring-orange500 focus:border-orange500 block w-full sm:text-sm border-gray-300 rounded-md dark:bg-card dark:border-card"
          />
          <Button
            onClick={() => placeBet(0)}
            className="mt-2 bg-orange500 hover:bg-orange600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Place Bet on A
          </Button>
        </div>
        <div className="w-full md:w-1/2">
          <Label
            htmlFor="betAmountB"
            className="block text-sm font-medium mb-1"
          >
            Bet on Option B (ETH):
          </Label>
          <Input
            type="number"
            id="betAmountB"
            placeholder="Enter ETH amount"
            value={betAmountB}
            onChange={(e) => setBetAmountB(e.target.value)}
            className="shadow-sm focus:ring-orange500 focus:border-orange500 block w-full sm:text-sm border-gray-300 rounded-md dark:bg-card dark:border-card"
          />
          <Button
            onClick={() => placeBet(1)}
            className="mt-2 bg-orange500 hover:bg-orange600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Place Bet on B
          </Button>
        </div>
      </div>

      <hr className="my-8 border-gray-200 dark:border-gray-700" />

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Admin Controls</h2>
        <Label
          htmlFor="winningOption"
          className="block text-sm font-medium mb-1"
        >
          Winning Option:
        </Label>

        <select
          id="winningOption"
          value={winningOption}
          onChange={(e) => setWinningOption(parseInt(e.target.value, 10))}
          className="shadow-sm focus:ring-orange500 focus:border-orange500 block w-full sm:text-sm border-gray-300 rounded-md dark:bg-card dark:border-card"
        >
          <option value={0}>Option A</option>
          <option value={1}>Option B</option>
        </select>

        <Button
          onClick={setWinningOptionHandler}
          className="mt-4 bg-green text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Set Winner
        </Button>
      </div>

      <p id="status" className="text-sm text-DFsecondary dark:text-LFsecondary">
        Status: {status}
      </p>
    </div>
  );
};

export default EthereumBetting;
