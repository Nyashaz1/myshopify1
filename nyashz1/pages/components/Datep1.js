import React from "react";
import { Button, DatePicker, Popover } from "@shopify/polaris";



export default class DatePickerExample extends React.Component {
  state = {
    month: 1,
    year: 2022,
    selected: {
      start: new Date("Tue Mar 01 2022 00:00:00 GMT-0500 (EST)"),
      end: new Date("Wed Feb 30 2022 00:00:00 GMT-0500 (EST)")
    },
    active: false
  };

  togglePopover = () => {
    this.setState(({ active }) => {
      return { active: !active };
    });
  };

  render() {
    const { month, year, selected } = this.state;
    const activator = (
      <Button fullWidth size="large" onClick={this.togglePopover}>
        Date picker
      </Button>
    );

    return (
      <Popover
        active={this.state.active}
        activator={activator}
        onClose={this.togglePopover}
        sectioned
        fullWidth
      >
        <DatePicker
          month={month}
          year={year}
          onChange={this.handleChange}
          onMonthChange={this.handleMonthChange}
          selected={selected}
          allowRange={true}
          multiMonth={true}
        />
      </Popover>
    );
  }

  handleChange = value => {
    this.setState({ selected: value });
  };

  handleMonthChange = (month, year) => {
    this.setState({
      month,
      year
    });
  };
}
