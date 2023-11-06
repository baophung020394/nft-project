import InputSearch from "components/Filters/InputSearch";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import FilterForm from "features/Forms/FilterForm";

const SidebarWrap = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 9999,
  "& input": {
    borderRadius: "4px",
    border: "1px solid var(--neutral-3, #89888B)",
  },
}));

interface SidebarProps {
  matchDownLg?: boolean;
}
const Sidebar: React.FC<SidebarProps> = ({ matchDownLg }) => {
  return (
    <SidebarWrap
      sx={{
        backgroundColor: matchDownLg ? "#000" : "unset",
        padding: matchDownLg ? "1rem" : "unset",
        height: matchDownLg ? "100vh" : "100%",
        overflowY: matchDownLg ? "scroll" : "unset",
      }}
    >
      <InputSearch />
      <FilterForm />
    </SidebarWrap>
  );
};

export default Sidebar;
