import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

class TimeLine extends Component {
  transformTime(time) {
    if (this.props.mode) {
      let timeSplit = time.split(":", 2);
      if (timeSplit[0] > 12) {
        timeSplit[0] -= 12;
        timeSplit[0] = "0" + timeSplit[0];
      }
      let result = timeSplit.join(":");
      return result;
    }
    return time;
  }

  render() {
    // @TODO i'm pretty sure that developers can make this function prettier
    return (
      <div className="timedHeight">
        <ListGroup>
          <ListGroupItem>{this.transformTime("07:00")}</ListGroupItem>
          <ListGroupItem>{this.transformTime("08:00")}</ListGroupItem>
          <ListGroupItem>{this.transformTime("09:00")}</ListGroupItem>
          <ListGroupItem>{this.transformTime("12:00")}</ListGroupItem>
          <ListGroupItem>{this.transformTime("13:00")}</ListGroupItem>
          <ListGroupItem>{this.transformTime("14:00")}</ListGroupItem>
          <ListGroupItem>{this.transformTime("18:00")}</ListGroupItem>
          <ListGroupItem>{this.transformTime("19:00")}</ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}

export { TimeLine };
