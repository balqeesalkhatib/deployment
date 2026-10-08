import { clearHistory } from "../redux/counterSlice";
import { useSelector, useDispatch } from "react-redux";

const History = () => {
  const history = useSelector((state) => state.counter.history);
  const dispatch = useDispatch();

  return (
    <div className="ContentClass">
      <h1>History</h1>
      <button onClick={() => dispatch(clearHistory())}>Clear History</button>

      <div className="historyList">
        {history.map((item, index) => (
          <p key={index}>
            {index + 1}️⃣ {item.type} ({item.amount > 0 ? "+" : ""}
            {item.amount})
          </p>
        ))}
      </div>
    </div>
  );
};

export default History;
