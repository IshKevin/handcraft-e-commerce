import React from 'react'
import "./AllProductContent.css";
const AllProductContent = () => {
  return (
    <div>
      <div className="product-boxx">
        <table className="table">
          <tr>
            <th>
              <input type="checkbox" name="select" />
            </th>
            <th>P.name</th>
            <th> Vendor</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>
              <input type="checkbox" name="select" />
            </td>
            <td>Black-shirt</td> <td>Yves Bryan</td>
            <td>30,000 frw</td>
            <td>20</td> <td>large</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" name="select" />
            </td>
            <td>Black-shirt</td> <td>Yves Bryan</td>
            <td>30,000 frw</td>
            <td>20</td> <td>large</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" name="select" />
            </td>
            <td>Black-shirt</td> <td>Yves Bryan</td>
            <td>30,000 frw</td>
            <td>20</td> <td>large</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" name="select" />
            </td>
            <td>Black-shirt</td> <td>Yves Bryan</td>
            <td>30,000 frw</td>
            <td>20</td> <td>large</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" name="select" />
            </td>
            <td>Black-shirt</td> <td>Yves Bryan</td> <td>30,000 frw</td>
            <td>20</td> <td>large</td>
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
}

export default AllProductContent
