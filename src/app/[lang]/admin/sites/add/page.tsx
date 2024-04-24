import React from "react";

function page() {
  return (
    <div>
      
      <div className="bg-red-100 rounded-md border border-gray-200 p-10">
        <ul className="list-disc">
        <li>
          this page will contain a form to add new site (in other words: create
          new account for new organization ower customer)
        </li>
        <li>We need more details about the general format.</li>
        <ul className="list-disc">
          <li className="list-inside">
            is the admin responsible to add other users role to the organization
            owner client
          </li>
          <li className="list-inside">
            Does the admin specify the building architecture for the
            organization owner in this page / or in a separate page
          </li>
        </ul>
        </ul>
      </div>
    </div>
  );
}

export default page;
