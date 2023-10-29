import React from "react";
import { Link } from "react-router-dom";

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [filter, setFilter] = React.useState<string>("lemoncode");

  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/${filter}/members`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Failed to fetch members: ${response.status} ${response.statusText}`
          );
        }
        return response.json();
      })
      .then((json) => setMembers(json))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleOnChange = () => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const handleOnClick = () => () => {
    fetch(`https://api.github.com/orgs/${filter}/members`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Failed to fetch members: ${response.status} ${response.statusText}`
          );
        }
        return response.json();
      })
      .then((json) => setMembers(json))
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <h2>Hello from List page</h2>
      <span>Filter: </span>
      <input
        onChange={handleOnChange()}
        type="text"
        value={filter}
      ></input>{" "}
      <button onClick={handleOnClick()}>Search</button>
      <div className="list-user-list-container">
        <span className="list-header">Avatar</span>
        <span className="list-header">Id</span>
        <span className="list-header">Name</span>
        {members !== undefined &&
          members.map((member) => (
            <>
              <img src={member.avatar_url} />
              <span>{member.id}</span>
              <Link to={`/detail/${member.login}`}>{member.login}</Link>
            </>
          ))}
      </div>
      <Link to="/detail">Navigate to detail page</Link>
    </>
  );
};
