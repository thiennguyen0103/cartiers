import { Badge } from "flowbite-react";
import Countdown, { zeroPad } from "react-countdown";

type Timer = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
};

type CountDownTimerProps = {
  auctionEnd: string;
};

const renderer = ({ days, hours, minutes, seconds, completed }: Timer) => {
  if (completed) {
    // Render a completed state
    return <Badge>Finished</Badge>;
  } else {
    // Render a countdown
    return (
      <Badge
        className={`border border-white text-white ${
          completed
            ? "bg-red-600"
            : days === 0 && hours < 10
              ? "bg-amber-600"
              : "bg-green-600"
        }`}
      >
        {zeroPad(days)}:{zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
      </Badge>
    );
  }
};

const CountDownTimer = ({ auctionEnd }: CountDownTimerProps) => {
  return (
    <div>
      <Countdown date={auctionEnd} renderer={renderer} />
    </div>
  );
};

export default CountDownTimer;
