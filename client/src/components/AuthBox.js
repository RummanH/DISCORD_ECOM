import React from "react";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";

const BoxWrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#5865f2",
});

const AuthBox = (props) => {
  return (
    <BoxWrapper>
      <Box
        sx={{
          width: 700,
          minHeight: 400,
          bgcolor: "#36393f",
          borderRadius: "5px",
          boxShadow: "0 2px 10px o rgb(0 0 0 /20%)",
          display: "flex",
          flexDirection: "column",
          padding: "25px",
        }}
      >
        {props.children}
      </Box>
    </BoxWrapper>
  );
};

export default AuthBox;
