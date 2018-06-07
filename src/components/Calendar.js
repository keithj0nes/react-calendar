import React, { Component } from 'react';

import dateFns from 'date-fns';

class Calendar extends Component {

  state = {
    currentMonth: new Date(),
    selectedDate: new Date()
  }


  renderHeader(){
    const dateFormat = "MMMM YYYY";

    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={this.prevMonth}>
            chevron_left
          </div>
        </div>
        <div className="col col-center">
          <span>
            {dateFns.format(this.state.currentMonth, dateFormat)}
          </span>
        </div>
        <div className="col col-end" onClick={this.nextMonth}>
          <div className="icon">chevron_right</div>
        </div>
      </div>
    );
  }

  renderDays(){

  }

  renderCells(){

  }


  onDateClick = day => {

  }

  nextMonth = () => {
    // console.log(this.state.currentMonth);
    // console.log(dateFns.addMonths(this.state.currentMonth, 1));
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
    });
  };

  prevMonth = () => {
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
    });
  };


  render(){




    return (
      <div className="calendar">
        {this.renderHeader()}
        {this.renderDays()}
        {this.renderCells()}
      </div>
    )
  }
}

export default Calendar;
