const ResultTable = (props) => {
    return (
        <table className="result">
        <thead>
          <tr>
            <th>Year by now</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((yeardata) => (
            <tr key={yeardata.year}>
            <td>{yeardata.year}</td>
            <td>{yeardata.savingsEndOfYear}</td>
            <td>{yeardata.yearlyInterest}</td>
            <td>{yeardata.savingsEndOfYear - props.yeardata.yearlyContribution * yeardata.year}</td>
            <td>{props.initialInvestment + yeardata.yearlyContribution * yeardata.year}</td>
          </tr>
          ))}
          
        </tbody>
      </table>
    )
}

export default ResultTable;