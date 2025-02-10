import { useState, useEffect } from "react";
import Web3 from "web3";

const contractAddress = "0x026cDc6791Bc2E8D98237e9FAB5680A6C0801Bde";
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
    constant: true,
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
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
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
    constant: true,
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
    payable: true,
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
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
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
    constant: true,
  },
];

const Home = () => {
  const [web3, setWeb3] = useState<Web3 | null>(null);
  const [contract, setContract] = useState<any>(null);
  const [events, setEvents] = useState<any[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<any | null>(null);
  const [betAmount, setBetAmount] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string>("");

  useEffect(() => {
    const init = async () => {
      if ((window as any).ethereum) {
        const web3Instance = new Web3((window as any).ethereum);
        const betContract = new web3Instance.eth.Contract(
          contractABI,
          contractAddress
        );
        setWeb3(web3Instance);
        setContract(betContract);
        loadEvents(betContract);
      } else {
        console.log("Please install MetaMask!");
      }
    };
    init();
  }, []);

  const loadEvents = async (betContract: any) => {
    try {
      const eventCount = await betContract.methods.nextEventId().call();
      const eventList: any[] = [];
      for (let i = 0; i < eventCount; i++) {
        const eventData = await betContract.methods.getEvent(i).call();
        eventList.push(eventData);
      }
      setEvents(eventList);
    } catch (err) {
      console.error("Error loading events:", err);
    }
  };

  const handleBet = async () => {
    if (!web3 || !contract || !selectedEvent || !selectedOption) {
      alert("Please select an event and an option, then enter a bet amount.");
      return;
    }

    const accounts = await web3.eth.getAccounts();
    if (accounts.length === 0) {
      alert("Please connect to MetaMask.");
      return;
    }

    try {
      await contract.methods.placeBet(selectedEvent.id, selectedOption).send({
        from: accounts[0],
        value: web3.utils.toWei(betAmount, "ether"),
      });

      alert("Bet placed successfully!");
      setSelectedEvent(null);
      setBetAmount("");
      setSelectedOption("");
    } catch (err) {
      console.error("Error placing bet:", err);
      alert("Failed to place the bet.");
    }
  };

  return (
    <div>
      <h1>Betting Events</h1>
      {events.length === 0 ? (
        <p>No events found.</p>
      ) : (
        events.map((event, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              margin: "10px",
            }}
          >
            <img
              src={event.imageURL}
              alt={event.name}
              style={{ maxWidth: "200px", maxHeight: "150px" }}
            />
            <h3>{event.name}</h3>
            <p>{event.description}</p>
            <p>Options: {event.options.join(", ")}</p>
            <p>
              Start: {new Date(Number(event.startTime) * 1000).toLocaleString()}
            </p>
            <p>
              End: {new Date(Number(event.endTime) * 1000).toLocaleString()}
            </p>
            <p>
              Status: {event.isCompleted ? "Completed" : "Open"} - Winner:{" "}
              {event.winningOption || "TBD"}
            </p>
            {!event.isCompleted && (
              <button
                onClick={() => setSelectedEvent(event)}
                style={{
                  backgroundColor: "#007bff",
                  color: "white",
                  padding: "8px 16px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Place Bet
              </button>
            )}
          </div>
        ))
      )}

      {selectedEvent && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "20px",
            border: "2px solid black",
            zIndex: 1000,
            width: "300px",
          }}
        >
          <h3 style={{ color: "black" }}>{selectedEvent.name}</h3>
          <p style={{ color: "black" }}>{selectedEvent.description}</p>
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              margin: "10px 0",
              border: "1px solid black",
              color: "black",
            }}
          >
            <option value="">Select an option</option>
            {selectedEvent.options.map((option: string, idx: number) => (
              <option key={idx} value={option}>
                {option}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Bet Amount (ETH)"
            value={betAmount}
            onChange={(e) => setBetAmount(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              margin: "10px 0",
              border: "1px solid black",
              color: "black",
            }}
          />
          <button
            onClick={handleBet}
            style={{
              backgroundColor: "green",
              color: "white",
              padding: "8px 16px",
              border: "none",
              width: "100%",
              cursor: "pointer",
            }}
          >
            Submit Bet
          </button>
          <button
            onClick={() => setSelectedEvent(null)}
            style={{
              backgroundColor: "red",
              color: "white",
              padding: "8px 16px",
              border: "none",
              width: "100%",
              cursor: "pointer",
              marginTop: "8px",
            }}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
