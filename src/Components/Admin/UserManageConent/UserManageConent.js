import React from "react";
import SallerDetailcontent from "../SallerDetailcontent/SallerDetailcontent";
import "./UserManageConent.css";
import { useState} from "react";
const UserManageConent = () => {
  const[modal, setModal] = useState(false);
  return (
    
    <div>
      <div className="user-boxx">
        <table className="table">
          <tr>
            <th>
              <input type="checkbox" name="select" />{" "}
            </th>
            <th>Name</th> <th>E-mail</th>
            <th>Phone</th>
            <th>Billing address</th>
            <th>Status</th>
            <th>Joined</th>
            <th>Actions</th>
          </tr>
          <tr>
            <th>
              <input type="checkbox" name="select" />
            </th>
            <td
              onClick={() => {
                setModal(true);
              }}
            >
              Tite mula
            </td>{" "}
            <td>ma@gmail </td> <td>099 345</td>
            <td>Huye, SH23</td>
            <td>Online</td> <td>20 jan 2023</td> <td>...</td>
          </tr>
          <tr>
            <th>
              <input type="checkbox" name="select" />
            </th>
            <td>Tite mula</td> <td>ma@gmail </td> <td>099 345</td>
            <td>Huye, SH23</td>
            <td>Online</td> <td>20 jan 2023</td> <td>...</td>
          </tr>
          <tr>
            <th>
              <input type="checkbox" name="select" />
            </th>
            <td>Tite mula</td> <td>ma@gmail </td> <td>099 345</td>
            <td>Huye, SH23</td>
            <td>Online</td> <td>20 jan 2023</td> <td>...</td>
          </tr>
          <tr>
            <th>
              <input type="checkbox" name="select" />
            </th>
            <td>Tite mula</td> <td>ma@gmail </td> <td>099 345</td>
            <td>Huye, SH23</td>
            <td>Online</td> <td>20 jan 2023</td> <td>...</td>
          </tr>
          <tr>
            <th>
              <input type="checkbox" name="select" />
            </th>
            <td>Tite mula</td> <td>ma@gmail </td> <td>099 345</td>
            <td>Huye, SH23</td>
            <td>Online</td> <td>20 jan 2023</td> <td>...</td>
          </tr>
          <tr>
            <th>
              <input type="checkbox" name="select" />
            </th>
            <td>Tite mula</td> <td>ma@gmail </td> <td>099 345</td>
            <td>Huye, SH23</td>
            <td>Online</td> <td>20 jan 2023</td> <td>...</td>
          </tr>
          <tr>
            <th>
              <input type="checkbox" name="select" />
            </th>
            <td>Tite mula</td> <td>ma@gmail </td> <td>099 345</td>
            <td>Huye, SH23</td>
            <td>Online</td> <td>20 jan 2023</td> <td>...</td>
          </tr>
        </table>
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
      <div className="modal" style={{ display: !modal ? "none" : "flex" }}>
        <div className="background-between">
          <SallerDetailcontent modal={modal} setModal={setModal}/>
        </div>
      </div>
    </div>
  );
};

export default UserManageConent;
