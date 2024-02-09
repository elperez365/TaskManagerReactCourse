import Button from "../Button/Button";

const TabProject = ({ title }) => {
  return (
    <li>
      <Button action="create" type="button">
        {title}
      </Button>
    </li>
  );
};

export default TabProject;
