import React, { Component } from 'react';

class Calendar extends Component {

  state = {
    currentMonth: new Date(),
    selectedDate: new Date()
  }


  renderHeader(){

  }

  renderDays(){

  }

  renderCells(){

  }
  
  render(){




    return (
      <div>
        <div>Header</div>
        <div>Days</div>
        <div>Cells</div>
      </div>
    )
  }
}

export default Calendar;
