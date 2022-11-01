import { Pagination, Stack } from "@mui/material";

const PaginationStack = ({ onSetPage }) => {
    return (
        <Stack justifyContent={"center"} direction="row">
            <Pagination count={10} color="primary" onChange={(event, page) => onSetPage(page)} sx={{ justifyContent: "center" }} />
        </Stack>
    );
};

export default PaginationStack;
