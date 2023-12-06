import UserForm from "@/components/profile/user";
import { Metadata } from "next/types";
import { Col } from "reactstrap";

export const metadata: Metadata = {
  title: "Codeflix - Meus Dados",
};

const Profile = () => {
  return (
    <Col md>
      <UserForm />
    </Col>
  );
};

export default Profile;
