import { RiShutDownLine, RiListCheck } from "react-icons/ri";
import { useAuth } from "../../hooks/auth";
import { Container, Profile, Logout, Menu } from "./styles";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function Header() {
  const { signOut, user } = useAuth();

  const navigate = useNavigate();
  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  return (
    <Container>
      <Menu>
        <RiListCheck />
      </Menu>
      <Profile to="/profile">
        <img src={avatarUrl} alt={user.name} />
        <div className="">
          <span>Bem-Vindo</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>

      <Logout onClick={handleSignOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
