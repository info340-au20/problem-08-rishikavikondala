import React from 'react'; //import React library

const EXAMPLE_SENATORS = [  
  { id: 'C000127',  name: 'Maria Cantwell', state: 'WA',  party: 'Democrat', phone: '202-224-3441', twitter: 'SenatorCantwell' },
  { id: 'M001111', name: 'Patty Murray', state: 'WA', party: 'Democrat', phone: '202-224-2621', twitter: 'PattyMurray' }
];

/* Your code goes here */

export function SenatorRow(props) {
  let senator = props.senator;
  let senatorName = senator.name;
  let senatorStateParty = props.senator.party.slice(0, 1) + " - " + senator.state;
  let senatorPhoneNum = senator.phone;
  let senatorPhoneNumForHref = "tel:" + senator.phone;
  let senatorTwitter = "https://twitter.com/" + senator.twitter;
  let senatorTwitterHandle = "@" + senator.twitter;
  return (
    <tr>
      <td>{senatorName}</td>
      <td>{senatorStateParty}</td>
      <td><a href={senatorPhoneNumForHref}>{senatorPhoneNum}</a></td>
      <td><a href={senatorTwitter}>{senatorTwitterHandle}</a></td>
    </tr>
  )
}

export function TableHeader(props) {
  let columnNames = props.columnNames;
  let tableElements = columnNames.map((name) => {
    let thisTH = <th key={name}>{name}</th> 
    return thisTH;
  })
  return (
    <thead>
      <tr>
        {tableElements}
      </tr>
    </thead>
  )
}

export function SenatorTable(props) {
  let columnNames = ['Name', 'State', 'Phone', 'Twitter'];
  let senatorRows = props.senators.map((senator) => {
    let thisSenator = <SenatorRow senator={senator} key={senator.id}/>
    return (
      <tbody>
        {thisSenator}
      </tbody>
    )
  })
  return (
    <table className="table table-bordered">
      <TableHeader columnNames={columnNames} />
        {senatorRows}
    </table>
  )
}

export function App(props) {
  return (
    <div className="container">
      <h1>US Senators (Oct 2020)</h1>
      <SenatorTable senators={props.senators}/>
    </div>
  )
}

export default App;