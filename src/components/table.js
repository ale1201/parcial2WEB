import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { FormattedMessage } from "react-intl";

function TableComponent(props) {

    return (
      <div className="container">
        <div className="row">
          <div id="tabla">
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>
                    ID
                  </th>
                  <th>
                  <FormattedMessage id="Device" />
                  </th>
                  <th>
                  <FormattedMessage id="Value" />
                  </th>
                </tr>
              </thead>
              <tbody>
                {props.room.devices.map((e,i)=>(
                    <tr>
                        <th scope="row">{i}</th>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.desired.value}</td>
                    </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
  
  export default TableComponent;