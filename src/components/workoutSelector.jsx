import React, {Component} from 'react';


class workoutSelector extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.category.name}</h1>
        <select>
          {this.props.category.options.map((opt, i) => {
            return(
              <option value={opt}>{opt}</option>
            )
          })}
          
        </select>
        
        
        
        
        </div>

    )
  }
}





export default workoutSelector;