import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";

import DataWidget from "../../components/DataWidget/DataWidget";
import AdWidget from "../../components/AdWidget/AdWidget";
import CurrencyWidget from "../../components/CurrencyWidget/CurrencyWidget";
import ActivityWidget from "../../components/ActivityWidget/ActivityWidget";

import "./Bajaar.scss";
import CalorieWidgetLarge from "../../components/CalorieWidgetLarge/CalorieWidgetLarge";
import TaskWidget from "../../components/TaskWidget/TaskWidget";
import CaloriesWidget from "../../components/CaloriesWidget/CaloriesWidget";
import ShoppingItem from "../../components/ShoppingItem/ShoppingItem";

class Bajaar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Shreyansh",
      age: "21",
      weight: "72",
      height: "182",
      blood: "B+",
      hp: "100",
      bp: "900",
      bpm: "77",
      bhi: "77",
      bmi: "21.7",
      required_calories: "1900",
      lastmeal_timing: "2 AM",
      calories: "1000",
      img_url: "https://avatarfiles.alphacoders.com/703/70340.jpg",
      insurance_button: false,
      store_button: true,
      fitnessStoreList: [
        { item_name: "Aditya Sharma", item_cost: "100", item_img: "" },
        { item_name: "Dhawal Agarwal", item_cost: "100", item_img: "" },
        { item_name: "Rohit Mohanty", item_cost: "100", item_img: "" },
        { item_name: "Shreyansh", item_cost: "100", item_img: "" },
        { item_name: "Pratyush Goyal", item_cost: "100", item_img: "" }
      ],
      smartbandStoreList: [
        { item_name: "Mi Band 5", item_cost: "100", item_img: "" },
        { item_name: "Honor Band 4", item_cost: "100", item_img: "" },
        { item_name: "Mi Band 3", item_cost: "100", item_img: "" },
        { item_name: "Amazfir Apex", item_cost: "100", item_img: "" }
      ]
    };
  }
  render() {
    let activateInsurance = () => {
      this.setState({
        insurance_button: true,
        store_button: false
      });
    };
    let activateStore = () => {
      this.setState({
        insurance_button: false,
        store_button: true
      });
    };

    let insurance_button_class =
      "col col-6 ToggleBajaar__Text ToggleBajaar__Selected";
    let store_button_class =
      "col col-6 ToggleBajaar__Text ToggleBajaar__Selected";

    if (this.state.insurance_button === true) {
      insurance_button_class = insurance_button_class.concat(
        " ToggleBajaar__Selected"
      );
    } else {
      insurance_button_class = insurance_button_class.slice(0, 28);
    }
    if (this.state.store_button === true) {
      store_button_class = store_button_class.concat(" ToggleBajaar__Selected");
    } else {
      store_button_class = store_button_class.slice(0, 28);
    }

    let conditionalRender = () => {
      if (this.state.insurance_button === true) {
        return (
          <div className="Insurance">
            <div className="col col-3">
              <AdWidget />
            </div>

            <div className="col col-3">
              <AdWidget />
            </div>

            <div className="col col-3">
              <AdWidget />
            </div>

            <div className="col col-3">
              <AdWidget />
            </div>
          </div>
        );
      }
      let renderComponents = item => {
        return (
          <ShoppingItem
            item_name={item.item_name}
            item_price={item.item_cost}
            item_img_url={item.item_img}
          />
        );
      };
      if (this.state.store_button === true) {
        return (
          <div>
            <div className="ShoppingList">
              <h1 className="ShoppingList__Title">Health Supplements</h1>
              {this.state.fitnessStoreList.map(renderComponents)}
            </div>
            <div className="ShoppingList">
              <h1 className="ShoppingList__Title">Fitness Bands</h1>
              {this.state.smartbandStoreList.map(renderComponents)}
            </div>
          </div>
        );
      }
    };

    return (
      <div className="">
        <Navbar />
        <div className="Overlap">
          <div className="Position__CurrencyWidget">
            <CurrencyWidget HP={this.state.hp} BP={this.state.bp} />
          </div>
          <div className="ToggleBajaar">
            <h1 className={insurance_button_class} onClick={activateInsurance}>
              Insurance
            </h1>
            <h1 className={store_button_class} onClick={activateStore}>
              Store
            </h1>
          </div>
          {conditionalRender()}
        </div>
      </div>
    );
  }
}
export default Bajaar;
