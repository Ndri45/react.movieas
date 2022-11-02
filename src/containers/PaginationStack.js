import { Pagination, Stack } from "@mui/material";

const PaginationStack = ({ onSetPage, count }) => {
    return (
        <Stack justifyContent={"center"} direction="row" mb={"100px"}>
            <Pagination count={count} color="primary" onChange={(event, page) => onSetPage(page)} sx={{ justifyContent: "center" }} />
        </Stack>
    );
};

export default PaginationStack;
