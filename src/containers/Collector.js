import React from "react";
import "../assets/styling/App.css";
import "../assets/styling/Collector.css";
import { PageHeader, ListGroup, ListGroupItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default class Collector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wasteItems: [],
      collector_id: "1",
      waste_item_id: "",
      state: "booked"
    };
  }

  componentDidMount() {
    fetch("http://https://scrapit-api.herokuapp.com/waste_items")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ wasteItems: data });
      });
  }

  bookItem = e => {
    e.preventDefault();
    // this.setState({isLoading: true});

    this.setState({
      waste_item_id: e.target.dataset.id
    });
    this.onChange();
  };

  onChange = () => {
    let body = JSON.stringify({
      id: this.state.waste_item_id,
      collector_id: this.state.category_id,
      state: this.state.state
    });

    fetch(
      `http://https://scrapit-api.herokuapp.com/waste_items/${
        this.state.waste_item_id
      }`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: body
      }
    ).then(response => {
      return response.json();
    });
  };

  componentDidUpdate() {
    const { history, username } = this.props;

    if (!username) {
      history.push("/signin");
    }
  }

  render() {
    var wasteItems = this.state.wasteItems
      .filter(item => item.state.includes("open"))
      .map(item => {
        const stateTxt = item.state;
        return (
          <div key={item.id} className={"card"}>
            <div className={"card_title"}>
              <h4 className="title">Title: {item.title}</h4>
              <h4 className="time">Pick-up Time: {item.slot}</h4>
              {stateTxt == "open" && (
                <button data-id={item.id} onClick={this.bookItem}>
                  Book Item
                </button>
              )}
            </div>
            <div className="card_content">
              <div className="item_description">
                <h5>Item Length: {item.length}</h5>
                <h5>Item Width: {item.width}</h5>
                <h5>Item Height: {item.height}</h5>
                <h5>Item Weight: {item.weight}</h5>
                <h5>Item Quantity: {item.quantity}</h5>
                <h5>Item Notes: {item.notes}</h5>
              </div>

              <div className="resident">
                <h4> </h4>
                <h5>Resident Title: {item.resident.title}</h5>
                <h5>
                  Resident Name:{" "}
                  {item.resident.first_name + " " + item.resident.surname}
                </h5>
                <h5>Resident Address Line 1: {item.resident.address_line_1}</h5>
                <h5>Resident Postcode: {item.resident.postcode}</h5>
                <h5>Resident Email: {item.resident.email}</h5>
                <h5>Resident Phone: {item.resident.phone}</h5>
              </div>

              <div>
                <div id="map">
                  <iframe
                    title="map"
                    width="300"
                    height="200"
                    id="mapcanvas"
                    src={`https://maps.google.com/maps?q=${
                      item.resident.postcode
                    }&Roadmap&z=10&ie=UTF8&iwloc=&output=embed`}
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                  />
                </div>
              </div>
            </div>

            <hr />
          </div>
        );
      });

    var wasteItemsBooked = this.state.wasteItems
      .filter(item => item.state.includes("booked") && item.collector_id === 1)
      .map(item => {
        const stateTxt = item.state;
        return (
          <div key={item.id} className={"card"}>
            <div className={"card_title"}>
              <h4 className="title">Title: {item.title}</h4>
            </div>
            <div className="card_content">
              <div className="item_description">
                <h5>Item Length: {item.length}</h5>
                <h5>Item Width: {item.width}</h5>
                <h5>Item Height: {item.height}</h5>
                <h5>Item Weight: {item.weight}</h5>
                <h5>Item Quantity: {item.quantity}</h5>
                <h5>Item Notes: {item.notes}</h5>
              </div>

              <div className="resident">
                <h4> </h4>
                <h5>Resident Title: {item.resident.title}</h5>
                <h5>
                  Resident Name:{" "}
                  {item.resident.first_name + " " + item.resident.surname}
                </h5>
                <h5>Resident Address Line 1: {item.resident.address_line_1}</h5>
                <h5>Resident Postcode: {item.resident.postcode}</h5>
                <h5>Resident Email: {item.resident.email}</h5>
                <h5>Resident Phone: {item.resident.phone}</h5>
              </div>
            </div>

            <hr />
          </div>
        );
      });

    var wasteItemsApproved = this.state.wasteItems
      .filter(
        item => item.state.includes("approved") && item.collector_id === 1
      )
      .map(item => {
        const stateTxt = item.state;
        return (
          <div key={item.id} className={"card"}>
            <div className={"card_title"}>
              <h4 className="title">Title: {item.title}</h4>
              <h4 className="time">Pick-up Time: {item.slot}</h4>
            </div>
            <div className="card_content">
              <div className="item_description">
                <h5>Item Length: {item.length}</h5>
                <h5>Item Width: {item.width}</h5>
                <h5>Item Height: {item.height}</h5>
                <h5>Item Weight: {item.weight}</h5>
                <h5>Item Quantity: {item.quantity}</h5>
                <h5>Item Notes: {item.notes}</h5>
              </div>

              <div className="resident">
                <h4> </h4>
                <h5>Resident Title: {item.resident.title}</h5>
                <h5>
                  Resident Name:{" "}
                  {item.resident.first_name + " " + item.resident.surname}
                </h5>
                <h5>Resident Address Line 1: {item.resident.address_line_1}</h5>
                <h5>Resident Postcode: {item.resident.postcode}</h5>
                <h5>Resident Email: {item.resident.email}</h5>
                <h5>Resident Phone: {item.resident.phone}</h5>
              </div>
            </div>

            <hr />
          </div>
        );
      });

    return (
      <div>
        <div>
          <br />
          <br />
          <br />
        </div>
        <div>
          <h3>Waste Items Available for Collection: {wasteItems.length}</h3>
          <br />
          {wasteItems}
          <br />
        </div>
        <div>
          <h3>Waste Items Already Collected: {wasteItemsBooked.length}</h3>
          <br />
          {wasteItemsBooked}
          <br />
        </div>

        <div>
          <h3>
            Waste Items Disposed Successfully! {wasteItemsApproved.length}
          </h3>
          <br />
          {wasteItemsApproved}
          <br />
        </div>
      </div>
    );
  }
}
