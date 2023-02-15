import React, { useCallback, useState } from "react";
import DeleteUser from "../DeleteUser/DeleteUser";

const CodeUseCallback = () => {
  const [user, setUser] = useState({
    name: "Alberto",
    lastName: "Rivera",
  });

  const deleteUserCallback = useCallback(
    () => setUser({ name: "", lastName: "" }),
    []
  );

  console.log('Console del padre')

  return (
    <div>
      <h3>
        {user.name} | {user.lastName}
      </h3>
      <input
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <input
        value={user.lastName}
        onChange={(e) => setUser({ ...user, lastName: e.target.value })}
      />

      <DeleteUser deleteUser={deleteUserCallback}>Reset Info</DeleteUser>
    </div>
  );
};

export default CodeUseCallback;
