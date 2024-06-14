import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import MiniDrawer from "../components/MiniDrawer";

function UserManagement() {
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", status: "null" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", status: "null" },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice@example.com",
      status: "null",
    },
    { id: 4, name: "John Doe", email: "john@example.com", status: "null" },
    { id: 5, name: "Jane Smith", email: "jane@example.com", status: "null" },
    {
      id: 6,
      name: "Alice Johnson",
      email: "alice@example.com",
      status: "null",
    }, { id: 7, name: "John Doe", email: "john@example.com", status: "null" },
    { id: 8, name: "Jane Smith", email: "jane@example.com", status: "null" },
    {
      id: 9,
      name: "Alice Johnson",
      email: "alice@example.com",
      status: "null",
    },
    { id: 10, name: "John Doe", email: "john@example.com", status: "null" },
  ];

  const confirMdelete= ()=>{
    alert("confirm you want to delete user")
   
    
  }

  return (
    <div className=" flex  overflow-hidden mr-20 mt-32">
      <MiniDrawer />
        <table style={{ borderCollapse: "collapse", width: "90%"  }}>
          <thead>
            <tr>
              <th style={{ padding: "8px",  }}>
              <input type="checkbox" />
              </th>
              <th style={{ padding: "8px",  }}>ID</th>
              <th style={{ padding: "8px",  }}>Name</th>
              <th style={{ padding: "8px", }}>
                Email
              </th>
              <th style={{ padding: "8px",  }}>
                Status
              </th>
              <th style={{ padding: "8px",  }}>
                Delete
              </th>
              <th style={{ padding: "8px", }}>Edit</th>
            </tr>
          </thead>
          <tbody >
            {users.map((user, index) => (
              <tr style={{ padding: "8px",  }}   key={index}>
                <td style={{ padding: "8px",  }} className=" text-center">
                  <input type="checkbox" />
                </td>
                <td
                  style={{
                    padding: "8px",
                    
                  }}className=" text-center"
                >
                  {user.id}
                </td>
                <td
                  style={{
                    padding: "8px",
                   
                  }}className=" text-center"
                >
                  {user.name}
                </td>
                <td
                  style={{
                    padding: "8px",
                    
                  }}className=" text-center"
                >
                  {user.email}
                </td>
                <td
                  style={{
                    padding: "8px",
                    
                  }}className=" text-center"
                >
                  {user.status}
                </td>
                <td style={{ padding: "8px", }} className=" text-center">
                  <button  onClick={confirMdelete}>
                    <DeleteIcon />
                  </button>
                </td>
                <td style={{ padding: "8px",  }} className=" text-center">
                  <button >
                    <EditIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  
  );
}

export default UserManagement;
