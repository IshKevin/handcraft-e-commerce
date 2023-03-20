import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import "./AdminHeader.css";
import { BarChart,LineChart,Bar,XAxis, YAxis,Line, CartesianGrid,Area, Tooltip,AreaChart, Legend} from 'recharts';
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

// chart two (2)
function AdminHeader() {
  return (
    <div className="Admin-header">
      <div className="admindash-header-component">
        <ul>
          <li>Dashboard</li>
          <li>Admin</li>
        </ul>
      </div>
      <div className="cards-container">
        {/* Cardpart two (1) */}

        <div className="Admin-cards1">
          <div className="card1">
            <div className="cardcontent">
              <div className="card1icon">
                <AiOutlineEye />
              </div>
              <div className="content">
                <p>
                  Total Vistors <br /> 1022
                </p>
              </div>
            </div>
            <div className="bottom-card1icon">
              <div className="details-icon">
                <AiOutlineEye />
              </div>
              <div className="details-content">
                <p>Deatails</p>
              </div>
            </div>
          </div>
          <div className="card2">
            <div className="cardcontent">
              <div className="card1icon">
                <AiOutlineEye />
              </div>
              <div className="content">
                <p>
                  Total Vistors <br /> 1022
                </p>
              </div>
            </div>
            <div className="bottom-card1icon">
              <div className="details-icon">
                <AiOutlineEye />
              </div>
              <div className="details-content">
                <p>Deatails</p>
              </div>
            </div>
          </div>
          <div className="card3">
            <div className="cardcontent">
              <div className="card1icon">
                <AiOutlineEye />
              </div>
              <div className="content">
                <p>
                  Total Vistors <br /> 1022
                </p>
              </div>
            </div>
            <div className="bottom-card1icon">
              <div className="details-icon">
                <AiOutlineEye />
              </div>
              <div className="details-content">
                <p>Deatails</p>
              </div>
            </div>
          </div>
        </div>

        {/* Cardpart two (2) */}

        <div className="Admin-cards2">
          <div className="card1">
            <div className="cardcontent">
              <div className="card1icon">
                <AiOutlineEye />
              </div>
              <div className="content">
                <p>
                  Total Vistors <br /> 1022
                </p>
              </div>
            </div>
            <div className="bottom-card1icon">
              <div className="details-icon">
                <AiOutlineEye />
              </div>
              <div className="details-content">
                <p>Deatails</p>
              </div>
            </div>
          </div>
          <div className="card2">
            <div className="cardcontent">
              <div className="card1icon">
                <AiOutlineEye />
              </div>
              <div className="content">
                <p>
                  Total Vistors <br /> 1022
                </p>
              </div>
            </div>
            <div className="bottom-card1icon">
              <div className="details-icon">
                <AiOutlineEye />
              </div>
              <div className="details-content">
                <p>Deatails</p>
              </div>
            </div>
          </div>
          <div className="card3">
            <div className="cardcontent">
              <div className="card1icon">
                <AiOutlineEye />
              </div>
              <div className="content">
                <p>
                  Total Vistors <br /> 1022
                </p>
              </div>
            </div>
            <div className="bottom-card1icon">
              <div className="details-icon">
                <AiOutlineEye />
              </div>
              <div className="details-content">
                <p>Deatails</p>
              </div>
            </div>
          </div>
        </div>


        <div className="newcard">
{/* chart-content 1 */}

          <div className="Admin-cards3">
            <div className="cardnew1">
              <  BarChart
                width={460}
                height={280}
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
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
              </BarChart>
            </div>
            <div className="cardnew2">
              <AreaChart
                width={460}
                height={280}
                data={data}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="uv"
                  stroke="#8884d8"
                  fill="#8884d8"
                />
              </AreaChart>
            </div>
          </div>

{/* chart-content2 */}

          <div className="Admin-cards4">
            <div className="cardnew1">
              <LineChart
                width={460}
                height={280}
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
            <div className="cardnew2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHeader
