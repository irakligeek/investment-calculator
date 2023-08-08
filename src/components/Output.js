export default function Output({ data }) {
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => {
          const totalInterest =
            item.savingsEndOfYear -
            item.initialInvestment -
            item.yearlyContribution * item.year;
          const totalCapital =
            item.initialInvestment + item.yearlyContribution * item.year;

          return (
            <tr key={new Date().valueOf() * index + 1}>
              <td>{item.year}</td>
              <td>$ {item.savingsEndOfYear}</td>
              <td>$ {item.yearlyInterest}</td>
              <td>$ {totalInterest.toFixed(2)}</td>
              <td>$ {totalCapital.toFixed(2)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
