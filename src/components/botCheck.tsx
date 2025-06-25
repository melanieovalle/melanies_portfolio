'use client';

import { useEffect, useState } from 'react';

/*** Update condition once bot check is passed ***/
type BotCheckProps = {
  setBotCheckPassed: (value: boolean) => void;
//   setActiveTab: (tab: 'login' | 'signup' | 'forgot' | 'botcheck') => void;
};

function GetBotCheckNums( { setBotCheckPassed }: BotCheckProps) {

  const [numSequence, setNumSequence] = useState<number[]>([]);
  const [numSelected, setNumSelected] = useState<number[]>([]);
  const [displayMessage, setDisplayMessage] = useState<React.ReactNode>(null); // message as JSX

  /***  Generate number sequence ***/
  useEffect(() => {
    const length = Math.floor(Math.random() * 4) + 2; // random length between 2 and 5
    const sequence = Array.from({ length }, () => (   // random sequence (nums 1 to 6)
        Math.floor(Math.random() * (6)) + 1
    ));
    setNumSequence(Array.from(new Set(sequence)));   // remove duplicates
  }, []);

  /*** Retrieve numbers selected by user ***/
  const handleCheckboxChange = (num: number) => {
    setNumSelected(prev =>
      prev.includes(num)
        ? prev.filter(n => n !== num) // remove num if already selected
        : [...prev, num]              // add num if not selected
    );
  };

  /*** Check correct num sequence ***/
  const compareNums = (userNums: number[], computerNums: number[]) => {
    console.log('user nums: ' + numSelected)
    console.log('computer nums: ' + numSequence)

    if (userNums.toString() === computerNums.toString()) {
      setBotCheckPassed(true);
      setDisplayMessage(
        <>
        Success, you&apos;re not a bot!
        </>
      );

    } else {
      setBotCheckPassed(false)  // revert back to false
      setDisplayMessage(
        <>
        <h4>Suspicious...🤨</h4>
        You entered an incorrect combination of numbers, try again.
        <button
        onClick={resetBotCheck}
        >
          Try Again
        </button>
        </>
      );
      
    }
    console.log(displayMessage);
  }

  /*** Resets Bot Check if User Fails ***/
  const resetBotCheck = () => {
    const length = Math.floor(Math.random() * 4) + 2;
    const sequence = Array.from({ length }, () => Math.floor(Math.random() * 6) + 1);
    setNumSequence(Array.from(new Set(sequence))); // new number sequence
    setNumSelected([]);                            // clear user selection
    setDisplayMessage(null);                       // clear message
   };


  return (
    <div>
        <h4>Are you a bot? 🤖</h4>
      
      {/* Prints out number seqeunce generated */}
      {numSequence.map((num, i) => (
        <span key={i} style={{ marginRight: '10px' }}>{num}</span>
      ))}

      <p>Check the numbers listed above and hit submit</p>

      {/* Creates a checkbox for each number and handles user selection*/}
      {[1, 2, 3, 4, 5, 6].map(num => (
        <label key={num}>
          <input
            type="checkbox"
            className="mt-4 ml-4"
            value={num}
            checked={numSelected.includes(num)}
            onChange={() => handleCheckboxChange(num)}
          />
          &nbsp;{num}&nbsp;&nbsp;&nbsp;&nbsp;
        </label>
      ))}

      {/* Debugging Purposes: See the selected numbers */}
      {/* <div className="mt-4">
        Selected Numbers: {numSelected.join(', ')}
      </div> */}

      <button
        type="button"
        onClick={() => compareNums(numSelected, numSequence)}
      >
        Submit
      </button>
      
      { displayMessage }
      

    </div>
  );
  
}

export default GetBotCheckNums;