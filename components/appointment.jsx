import React from 'react';
window.$ = window.jQuery = require('jquery');
require('semantic-ui-calendar/dist/calendar.min.js');

export default class Appointment extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      oneTimeSelection: false
    }

    this.updateParentState = this.updateParentState.bind(this)
    this.handleUndo = this.handleUndo.bind(this)
  }

  componentDidMount(){
    $('.ui.dropdown').dropdown();

    $('#datePicker').calendar({
      type: 'date',
      onChange: function (date, text, mode) {
        console.log(text)
      }
    });

    $('.timeRowCon').niceScroll({
      cursorcolor: 'rgba(0,0,0,.4)'
    });

  }
  updateParentState(row, cell){
    this.setState({
      selectedRow: row,
      selectedCell: cell
    })

    console.log('selected Row id =' + row + ' & ' + 'selected Cell no. = ' + cell)
  }

  handleUndo(){
    let tr = $('.timeRowCon tr')
    let td = tr[this.state.selectedRow].getElementsByTagName('td')
    td[this.state.selectedCell].removeAttribute('style')
  }


  render(){
    let hourOfDay = ['08 AM','09 AM','10 AM','11 AM','12 PM','01 PM','02 PM','03 PM','04 PM','05 PM','06 PM','07 PM','08 PM'];

    return(
      <div className='appointmentContainer'>
        <div className="ui form">
          <div className="inline field">
            <select className="ui dropdown">
              <option value="">Location</option>
              <option value="1">Dhaka</option>
              <option value="0">Rajshahi</option>
            </select>
          </div>
          <div className="inline field">
            <div className="ui calendar" id="datePicker">
              <div className="ui input left icon">
                <i className="calendar icon"></i>
                <input type="text" placeholder="Date"/>
              </div>
            </div>
          </div>

          <div className="inline field">
            <select className="ui dropdown">
              <option value="">Service</option>
              <option value="1">Male</option>
              <option value="0">Female</option>
            </select>
          </div>

          <div className="inline field">
            <select className="ui dropdown">
              <option value="">Service Provider</option>
              <option value="1">Male</option>
              <option value="0">Female</option>
            </select>
          </div>
          <div className="inline field">
          <span id='ShowTime'>Cursor Position</span>
          </div>
        </div>



        <div className='timeRowCon'>
          {hourOfDay.map((value, i) =>
            <TimeRow
              hourOfDay={value}
              key={i}
              id={i}
              updateParentState={this.updateParentState}
            />
          )}

        </div>
        <div className='actionBtnCon'>
          <button className='ui basic teal right floated button'>
            <i className='save icon'></i>
            SAVE
          </button>
          <button className='ui basic right floated button'>
            <i className='cancel icon'></i>
            CANCEL
          </button>
          <button className='ui basic right floated button' onClick={this.handleUndo}>
            <i className='undo icon'></i>
            UNDO
          </button>
          <div className='clr'></div>
        </div>
      </div>
    )
  }
}

class TimeRow extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      ApptDuration: 15
    }

    this.cellNumber = (60/this.state.ApptDuration);

    this.alreadyBooked= [[0,1], [3, 3], [9,4], [5, 2]];
    this.notAvailable= [[2,3], [2, 4], [3,1], [3, 2]];
    this.requested= [[2,1], [1, 4], [7,3], [6, 1]];

    this.showTime = this.showTime.bind(this);
  }

  componentDidMount(){
    let tr = document.getElementsByTagName('tr');
    let td = [];
    for(let k=0; k <= 12; k++){
      td.push(tr[k].getElementsByTagName('td'));
    }
    for(let j=0; j < this.alreadyBooked.length; j++){
      let row = this.alreadyBooked[j][0]
      let cell = this.alreadyBooked[j][1]
      td[row][cell].style.background = "rgba(75, 192, 192, 0.5)"
    }

    for(let i=0; i < this.notAvailable.length; i++){
      let row = this.notAvailable[i][0]
      let cell = this.notAvailable[i][1]
      td[row][cell].style.background = "#ddd"
    }

    for(let j=0; j < this.requested.length; j++){
      let row = this.requested[j][0]
      let cell = this.requested[j][1]
      td[row][cell].style.background = "rgba(255, 206, 86, 0.3)"
    }

  }

  showTime(e){
    let z = e.target.getAttribute('value');
    let x = this.props.hourOfDay;
    document.getElementById('ShowTime').innerHTML = x.slice(0,2) + ' :' + ' ' + (z*15) + ' ' + x.slice(3,5);
  }

  handleOnClick(e){
    if(e.target.hasAttribute('style')){
      alert("Please, select another time.")
    }else{
      let selectedRow = e.target.parentElement.getAttribute('id');
      let selectedCell = e.target.getAttribute('value');
      this.setState({
        selectedRow: selectedRow,
        selectedCell: selectedCell
      })
      this.props.updateParentState(selectedRow, selectedCell)
      e.target.style.background = "rgba(75, 192, 192, 0.5)"
    }

  }

  render(){
    let time = [];
    for(let i=1; i<=this.cellNumber; i++){
      time.push(i);
    }

    return(
      <table className="timeSlider noselect">
        <tbody>
          <tr id={this.props.id}>
            <td>
              {this.props.hourOfDay}
            </td>
            {time.map((value, i) =>
              <td value={value} key={i} onMouseOver={this.showTime} onClick={this.handleOnClick.bind(this)}>&nbsp;</td>
            )}
          </tr>
        </tbody>
      </table>
    )
  }
}
