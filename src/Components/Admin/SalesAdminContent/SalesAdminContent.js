import React from "react";

const SalesAdminHeader = () => {
  return (
    <div>
      <div className="product-boxx">
        <table className="table">
          <tr>
            <th>
              <input type="checkbox" name="select" />{" "}
            </th>
            <th>Customer</th>
            <th>Payment</th>
            <th>Method</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
          <tr>
            <td>
              <input type="checkbox" name="select" />
            </td>
            <td>Stiven sigar </td> <td>$3000</td>
            <td>Paypal</td>
            <td>Delivered</td> <td>20 jan 2023</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" name="select" />
            </td>
            <td>Stiven sigar </td> <td>$3000</td>
            <td>Paypal</td>
            <td>Delivered</td> <td>20 jan 2023</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" name="select" />
            </td>
            <td>Stiven sigar </td> <td>$3000</td>
            <td>Paypal</td>
            <td>Delivered</td> <td>20 jan 2023</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" name="select" />
            </td>
            <td>Stiven sigar </td> <td>$3000</td>
            <td>Paypal</td>
            <td>Delivered</td> <td>20 jan 2023</td>
          </tr>
        </table>
      </div>
      <div className="next-cont">
        <ul>
          <li className="next1">1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
        </ul>
        <p>Next</p>
      </div>
    </div>
  );
};

export default SalesAdminHeader;
