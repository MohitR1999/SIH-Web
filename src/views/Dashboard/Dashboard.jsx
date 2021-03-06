import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// function that returns a color based on an interval of numbers
import Map from "./heatmap";
import { PanelHeader, Stats, CardCategory, Tasks } from "components";
import { getfirebase } from "../../firebase";

import {
  dashboardPanelChart,
  getChartCholera,
  getChartD,
  getChartT
} from "variables/charts.jsx";

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn == "Orissa") return <Orissa />;
  if (isLoggedIn == "Chattisgarh") return <Chattisgarh />;
  if (isLoggedIn == "Madhya Pradesh") return <MP />;
  if (isLoggedIn == "West Bengal") return <WB />;
  if (isLoggedIn == "Bihar") return <Bihar />;
  if (isLoggedIn == "Uttar Pradesh") return <UP />;
  if (isLoggedIn == "Rajasthan") return <Rajasthan />;
  if (isLoggedIn == "Gujarat") return <Gujarat />;
  if (isLoggedIn == "Maharastra") return <Maharastra />;
  if (isLoggedIn == "Andhra Pradesh") return <AP />;
  if (isLoggedIn == "Tamil Nadu") return <TN />;
  if (isLoggedIn == "Kerala") return <Kerala />;
  if (isLoggedIn == "Assam") return <Assam />;
  if (isLoggedIn == "Manipur") return <Manipur />;
  if (isLoggedIn == "Mizoram") return <Mizoram />;
  if (isLoggedIn == "Tripura") return <Tripura />;
  if (isLoggedIn == "Himachal Pradesh") return <HP />;
  if (isLoggedIn == "Jammu and Kashmir") return <JK />;
  if (isLoggedIn == "Sikkim") return <Sikkim />;
  if (isLoggedIn == "Nagaland") return <Nagaland />;
  if (isLoggedIn == "Karnataka") return <Karnataka />;
  if (isLoggedIn == "Punjab") return <Punjab />;
  if (isLoggedIn == "Uttrakhand") return <Uttrakhand />;
  if (isLoggedIn == "Haryana") return <Haryana />;
  if (isLoggedIn == "Arunachal Pradesh") return <Arunachal />;
  if (isLoggedIn == "Jharkhand") return <Jharkhand />;
  if (isLoggedIn == "Meghalaya") return <Meghalaya />;
  else return <UP />;
}

class Orissa extends React.Component {
  render() {
    return (
      <div
        style={{
          marginTop: "-20px",
          marginLeft: "-10px",
          width: "95%",
          height: "10%"
        }}
      >
        <Card
          className="card-chart"
          style={{
            marginTop: "0px",
            marginLeft: "0px",
            width: "98.7%",
            height: "1020%"
          }}
        >
          <CardHeader>
            <CardCategory>Orissa</CardCategory>
            <CardTitle tag="h4" />
          </CardHeader>
          <CardBody>
            <p>Area: 155707 sq meter</p>
            <p>Capital: Bhubaneshwar</p>
            <p>Disease Gradient: 5.48</p>
            <p>Growth: 14.05%</p>
            <p>Population: 41,974,218</p>
          </CardBody>
        </Card>
      </div>
    );
  }
}

function Chattisgarh() {
  return (
    <div
      style={{
        marginTop: "-20px",
        marginLeft: "-10px",
        width: "95%",
        height: "10%"
      }}
    >
      <Card
        className="card-chart"
        style={{
          marginTop: "0px",
          marginLeft: "0px",
          width: "98.7%",
          height: "1020%"
        }}
      >
        <CardHeader>
          <CardCategory>Chattisgarh</CardCategory>
          <CardTitle tag="h4" />
        </CardHeader>
        <CardBody>
          <p>Area: 135192 sq meter</p>
          <p>Capital: Raipur</p>
          <p>Disease Gradient: 1.37</p>
          <p>Growth: 22.61%</p>
          <p>Population: 25,545,198</p>
        </CardBody>
      </Card>
    </div>
  );
}
function Uttrakhand() {
  return (
    <div
      style={{
        marginTop: "-20px",
        marginLeft: "-10px",
        width: "95%",
        height: "10%"
      }}
    >
      <Card
        className="card-chart"
        style={{
          marginTop: "0px",
          marginLeft: "0px",
          width: "98.7%",
          height: "1020%"
        }}
      >
        <CardHeader>
          <CardCategory>Uttrakhand</CardCategory>
          <CardTitle tag="h4" />
        </CardHeader>
        <CardBody>
          <p>Area: 53483 sq meter</p>
          <p>Capital: Dehradun</p>
          <p>Disease Gradient: 2.12</p>
          <p>Growth: 18.81%</p>
          <p>Population: 10,086,292</p>
        </CardBody>
      </Card>
    </div>
  );
}
function Jharkhand() {
  return (
    <div
      style={{
        marginTop: "-20px",
        marginLeft: "-10px",
        width: "95%",
        height: "10%"
      }}
    >
      <Card
        className="card-chart"
        style={{
          marginTop: "0px",
          marginLeft: "0px",
          width: "98.7%",
          height: "1020%"
        }}
      >
        <CardHeader>
          <CardCategory>Jharkhand</CardCategory>
          <CardTitle tag="h4" />
        </CardHeader>
        <CardBody>
          <p>Area: 79716 sq meter</p>
          <p>Capital: Ranchi</p>
          <p>Disease Gradient: 3.68</p>
          <p>Growth: 22.42%</p>
          <p>Population: 32,988,134</p>
        </CardBody>
      </Card>
    </div>
  );
}
function Meghalaya() {
  return (
    <div
      style={{
        marginTop: "-20px",
        marginLeft: "-10px",
        width: "95%",
        height: "10%"
      }}
    >
      <Card
        className="card-chart"
        style={{
          marginTop: "0px",
          marginLeft: "0px",
          width: "98.7%",
          height: "1020%"
        }}
      >
        <CardHeader>
          <CardCategory>Meghalaya</CardCategory>
          <CardTitle tag="h4" />
        </CardHeader>
        <CardBody>
          <p>Area: 22429 sq meter</p>
          <p>Capital: Shillong</p>
          <p>Disease Gradient: 15.79</p>
          <p>Growth: 27.95%</p>
          <p>Population: 2,966,889</p>
        </CardBody>
      </Card>
    </div>
  );
}
function Haryana() {
  return (
    <div
      style={{
        marginTop: "-20px",
        marginLeft: "-10px",
        width: "95%",
        height: "10%"
      }}
    >
      <Card
        className="card-chart"
        style={{
          marginTop: "0px",
          marginLeft: "0px",
          width: "98.7%",
          height: "1020%"
        }}
      >
        <CardHeader>
          <CardCategory>Haryana</CardCategory>
          <CardTitle tag="h4" />
        </CardHeader>
        <CardBody>
          <p>Area: 44212 sq meter</p>
          <p>Capital: Chandigarh</p>
          <p>Disease Gradient: 6.05</p>
          <p>Growth: 19.9%</p>
          <p>Population: 25,315,462</p>
        </CardBody>
      </Card>
    </div>
  );
}
function Arunachal() {
  return (
    <div
      style={{
        marginTop: "-20px",
        marginLeft: "-10px",
        width: "95%",
        height: "10%"
      }}
    >
      <Card
        className="card-chart"
        style={{
          marginTop: "0px",
          marginLeft: "0px",
          width: "98.7%",
          height: "1020%"
        }}
      >
        <CardHeader>
          <CardCategory>Arunachal Pradesh</CardCategory>
          <CardTitle tag="h4" />
        </CardHeader>
        <CardBody>
          <p>Area: 83743 sq meter</p>
          <p>Capital: Itanagar</p>
          <p>Disease Gradient: 6.67</p>
          <p>Growth: 26.03%</p>
          <p>Population: 1,383,727</p>
        </CardBody>
      </Card>
    </div>
  );
}
function MP() {
  return (
    <div
      style={{
        marginTop: "-20px",
        marginLeft: "-10px",
        width: "95%",
        height: "10%"
      }}
    >
      <Card
        className="card-chart"
        style={{
          marginTop: "0px",
          marginLeft: "0px",
          width: "98.7%",
          height: "1020%"
        }}
      >
        <CardHeader>
          <CardCategory>Madhya Pradesh</CardCategory>
          <CardTitle tag="h4" />
        </CardHeader>
        <CardBody>
          <p>Area: 308252 sq meter</p>
          <p>Capital: Bhopal</p>
          <p>Disease Gradient: 1.32</p>
          <p>Growth: 20.35%</p>
          <p>Population: 72,626,809</p>
        </CardBody>
      </Card>
    </div>
  );
}
function JK() {
  return (
    <div
      style={{
        marginTop: "-20px",
        marginLeft: "-10px",
        width: "95%",
        height: "10%"
      }}
    >
      <Card
        className="card-chart"
        style={{
          marginTop: "0px",
          marginLeft: "0px",
          width: "98.7%",
          height: "1020%"
        }}
      >
        <CardHeader>
          <CardCategory>Jammu and Kashmir</CardCategory>
          <CardTitle tag="h4" />
        </CardHeader>
        <CardBody>
          <p>Area: 222236 sq meter</p>
          <p>Capital: Jammu</p>
          <p>Disease Gradient: 8.6</p>
          <p>Growth: 23.64%</p>
          <p>Population: 12,541,302</p>
        </CardBody>
      </Card>
    </div>
  );
}
function Sikkim() {
  return (
    <div
      style={{
        marginTop: "-20px",
        marginLeft: "-10px",
        width: "95%",
        height: "10%"
      }}
    >
      <Card
        className="card-chart"
        style={{
          marginTop: "0px",
          marginLeft: "0px",
          width: "98.7%",
          height: "1020%"
        }}
      >
        <CardHeader>
          <CardCategory>Sikkim</CardCategory>
          <CardTitle tag="h4" />
        </CardHeader>
        <CardBody>
          <p>Area: 7096 sq meter</p>
          <p>Capital: Gangtok</p>
          <p>Disease Gradient: 22.49</p>
          <p>Growth: 12.89%</p>
          <p>Population: 310,577</p>
        </CardBody>
      </Card>
    </div>
  );
}
function Karnataka() {
  return (
    <div
      style={{
        marginTop: "-20px",
        marginLeft: "-10px",
        width: "95%",
        height: "10%"
      }}
    >
      <Card
        className="card-chart"
        style={{
          marginTop: "0px",
          marginLeft: "0px",
          width: "98.7%",
          height: "1020%"
        }}
      >
        <CardHeader>
          <CardCategory>Karnatka</CardCategory>
          <CardTitle tag="h4" />
        </CardHeader>
        <CardBody>
          <p>Area: 191791</p>
          <p>Capital: Bengaluru</p>
          <p>Disease Gradient: 3.68</p>
          <p>Growth: 15.6</p>
          <p>Population: 61,095,297</p>
        </CardBody>
      </Card>
    </div>
  );
}
function Nagaland() {
  return (
    <div
      style={{
        marginTop: "-20px",
        marginLeft: "-10px",
        width: "95%",
        height: "10%"
      }}
    >
      <Card
        className="card-chart"
        style={{
          marginTop: "0px",
          marginLeft: "0px",
          width: "98.7%",
          height: "1020%"
        }}
      >
        <CardHeader>
          <CardCategory>Nagaland</CardCategory>
          <CardTitle tag="h4" />
        </CardHeader>
        <CardBody>
          <p>Area: 16579 sq meter</p>
          <p>Capital: Kohima</p>
          <p>Disease Gradient: 4.169</p>
          <p>Growth: -0.58%</p>
          <p>Population: 1,978,502</p>
        </CardBody>
      </Card>
    </div>
  );
}
function WB() {
  return (
    <div
      style={{
        marginTop: "-20px",
        marginLeft: "-10px",
        width: "95%",
        height: "10%"
      }}
    >
      <Card
        className="card-chart"
        style={{
          marginTop: "0px",
          marginLeft: "0px",
          width: "98.7%",
          height: "1020%"
        }}
      >
        <CardHeader>
          <CardCategory>West Bengal</CardCategory>
          <CardTitle tag="h4" />
        </CardHeader>
        <CardBody>
          <p>Area: 88752 sq meter</p>
          <p>Capital: Kolkata</p>
          <p>Disease Gradient: 4.29</p>
          <p>Growth: 13.84%</p>
          <p>Population: 91,276,115</p>
        </CardBody>
      </Card>
    </div>
  );
}
function Bihar() {
  console.log("entered bihar");
  return (
    <div
      style={{
        marginTop: "-20px",
        marginLeft: "-10px",
        width: "95%",
        height: "10%"
      }}
    >
      <Card
        className="card-chart"
        style={{
          marginTop: "0px",
          marginLeft: "0px",
          width: "98.7%",
          height: "1020%"
        }}
      >
        <CardHeader>
          <CardCategory>Bihar</CardCategory>
          <CardTitle tag="h4" />
        </CardHeader>
        <CardBody>
          <p>Area: 94163 sq meter</p>
          <p>Capital: Patna</p>
          <p>Disease Gradient: 0.212</p>
          <p>Growth: 25.42%</p>
          <p>Population: 104,099,452</p>
        </CardBody>
      </Card>
    </div>
  );
}
function UP() {
  return (
    <div
      style={{
        marginTop: "-20px",
        marginLeft: "-10px",
        width: "95%",
        height: "10%"
      }}
    >
      <Card
        className="card-chart"
        style={{
          marginTop: "0px",
          marginLeft: "0px",
          width: "98.7%",
          height: "1020%"
        }}
      >
        <CardHeader>
          <CardCategory>Uttar Pradesh</CardCategory>
          <CardTitle tag="h4" />
        </CardHeader>
        <CardBody>
          <p>Area: 240928 sq meter</p>
          <p>Capital: Lucknow</p>
          <p>Disease Gradient: 0.904</p>
          <p>Growth: 20.23%</p>
          <p>Population: 199,812,341</p>
        </CardBody>
      </Card>
    </div>
  );
}
function Rajasthan() {
  return (
    <div
      style={{
        marginTop: "-20px",
        marginLeft: "-10px",
        width: "95%",
        height: "10%"
      }}
    >
      <Card
        className="card-chart"
        style={{
          marginTop: "0px",
          marginLeft: "0px",
          width: "98.7%",
          height: "1020%"
        }}
      >
        <CardHeader>
          <CardCategory>Rajasthan</CardCategory>
          <CardTitle tag="h4" />
        </CardHeader>
        <CardBody>
          <p>Area: 342239 sq meter</p>
          <p>Capital: Jaipur</p>
          <p>Disease Gradient: 1.99</p>
          <p>Growth: 21.31%</p>
          <p>Population: 68,548,437</p>
        </CardBody>
      </Card>
    </div>
  );
}
function Gujarat() {
  return (
    <div
      style={{
        marginTop: "-20px",
        marginLeft: "-10px",
        width: "95%",
        height: "10%"
      }}
    >
      <Card
        className="card-chart"
        style={{
          marginTop: "0px",
          marginLeft: "0px",
          width: "98.7%",
          height: "1020%"
        }}
      >
        <CardHeader>
          <CardCategory>Gujarat</CardCategory>
          <CardTitle tag="h4" />
        </CardHeader>
        <CardBody>
          <p>Area: 196244 sq meter</p>
          <p>Capital: GandhiNagar</p>
          <p>Disease Gradient: 1.75</p>
          <p>Growth: 19.28%</p>
          <p>Population: 60,439,692</p>
        </CardBody>
      </Card>
    </div>
  );
}
function Maharastra() {
  return (
    <div
      style={{
        marginTop: "-20px",
        marginLeft: "-10px",
        width: "95%",
        height: "10%"
      }}
    >
      <Card
        className="card-chart"
        style={{
          marginTop: "0px",
          marginLeft: "0px",
          width: "98.7%",
          height: "1020%"
        }}
      >
        <CardHeader>
          <CardCategory>Maharastra</CardCategory>
          <CardTitle tag="h4" />
        </CardHeader>
        <CardBody>
          <p>Area: 307713 sq meter</p>
          <p>Capital: Mumbai</p>
          <p>Disease Gradient: 1.051</p>
          <p>Growth: 15.99%</p>
          <p>Population: 112,374,333</p>
        </CardBody>
      </Card>
    </div>
  );
}
function AP() {
  return (
    <div
      style={{
        marginTop: "-20px",
        marginLeft: "-10px",
        width: "95%",
        height: "10%"
      }}
    >
      <Card
        className="card-chart"
        style={{
          marginTop: "0px",
          marginLeft: "0px",
          width: "98.7%",
          height: "1020%"
        }}
      >
        <CardHeader>
          <CardCategory>Andhra Pradesh</CardCategory>
          <CardTitle tag="h4" />
        </CardHeader>
        <CardBody>
          <p>Area: 275045 sq meter</p>
          <p>Capital: Hyderabad</p>
          <p>Disease Gradient: 6.67</p>
          <p>Growth: 10.98%</p>
          <p>Population: 84,580,777</p>
        </CardBody>
      </Card>
    </div>
  );
}
function TN() {
  return (
    <div
      style={{
        marginTop: "-20px",
        marginLeft: "-10px",
        width: "95%",
        height: "10%"
      }}
    >
      <Card
        className="card-chart"
        style={{
          marginTop: "0px",
          marginLeft: "0px",
          width: "98.7%",
          height: "1020%"
        }}
      >
        <CardHeader>
          <CardCategory>Tamil Nadu</CardCategory>
          <CardTitle tag="h4" />
        </CardHeader>
        <CardBody>
          <p>Area: 130060 sq meter</p>
          <p>Capital: Chennai</p>
          <p>Disease Gradient: 3.67</p>
          <p>Growth: 15.61%</p>
          <p>Population: 72,147,030</p>
        </CardBody>
      </Card>
    </div>
  );
}
function Kerala() {
  return (
    <div
      style={{
        marginTop: "-20px",
        marginLeft: "-10px",
        width: "95%",
        height: "10%"
      }}
    >
      <Card
        className="card-chart"
        style={{
          marginTop: "0px",
          marginLeft: "0px",
          width: "98.7%",
          height: "1020%"
        }}
      >
        <CardHeader>
          <CardCategory>Kerala</CardCategory>
          <CardTitle tag="h4" />
        </CardHeader>
        <CardBody>
          <p>Area: 38852 sq meter</p>
          <p>Capital: Thiruvanandhapuram</p>
          <p>Disease Gradient: 15.87</p>
          <p>Growth: 4.91%</p>
          <p>Population: 33,406,061</p>
        </CardBody>
      </Card>
    </div>
  );
}
function Assam() {
  return (
    <div
      style={{
        marginTop: "-20px",
        marginLeft: "-10px",
        width: "95%",
        height: "10%"
      }}
    >
      <Card
        className="card-chart"
        style={{
          marginTop: "0px",
          marginLeft: "0px",
          width: "98.7%",
          height: "1020%"
        }}
      >
        <CardHeader>
          <CardCategory>Assam</CardCategory>
          <CardTitle tag="h4" />
        </CardHeader>
        <CardBody>
          <p>Area: 78438 sq meter</p>
          <p>Capital: Dispur</p>
          <p>Disease Gradient: 1.48</p>
          <p>Growth: 17.07%</p>
          <p>Population: 31,205,576</p>
        </CardBody>
      </Card>
    </div>
  );
}
function Manipur() {
  return (
    <div
      style={{
        marginTop: "-20px",
        marginLeft: "-10px",
        width: "95%",
        height: "10%"
      }}
    >
      <Card
        className="card-chart"
        style={{
          marginTop: "0px",
          marginLeft: "0px",
          width: "98.7%",
          height: "1020%"
        }}
      >
        <CardHeader>
          <CardCategory>Manipur</CardCategory>
          <CardTitle tag="h4" />
        </CardHeader>
        <CardBody>
          <p>Area: 22327 sq meter</p>
          <p>Capital: Imphal</p>
          <p>Disease Gradient: 1.711</p>
          <p>Growth: 12.05%</p>
          <p>Population: 2,570,390</p>
        </CardBody>
      </Card>
    </div>
  );
}
function Mizoram() {
  return (
    <div
      style={{
        marginTop: "-20px",
        marginLeft: "-10px",
        width: "95%",
        height: "10%"
      }}
    >
      <Card
        className="card-chart"
        style={{
          marginTop: "0px",
          marginLeft: "0px",
          width: "98.7%",
          height: "1020%"
        }}
      >
        <CardHeader>
          <CardCategory>Mizoram</CardCategory>
          <CardTitle tag="h4" />
        </CardHeader>
        <CardBody>
          <p>Area: 21081 sq meter</p>
          <p>Capital: Aizawl</p>
          <p>Disease Gradient: 4.8</p>
          <p>Growth: 23.48%</p>
          <p>Population: 1,097,206</p>
        </CardBody>
      </Card>
    </div>
  );
}
function Tripura() {
  return (
    <div
      style={{
        marginTop: "-20px",
        marginLeft: "-10px",
        width: "95%",
        height: "10%"
      }}
    >
      <Card
        className="card-chart"
        style={{
          marginTop: "0px",
          marginLeft: "0px",
          width: "98.7%",
          height: "1020%"
        }}
      >
        <CardHeader>
          <CardCategory>Tripura</CardCategory>
          <CardTitle tag="h4" />
        </CardHeader>
        <CardBody>
          <p>Area: 10486 sq meter</p>
          <p>Capital: Agartala</p>
          <p>Disease Gradient: 7.75</p>
          <p>Growth: 14.84%</p>
          <p>Population: 3,673,917</p>
        </CardBody>
      </Card>
    </div>
  );
}
function HP() {
  return (
    <div
      style={{
        marginTop: "-20px",
        marginLeft: "-10px",
        width: "95%",
        height: "10%"
      }}
    >
      <Card
        className="card-chart"
        style={{
          marginTop: "0px",
          marginLeft: "0px",
          width: "98.7%",
          height: "1020%"
        }}
      >
        <CardHeader>
          <CardCategory>Himachal Pradesh</CardCategory>
          <CardTitle tag="h4" />
        </CardHeader>
        <CardBody>
          <p>Area: 55673 sq meter</p>
          <p>Capital: Shimla</p>
          <p>Disease Gradient: 26.16</p>
          <p>Growth: 12.94%</p>
          <p>Population: 6,864,602</p>
        </CardBody>
      </Card>
    </div>
  );
}
function Punjab() {
  return (
    <div
      style={{
        marginTop: "-20px",
        marginLeft: "-10px",
        width: "95%",
        height: "10%"
      }}
    >
      <Card
        className="card-chart"
        style={{
          marginTop: "0px",
          marginLeft: "0px",
          width: "98.7%",
          height: "1020%"
        }}
      >
        <CardHeader>
          <CardCategory>Punjab</CardCategory>
          <CardTitle tag="h4" />
        </CardHeader>
        <CardBody>
          <p>Area: 50362 sq meter</p>
          <p>Capital: Chandigarh</p>
          <p>Disease Gradient: 3.07</p>
          <p>Growth: 13.89%</p>
          <p>Population: 27,743,338</p>
        </CardBody>
      </Card>
    </div>
  );
}

class Dashboards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stateselected: ""
    };
  }

  
  componentWillReceiveProps(nextProp) {
    if (nextProp.state != this.state.stateselected) {
      this.setState({
        stateselected: nextProp.state
      });
    }
    console.log("g", nextProp);
  }

  render() {
    return (
      <div>
        <PanelHeader
          size="lg"
          content={
            <Row>
              <Col xs={12} md={8}>
                <Map state={this.state.stateselected} />
              </Col>
              <Col xs={12} md={4}>
                <Greeting isLoggedIn={this.state.stateselected} />
              </Col>
            </Row>
          }
        />
        <div className="content">
          <Row>
            <Col xs={12} md={4}>
              <Card className="card-chart">
                <CardHeader>
                  <CardCategory>
                    Cases Of Cholera in{" "}
                    {this.state.stateselected || "Uttar Pradesh"}
                  </CardCategory>
                  <CardTitle tag="h4" />
                </CardHeader>
                <CardBody>
                  <Line
                    data={
                      getChartCholera(
                        this.state.stateselected || "Uttar Pradesh"
                      ).data
                    }
                    options={
                      getChartCholera(
                        this.state.stateselected || "Uttar Pradesh"
                      ).options
                    }
                  />
                </CardBody>
                <CardFooter>
                  <Stats>
                    {[
                      {
                        i: "now-ui-icons arrows-1_refresh-69",
                        t: "Just Updated"
                      }
                    ]}
                  </Stats>
                </CardFooter>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className="card-chart">
                <CardHeader>
                  <CardCategory>
                    Cases Of Diarrhea in{" "}
                    {this.state.stateselected || "Uttar Pradesh"}
                  </CardCategory>
                  <CardTitle tag="h4" />
                </CardHeader>
                <CardBody>
                  <Line
                    data={getChartD(this.props.state || "Uttar Pradesh").data}
                    options={
                      getChartD(this.props.state || "Uttar Pradesh").options
                    }
                  />
                </CardBody>
                <CardFooter>
                  <Stats>
                    {[
                      {
                        i: "now-ui-icons arrows-1_refresh-69",
                        t: "Just Updated"
                      }
                    ]}
                  </Stats>
                </CardFooter>
              </Card>
            </Col>

            <Col xs={12} md={4}>
              <Card className="card-chart">
                <CardHeader>
                  <CardCategory>
                    Cases Of Typhoid in{" "}
                    {this.state.stateselected || "Uttar Pradesh"}
                  </CardCategory>
                  <CardTitle tag="h4" />
                </CardHeader>
                <CardBody>
                  <Line
                    data={getChartT(this.props.state || "Uttar Pradesh").data}
                    options={
                      getChartT(this.props.state || "Uttar Pradesh").options
                    }
                  />
                </CardBody>
                <CardFooter>
                  <Stats>
                    {[
                      {
                        i: "now-ui-icons arrows-1_refresh-69",
                        t: "Just Updated"
                      }
                    ]}
                  </Stats>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Dashboards;
