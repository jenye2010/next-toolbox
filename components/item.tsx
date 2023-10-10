import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

dayjs.extend(utc);
dayjs.extend(timezone);

interface Props {
  className?: string;
  children?: React.ReactNode;
  // time: string;
  // setTime: Dispatch<SetStateAction<string>>;
}

export const Item_Digital = ({ className = '', }: Props) => {
  const [time, setTime] = useState('');
  useEffect(() => {
    setInterval(() => {
      setTime(dayjs().format('YYYY年MM月DD日 hh:mm:ss'))
    }
      , 1000);
  }, [setTime])
  return (
    <div className={`flex flex-col justify-start items-stretch mx-3 ${className}`}>
      <div className={`flex flex-col justify-between items-center pt-1 mb-3 lg:mb-0 text-black text-2xl`}>
        <p>目前時間為：</p>
        <p>{time}</p>
      </div>
    </div>
  );
};

