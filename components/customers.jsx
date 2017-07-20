import React from 'react';
import '../js/tableSort.js';

export default class Customers extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      customerData: [
        {
          name: 'Jamie',
          gender: 'Male',
          age: '26',
          email: 'Jamie@example.com',
          phone: '01xxxxxxxxx',
          address: 'Dhanmondi, Dhaka'
        },
        {
          name: 'Kamie',
          gender: 'Female',
          age: '23',
          email: 'kamie@example.com',
          phone: '01xxxxxxxxx',
          address: 'Dhanmondi, Dhaka'
        },
        {
          name: 'Samie',
          gender: 'Male',
          age: '28',
          email: 'samie@example.com',
          phone: '01xxxxxxxxx',
          address: 'Dhanmondi, Dhaka'
        }
      ]
    }
  }

  componentDidMount(){
    $('.ui.sortable.table').tablesort();
    $('.ui.checkbox').checkbox();
  }

  render(){
    return(
      <div>
        <div className="tableActionCon">
          <div className="ui mini search">
            <div className="ui icon input">
              <input className="prompt" type="text" placeholder="Search..."/>
              <i className="search icon"></i>
            </div>
          </div>
        </div>
        <div className="clr"></div>
        <table className="ui sortable striped celled table">
          <thead>
            <tr>
              <th className="sorted ascending">Name</th>
              <th className="sorted ascending">Gender</th>
              <th className="sorted ascending">Age</th>
              <th className="sorted ascending">Email</th>
              <th className="sorted ascending">Phone</th>
              <th className="sorted ascending">Address</th>
              <th>Actions</th>
              <th>Activities</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.customerData.map((value, key) => <IndividualCustomerRow key={key} data={value} id={key}/>)
            }
          </tbody>
        </table>

        <CustomerActivityModal/>
      </div>
    )
  }
}

class IndividualCustomerRow extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      customerData: this.props.data
    }
  }

  handleEdit(){
    $('.ui.editModal' + this.props.id + '.modal').modal('setting',{
      detachable: false
    }).modal('show');
  }

  viewActivity(){
    $('.ui.customer.modal').modal('setting',{
      detachable: false
    }).modal('show');
  }

  render(){
    return(
      <tr>
        <td>{this.state.customerData.name}</td>
        <td>{this.state.customerData.gender}</td>
        <td>{this.state.customerData.age}</td>
        <td>{this.state.customerData.email}</td>
        <td>{this.state.customerData.phone}</td>
        <td>{this.state.customerData.address}</td>
        <td className="center aligned">
          <button className="ui basic icon mini button" onClick={this.handleEdit.bind(this)}>
            <i className="pencil icon"></i>
          </button>
          <button className="ui basic icon mini button">
            <i className="trash icon"></i>
          </button>
        </td>
        <td className="center aligned">
          <button className="ui basic mini button" onClick={this.viewActivity.bind(this)}>View</button>
          <EditModal data={this.state.customerData} id={this.props.id} key={this.props.id}/>
        </td>
      </tr>
    )
  }
}

class EditModal extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.data

  }

  handleOnChange(name, e){
    let change = {}
    change[name] = e.target.value
    this.setState(change)
  }

  render(){
    return(
      <div className={"ui editModal" + this.props.id + " small modal"}>
        <div className="content">
          <div className="ui form">
            <div className="field">
              <label>Name</label>
              <input type="text" placeholder="Full Name"  value={this.state.name} onChange={this.handleOnChange.bind(this, 'name')}/>
            </div>
            <div className="field">
              <label>Gender</label>
              <input type="text" placeholder="Gender" value={this.state.gender} onChange={this.handleOnChange.bind(this, 'gender')}/>
            </div>
            <div className="field">
              <label>Age</label>
              <input type="text" placeholder="Age" value={this.state.age} onChange={this.handleOnChange.bind(this, 'age')}/>
            </div>
            <div className="field">
              <label>Email</label>
              <input type="text" placeholder="Email" value={this.state.email} onChange={this.handleOnChange.bind(this, 'email')}/>
            </div>
            <div className="field">
              <label>Phone</label>
              <input type="text" placeholder="Phone" value={this.state.phone} onChange={this.handleOnChange.bind(this, 'phone')}/>
            </div>
            <div className="field">
              <label>Address</label>
              <input type="text" placeholder="Address" value={this.state.address} onChange={this.handleOnChange.bind(this, 'address')}/>
            </div>
          </div>
        </div>
        <div className="actions">
          <div className="ui approve mini teal button">Done</div>
          <div className="ui cancel mini button">Cancel</div>
        </div>
      </div>
    )
  }
}

class CustomerActivityModal extends React.Component{
  componentDidMount(){
    $('.ui.menu .item').tab()

  }

  render(){
    return(
      <div className="ui customer small modal">
        <div className="content">

          <div className="ui pointing secondary menu">
            <a className="item active" data-tab="first">Upcoming Appt.</a>
            <a className="item" data-tab="second">Past Appt.</a>
            <a className="item" data-tab="third">Payments</a>
          </div>
          <div className="ui tab apptHistory active" data-tab="first">
            <ul className="menuItem">
              <li><i className="calendar teal icon"></i></li>
              <li>
                <p>Tues Jan 20, 2017</p>
                <span>Exclusive service from Titas for 60 mins at $20</span>
              </li>
            </ul>
            <ul className="menuItem">
              <li><i className="calendar teal icon"></i></li>
              <li>
                <p>Mon Jun 20, 2017</p>
                <span>Exclusive service from Titas for 60 mins at $20</span>
              </li>
            </ul>
            <ul className="menuItem">
              <li><i className="calendar teal icon"></i></li>
              <li>
                <p>Tues Jan 20, 2017</p>
                <span>Exclusive service from Titas for 60 mins at $20</span>
              </li>
            </ul>
          </div>

          <div className="ui tab apptHistory" data-tab="second">
            <ul className="menuItem">
              <li><i className="calendar icon"></i></li>
              <li>
                <p>Tues Jan 20, 2017</p>
                <span>Exclusive service from Titas for 60 mins at $20</span>
              </li>
            </ul>
            <ul className="menuItem">
              <li><i className="calendar icon"></i></li>
              <li>
                <p>Mon Jun 20, 2017</p>
                <span>Exclusive service from Titas for 60 mins at $20</span>
              </li>
            </ul>
            <ul className="menuItem">
              <li><i className="calendar icon"></i></li>
              <li>
                <p>Tues Jan 20, 2017</p>
                <span>Exclusive service from Titas for 60 mins at $20</span>
              </li>
            </ul>
          </div>

          <div className="ui tab" data-tab="third">
            <table className="ui sortable striped celled table">
              <thead>
                <tr>
                  <th className="sorted ascending">Date</th>
                  <th className="sorted ascending">Service</th>
                  <th className="sorted ascending">Provider</th>
                  <th className="sorted ascending">Duration</th>
                  <th className="sorted ascending">Amount($)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>12.04.2017</td>
                  <td>Good Service</td>
                  <td>Mr. Motu</td>
                  <td>30 mins</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>12.04.2017</td>
                  <td>Good Service</td>
                  <td>Mr. Motu</td>
                  <td>30 mins</td>
                  <td>30</td>
                </tr>
                <tr>
                  <td>12.04.2017</td>
                  <td>Good Service</td>
                  <td>Mr. Motu</td>
                  <td>30 mins</td>
                  <td>10</td>
                </tr>
              </tbody>

              <tfoot>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th>Total</th>
                  <th>100</th>
                </tr>
              </tfoot>
            </table>
          </div>

        </div>
        <div className="actions">
          <div className="ui basic approve button">OK</div>
        </div>
      </div>
    )
  }
}
