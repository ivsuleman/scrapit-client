import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import config from "../config";
import "../assets/styling/NewWasteItem.css";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
//CSS Modules, react-datepicker-cssmodules.css
import "react-datepicker/dist/react-datepicker-cssmodules.css";

export default class NewWasteItem extends Component {
  constructor(props) {
    super(props);

    this.file = null;

    this.state = {
      isLoading: null,
      resident_id: 4,
      category_id: "",
      title: "",
      length: "",
      width: "",
      height: "",
      weight: "",
      quantity: "",
      notes: "",
      state: "open",
      slot: new Date()
    };
    this.handleDate = this.handleDate.bind(this);
  }

  validateForm() {
    return this.state.notes.length > 0;
  }

  handleDate(date) {
    this.setState({
      slot: date
    });
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleFileChange = event => {
    this.file = event.target.files[0];
  };

  handleSubmit = async event => {
    event.preventDefault();
    this.setState({ isLoading: true });

    let body = JSON.stringify({
      resident_id: this.state.resident_id,
      category_id: this.state.category_id,
      title: this.state.title,
      length: this.state.length,
      width: this.state.width,
      height: this.state.height,
      weight: this.state.weight,
      quantity: this.state.quantity,
      notes: this.state.notes,
      state: this.state.state,
      slot: this.state.slot
    });

    fetch("https://scrapit-app-api.herokuapp.com/waste_items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: body
    }).then(response => {
      return response.json();
    });
  };

  render() {
    var today = new Date();

    return (
      <div className="NewWasteItem">
        <h3>Create a New Waste Item</h3>
        <br />

        <label>Select A Collection Time </label>
        <br />

        <DatePicker
          selected={this.state.slot}
          onChange={this.handleDate}
          value={this.state.startDate}
          minDate={new Date(today.setDate(today.getDate() + 1))}
          maxDate={new Date(today.setDate(today.getDate() + 5))}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="MMMM d, yyyy h:mm aa"
          timeCaption="time"
          placeholderText="Select a slot"
        />

        <br />
        <br />

        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="title">
            <ControlLabel>Title</ControlLabel>
            <FormControl
              onChange={this.handleChange}
              value={this.state.title}
              componentClass="input"
              placeholder="enter a title describing the waste"
            />
          </FormGroup>

          <FormGroup controlId="category_id">
            <ControlLabel>Waste Item Category</ControlLabel>
            <FormControl
              onChange={this.handleChange}
              value={this.state.category_id}
              componentClass="select"
            >
              <option value="1">Bath (plastic)</option>
              <option value="2">Bath (fibreglass)</option>
              <option value="3">BBQ</option>
              <option value="4">BBQ stand</option>
              <option value="5">Bed base</option>
              <option value="6">Bed frame (wooden)</option>
              <option value="7">Bed frame (metal)</option>
              <option value="8">Bedside cabinet</option>
              <option value="9">Bedstead (metal - dismantled)</option>
              <option value="10">Bedstead (metal - NOT dismantled)</option>
              <option value="11">Bicycle</option>
              <option value="12">Black sacks</option>
              <option value="13">Boiler (NOT cast iron)</option>
              <option value="14">Boiler (washing)</option>
              <option value="15">Buggie</option>
              <option value="16">Bunk beds</option>
              <option value="17">Cabinet - large dismantled</option>
              <option value="18">Cabinets - wood small</option>
              <option value="19">Cardboard boxes</option>
              <option value="20">Carpet (dry) 6x10</option>
              <option value="21">Chair</option>
              <option value="22">Chest of drawers</option>
              <option value="23">Childrens car seat</option>
              <option value="24">Christmas trees - artificial</option>
              <option value="25">Clothes (bagged)</option>
              <option value="26">Computer - base unit</option>
              <option value="27">Computer - CRT monitor</option>
              <option value="28">Cooker</option>
              <option value="29">Cooker hood</option>
              <option value="30">Cot</option>
              <option value="31">DeskDishwasher</option>
              <option value="32">Doors (not glass) max 3</option>
              <option value="33">Doors with glass (intact)</option>
              <option value="34">Dressing table</option>
              <option value="35">Electrical appliance</option>
              <option value="36">Fan</option>
              <option value="37">Floor lamp</option>
              <option value="38">Freezer - domestic</option>
              <option value="39">Fridge - domestic</option>
              <option value="40">Fridge / freezer - domestic</option>
              <option value="41">Garden chair</option>
              <option value="42">Garden table</option>
              <option value="43">Gas &amp; electric fires</option>
              <option value="44">Heater</option>
              <option value="45">Highchair</option>
              <option value="46">Hob</option>
              <option value="47">Hoover</option>
              <option value="48">Household furniture</option>
              <option value="49">Ironing board</option>
              <option value="50">Kitchen bin</option>
              <option value="51">Lawn mower (+electric)</option>
              <option value="52">Linen basket</option>
              <option value="53">Lino</option>
              <option value="54">Mantlepiece</option>
              <option value="55">Mattress</option>
              <option value="56">Metal filing cabinet</option>
              <option value="57">Microwave</option>
              <option value="58">Oven</option>
              <option value="59">Oven - double</option>
              <option value="60">Packaging</option>
              <option value="61">Paddling pool</option>
              <option value="62">Patio furniture</option>
              <option value="63">Pram</option>
              <option value="64">Printer</option>
              <option value="65">Radiator</option>
              <option value="66">Satellite dish (small)</option>
              <option value="67">Sewing machine - domestic</option>
              <option value="68">Shelving unit</option>
              <option value="69">Sideboard</option>
              <option value="70">Sink (not ceramic)</option>
              <option value="71">Slide (max 1.8m)</option>
              <option value="72">Sofa</option>
              <option value="73">Sofa bed</option>
              <option value="74">Spin dryer</option>
              <option value="75">Step ladder</option>
              <option value="76">Stool</option>
              <option value="77">Suitcase</option>
              <option value="78">Swing</option>
              <option value="79">Table</option>
              <option value="80">Table &amp; chairs</option>
              <option value="81">Table lamp</option>
              <option value="82">Television</option>
              <option value="83">Toilet pan &amp; cistern</option>
              <option value="84">Toy</option>
              <option value="85">Tumble dryer</option>
              <option value="86">TV cabinet</option>
              <option value="87">VCR's/DVD's</option>
              <option value="88">Wallpaper</option>
              <option value="89">Wardrobe</option>
              <option value="90">Wash hand basin (not ceramic)</option>
              <option value="91">Washing line</option>
              <option value="92">Washing machine</option>
              <option value="93">Water tank (small plastic)</option>
              <option value="94">Worktop (6ft maximum)</option>
              <option value="95">Other...</option>
            </FormControl>
          </FormGroup>

          <FormGroup controlId="length">
            <ControlLabel>Length (cm)</ControlLabel>
            <FormControl
              onChange={this.handleChange}
              value={this.state.length}
              componentClass="input"
            />
          </FormGroup>

          <FormGroup controlId="width">
            <ControlLabel>Width (cm)</ControlLabel>
            <FormControl
              onChange={this.handleChange}
              value={this.state.width}
              componentClass="input"
            />
          </FormGroup>

          <FormGroup controlId="height">
            <ControlLabel>Height (cm)</ControlLabel>
            <FormControl
              onChange={this.handleChange}
              value={this.state.height}
              componentClass="input"
            />
          </FormGroup>

          <FormGroup controlId="weight">
            <ControlLabel>Weight (kg)</ControlLabel>
            <FormControl
              onChange={this.handleChange}
              value={this.state.weight}
              componentClass="input"
            />
          </FormGroup>

          <FormGroup controlId="quantity">
            <ControlLabel>Quantity</ControlLabel>
            <FormControl
              onChange={this.handleChange}
              value={this.state.quantity}
              componentClass="input"
            />
          </FormGroup>

          <FormGroup controlId="notes">
            <ControlLabel>Description (*)</ControlLabel>
            <FormControl
              onChange={this.handleChange}
              value={this.state.notes}
              componentClass="textarea"
              placeholder="e.g items are located near bins"
            />
          </FormGroup>

          <FormGroup controlId="file">
            <ControlLabel>Photos</ControlLabel>
            <FormControl onChange={this.handleFileChange} type="file" />
          </FormGroup>

          <LoaderButton
            block
            bsStyle="primary"
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            isLoading={this.state.isLoading}
            text="Create"
            loadingText="Creating…"
          />
        </form>
      </div>
    );
  }
}
