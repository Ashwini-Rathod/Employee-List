export const header = () => {
    const header = document.createElement("div");
    header.classList.add("header");
    const h1 = document.createElement("h1");
    h1.innerHTML = "MEET OUR EMPLOYEES";
    header.appendChild(h1);
    const navBar = document.createElement("nav");
    navBar.classList.add("navigation");
    const about = document.createElement("a");
    about.href = "#";
    about.innerHTML = "About Us";
    about.classList.add("about");
    const careers = document.createElement("a");
    careers.href = "#";
    careers.innerHTML = "Careers";
    careers.classList.add("careers");
    const contact = document.createElement("a");
    contact.href = "#";
    contact.innerHTML = "Contact Us";
    contact.classList.add("contact");
    navBar.appendChild(about);
    navBar.appendChild(careers);
    navBar.appendChild(contact);
    header.appendChild(navBar);
    return header;
}