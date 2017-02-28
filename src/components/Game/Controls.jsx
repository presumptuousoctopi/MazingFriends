import React from 'react';

class Controls extends React.Component {
  render() {
    return (
      <div className="Controls">
        <h1>Controls</h1>

        <table className="Move">
          <th>Move</th>
            <tr>
              <td> A: left</td>
            </tr>
            <tr>
              <td> D: right</td>
            </tr>
            <tr>
              <td> W: forward</td>
            </tr>
            <tr>
              <td> S: backward</td>
            </tr>
            <tr>
              <td>[ space ]: jump</td>
            </tr>
        </table>

         <table className="Look">
          <th>Look</th>
            <tr>
              <td> ← : left</td>
            </tr>
            <tr>
              <td> → : right</td>
            </tr>
            <tr>
              <td> ↑ : up</td>
            </tr>
            <tr>
              <td> ↓ : down</td>
            </tr>
            <tr>
              <td> F : fire</td>
            </tr>
        </table>
        <button onClick={this.props.close}>Close</button>
      </div>
    );
  }
}

export default Controls;