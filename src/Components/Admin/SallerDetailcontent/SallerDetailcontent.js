import React from "react";
import "./SallerDetailcontent.css";
import { GrClose } from "react-icons/gr";
import sallerpc from "../SallerDetailcontent/seller.jpg";
import { LineChart,XAxis, YAxis,Line, CartesianGrid,Tooltip,Legend} from 'recharts';
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];


const SallerDetailcontent = ({modal, setModal}) => {
  return (
    <div className="allcontent">
      <span>
        <GrClose
          id="modle-close"
          onClick={() => {
            setModal(false);
          }}
        />
      </span>
      <div className="detail-container">
        <div className="right-details">
          <div className="top-content">
            <img src={sallerpc} alt="seller-photo" className="sallerpc" />
            <p>
              <b>FOX MEDIA</b> <br /> SINCE 2012
            </p>
          </div>
          <div className="midle-content">
            <div className="first">
              <p>
                Name: <br /> Company Type: <br />
                Email: <br /> Billing Address: <br />
                Contact no: <br /> Status: <br />
                Joined:
              </p>
            </div>
            <div className="second">
              <b>
                <p>
                  Title Mula <br />
                  Partnership <br /> ma@gmail <br />
                  Huye,Tumba <br />
                  +250 788567398 <br /> online <br /> 20 jan 2023
                </p>
              </b>
            </div>
          </div>

          {/* bottom */}

          <div className="bottom-content">
            <div className="comments">
              <b>
                <p id="contact-header" className="commenttop">
                  contact this seller
                </p>
              </b>
              <input type="text" id="Subject" placeholder="Subject" />
              <textarea type="text" id="Comments" placeholder="Message" />
              <button id="commentbuton">SEND MESSAGE</button>
            </div>
          </div>
        </div>
        <div className="left-allcontainer">
          <div className="left-container1">
            <LineChart
              width={460}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </div>
          {/* seller table */}
          <div className="left-container2">
            <p>
              <b>Products</b>
            </p>
            <table id="seller-table">
              <tr class="first-low">
                <td>
                  <b>Image</b>
                </td>
                <td>
                  <b>Name</b>
                </td>
                <td>
                  <b>Price</b>
                </td>
                <td>
                  <b>Sales</b>
                </td>
                <td>
                  <b>Quantity</b>
                </td>
              </tr>

              <tr>
                <td>
                  <img src={sallerpc} alt="seller-photo" className="sallerpc" />
                </td>
                <td>T-shirt</td>
                <td>80,000 frw</td>
                <td>90,000 frw</td>
                <td>20</td>
              </tr>

              <tr>
                <td>
                  <img src={sallerpc} alt="seller-photo" className="sallerpc" />
                </td>
                <td>T-shirt</td>
                <td>80,000 frw</td>
                <td>90,000 frw</td>
                <td>20</td>
              </tr>
              <tr>
                <td>
                  <img src={sallerpc} alt="seller-photo" className="sallerpc" />
                </td>
                <td>T-shirt</td>
                <td>80,000 frw</td>
                <td>90,000 frw</td>
                <td>20</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SallerDetailcontent;
