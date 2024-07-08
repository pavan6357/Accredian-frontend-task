import React from "react";

const Benefits = () => {
  return (
    <div className="benefits-section p-10">
      <h1 className="text-4xl font-bold text-center">Benefits of Referral</h1>
      <p className="mt-4 text-center">
        Earn exciting rewards by referring your friends to our courses.
      </p>

      <table
        className="responstable"
        style={{
          margin: "1em 0",
          width: "100%",
          overflow: "hidden",
          background: "white",
          color: "#024457",
          borderRadius: "10px",
          border: "1px solid #167f92",
        }}
      >
        <tr
          style={{
            border: "1px solid #d9e4e6",
          }}
        >
          <th data-th="Driver details">
            <span>Programs</span>
          </th>
          <th>Referrer Bonus</th>
          <th>Referee Bonus</th>
        </tr>

        <tr>
          <td>Professional Certificate Program in Product Management</td>
          <td>
            <span>$ 7,000</span>
          </td>
          <td>$ 9,000</td>
        </tr>

        <tr>
          <td>PG Certificate Program in Strategic Product Management</td>
          <td>$ 9,000</td>
          <td>$ 11,000</td>
        </tr>

        <tr style={{ backgroundColor: "#cbe6ff" }}>
          <td>Executive Program in Data Driven Product Management</td>
          <td>$ 10,000</td>
          <td>$ 10,000</td>
        </tr>

        <tr>
          <td>
            Executive Program in Product Management and Digital Transformation
          </td>
          <td>$ 10,000</td>
          <td>$ 10,000</td>
        </tr>
        <tr style={{ backgroundColor: "#cbe6ff" }}>
          <td>Executive Program in Product Management</td>
          <td>$ 10,000</td>
          <td>$ 10,000</td>
        </tr>
        <tr>
          <td>Advanced Certification in Product Management</td>
          <td>$ 10,000</td>
          <td>$ 10,000</td>
        </tr>
        <tr style={{ backgroundColor: "#cbe6ff" }}>
          <td>
            Executive Program in Product Management and Project Management
          </td>
          <td>$ 10,000</td>
          <td>$ 10,000</td>
        </tr>
      </table>
    </div>
  );
};

export default Benefits;
