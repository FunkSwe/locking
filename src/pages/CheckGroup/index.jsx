import { useState } from 'react';
import {
  groupThuFri1,
  groupThuFri2,
  groupSatSun1,
  groupSatSun2,
  groupSatSun3,
} from './groups';

import './checkgroup.scss';
import Locker from '@/components/locker/Locker';

function matchesName(rawName, userInput) {
  const name = rawName.trim().toLowerCase();
  const input = userInput.trim().toLowerCase();

  const nameWords = name.split(' ');
  const inputWords = input.split(' ');

  const firstName = nameWords[0] || '';
  const lastName = nameWords[nameWords.length - 1] || '';

  if (inputWords.length === 1) return inputWords[0] === firstName;

  if (inputWords.length === 2) {
    const [uFirst, uLastInitial] = inputWords;
    if (uFirst !== firstName || !lastName) return false;
    return uLastInitial[0] === lastName[0];
  }

  return false;
}

function CheckGroup() {
  const [searchTerm, setSearchTerm] = useState('');
  const [thuFriResult, setThuFriResult] = useState('');
  const [satSunResult, setSatSunResult] = useState('');

  const handleSearch = () => {
    const input = searchTerm.trim();
    if (!input) {
      setThuFriResult('No match found!');
      setSatSunResult('No match found!');
      return;
    }

    let foundThuFriGroup = 'No match found!';
    if (groupThuFri1.some((name) => matchesName(name, input))) {
      foundThuFriGroup = 'Group 1';
    } else if (groupThuFri2.some((name) => matchesName(name, input))) {
      foundThuFriGroup = 'Group 2';
    }

    setThuFriResult(
      foundThuFriGroup === 'No match found!'
        ? 'No match found!'
        : `Thu/Fri – ${foundThuFriGroup}`
    );

    let foundSatSunGroup = 'No match found!';
    if (groupSatSun1.some((name) => matchesName(name, input))) {
      foundSatSunGroup = 'Group 1';
    } else if (groupSatSun2.some((name) => matchesName(name, input))) {
      foundSatSunGroup = 'Group 2';
    } else if (groupSatSun3.some((name) => matchesName(name, input))) {
      foundSatSunGroup = 'Group 3';
    }

    setSatSunResult(
      foundSatSunGroup === 'No match found!'
        ? 'No match found!'
        : `Sat/Sun – ${foundSatSunGroup}`
    );

    setSearchTerm('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className='check-group-container'>
      <h1>Check My Group</h1>
      <p>
        Type your name in either:
        <br />• <strong>First name only</strong>, or
        <br />• <strong>First name + first letter</strong> of your last name
        <br />
        (e.g. "Brian" or "Brian M")
      </p>

      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type='text'
          placeholder='e.g. Brian or Brian M'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSearch} type='button'>
          Find my group
        </button>
      </form>

      <div className='results'>
        {thuFriResult && (
          <div>
            <strong>Thu/Fri Result:</strong> {thuFriResult}
          </div>
        )}
        {satSunResult && (
          <div>
            <strong>Sat/Sun Result:</strong> {satSunResult}
          </div>
        )}
      </div>
      <div className='lockerWrapper'>
      <Locker />
      </div>
     
    </div>
  );
}

export default CheckGroup;
