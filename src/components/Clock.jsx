import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const days = ['DOM', 'LUN', 'MAR', 'MIE', 'JUE', 'VIE', 'SAB'];

const Digital = styled.div`
  display: inline-block;
  position: relative;
  font-family: 'Digital-7';
  
  p:first-child {
    width: 100%;
    position: absolute;
    color: #242a32;
  }
  
  p:last-child {
    position: relative;
    color: #ebebeb;
  }
  
  p {
    margin: 0;
  }
`;

const ClockContainer = styled.div`
  margin: 10px;
  border-radius: 10px;
  background: #0d1621;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  padding: 20px 20px 5px 20px;
`;

const Calendar = styled.div`
  font-size: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 33px;
  padding: 0 10px;
  padding-top: 10px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const Hour = styled.div`
  flex: 1;
  font-size: 7rem;
  margin: 0;
  padding: 0;
  top: 0;
`;

const AmPm = styled.div`
  align-self: flex-end;
  font-size: 2.5rem;
  display: flex;
  gap: 10px;
  margin-bottom: 25px;
`;

const Number = ({ value = 0 }) => {
  const result = String(value).padStart(2, "0");
  return (
    <Digital>
      <p>88</p>
      <p>{result}</p>
    </Digital>
  );
};

const Word = ({ value, hidden = false }) => {
  const getStyle = () => {
    return {
      visibility: hidden ? 'hidden' : 'visible'
    };
  };
  return (
    <Digital>
      <p>{value}</p>
      <p style={getStyle()}>{value}</p>
    </Digital>
  );
};

export const Clock = ({ h24 = true }) => {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [day, setDay] = useState(0);
  const [pm, setPm] = useState(false);

  useEffect(() => {
    const update = () => {
      const date = new Date();
      let hour = date.getHours();
      if (!h24) {
        hour = (hour % 12) || 12;
      }
      setHour(hour);
      setMinute(date.getMinutes());
      setSecond(date.getSeconds());
      setDay(date.getDay());
      setPm(date.getHours() >= 12);
    };

    update();

    const interval = setInterval(() => {
      update();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ClockContainer>
      <Calendar>
        {days.map((value, index) => (
          <Word key={value} value={value} hidden={index !== day} />
        ))}
      </Calendar>
      <Row>
        <Hour>
          <Number value={hour} />
          <Word value={':'} />
          <Number value={minute} />
          <Word value={':'} />
          <Number value={second} />
        </Hour>
        <AmPm>
          <Word value={'AM'} hidden={pm} />
          <Word value={'PM'} hidden={!pm} />
        </AmPm>
      </Row>
    </ClockContainer>
  );
};
