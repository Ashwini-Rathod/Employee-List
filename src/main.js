//main
import { header } from "./components/header.js";
import { userList } from "./data.js";
import { renderEmployeeCard, renderNewEmployee } from "./components/employeeDiv.js";
import { foot } from "./components/footer.js";
window.onload = () => {
    const heading = document.getElementById("heading");
    heading.appendChild(header());
    const rootDiv = document.getElementById("root");
    userList.then((employees) => {
        employees.forEach(employee => {
           rootDiv.appendChild(renderEmployeeCard(employee)); 
        });
    });
    window.renderNew = renderNewEmployee;
    // let a = JSON.parse(localStorage.getItem("newEmp"));
    // renderNew(a);
    const footer = document.getElementById("footer");
    footer.appendChild(foot());
};