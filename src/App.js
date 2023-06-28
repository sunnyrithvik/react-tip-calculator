import { useState } from "react";

function App() {
  return (
    <div>
      <Tip />
    </div>
  );
}

function Tip() {
  const [bill, setBill] = useState("");
  const [per1, setPer1] = useState(0);
  const [per2, setPer2] = useState(0);

  function handleChange1(e) {
    return setPer1(Number(e.target.value));
  }

  function handleChange2(e) {
    return setPer2(Number(e.target.value));
  }

  function handleReset() {
    setBill("");
    setPer1(0);
    setPer2(0);
  }

  return (
    <div>
      <p>How much was the bill?</p>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <ServiceBill per={per1} onChange={handleChange1} />
      <ServiceBill per={per2} onChange={handleChange2} />
      {bill ? (
        <div>
          <h3>
            {`you pay Rs. ${
              bill + ((per1 + per2) * bill) / 200
            } (Rs.${bill} + Rs.${((per1 + per2) * bill) / 200} tip)`}
          </h3>

          <button onClick={handleReset}>Reset</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

function ServiceBill({ per, onChange }) {
  return (
    <div>
      <p>how much service bill</p>
      <select value={per} onChange={(e) => onChange(e)}>
        <option value={0} key={0}>{`dissatisfied (0%)`}</option>
        <option value={5} key={5}>{`okay (5%)`}</option>
        <option value={10} key={10}>{`good (10%)`}</option>
        <option value={20} key={20}>{`amazing (20%)`}</option>
      </select>
    </div>
  );
}

export default App;
