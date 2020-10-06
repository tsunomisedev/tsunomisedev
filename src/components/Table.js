import React from "react";
import { MDBDataTableV5 } from "mdbreact";

export default function Table() {
  // eslint-disable-next-line no-use-before-define
  setDatatable(null);
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: "ユーザー名",
        field: "name",
        width: 150,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Name",
        },
      },
      {
        label: "アクセス数(uu)",
        field: "position",
        width: 270,
      },
      {
        label: "決済数(CV)",
        field: "office",
        width: 200,
      },
      {
        label: "決済金額(円)",
        field: "age",
        sort: "asc",
        width: 100,
      },
    ],
    rows: [
      {
        name: "Tiger Nixon",
        position: "System Architect",
        office: "Edinburgh",
        age: "61",
      },
      {
        name: "Garrett Winters",
        position: "Accountant",
        office: "Tokyo",
        age: "63",
      },
      {
        name: "Ashton Cox",
        position: "Junior Technical Author",
        office: "San Francisco",
        age: "66",
      },
      {
        name: "Cedric Kelly",
        position: "Senior Javascript Developer",
        office: "Edinburgh",
        age: "22",
      },
      {
        name: "Airi Satou",
        position: "Accountant",
        office: "Tokyo",
        age: "33",
      },
      {
        name: "Brielle Williamson",
        position: "Integration Specialist",
        office: "New York",
        age: "61",
      },
      {
        name: "Herrod Chandler",
        position: "Sales Assistant",
        office: "San Francisco",
        age: "59",
      },
    ],
  });

  return (
    <MDBDataTableV5
      hover
      entriesOptions={[5, 20, 25]}
      entries={5}
      pagesAmount={4}
      data={datatable}
      searchTop
      searchBottom={false}
    />
  );
}
